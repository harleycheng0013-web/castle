param(
  [string]$Repository = 'harleycheng0013-web/castle',
  [string]$Message = 'Add character bible and cinematic portrait dossiers'
)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$gh = Join-Path $root '.tools\bin\gh.exe'
$paths = @(
  'package.json',
  'docs/universe-bible.md',
  'scripts/validate-universe.mjs',
  'src/lib/characters.ts',
  'src/lib/stories.ts',
  'src/data/stories/the-bell-that-never-saw-dawn.zh.json',
  'src/data/stories/the-thirteenth-trial-of-the-winged-judge.zh.json',
  'src/components/StoryArticle.astro',
  'src/components/CultureEntrance.astro',
  'src/styles/iteration-lab.css'
) + (Get-ChildItem (Join-Path $root 'public\images\characters') -File | ForEach-Object {
  'public/images/characters/' + $_.Name
})

function Invoke-GhJson([string]$Method, [string]$Endpoint, $Body) {
  $json = $Body | ConvertTo-Json -Depth 20 -Compress
  $result = $json | & $gh api --method $Method $Endpoint --input -
  if ($LASTEXITCODE -ne 0) { throw "GitHub API request failed: $Endpoint" }
  return $result | ConvertFrom-Json
}

$ref = & $gh api "repos/$Repository/git/ref/heads/main" | ConvertFrom-Json
$parent = $ref.object.sha
$parentCommit = & $gh api "repos/$Repository/git/commits/$parent" | ConvertFrom-Json

$entries = foreach ($relative in $paths) {
  $full = Join-Path $root ($relative -replace '/', '\')
  $content = [Convert]::ToBase64String([IO.File]::ReadAllBytes($full))
  $blob = Invoke-GhJson POST "repos/$Repository/git/blobs" @{ content = $content; encoding = 'base64' }
  @{ path = $relative; mode = '100644'; type = 'blob'; sha = $blob.sha }
}

$tree = Invoke-GhJson POST "repos/$Repository/git/trees" @{ base_tree = $parentCommit.tree.sha; tree = @($entries) }
$commit = Invoke-GhJson POST "repos/$Repository/git/commits" @{ message = $Message; tree = $tree.sha; parents = @($parent) }
[void](Invoke-GhJson PATCH "repos/$Repository/git/refs/heads/main" @{ sha = $commit.sha; force = $false })
Write-Output $commit.sha

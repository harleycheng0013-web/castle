param(
  [string]$Repository = 'harleycheng0013-web/castle',
  [string]$Message = 'Sync complete DARK CASTLE project to cloud'
)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$gh = Join-Path $root '.tools\bin\gh.exe'

$excludedDirectories = @(
  '.git',
  '.agents',
  '.astro',
  '.pnpm-store',
  '.tools',
  'dist',
  'node_modules'
)

$excludedExtensions = @('.log', '.tmp')

function Invoke-GhJson([string]$Method, [string]$Endpoint, $Body) {
  $json = $Body | ConvertTo-Json -Depth 20 -Compress
  $result = $json | & $gh api --method $Method $Endpoint --input -
  if ($LASTEXITCODE -ne 0) { throw "GitHub API request failed: $Endpoint" }
  return $result | ConvertFrom-Json
}

$files = Get-ChildItem $root -Recurse -File -Force | Where-Object {
  $relative = $_.FullName.Substring($root.Length + 1)
  $segments = $relative -split '[\\/]'
  $directoryAllowed = -not ($segments | Where-Object { $excludedDirectories -contains $_ })
  $extensionAllowed = -not ($excludedExtensions -contains $_.Extension.ToLowerInvariant())
  $directoryAllowed -and $extensionAllowed
} | Sort-Object FullName

if (-not $files) { throw 'No project files found to synchronize.' }

$ref = & $gh api "repos/$Repository/git/ref/heads/main" | ConvertFrom-Json
if ($LASTEXITCODE -ne 0) { throw 'Unable to read the cloud main branch.' }

$parent = $ref.object.sha
$parentCommit = & $gh api "repos/$Repository/git/commits/$parent" | ConvertFrom-Json
if ($LASTEXITCODE -ne 0) { throw 'Unable to read the cloud parent commit.' }

$remoteTree = & $gh api "repos/$Repository/git/trees/$($parentCommit.tree.sha)?recursive=1" | ConvertFrom-Json
if ($LASTEXITCODE -ne 0) { throw 'Unable to read the cloud project tree.' }

$localRelativePaths = @($files | ForEach-Object {
  $_.FullName.Substring($root.Length + 1).Replace('\', '/')
})

$entries = foreach ($file in $files) {
  $relative = $file.FullName.Substring($root.Length + 1).Replace('\', '/')
  $content = [Convert]::ToBase64String([IO.File]::ReadAllBytes($file.FullName))
  $blob = Invoke-GhJson POST "repos/$Repository/git/blobs" @{ content = $content; encoding = 'base64' }
  @{ path = $relative; mode = '100644'; type = 'blob'; sha = $blob.sha }
}

$staleDrafts = @($remoteTree.tree | Where-Object {
  $_.type -eq 'blob' -and
  $_.path.StartsWith('drafts/') -and
  $localRelativePaths -notcontains $_.path
})

foreach ($stale in $staleDrafts) {
  $entries += @{ path = $stale.path; mode = '100644'; type = 'blob'; sha = $null }
}

$tree = Invoke-GhJson POST "repos/$Repository/git/trees" @{
  base_tree = $parentCommit.tree.sha
  tree = @($entries)
}

$commit = Invoke-GhJson POST "repos/$Repository/git/commits" @{
  message = $Message
  tree = $tree.sha
  parents = @($parent)
}

[void](Invoke-GhJson PATCH "repos/$Repository/git/refs/heads/main" @{
  sha = $commit.sha
  force = $false
})

Write-Output ([pscustomobject]@{
  commit = $commit.sha
  files = $files.Count
  repository = $Repository
})

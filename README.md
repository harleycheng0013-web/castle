# DARK CASTLE 文化宇宙

DARK CASTLE 是一个以原创世界观、角色档案和长篇故事为核心的双语静态网站，使用 Astro 构建并通过 GitHub Pages 发布。

## 云端项目

本仓库保存网站源码、宇宙设定、人物图片和故事审阅稿。

在其他设备登录同一个 GitHub 账号后，打开 `harleycheng0013-web/castle` 即可查看或下载项目。

故事审阅稿位于 `drafts/`，可直接下载编辑，也可以在 GitHub 网页中编辑并保存。

## 内容工作流

1. 新故事和修改稿先写入 `drafts/`，不直接更新网站。
2. 完成剧情、人物和文字审阅后，由作者确认最终版。
3. 只有明确确认“可以发布”后，才把最终稿接入网站并触发 GitHub Pages 部署。

## 本地运行

需要 Node.js 22 或更新的 LTS 版本。

```bash
pnpm install
pnpm run dev
```

正式构建：

```bash
pnpm run build
```

## 主要目录

- `drafts/`：可编辑的故事审阅稿
- `src/data/stories/`：网站正式故事数据
- `src/lib/characters.ts`：人物档案与连续性设定
- `docs/universe-bible.md`：宇宙圣经
- `public/images/`：网站图片与人物肖像
- `.github/workflows/`：GitHub Pages 自动部署配置

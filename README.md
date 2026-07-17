# 个人主页 / Personal Blog

一个以 Astro 构建的中英双语静态个人博客，可部署至 GitHub Pages。

## 本地运行

安装 Node.js 22 或更新的 LTS 版本后，在项目目录执行：

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

## 替换个人资料

在 `src/lib/site.ts` 中替换姓名、职位、邮箱、社交链接与站点描述。头像文件位于 `public/avatar.svg`，可替换为自己的图片；若使用图片，请同时更新 `avatar` 路径。

## 发布文章

在 `src/content/blog/` 新建 Markdown 文件，格式如下：

```md
---
title: 文章标题
description: 用于文章列表和搜索引擎的简短摘要
date: 2026-07-16
tags: [标签一, 标签二]
lang: zh # zh 或 en
slug: url-slug
translationId: shared-id # 可选；中英译文使用相同值
---

正文内容……
```

同一篇文章的中英文版本应使用相同的 `translationId`，但必须使用各自唯一的 `slug`。没有译文时省略 `translationId` 即可。

## 部署到 GitHub Pages

1. 将项目推送到 GitHub 仓库的 `main` 分支。
2. 在仓库的 **Settings → Pages** 中，将 Source 设为 **GitHub Actions**。
3. 工作流会自动构建并发布站点。

默认配置适用于项目站点（`https://用户名.github.io/仓库名/`）。如果仓库名是 `用户名.github.io`，请将 `.github/workflows/deploy.yml` 中的 `BASE_PATH` 改为 `/`。

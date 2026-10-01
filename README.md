# 我的博客

一个用 [Astro](https://astro.build) 搭建的极简大学生个人博客，部署在 GitHub Pages。

- 四个页面：首页 / 博客 / 关于 / 简历
- Markdown 写作，新增 `.md` 文件即可发布
- 支持：文章目录、代码高亮、图片、LaTeX 数学公式、中文内容、按时间排序
- 明暗主题切换，PC / 手机自适应

## 一、本地运行

```bash
npm install      # 首次运行，安装依赖
npm run dev      # 启动开发服务器，浏览器打开 http://localhost:4321
```

其他命令：

```bash
npm run build    # 构建生产版本，输出到 dist/
npm run preview  # 本地预览构建结果
```

## 二、如何新增一篇博客文章

1. 在 `src/content/blog/` 目录下新建一个 `.md` 文件，例如 `my-post.md`。
2. 在文件开头写 frontmatter（用三个 `---` 包起来的元信息）：

   ```md
   ---
   title: 文章标题
   description: 一句话简介（可选，列表页显示）
   date: '2026-10-01'
   category: 学习
   tags: [Astro, 前端]
   draft: false
   ---

   正文写在这里，支持 Markdown 语法。
   ```

3. 保存文件即可。开发服务器会自动刷新，构建后会自动发布。

字段说明：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 文章标题 |
| `date` | 是 | 发布日期，格式 `'YYYY-MM-DD'`（注意带引号） |
| `category` | 否 | 分类，建议用：`生活` / `学习` / `项目` / `比赛` / `随手记` |
| `tags` | 否 | 标签列表，如 `[随笔, 开始]` |
| `description` | 否 | 列表页显示的一句话简介 |
| `draft` | 否 | 草稿，写 `true` 时不会出现在任何页面 |

## 三、常用写作语法示例

````md
## 二级标题（会自动进文章目录）
### 三级标题（也会进目录）

**加粗**、*斜体*、`行内代码`

> 引用

- 列表项

```python
print("代码高亮")
```

行内公式 $E = mc^2$，独立公式：

$$
\int_{-\infty}^{+\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

![图片说明](/blog/图片路径.png)
````

图片放在 `public/` 目录下，用 `/blog/xxx.png` 这种绝对路径引用（带上 `/blog/` 前缀，因为站点部署在 `/blog/` 子路径下）。

## 四、改一下网站的个人信息

| 要改什么 | 改哪里 |
| --- | --- |
| 名字、一句话介绍 | `src/consts.ts` |
| 站点地址 / 部署子路径 | `astro.config.mjs` 里的 `SITE_URL` 和 `BASE` |
| 首页头像 | 替换 `public/avatar.svg`（或用你自己的图片改 `src/pages/index.astro` 里的 `<img>`） |
| 关于页面 | `src/pages/about.astro` |
| 简历页面 | `src/pages/resume.astro` |
| 主题颜色 | `src/styles/global.css` 顶部 `:root` 里的变量 |

## 五、部署到 GitHub Pages

本项目部署到「项目主页」仓库 `ytz7-xzg/blog`，站点地址是 **https://ytz7-xzg.github.io/blog/**（注意结尾带 `/blog/` 子路径）。

### 1. 初始化 git 并推送

```bash
git init
git add .
git commit -m "init blog"
git branch -M main
git remote add origin https://github.com/ytz7-xzg/blog.git
git push -u origin main
```

### 2. 在 GitHub 上设置 Pages 来源

进入仓库 **Settings → Pages**，把 **Source** 选成 **GitHub Actions**（不是 Deploy from a branch）。

### 3. 等待自动部署

推送后，GitHub Actions 会自动运行 `.github/workflows/deploy.yml` 完成构建和部署。

之后在仓库 **Actions** 标签页可以看到构建进度，成功后访问：

```
https://ytz7-xzg.github.io/blog/
```

以后每次写新文章，只需：

```bash
git add .
git commit -m "新文章"
git push
```

推送后会自动重新部署，无需其他操作。

> 说明：因为仓库名是 `blog`，站点部署在 `/blog/` 子路径下（在 `astro.config.mjs` 的 `BASE` 里配置）。如果以后改用 `ytz7-xzg.github.io` 用户主页仓库，把 `BASE` 改成 `'/'`、`SITE_URL` 改成 `https://ytz7-xzg.github.io` 再推一次即可。

## 六、项目结构

```text
src/
├── components/        # 组件（导航、文章卡片、目录等）
├── layouts/           # 布局（基础布局、文章布局）
├── pages/             # 页面
│   ├── index.astro    # 首页
│   ├── about.astro    # 关于
│   ├── resume.astro   # 简历
│   └── blog/
│       ├── index.astro      # 博客列表
│       └── [...slug].astro  # 文章详情
├── content/blog/      # 文章写在这里（.md 文件）
├── content.config.ts  # 文章 frontmatter 的字段定义
├── styles/global.css  # 全局样式
├── consts.ts          # 站点信息
└── utils.ts           # 工具函数
public/                # 静态资源（图片、头像、favicon）
.github/workflows/     # GitHub Actions 自动部署配置
```

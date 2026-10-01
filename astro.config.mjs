import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// 站点地址（仓库 ytz7-xzg/blog，项目主页）
const SITE_URL = 'https://ytz7-xzg.github.io';
// 部署子路径：项目主页仓库名为 blog，所以是 /blog/
// 如果以后改用 ytz7-xzg.github.io 用户主页仓库，把这里改成 '/' 即可
const BASE = '/blog/';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  // 统一在链接末尾加斜杠，避免 GitHub Pages 上的跳转问题
  trailingSlash: 'always',
  markdown: {
    // 使用 unified 处理器（保留 remark/rehype 插件生态，支持 LaTeX 数学公式）
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      // 代码高亮随明暗主题自动切换
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});

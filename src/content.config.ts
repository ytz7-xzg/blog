import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // 从 src/content/blog 目录加载所有 Markdown 文件
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // 文章标题
    title: z.string(),
    // 简短描述（列表页显示）
    description: z.string().optional(),
    // 发布日期，格式 'YYYY-MM-DD'（用字符串，避免时区问题）
    date: z.string(),
    // 分类：生活 / 学习 / 项目 / 比赛 / 随手记
    category: z.string().default('生活'),
    // 标签
    tags: z.array(z.string()).default([]),
    // 草稿：true 时不会出现在任何页面
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

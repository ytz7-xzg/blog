---
title: 我的第一篇博客
description: 博客搭建完成，从这篇文章开始记录。
date: '2026-10-01'
category: 生活
tags: [随笔, 开始]
---

欢迎来到我的博客！这是第一篇示例文章，用来演示博客支持的各项功能。

## 为什么要写博客

大学里每天都有新的经历和想法，如果不记下来，很快就忘了。这个博客用来记录：

- 日常生活
- 学习笔记
- 项目经历
- 比赛总结

## 代码高亮

这里是一段 Python 代码：

```python
def greet(name: str) -> str:
    return f"你好，{name}！"

print(greet("世界"))
```

## 数学公式

行内公式 $E = mc^2$，以及独立公式：

$$
\int_{-\infty}^{+\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

## 图片

图片放在 `public/` 目录下，用绝对路径引用（注意带上 `/blog/` 前缀，因为站点部署在 `/blog/` 子路径下）：

![头像](/blog/avatar.svg)

## 小结

以后只需要在 `src/content/blog/` 里新增一个 `.md` 文件，就能发布新文章。

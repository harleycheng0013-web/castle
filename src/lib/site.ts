export const site = {
  name: '林言',
  role: '写作者 · 创作者',
  email: 'hello@example.com',
  description: '在这里记录工作、阅读与生活中的思考。',
  avatar: '/avatar.svg',
  links: [
    { label: 'GitHub', href: 'https://github.com/username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/username' },
    { label: 'Email', href: 'mailto:hello@example.com' }
  ]
} as const;

export const copy = {
  zh: {
    nav: { home: '首页', writing: '文章', contact: '联系' },
    heroEyebrow: '你好，我是',
    heroTitle: '把思考写下来，\n把生活过具体。',
    heroText: '这里是我的数字花园，分享关于创作、技术、阅读和日常的片段。',
    latest: '最新文章', allPosts: '全部文章', readMore: '继续阅读', contactTitle: '保持联系', contactText: '欢迎交流想法、项目，或只是打个招呼。',
    noPosts: '暂时还没有文章。', tags: '标签', back: '返回文章列表', published: '发布于', theme: '切换颜色主题'
  },
  en: {
    nav: { home: 'Home', writing: 'Writing', contact: 'Contact' },
    heroEyebrow: 'Hello, I am',
    heroTitle: 'Write down the thoughts.\nLive with intention.',
    heroText: 'My digital garden for notes on making, technology, books, and everyday life.',
    latest: 'Latest writing', allPosts: 'All posts', readMore: 'Read more', contactTitle: 'Let’s keep in touch', contactText: 'For ideas, projects, or simply to say hello.',
    noPosts: 'No posts yet.', tags: 'Tags', back: 'Back to writing', published: 'Published', theme: 'Toggle color theme'
  }
} as const;

export type Locale = keyof typeof copy;
export const localePath = (locale: Locale, path = '') => `${locale === 'en' ? '/en' : ''}${path}` || '/';
export const formatDate = (date: Date, locale: Locale) => new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

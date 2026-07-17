export const site = {
  name: 'DARK CASTLE™',
  role: 'Dark Fantasy Resin Décor',
  email: 'hello@example.com',
  description: 'Dark fantasy resin décor, collectible figurines, and wholesale-ready gifts from DARK CASTLE™.',
  avatar: '/avatar.svg',
  links: [
    { label: 'Taobao Store', href: 'https://shop356594748.taobao.com/category.htm?spm=a21n57.shop_search.0.0.3391HQQAHQQAxU' },
    { label: 'Email', href: 'mailto:hello@example.com' }
  ]
} as const;

export const collections = [
  { key: 'occult', zh: '秘仪遗物', en: 'Occult Relics', descriptionZh: '克苏鲁、神祇与秘仪灵感的桌面陈设。', descriptionEn: 'Tabletop relics inspired by ancient gods, ritual symbols, and the unknown.' },
  { key: 'gothic', zh: '哥特塑像', en: 'Gothic Figures', descriptionZh: '暗黑人物、守夜者与中世纪式装饰雕像。', descriptionEn: 'Dark figures, silent guardians, and medieval-inspired decorative statues.' },
  { key: 'seasonal', zh: '节日奇物', en: 'Seasonal Curios', descriptionZh: '万圣节、圣诞节与主题礼赠摆件。', descriptionEn: 'Seasonal pieces for Halloween, Christmas, and themed gifting.' },
  { key: 'creatures', zh: '异想生灵', en: 'Curious Creatures', descriptionZh: '猫头鹰、乌鸦、触手与带故事感的动物摆件。', descriptionEn: 'Owls, ravens, tentacles, and creatures made to start a story.' }
] as const;

export const copy = {
  zh: {
    nav: { home: '首页', catalog: '产品系列', writing: '灵感志', contact: '合作咨询' },
    heroEyebrow: 'DARK FANTASY RESIN DÉCOR',
    heroTitle: '让每一处角落，\n都有自己的传说。',
    heroText: 'DARK CASTLE™ 创作暗黑奇幻树脂摆件：为家居陈列、节日礼赠与独立零售而生，支持批发与定制合作。',
    primaryCta: '浏览产品系列', secondaryCta: '咨询批发与定制',
    collectionEyebrow: 'THE COLLECTION', collectionTitle: '来自暗影的陈设', collectionText: '从古老秘仪到哥特生灵，选择适合你的系列。实物产品与规格可按需提供。',
    whyEyebrow: 'MADE FOR RETAIL', whyTitle: '为礼品与陈列而造',
    points: ['树脂工艺与细节上色', '适合零售、礼品与主题陈列', '支持批发、OEM 与小批量定制'],
    contactTitle: '让 DARK CASTLE 走进你的货架。', contactText: '告诉我们你想采购的系列、数量和目的地，我们将回复可供款式、报价与合作方式。',
    latest: '灵感志', allPosts: '查看全部', readMore: '继续阅读',
    noPosts: '暂时还没有文章。', tags: '标签', back: '返回文章列表', published: '发布于', theme: '切换颜色主题',
    catalogButton: '查看系列', contactButton: '开始咨询'
  },
  en: {
    nav: { home: 'Home', catalog: 'Collections', writing: 'Journal', contact: 'Wholesale' },
    heroEyebrow: 'DARK FANTASY RESIN DÉCOR',
    heroTitle: 'Give every corner\nits own legend.',
    heroText: 'DARK CASTLE™ creates dark fantasy resin décor for interiors, gifting, and independent retail. Wholesale and custom partnerships welcome.',
    primaryCta: 'Explore collections', secondaryCta: 'Wholesale & custom',
    collectionEyebrow: 'THE COLLECTION', collectionTitle: 'Objects from the shadows', collectionText: 'From ancient rituals to gothic creatures, discover a collection with a story. Product specifications are available on request.',
    whyEyebrow: 'MADE FOR RETAIL', whyTitle: 'Made for gifting and display',
    points: ['Detailed resin craftsmanship and hand-painted finishes', 'For independent retail, gifting, and themed displays', 'Wholesale, OEM, and small-batch custom options'],
    contactTitle: 'Bring DARK CASTLE to your shelves.', contactText: 'Tell us the collection, quantity, and destination. We will share available styles, pricing, and partnership options.',
    latest: 'Journal', allPosts: 'View all', readMore: 'Read more',
    noPosts: 'No posts yet.', tags: 'Tags', back: 'Back to journal', published: 'Published', theme: 'Toggle color theme',
    catalogButton: 'Explore collection', contactButton: 'Start an inquiry'
  }
} as const;

export type Locale = keyof typeof copy;
export const localePath = (locale: Locale, path = '') => `${locale === 'en' ? '/en' : ''}${path}` || '/';
export const formatDate = (date: Date, locale: Locale) => new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

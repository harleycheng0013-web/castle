export const site = {
  name: 'DARK CASTLE™',
  role: 'Dark Fantasy Resin Décor',
  email: 'harleycheng0013@gmail.com',
  description: 'Dark fantasy resin décor, collectible figurines, and wholesale-ready gifts from DARK CASTLE™.',
  avatar: '/avatar.svg',
  links: [
    { label: 'Taobao Store', href: 'https://shop356594748.taobao.com/category.htm?spm=a21n57.shop_search.0.0.3391HQQAHQQAxU' },
    { label: 'Email', href: 'mailto:harleycheng0013@gmail.com' }
  ]
} as const;

export const collections = [
  { key: 'mythic', zh: '神话人物与女神雕像', en: 'Mythic Figures & Goddesses', descriptionZh: '古典人物、凯尔特神话与女神主题的装饰雕像。', descriptionEn: 'Classical figures, Celtic mythology, and goddess-inspired décor.' },
  { key: 'gothic', zh: '哥特死神与骷髅雕像', en: 'Gothic Reapers & Skulls', descriptionZh: '死神、羊角骷髅与暗黑风格的人物摆件。', descriptionEn: 'Reapers, horned skulls, and dark character sculptures.' },
  { key: 'occult', zh: '克苏鲁与秘仪烛台', en: 'Eldritch Icons & Ritual Candleware', descriptionZh: '克苏鲁、五芒星与兼具烛台功能的仪式陈设。', descriptionEn: 'Cthulhu-inspired icons, pentagrams, and ritual candleware.' },
  { key: 'curios', zh: '花园、动物与复古趣物', en: 'Garden Creatures & Retro Curios', descriptionZh: '火箭、猫头鹰与适合花园、桌面陈列的创意摆件。', descriptionEn: 'Rockets, owls, and creative pieces for gardens and desks.' }
] as const;

export const copy = {
  zh: {
    nav: { home: '首页', culture: '文化展厅', catalog: '产品系列', writing: '灵感志', contact: '合作咨询' },
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
    nav: { home: 'Home', culture: 'Culture', catalog: 'Collections', writing: 'Journal', contact: 'Wholesale' },
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

export type ProductCategory = 'mythic' | 'gothic' | 'occult' | 'curios';

export type Product = {
  sku: string;
  category: ProductCategory;
  nameZh: string;
  nameEn: string;
  shortZh: string;
  shortEn: string;
  featuresZh: string[];
  featuresEn: string[];
  crop: string;
};

// 第一版目录根据店铺公开商品页截图整理；尺寸、重量、包装与起订量待从店铺后台同步后补充。
export const products: Product[] = [
  { sku: 'DC-001', category: 'mythic', nameZh: '欧式女体艺术雕像', nameEn: 'European Figure Sculpture', shortZh: '古典人体线条的桌面装饰雕像。', shortEn: 'A classical figurative sculpture for tabletop display.', featuresZh: ['人物雕塑', '欧式装饰', '桌面陈列'], featuresEn: ['Figurative sculpture', 'European décor', 'Tabletop display'], crop: '6% 37%' },
  { sku: 'DC-002', category: 'curios', nameZh: '复古导弹桌面摆件', nameEn: 'Retro Rocket Ornament', shortZh: '复古火箭造型，适合桌面、书架与花园主题陈列。', shortEn: 'A retro rocket for desks, shelves, and garden-themed displays.', featuresZh: ['复古航天', '桌面摆件', '花园主题'], featuresEn: ['Retro space', 'Desk ornament', 'Garden theme'], crop: '20% 37%' },
  { sku: 'DC-003', category: 'mythic', nameZh: '凯尔特神话人物烛台', nameEn: 'Celtic Myth Figure Tealight Holder', shortZh: '神话人物与茶烛台结合的仪式感摆件。', shortEn: 'A mythic figure paired with a tealight-holder function.', featuresZh: ['凯尔特神话', '茶烛台', '礼品陈列'], featuresEn: ['Celtic myth', 'Tealight holder', 'Gift display'], crop: '33% 37%' },
  { sku: 'DC-004', category: 'gothic', nameZh: '收割者死神半身雕像', nameEn: 'Grim Reaper Half-Bust', shortZh: '披风收割者形象，适合万圣节与暗黑主题空间。', shortEn: 'A cloaked reaper designed for Halloween and dark interiors.', featuresZh: ['死神主题', '万圣节', '哥特陈列'], featuresEn: ['Grim reaper', 'Halloween', 'Gothic display'], crop: '59% 37%' },
  { sku: 'DC-005', category: 'occult', nameZh: '克苏鲁章鱼骷髅摆件', nameEn: 'Cthulhu Skull Ornament', shortZh: '章鱼触手与骷髅融合的克苏鲁风格桌面雕像。', shortEn: 'A Cthulhu-style desktop sculpture combining tentacles and skull imagery.', featuresZh: ['克苏鲁', '触手骷髅', '桌面雕像'], featuresEn: ['Cthulhu', 'Tentacle skull', 'Desk sculpture'], crop: '72% 37%' },
  { sku: 'DC-006', category: 'gothic', nameZh: '北欧死神茶烛台', nameEn: 'Nordic Reaper Tealight Holder', shortZh: '暗黑人物造型与茶烛功能结合。', shortEn: 'A dark figure combined with a tealight-holder function.', featuresZh: ['北欧暗黑', '茶烛台', '礼品摆件'], featuresEn: ['Nordic dark style', 'Tealight holder', 'Gift décor'], crop: '6% 77%' },
  { sku: 'DC-007', category: 'mythic', nameZh: '凯尔特女神茶烛台', nameEn: 'Celtic Goddess Tealight Holder', shortZh: '女神雕像与柔和烛光结合的桌面陈设。', shortEn: 'A goddess sculpture made for a softly lit tabletop ritual.', featuresZh: ['女神雕像', '凯尔特灵感', '茶烛台'], featuresEn: ['Goddess figure', 'Celtic inspiration', 'Tealight holder'], crop: '20% 77%' },
  { sku: 'DC-008', category: 'occult', nameZh: '万圣节克苏鲁雕像', nameEn: 'Halloween Cthulhu Figure', shortZh: '面向万圣节主题陈列的旧日支配者风格摆件。', shortEn: 'An elder-god-inspired accent for Halloween displays.', featuresZh: ['万圣节', '克苏鲁', '主题陈列'], featuresEn: ['Halloween', 'Cthulhu', 'Themed display'], crop: '33% 77%' },
  { sku: 'DC-009', category: 'gothic', nameZh: '羊角骷髅头雕像', nameEn: 'Horned Skull Statue', shortZh: '羊角、骷髅与朋克暗黑质感的视觉焦点。', shortEn: 'A visual focal point with horns, skull imagery, and punk-gothic character.', featuresZh: ['羊角骷髅', '朋克哥特', '书架陈列'], featuresEn: ['Horned skull', 'Punk gothic', 'Shelf display'], crop: '46% 77%' },
  { sku: 'DC-010', category: 'curios', nameZh: '趣味健身人物雕像', nameEn: 'Whimsical Fitness Figure', shortZh: '夸张人体造型的趣味桌面装饰。', shortEn: 'A playful stylized human figure for a conversation-starting display.', featuresZh: ['趣味人物', '桌面装饰', '创意礼品'], featuresEn: ['Whimsical figure', 'Desk décor', 'Creative gift'], crop: '59% 77%' },
  { sku: 'DC-011', category: 'curios', nameZh: '花园猫头鹰摆件', nameEn: 'Garden Owl Figure', shortZh: '适合草坪、花园与自然主题空间的动物摆件。', shortEn: 'An animal figure for lawns, gardens, and nature-themed spaces.', featuresZh: ['猫头鹰', '花园摆件', '动物主题'], featuresEn: ['Owl', 'Garden décor', 'Animal theme'], crop: '72% 77%' },
  { sku: 'DC-012', category: 'occult', nameZh: '五芒星玫瑰烛台托盘', nameEn: 'Pentagram Rose Candle Tray', shortZh: '五芒星结构与玫瑰细节的仪式感烛台托盘。', shortEn: 'A ritual-style candle tray with a pentagram structure and rose details.', featuresZh: ['五芒星', '玫瑰烛台', '塔罗陈列'], featuresEn: ['Pentagram', 'Rose candle tray', 'Tarot display'], crop: '85% 77%' }
];

export const productCategories = {
  mythic: { zh: '神话人物与女神', en: 'Mythic Figures & Goddesses' },
  gothic: { zh: '哥特死神与骷髅', en: 'Gothic Reapers & Skulls' },
  occult: { zh: '克苏鲁与秘仪烛台', en: 'Eldritch Icons & Ritual Candleware' },
  curios: { zh: '花园、动物与复古趣物', en: 'Garden Creatures & Retro Curios' }
} as const;

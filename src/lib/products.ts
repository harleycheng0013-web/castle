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
  image: string;
  images: string[];
};

const image = (name: string) => `/images/products/${name}`;

export const products: Product[] = [
  { sku: 'DC-001', category: 'curios', nameZh: '复古火箭桌面摆件', nameEn: 'Retro Rocket Ornament', shortZh: '红、黄、黑配色的复古火箭造型，可用于桌面、书架和主题陈列。', shortEn: 'A retro rocket in red, yellow, and black for desks, shelves, and themed displays.', featuresZh: ['复古航天造型', '桌面与书架陈列', '创意礼品'], featuresEn: ['Retro space styling', 'Desk & shelf display', 'Creative gifting'], image: image('rocket-duo.jpg'), images: [image('rocket-duo.jpg'), image('rocket-workshop.jpg'), image('rocket-closeup.jpg')] },
  { sku: 'DC-002', category: 'mythic', nameZh: '森林守护者茶烛台', nameEn: 'Forest Guardian Tealight Holder', shortZh: '鹿角森林守护者与玻璃烛杯结合的神话主题陈设。', shortEn: 'A forest guardian with antlers and a glass tealight cup.', featuresZh: ['鹿角神话人物', '玻璃烛杯', '仪式感陈设'], featuresEn: ['Antlered mythic figure', 'Glass candle cup', 'Ritual display'], image: image('forest-guardian-front.jpg'), images: [image('forest-guardian-front.jpg'), image('forest-guardian-candle.jpg')] },
  { sku: 'DC-003', category: 'gothic', nameZh: '死神之手收纳摆件', nameEn: 'Reaper Hand Vessel', shortZh: '斗篷死神伸手造型，可作为小型收纳器或暗黑桌面摆件。', shortEn: 'A cloaked reaper reaching forward, made as a dark desk accent or small vessel.', featuresZh: ['死神造型', '手部器皿结构', '哥特桌面陈设'], featuresEn: ['Grim reaper motif', 'Hand-vessel form', 'Gothic desk décor'], image: image('reaper-vessel-studio.jpg'), images: [image('reaper-vessel-studio.jpg'), image('reaper-vessel-front.jpg')] },
  { sku: 'DC-004', category: 'occult', nameZh: '异形头骨触手雕像', nameEn: 'Eldritch Skull Idol', shortZh: '骨甲、头骨与触手融合的异形风格陈列雕像。', shortEn: 'An alien-style display idol combining bone armor, a skull, and tentacles.', featuresZh: ['异形头骨', '触手细节', '暗黑陈列'], featuresEn: ['Eldritch skull', 'Tentacle details', 'Dark display piece'], image: image('eldritch-altar-front.jpg'), images: [image('eldritch-altar-front.jpg'), image('eldritch-altar-detail.jpg')] },
  { sku: 'DC-005', category: 'gothic', nameZh: '翼骨触手骷髅雕像', nameEn: 'Winged Tentacle Skull', shortZh: '带骨翼与触手底座的骷髅主题雕像，适合哥特陈列。', shortEn: 'A skull-themed statue with bone wings and a tentacled base.', featuresZh: ['骨翼骷髅', '触手底座', '哥特收藏'], featuresEn: ['Winged skull', 'Tentacled base', 'Gothic collectible'], image: image('tentacle-skull-front.jpg'), images: [image('tentacle-skull-front.jpg'), image('tentacle-skull-back.jpg')] },
  { sku: 'DC-006', category: 'mythic', nameZh: '黑金翼天使茶烛台', nameEn: 'Black & Gold Winged Angel Holder', shortZh: '黑金翼天使与茶烛位结合，适合作为氛围灯饰与主题陈列。', shortEn: 'A black-and-gold winged angel with a tealight position for atmospheric display.', featuresZh: ['黑金天使', '茶烛位', '礼品陈列'], featuresEn: ['Black & gold angel', 'Tealight position', 'Gift display'], image: image('winged-angel-front.jpg'), images: [image('winged-angel-front.jpg'), image('winged-angel-back.jpg'), image('winged-angel-side.jpg')] },
  { sku: 'DC-007', category: 'mythic', nameZh: '女神祈愿烛台', nameEn: 'Goddess Offering Holder', shortZh: '端坐女神与玻璃烛杯结合的静谧陈设。', shortEn: 'A seated goddess combined with a glass cup for a calm, ritual-inspired display.', featuresZh: ['女神人物', '玻璃烛杯', '神话礼品'], featuresEn: ['Goddess figure', 'Glass candle cup', 'Mythic gift'], image: image('goddess-holder-front.jpg'), images: [image('goddess-holder-front.jpg'), image('goddess-holder-warm.jpg')] },
  { sku: 'DC-008', category: 'occult', nameZh: '克苏鲁翼骨胸像', nameEn: 'Cthulhu Winged Bust', shortZh: '触手面容、骨翼与古文字底座的克苏鲁风格胸像。', shortEn: 'A Cthulhu-style bust with tentacled features, bone wings, and an ancient-script base.', featuresZh: ['克苏鲁胸像', '古文字底座', '双色涂装'], featuresEn: ['Cthulhu bust', 'Ancient-script base', 'Two colorways'], image: image('cthulhu-bust-bronze.jpg'), images: [image('cthulhu-bust-bronze.jpg'), image('cthulhu-bust-green.jpg')] },
  { sku: 'DC-009', category: 'gothic', nameZh: '羊角骷髅头雕像', nameEn: 'Horned Skull Statue', shortZh: '带雕花羊角与古铜细节的骷髅雕像，多角度陈列效果强。', shortEn: 'A horned skull with ornamental bronze details and a strong silhouette from every angle.', featuresZh: ['羊角骷髅', '古铜细节', '多角度展示'], featuresEn: ['Horned skull', 'Antique bronze accents', 'Multi-angle display'], image: image('ram-skull-front.jpg'), images: [image('ram-skull-front.jpg'), image('ram-skull-top.jpg'), image('ram-skull-angle.jpg'), image('ram-skull-side.jpg')] },
  { sku: 'DC-010', category: 'mythic', nameZh: '古典女性人体雕像', nameEn: 'Classical Female Figure', shortZh: '银色金属质感的古典女性人体艺术摆件。', shortEn: 'A classical female art figure with a silver metallic finish.', featuresZh: ['古典人物', '金属银色效果', '艺术陈列'], featuresEn: ['Classical figure', 'Metallic silver finish', 'Art display'], image: image('classical-figure-front.jpg'), images: [image('classical-figure-front.jpg'), image('classical-figure-side.jpg'), image('classical-figure-angle.jpg')] },
  { sku: 'DC-011', category: 'curios', nameZh: '花园猫头鹰摆件', nameEn: 'Garden Owl Figure', shortZh: '适合草坪、花园和自然主题空间的猫头鹰树脂摆件。', shortEn: 'A resin owl for lawns, gardens, and nature-themed spaces.', featuresZh: ['猫头鹰造型', '花园陈列', '动物主题礼品'], featuresEn: ['Owl figure', 'Garden display', 'Animal-themed gift'], image: image('garden-owl.jpg'), images: [image('garden-owl.jpg')] },
  { sku: 'DC-012', category: 'occult', nameZh: '玫瑰五芒星五孔烛台', nameEn: 'Rose Pentagram Candle Tray', shortZh: '五芒星、红玫瑰与五个茶烛位组合的仪式感烛台。', shortEn: 'A ritual-style candle tray with a pentagram, red roses, and five tealight positions.', featuresZh: ['五芒星结构', '五孔茶烛位', '玫瑰装饰'], featuresEn: ['Pentagram design', 'Five tealight positions', 'Rose detailing'], image: image('rose-pentagram-candles.jpg'), images: [image('rose-pentagram-candles.jpg'), image('rose-pentagram-top.jpg'), image('rose-pentagram-empty.jpg')] },
  { sku: 'DC-013', category: 'occult', nameZh: '女巫之手书挡与水晶球座', nameEn: 'Witch Hands Bookend & Crystal Holder', shortZh: '长甲女巫之手系列，可作书挡、水晶球座或小托盘陈列。', shortEn: 'A witch-hand series that works as bookends, a crystal-ball holder, or a small display tray.', featuresZh: ['长甲女巫手', '书挡与球座', '多用途陈列'], featuresEn: ['Witch hands', 'Bookend & crystal holder', 'Multi-use display'], image: image('witch-hands-bookend.jpg'), images: [image('witch-hands-bookend.jpg'), image('witch-hands-pair.jpg'), image('witch-hands-crystal.jpg'), image('witch-hands-tray.jpg'), image('witch-hands-holder.jpg')] }
];

export const productCategories = {
  mythic: { zh: '神话人物与女神', en: 'Mythic Figures & Goddesses' },
  gothic: { zh: '哥特死神与骷髅', en: 'Gothic Reapers & Skulls' },
  occult: { zh: '克苏鲁与秘仪烛台', en: 'Eldritch Icons & Ritual Candleware' },
  curios: { zh: '花园、动物与复古趣物', en: 'Garden Creatures & Retro Curios' }
} as const;

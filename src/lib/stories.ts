export type StorySection = { title: string; text: string[] };

export type UniverseStory = {
  slug: string;
  chamber: 'gothic-relics' | 'celtic-wilds' | 'occult-cabinet' | 'cosmic-abyss';
  categoryZh: string;
  categoryEn: string;
  titleZh: string;
  titleEn: string;
  dekZh: string;
  dekEn: string;
  eraZh: string;
  eraEn: string;
  readTime: number;
  image: string;
  featured?: boolean;
  productIds: string[];
  sectionsZh: StorySection[];
  sectionsEn: StorySection[];
  sources: { label: string; href: string }[];
};

export const universeStories: UniverseStory[] = [
  {
    slug: 'the-castle-that-invented-gothic', chamber: 'gothic-relics', categoryZh: '文学原典', categoryEn: 'FOUNDING TEXT',
    titleZh: '一座发明了“哥特”的城堡', titleEn: 'The Castle That Invented “Gothic”',
    dekZh: '1764年，一部假装从中世纪流传下来的小说，让城堡第一次成为会说话、会记忆、会追赶后人的叙事机器。',
    dekEn: 'In 1764, a novel disguised as a recovered medieval text turned the castle into a machine of memory, inheritance, and fear.',
    eraZh: '英国 · 1764', eraEn: 'ENGLAND · 1764', readTime: 9, image: '/images/dark-castle-hero-atmosphere.png', featured: true, productIds: ['DC-003','DC-009'],
    sectionsZh: [
      { title: '一本“被发现”的古书', text: ['1764年，霍勒斯·沃波尔匿名出版《奥特朗托城堡》。初版序言声称，这只是一本古老意大利手稿的英文翻译：故事仿佛在十字军时代已经存在，只是如今重新被读者发现。这个伪装并非无关紧要。它让新小说披上了历史证据的外衣，也让读者在“也许发生过”与“明显是虚构”之间摇摆。', '第二版中，沃波尔承认自己是作者，并给作品加上“A Gothic Story”的副标题。这里的“哥特”不是对中世纪社会的准确复原，而是18世纪人对古堡、继承、宗教与超自然的想象性拼接。一个现代文学类型由此得名。'] },
      { title: '城堡为什么必须巨大', text: ['故事从一场不可能的死亡开始：巨大的头盔从天而降，压死了奥特朗托的继承人。随后，超常尺寸的铠甲部件、会移动的肖像、地下通道和突然关闭的门不断出现。恐惧不只来自某个怪物，而来自整座建筑似乎在执行一项迟到的判决。', '城堡因此不再只是背景。它保存被篡改的继承史，把家族不愿承认的过去变成有重量的物体。人物可以逃离一个房间，却无法逃离建筑保存的记忆。后来无数哥特作品都会重复这一结构：宅邸就是家族，密室就是秘密，幽灵就是未偿还的历史债务。'] },
      { title: '从贵族游戏到大众类型', text: ['《奥特朗托城堡》之后，安·拉德克利夫、马修·刘易斯等作家继续改造哥特。有人强调悬念与心理恐惧，有人突出禁忌、暴力和超自然。到19世纪，哥特进入《弗兰肯斯坦》、吸血鬼故事、城市怪谈和一便士惊悚连载。', '它之所以能不断复活，是因为“过去回来要求解释”的结构可以被放进任何时代。古堡可以变成实验室、都市公寓、废弃工厂或太空船；被压抑的记忆仍会寻找一扇门回来。'] },
      { title: '今天如何观看一件哥特物品', text: ['当骷髅、角、翼和仿古铜色出现在一件当代摆件上，它并不是中世纪遗物。它继承的是哥特文学训练出的观看方式：相信物件拥有前史，相信磨损是一段时间，相信沉默的脸仍在保存某种证词。', 'DARK CASTLE 将这种设计称为“现代遗物”。它不伪装考古身份，而是邀请观看者为物件补写一段过去。'] }
    ],
    sectionsEn: [
      { title: 'A “discovered” old book', text: ['Horace Walpole first published The Castle of Otranto anonymously in 1764, presenting it as a translation of an old Italian manuscript. The fiction wore the authority of a historical document.', 'In the second edition Walpole acknowledged authorship and added the subtitle “A Gothic Story.” The medieval past here was an eighteenth-century imaginative construction, not a documentary reconstruction.'] },
      { title: 'Why the castle had to be immense', text: ['A gigantic helmet, moving portraits, subterranean passages, and closing doors make the building appear to carry out a delayed judgement. Architecture stores the inheritance story the family refuses to face.'] },
      { title: 'From experiment to genre', text: ['Later writers transformed Gothic into psychological suspense, transgression, science, vampire fiction, and cheap serial publishing. The structure survives because any age can imagine a past that returns for an answer.'] },
      { title: 'The modern relic', text: ['A contemporary skull or winged object is not a medieval artefact. It inherits a Gothic habit of seeing: objects seem to have a past, wear becomes time, and a silent face can preserve testimony.'] }
    ],
    sources: [{ label:'British Library · Gothic stories and first editions', href:'https://www.bl.uk/stories/blogs/posts/spine-tingling-stories-in-the-blood-curdling-british-library' },{ label:'British Library catalogue · Gothic horror guide', href:'https://eld.bl.uk/catalog/018382091' }]
  },
  {
    slug: 'frankenstein-and-the-abandoned-creation', chamber: 'gothic-relics', categoryZh: '人物与思想', categoryEn: 'CHARACTER & IDEA',
    titleZh: '弗兰肯斯坦：被遗弃的造物', titleEn: 'Frankenstein: The Abandoned Creation',
    dekZh: '真正令人不安的并不是“制造生命”，而是创造者在生命睁眼之后转身逃走。', dekEn: 'The deepest horror is not making life, but the creator turning away after it opens its eyes.',
    eraZh: '欧洲 · 1818', eraEn: 'EUROPE · 1818', readTime: 10, image: '/images/products/reaper-vessel-studio.jpg', productIds: ['DC-003','DC-005'],
    sectionsZh: [
      { title:'风暴、故事比赛与一个梦', text:['1816年，玛丽·戈德温与珀西·雪莱、拜伦等人在日内瓦湖附近相聚。恶劣天气把众人留在室内，一场鬼故事写作约定逐渐成为《弗兰肯斯坦》的起点。小说于1818年匿名出版，后来版本署上玛丽·雪莱之名。', '作品诞生于电学、生命原理、探险与革命余波共同刺激想象的时代。它使用哥特的黑夜、秘密与追逐，却把恐怖中心移进实验与责任。'] },
      { title:'怪物并非天生无名', text:['小说中的造物没有被赋予姓名。“弗兰肯斯坦”属于创造者维克多，而不是造物。无名状态本身就是一种关系断裂：维克多把躯体拼合起来，却拒绝承认它作为生命的社会身份。', '造物最初学习语言、观察家庭并渴望被接纳。一次次拒绝把孤独变成愤怒。小说因此让读者在恐惧它的暴力时，也不得不看见创造者与社会如何参与制造这场悲剧。'] },
      { title:'现代普罗米修斯', text:['副标题“现代普罗米修斯”把维克多与盗火、造人的古典形象联系起来。但小说没有把知识本身写成罪恶；它反复追问的是，获得能力之后是否愿意承担照料、解释与后果。', '这也是作品仍然现代的原因。人工生命、技术伦理、亲子关系和被排斥者的愤怒，都能在这段追逐中找到自己的问题。'] },
      { title:'从书页到怪物图标', text:['舞台剧和电影逐渐为造物固定了高大身体、缝合痕迹和特殊头部轮廓。大众文化常把创造者的姓转移给怪物，也压缩了它会阅读、会辩论的复杂性。', '文化宇宙同时保存两种历史：小说中的人物，以及后世视觉文化创造出的图标。它们彼此关联，却不能被当作同一个版本。'] }
    ],
    sectionsEn: [
      { title:'Storm, story contest, dream', text:['Mary Shelley’s novel emerged from the famous 1816 gathering near Lake Geneva and appeared anonymously in 1818. Gothic night and secrecy moved into the laboratory.'] },
      { title:'The creature without a name', text:['Frankenstein is Victor’s surname, not the creature’s. Denied a name and social place, the creature learns language and longs for recognition before rejection turns into rage.'] },
      { title:'The modern Prometheus', text:['The novel asks less whether knowledge is evil than whether creators will accept care, explanation, and consequence after gaining power.'] },
      { title:'From character to icon', text:['Stage and film fixed a visual monster very different from the articulate reader in the novel. Both histories matter, but they are not the same version.'] }
    ],
    sources:[{label:'British Library · Frankenstein in Gothic history',href:'https://www.bl.uk/stories/blogs/posts/spine-tingling-stories-in-the-blood-curdling-british-library'}]
  },
  {
    slug:'the-white-book-and-the-living-story', chamber:'celtic-wilds', categoryZh:'手稿与口述传统', categoryEn:'MANUSCRIPT & ORAL TRADITION',
    titleZh:'白书以前，故事已经活了很久', titleEn:'Before the White Book, the Stories Were Alive',
    dekZh:'《马比诺吉昂》不是突然被一位作者写成的小说，而是口述、记忆与抄写共同保存的世界。', dekEn:'The Mabinogion was not invented at once by one author; oral memory and manuscript culture preserved its world together.',
    eraZh:'威尔士 · 约14世纪手稿',eraEn:'WALES · 14TH-CENTURY MANUSCRIPT',readTime:11,image:'/images/products/forest-guardian-front.jpg',featured:true,productIds:['DC-002','DC-007'],
    sectionsZh:[
      {title:'一本白色封皮的书',text:['《里德赫白书》约在14世纪中叶抄写，今天分为两个部分收藏于威尔士国家图书馆。它保存了最早一批中古威尔士散文，也包括后来被统称为《马比诺吉昂》的故事。', '“最早现存抄本”不等于“故事诞生于14世纪”。图书馆的教育材料特别指出，其中一些故事比手稿古老得多，在写下之前已经由讲述者代代记忆。书页是一次停驻，不是故事生命的起点。']},
      {title:'讲故事的人',text:['威尔士语 Cyfarwydd 指熟知故事并善于讲述的人。口述并非逐字复印：讲述者要掌握人物关系、地点、诗句、重复结构和听众节奏。每一次讲述既保持传统，也可能产生差异。', '因此，传说没有必要只有一个“正确剧本”。研究者会比较手稿、语言层次与版本关系；读者则能看见故事如何在共同记忆中被保存。']},
      {title:'花朵做成的女子',text:['《马比诺吉昂》第四分支中，格威迪昂与马斯用橡树、金雀花和绣线菊的花创造布洛德薇德，让她成为莱乌的妻子。她后来爱上他人并参与谋害莱乌，惩罚是被变成猫头鹰。', '这个故事常被现代作品简化为“花之女神”或“背叛的女人”。原故事更复杂：一个被人为创造并被安排婚姻的人，是否拥有选择命运的权利？猫头鹰既是惩罚，也让她获得了另一种不受人类秩序约束的存在。']},
      {title:'如何诚实地使用古老灵感',text:['现代森林守护者、鹿角人物和女神摆件可以从这些传统获得气氛，却不该随意声称自己复刻了某位古代神祇。最诚实的做法，是说明设计取自哪些形态、后世想象和民俗母题。', '这不会削弱神秘感。恰恰相反，知道故事经过多少语言、手稿和讲述者才抵达今天，会让一件现代物品拥有更真实的文化纵深。']}
    ],
    sectionsEn:[
      {title:'A book with a white binding',text:['The White Book of Rhydderch was copied around the mid-fourteenth century and preserves the earliest surviving versions of many tales now grouped as the Mabinogion. The stories themselves are older than the manuscript.']},
      {title:'The storyteller',text:['Cyfarwydd names a skilled bearer and teller of story. Oral tradition preserves relationships and structure without requiring one fixed script.']},
      {title:'The woman made from flowers',text:['Blodeuwedd is created from flowers, placed in marriage, takes a lover, and is transformed into an owl. Modern readings ask not only about betrayal but about agency within an imposed life.']},
      {title:'Using old inspiration honestly',text:['Contemporary antlered guardians and forest figures can acknowledge motifs and later imagination without claiming to reproduce a named ancient deity.']}
    ],
    sources:[{label:'National Library of Wales · White Book of Rhydderch',href:'https://www.library.wales/discover-learn/education/learning-resources/the-white-book-of-rhydderch'},{label:'National Library of Wales · manuscript record',href:'https://www.library.wales/discover-learn/digital-exhibitions/manuscripts/the-middle-ages/white-book-of-rhydderch'}]
  },
  {
    slug:'cuchulainn-the-hound-of-culann',chamber:'celtic-wilds',categoryZh:'英雄传说',categoryEn:'HEROIC LEGEND',titleZh:'库丘林：一个少年如何成为“猎犬”',titleEn:'Cú Chulainn: How a Boy Became the Hound',dekZh:'一个名字、一只被杀死的守门犬，以及英雄对自己力量作出的第一次承诺。',dekEn:'A name, a slain guard dog, and the first promise a hero makes about his own strength.',eraZh:'爱尔兰 · 乌尔斯特故事群',eraEn:'IRELAND · ULSTER CYCLE',readTime:8,image:'/images/products/forest-guardian-candle.jpg',productIds:['DC-002','DC-011'],
    sectionsZh:[
      {title:'塞坦塔来到宴会',text:['少年塞坦塔前往铁匠库兰的宴会。主人放出猛犬守门，却不知道少年还在路上。犬向他扑来，塞坦塔用投球工具和球将它击杀。不同转述会改变动作细节，但故事的核心保持一致：一个孩子展示了危险的非凡力量。']},
      {title:'名字是一项责任',text:['库兰为失去守门犬悲伤。塞坦塔提出在新犬长成前亲自守卫，由此获得 Cú Chulainn——“库兰之犬”的名字。名字不是奖章，而是一份补偿承诺。英雄身份从力量开始，却必须通过责任获得意义。']},
      {title:'狂战与边界',text:['后来的故事把库丘林写成保卫乌尔斯特的战士。他的战斗狂热会令身体发生可怕变形；这种“扭曲”显示英雄力量同时威胁敌人与自身。英雄不是稳定完美的人，而是站在人类秩序与危险力量之间的边界人物。']},
      {title:'传说、运动与公共记忆',text:['爱尔兰国家博物馆以投球用具解释库丘林故事，说明体育、传说与民族文化如何相互进入。博物馆里的球杆和球是历史物件；库丘林的事迹属于英雄传说。把两者并置而不混为同一种证据，正是文化阅读的价值。']}
    ],
    sectionsEn:[{title:'Setanta comes to the feast',text:['On his way to Culann’s feast, the boy Setanta kills the smith’s guard dog with hurling equipment. Versions change details, but the child’s dangerous strength remains central.']},{title:'A name as responsibility',text:['Setanta offers to guard Culann until another hound is raised and becomes Cú Chulainn, the Hound of Culann. The name is a promise of repair, not simply a prize.']},{title:'Battle frenzy and the boundary',text:['Later tales give the hero a terrifying battle transformation. His strength protects society while threatening to exceed it.']},{title:'Legend, sport, public memory',text:['The National Museum of Ireland uses hurling objects to explain the tale. Historical artefact and heroic legend can illuminate one another without becoming the same kind of evidence.']}],
    sources:[{label:'National Museum of Ireland · hurling and Cú Chulainn',href:'https://www.museum.ie/en-IE/Museums/Decorative-Arts-History/Engage-And-Learn/Schools-Educational-Visits/Learning-Resources-%281%29/Virtual-Trail-Game%2C-Set%2C-Match-The-History-of-Spor/Hair-hurling-ball-or-sliotar-and-Caman%2C-Gallery-1'}]
  },
  {
    slug:'kunstkammer-a-world-in-one-room',chamber:'occult-cabinet',categoryZh:'收藏史',categoryEn:'HISTORY OF COLLECTING',titleZh:'珍奇柜：把整个世界关进一间房',titleEn:'Kunstkammer: The World Inside One Room',dekZh:'自然、艺术、仪器和远方物件被并排陈列——现代博物馆的一位华丽而矛盾的祖先。',dekEn:'Nature, art, instruments, and distant objects displayed together—a magnificent and troubling ancestor of the modern museum.',eraZh:'欧洲 · 16—17世纪',eraEn:'EUROPE · 16TH–17TH CENTURIES',readTime:10,image:'/images/products/witch-hands-bookend.jpg',featured:true,productIds:['DC-013','DC-012'],
    sectionsZh:[
      {title:'一个缩小的宇宙',text:['Kunstkammer、Wunderkammer 常被译作艺术室、奇珍室或珍奇柜。欧洲王公与富裕收藏者把自然形成的奇物、人手制作的工艺品、科学仪器、古物和远方物件陈列在同一空间。', '它的理想不是只收藏一种东西，而是以有限房间模拟世界的多样性。复杂钟表可以象征宇宙秩序，贝壳与珊瑚展示自然，精密雕刻和贵重材料展示人的技巧。']},
      {title:'知识也是权力的陈列',text:['珍奇柜表现求知欲，也展示财富、旅行网络、宫廷权力和殖民贸易。物件如何来到欧洲、谁有权命名它们、原来社群如何理解它们，往往被早期目录忽略。', '今天重新讲述珍奇柜，必须同时看到它对博物馆分类的贡献和不平等收集史。一个“神秘物件”不仅需要美丽灯光，也需要来源和流转记录。']},
      {title:'柜门、抽屉与秘密',text:['大型收藏室之外，工匠还制造带有多层抽屉、暗格和昂贵镶嵌的实体柜。打开外门之后还要继续探索，观看变成一串逐层揭示的动作。', '这种交互逻辑与今天的文化网站非常接近：首页是柜门，分区是抽屉，故事页是被取出的物件。读者不是面对一次性信息墙，而是在移动中建立关联。']},
      {title:'从占有世界到解释来源',text:['DARK CASTLE 借用珍奇柜的戏剧性陈列，但文化宇宙的目标不是声称“拥有一切”。每件符号与故事都应带着来源、分类和不确定性。', '真正有力量的收藏不只让人惊叹，还让人知道：它从哪里来，谁讲述过它，我们今天为何要重新观看。']}
    ],
    sectionsEn:[{title:'A universe in miniature',text:['Kunstkammer and Wunderkammer brought natural wonders, human artefacts, scientific instruments, antiquities, and distant objects into one room. A finite space attempted to model the diversity of the world.']},{title:'Knowledge displayed as power',text:['The cabinet expressed curiosity but also wealth, court power, travel networks, and colonial trade. Modern interpretation must ask how objects arrived and who had the authority to name them.']},{title:'Doors, drawers, secrets',text:['Elaborate cabinets turned viewing into layers of opening and discovery. The same logic can shape a cultural website: entrance, chamber, story, object.']},{title:'From owning the world to explaining provenance',text:['DARK CASTLE borrows theatrical display, not the claim to possess everything. Each symbol needs source, category, and uncertainty.']}],
    sources:[{label:'The Metropolitan Museum of Art · Collecting for the Kunstkammer',href:'https://www.metmuseum.org/pt/essays/collecting-for-the-kunstkammer'},{label:'The Met · Augsburg cabinet',href:'https://www.metmuseum.org/art/collection/search/188830'}]
  },
  {
    slug:'houdini-and-the-last-seance',chamber:'occult-cabinet',categoryZh:'历史事件',categoryEn:'HISTORICAL EVENT',titleZh:'胡迪尼最后的招魂会',titleEn:'Houdini and the Final Séance',dekZh:'一个终身揭露灵媒的人死后，为什么连续十年成为招魂会等待的对象？',dekEn:'Why did a lifelong debunker of mediums become the absent guest at ten years of séances?',eraZh:'美国 · 1926—1936',eraEn:'UNITED STATES · 1926–1936',readTime:9,image:'/images/products/rose-pentagram-candles.jpg',productIds:['DC-012','DC-013'],
    sectionsZh:[
      {title:'魔术师与灵媒',text:['胡迪尼精通舞台机关、脱逃术和观众注意力。他也收藏大量关于魔术、灵性主义、巫术和心理现象的书，并公开挑战一些声称能够联系死者的灵媒。', '第一次世界大战后的死亡与哀悼让灵性主义获得许多追随者。胡迪尼认为，一些表演者利用悲伤和人们对亲人的思念。他并不只说“不相信”，还从舞台技术角度解释声音、暗室和隐藏装置怎样制造奇迹。']},
      {title:'一条约定的密码',text:['据后来的纪念活动叙述，胡迪尼与妻子贝丝约定：如果死后能够联系，他会传回只有两人知道的编码信息。这使任何“收到胡迪尼消息”的说法都面对一道验证门槛。', '1926年胡迪尼去世后，贝丝参与或举行纪念性招魂会。等待本身逐渐成为公共仪式：人们等待的不只是一个幽灵，也是对死亡能否被跨越的答案。']},
      {title:'1936年的屋顶',text:['最后一次著名活动在1936年万圣节夜于好莱坞尼克博克酒店屋顶举行，现场有观众、广播、手铐和舞台化程序。美国国会图书馆保存了相关脚本与记录。', '预定信息没有出现。贝丝宣布十年已经足够，并熄灭象征性的灯。这个结尾之所以动人，不是因为超自然成功，而是因为一个持续十年的等待终于被人为结束。']},
      {title:'怀疑也能产生仪式',text:['胡迪尼故事揭示，仪式不只属于信仰者。验证规则、纪念日期、反复等待与最后熄灯，同样构成强烈的仪式结构。', '在文化宇宙中，烛光、晶球和桌面陈设被当作历史与舞台视觉研究，而不是效果承诺。保持怀疑不会破坏故事；它让故事拥有可核查的边界。']}
    ],
    sectionsEn:[{title:'Magician and medium',text:['Houdini understood stage machinery and attention. He collected books on magic and spiritualism and challenged mediums he believed exploited grief.']},{title:'A promised code',text:['Houdini and Bess were said to have arranged a private code that any posthumous message would need to contain. The code created a test, not merely a hope.']},{title:'The rooftop in 1936',text:['The final famous séance was staged on a Hollywood hotel roof with audience, radio, props, and script. No message came; Bess ended the ten-year vigil and extinguished the light.']},{title:'Scepticism can make ritual',text:['Rules, anniversary, repetition, and a final extinguishing formed a ritual even without supernatural success. Historical atmosphere does not require a supernatural claim.']}],
    sources:[{label:'Library of Congress · Hollywood, Houdini and the 1936 séance',href:'https://blogs.loc.gov/loc/2020/10/hollywood-houdini-and-the-halloween-seance-of-1936/'},{label:'Library of Congress · Houdini’s rare magic books',href:'https://blogs.loc.gov/inside_adams/2014/10/harry-houdinis-rare-magic-books/'}]
  },
  {
    slug:'cthulhu-a-fiction-with-a-birth-certificate',chamber:'cosmic-abyss',categoryZh:'文学原典',categoryEn:'FOUNDING FICTION',titleZh:'克苏鲁：一个有“出生证明”的虚构神',titleEn:'Cthulhu: A Fiction with a Birth Certificate',dekZh:'它不是被考古发现的远古神祇，而是可以追溯到作者、手稿和1928年杂志页面的现代创造。',dekEn:'Not an excavated ancient god, but a modern creation traceable to author, manuscript, and a 1928 magazine page.',eraZh:'美国 · 1928',eraEn:'UNITED STATES · 1928',readTime:10,image:'/images/products/cthulhu-bust-green.jpg',featured:true,productIds:['DC-008','DC-004'],
    sectionsZh:[
      {title:'从杂志页面开始',text:['《克苏鲁的呼唤》发表于美国《Weird Tales》1928年2月号。H. P. 洛夫克拉夫特在此前写成故事，把学者遗稿、艺术家梦境、警方档案、海员证词和报纸剪报拼接成调查档案。', '这种结构故意制造“证据很多但无法完整理解”的感觉。读者没有直接进入一个神话时代，而是在现代文件中发现某种比现代世界更古老的阴影。']},
      {title:'偶像、梦与无法翻译的形体',text:['故事中的小型偶像成为线索：它兼具人形、翼与触手特征，却无法被已知艺术史分类。1934年，洛夫克拉夫特本人还画过克苏鲁蹲坐在刻字基座上的草图，现由布朗大学收藏。', '这张图是珍贵的创作物证，但它证明的是作者如何想象自己的虚构角色，不是远古宗教曾经存在。把这条界线讲清楚，反而让后世雕塑如何偏离、放大或重组原始描述变得更值得比较。']},
      {title:'宇宙恐怖的尺度',text:['克苏鲁真正带来的并非“最大怪兽”，而是尺度变化。人的历史只是深时间的一小段，理性能够整理文件，却不保证宇宙会服从人的意义。', '因此，宇宙恐怖常使用残缺档案、无法测量的建筑、沉睡实体和知识带来的崩溃。读者害怕的不是被一个敌人击败，而是发现人类从来不是故事中心。']},
      {title:'影响与批判同时存在',text:['洛夫克拉夫特的想象力深刻影响文学、游戏、电影和视觉艺术；他的文本也包含严重的种族主义与排外恐惧。布朗大学的专题研究强调，这些偏见与部分恐怖想象存在结构性联系。', '负责任的文化网站不需要在赞美与删除之间二选一。它可以研究作品为何有效、如何传播，同时明确指出其伤害与历史语境。']}
    ],
    sectionsEn:[{title:'Beginning on a magazine page',text:['The Call of Cthulhu appeared in Weird Tales in February 1928. Lovecraft built it from a scholar’s papers, dreams, police material, sailor testimony, and clippings.']},{title:'Idol, dream, unclassifiable body',text:['Lovecraft’s 1934 sketch shows the fictional entity crouched on an inscribed pedestal. It documents an author’s imagination, not an ancient cult.']},{title:'The scale of cosmic horror',text:['The central shock is not monster size but human insignificance before deep time and an indifferent universe. Documents accumulate without guaranteeing comprehension.']},{title:'Influence and critique together',text:['Lovecraft’s influence is immense, and his racism is serious. Brown University research shows that prejudice cannot simply be separated from all of his horror imagery. Responsible reading studies both.']}],
    sources:[{label:'H. P. Lovecraft Archive · publication record',href:'https://www.hplovecraft.com/writings/fiction/cc.aspx'},{label:'Brown University Library · Lovecraft’s racial imaginaries and sketch',href:'https://library.brown.edu/create/lovecraftracialimaginaries/'}]
  },
  {
    slug:'the-manuscript-out-of-time',chamber:'cosmic-abyss',categoryZh:'档案传奇',categoryEn:'ARCHIVAL STORY',titleZh:'超越时间的手稿，也曾消失在时间里',titleEn:'The Manuscript Out of Time Was Lost in Time',dekZh:'一份被认为遗失的洛夫克拉夫特手稿，在几十年后重新出现，改变了读者能看到的文本。',dekEn:'A Lovecraft manuscript believed lost resurfaced decades later and changed the text readers could see.',eraZh:'美国 · 1935及以后',eraEn:'UNITED STATES · 1935 AND AFTER',readTime:8,image:'/images/products/eldritch-altar-front.jpg',productIds:['DC-004','DC-008'],
    sectionsZh:[
      {title:'记忆被另一个时代占据',text:['《超越时间之影》讲述一名学者经历记忆断裂，并逐渐相信自己的意识曾与遥远时代的异类智慧交换。故事以调查、梦境、考古和自我怀疑推进，把“我是谁”变成跨越地质时间的问题。']},
      {title:'作者的文本并不总等于刊本',text:['洛夫克拉夫特的友人罗伯特·巴洛曾在1935年协助整理手稿。作品后来在杂志发表，但编辑版本与作者原稿存在差异。原始手稿又没有出现在巴洛去世后的材料中，长期被认为遗失。']},
      {title:'在私人文件中重现',text:['多年后，手稿在另一批私人文件中被发现并捐赠给布朗大学。馆藏说明指出，这使作品首次能够按照作者留下的文本被准确阅读。', '这段经历本身像一则档案小说：文本从一位作者到朋友，再进入他人文件，消失于公共视野，最后在大学馆藏中重新获得身份。']},
      {title:'为什么文化网站需要档案意识',text:['我们今天习惯把“作品”看成固定内容，但杂志编辑、排版、删改、翻译和再版都会改变文本。手稿不是用来制造神秘光环的圣物，而是比较变化的证据。', '文化宇宙会把故事、出版版本和后世图像分层呈现。读者看到的不只是“讲了什么”，也包括一个故事怎样穿过媒介和时间抵达现在。']}
    ],
    sectionsEn:[{title:'Memory occupied by another age',text:['The Shadow Out of Time turns a scholar’s broken memory into a question spanning geological time, using investigation, dream, archaeology, and doubt.']},{title:'Authorial text and magazine text',text:['Robert Barlow helped prepare the manuscript in 1935. The magazine version differed, while the original later disappeared from view.']},{title:'Recovered in private papers',text:['The manuscript resurfaced decades later and was donated to Brown, allowing the story to be read as Lovecraft wrote it.']},{title:'Why archives matter',text:['Editing, layout, translation, and reprint change works. A manuscript is not a magical relic; it is evidence for comparing those changes.']}],
    sources:[{label:'Brown University Library · recovered Shadow Out of Time manuscript',href:'https://library.brown.edu/exhibits/archive/leaves/modern.html'}]
  }
];

export const storyBySlug = (slug: string) => universeStories.find((story) => story.slug === slug);

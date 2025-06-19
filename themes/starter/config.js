/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '开源且免费的基于 Notion 笔记的网站构建工具', // 英雄区文字
  STARTER_HERO_TITLE_2: '通过笔记无感知地建站、成倍放大您的价值', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: 'NotionNext的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    'NotionNext的愿景是帮助您简单、无感知地稳定地搭建自己的网站，放大品牌的价值。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '免费且开源', // 特性1
  STARTER_FEATURE_1_TEXT_1: '项目源码在Github上完全开放共享，遵循MIT协议', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 特性1

  STARTER_FEATURE_2_TITLE_1: '多种主题定制', // 特性2
  STARTER_FEATURE_2_TEXT_1: '数十种主题,适用于不同场景，总有一款适合你', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://docs.tangly1024.com/article/notion-next-themes', // 特性2

  STARTER_FEATURE_3_TITLE_1: '优秀的性能', // 特性3
  STARTER_FEATURE_3_TEXT_1: '基于NextJS开发，更快的响应速度，更好的SEO', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // 特性3

  STARTER_FEATURE_4_TITLE_1: '便捷的写作体验', // 特性4
  STARTER_FEATURE_4_TEXT_1: '只需在Notion笔记中编修，自动同步到网站', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://docs.tangly1024.com/about', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套轻量实用的建站解决方案',
  STARTER_ABOUT_TEXT:
    'NotionNext的愿景是帮助非技术人员的小白，最低成本、最快速地搭建自己的网站，帮助您将自己的产品与故事高效地传达给世界。 <br /> <br /> 功能强大的Notion笔记，简单快速的Vercel托管平台，组成一个简单的网站',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://docs.tangly1024.com/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: '博客站点',
  STARTER_ABOUT_TIPS_3: '正在线上运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '之前在某平台推卡，佣金不高，结算率低，提现也慢。蓝畅这边佣金提现当天到账，一分不差。佣金说实话，比我之前推的高15%左右，而且在官网注册直接升钻石一级，额外还多了25元。流量卡种类多，用户好接受。稳，真的稳，后悔没早点换。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://raw.githubusercontent.com/lanchangsuxiang1/ImageHost/refs/heads/main/favicon.ico?raw=true',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '匿名',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '代理商',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的平台哈哈 之前一直有在网上办流量卡 但不知道原来别人能赚佣金 所以为什么不自己注册后台自己办卡自己赚呢 还能推卡给身边朋友赚足生活费 而且蓝畅这个非常简单（btw 别的平台好难好复杂） 嘻嘻 主要是每一个环节都清晰透明 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://raw.githubusercontent.com/lanchangsuxiang1/ImageHost/refs/heads/main/favicon.ico?raw=true',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '匿名',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '大学生',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过两周的努力，终于能稳定推卡了，每天都赚几百。非常感谢蓝畅的帮助和教程┭┮﹏┭┮。从今之后，我也是卡商啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://raw.githubusercontent.com/lanchangsuxiang1/ImageHost/refs/heads/main/favicon.ico?raw=true',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '匿名',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '自由职业者',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '佣金高，卡的种类也多。之前都是做几个平台，现在就做这个。上月靠这个多赚了1.3万，新人也能快速上手。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://raw.githubusercontent.com/lanchangsuxiang1/ImageHost/refs/heads/main/favicon.ico?raw=true',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '匿名',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '代理商',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '纯小白试水，就怕流程复杂。结果蓝畅后台非常简单，推卡也不用经常盯。有次出问题，找客服10分钟就处理好！连我这种小白兼职都能月赚5000+，服了。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://raw.githubusercontent.com/lanchangsuxiang1/ImageHost/refs/heads/main/favicon.ico?raw=true',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '匿名',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '大学生',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '带娃空隙赚钱，就图时间自由+钱快。蓝畅佣金是真猛，提现当天就到，上个月提了3800多。客服妹子态度巨好，没嫌我问题多',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://raw.githubusercontent.com/lanchangsuxiang1/ImageHost/refs/heads/main/favicon.ico?raw=true',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '匿名',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '宝妈',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'NotionNext有帮助文档吗？',
  STARTER_FAQ_1_ANSWER:
    'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '部署后要如何编写文章？',
  STARTER_FAQ_2_ANSWER:
    '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '站点部署失败，更新失败？',
  STARTER_FAQ_3_ANSWER:
    '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助',

  STARTER_FAQ_4_QUESTION: '文章没有实时同步？',
  STARTER_FAQ_4_ANSWER:
    '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: '中国移动',
      STARTER_TEAM_ITEM_DESCRIPTION: '中国移动通信集团有限公司'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: '中国电信',
      STARTER_TEAM_ITEM_DESCRIPTION: '中国电信集团有限公司'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: '中国联通',
      STARTER_TEAM_ITEM_DESCRIPTION: '中国联合网络通信集团有限公司'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-04.png',
      STARTER_TEAM_ITEM_NICKNAME: '中国广电',
      STARTER_TEAM_ITEM_DESCRIPTION: '中国广电网络股份有限公司'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于NotionNext的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，福建',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@tangly1024.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '官方店铺', URL: 'https://t.nnkj77.com/c/282828' },
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        }
      ]
    },
    {
      TITLE: '帮助中心',
      LINK_GROUP: [
        {
          TITLE: '官方微信',
          URL: 'https://lanchangsuxiang.vercel.app/wechat'
        },
        {
          TITLE: '',
          URL: ''
        },
        { TITLE: '', URL: '' }
      ]
    },
    {
      TITLE: '访问平台',
      LINK_GROUP: [
        {
          TITLE: '移动端',
          URL: 'https://t.nnkj77.com/app/282828'
        },
        {
          TITLE: '桌面端',
          URL: 'https://api.nnkj77.com'
        },
        {
          TITLE: '',
          URL: ''
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG

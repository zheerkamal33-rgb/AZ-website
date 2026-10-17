export type Lang = "en" | "ku";

export const LANG_STORAGE_KEY = "az-lang";

export type Messages = {
  navHome: string;
  navWork: string;
  navAbout: string;
  navContact: string;
  openMenu: string;
  closeMenu: string;
  brand: string;

  heroHeadline: string;
  heroBody: string;
  heroCtaWork: string;
  heroCtaContact: string;

  workEyebrow: string;
  workTitle: string;
  workIntro: string;

  deliveryEyebrow: string;
  deliveryTitle: string;
  deliveryProblemLabel: string;
  deliveryProblem: string;
  deliveryBuiltLabel: string;
  deliveryBuilt: string;

  cashierEyebrow: string;
  cashierTitle: string;
  cashierProblemLabel: string;
  cashierProblem: string;
  cashierBuiltLabel: string;
  cashierBuilt: string;

  cafeEyebrow: string;
  cafeTitle: string;
  cafeProblemLabel: string;
  cafeProblem: string;
  cafeBuiltLabel: string;
  cafeBuilt: string;

  pharmacyEyebrow: string;
  pharmacyTitle: string;
  pharmacyProblemLabel: string;
  pharmacyProblem: string;
  pharmacyBuiltLabel: string;
  pharmacyBuilt: string;

  uniEyebrow: string;
  uniTitle: string;
  uniProjectName: string;
  uniBody: string;

  capsEyebrow: string;
  capsTitle: string;
  capsIntro: string;
  capsWebTitle: string;
  capsWebBody: string;
  capsAppsTitle: string;
  capsAppsBody: string;
  capsSystemsTitle: string;
  capsSystemsBody: string;

  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string;
  aboutZheerRole: string;
  aboutArmandRole: string;

  contactEyebrow: string;
  contactTitle: string;
  contactBody: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formNamePh: string;
  formEmailPh: string;
  formMessagePh: string;
  formHint: string;
  formSubmit: string;
  formSending: string;
  formErrorRequired: string;
  formErrorEmail: string;
  formErrorSend: string;
  formSuccessTitle: string;
  formSuccessBody: string;
  formAnother: string;

  footerBlurb: string;
  footerCopy: string;
};

export const messages: Record<Lang, Messages> = {
  en: {
    navHome: "Home",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    brand: "Automated Zone",

    heroHeadline: "CS students who build websites, apps, and systems.",
    heroBody:
      "Automated Zone is Zheer and Armand. We design and build software for whoever needs it — websites, apps, systems, the whole range. Have a look at some of our work, then say hello.",
    heroCtaWork: "See our work",
    heroCtaContact: "Say hello",

    workEyebrow: "Work",
    workTitle: "Some projects of ours",
    workIntro:
      "A handful of things we've built and put into use — delivery, market POS, cafe menus, and pharmacy tools.",

    deliveryEyebrow: "Two-sided delivery platform",
    deliveryTitle: "Delivery operations app",
    deliveryProblemLabel: "Problem — ",
    deliveryProblem:
      "Shops needed one place to create orders and get goods to their customers without juggling calls and spreadsheets.",
    deliveryBuiltLabel: "Built — ",
    deliveryBuilt:
      "Merchant creates the order; a rider picks up from the shop and delivers to the end customer — merchant, rider, and customer in one coordinated flow.",

    cashierEyebrow: "Point of sale · AZ Market",
    cashierTitle: "Market Cashier",
    cashierProblemLabel: "Problem — ",
    cashierProblem:
      "Market vendors needed fast, reliable checkout without clunky retail software.",
    cashierBuiltLabel: "Built — ",
    cashierBuilt:
      "AZ Market Cashier — scan or pick products, manage sales in IQD or USD, track inventory and analysis, and complete sales on the floor.",

    cafeEyebrow: "Table-side tablet menu",
    cafeTitle: "Cafe menu system",
    cafeProblemLabel: "Problem — ",
    cafeProblem:
      "Cafes needed a guest-facing menu waitstaff can bring to the table — always current, never reprinted.",
    cafeBuiltLabel: "Built — ",
    cafeBuilt:
      "An iPad digital menu for the table: categories, items, and live IQD prices with KU · AR · EN — handed to guests like a menu, updated like software.",

    pharmacyEyebrow: "Clinical dispense ops",
    pharmacyTitle: "Pharmacy system",
    pharmacyProblemLabel: "Problem — ",
    pharmacyProblem:
      "Pharmacies needed software built around prescriptions, stock expiry, and controlled drugs — not a generic checkout grid.",
    pharmacyBuiltLabel: "Built — ",
    pharmacyBuilt:
      "A clinical dispense console: Rx queue with lot/expiry checks, stock watchlists, and counter workflows shaped for pharmacy staff.",

    uniEyebrow: "From uni",
    uniTitle: "A build we're proud of.",
    uniProjectName: "Smart Home and Gas Detection System",
    uniBody:
      "For our Computer Science degree we built a full smart-house prototype — gas detection, RFID access, an LCD status display, and sensors on a microcontroller. Not a breadboard demo. A complete model we showed at the CS exhibition.",

    capsEyebrow: "What we do",
    capsTitle: "Websites, apps, and systems — for anyone.",
    capsIntro:
      "Tell us what you need. We build digital things that help people and businesses get work done — clear, careful, and made to last.",
    capsWebTitle: "Websites",
    capsWebBody:
      "Sites that look good and work well — for a shop, a studio, a team, or a personal project. Fast, clear, and easy to keep up to date.",
    capsAppsTitle: "Apps",
    capsAppsBody:
      "Mobile and web apps shaped around how you actually work. We keep the interface simple so people want to use it.",
    capsSystemsTitle: "Custom systems",
    capsSystemsBody:
      "If off-the-shelf tools don't fit, we can build something that does — checkout, ops tools, internal dashboards, whatever the job needs.",

    aboutEyebrow: "About",
    aboutTitle: "Two CS students. Real software.",
    aboutBody:
      "Zheer and Armand are computer science students who started Automated Zone to build software people actually use. We take on websites, apps, and systems for whoever needs them — and we've already put real projects out into the world. Reach us by email; we're the ones doing the work.",
    aboutZheerRole:
      "Co-founder, CS student — more on the backend: APIs, data, servers, and making sure things run correctly behind the scenes.",
    aboutArmandRole:
      "Co-founder, CS student — more on the interface: how the product looks and feels for the people using it.",

    contactEyebrow: "Contact",
    contactTitle: "Say hello.",
    contactBody:
      "Email either of us, or send a short note with the form. We read everything ourselves.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formNamePh: "Your name",
    formEmailPh: "you@company.com",
    formMessagePh: "What would you like to talk about?",
    formHint: "Introduce yourself — we usually reply within a day.",
    formSubmit: "Send message",
    formSending: "Sending…",
    formErrorRequired: "Please fill in your name, email, and message.",
    formErrorEmail: "Enter a valid email so we can get back to you.",
    formErrorSend:
      "Could not send the message. Please try again or email us directly.",
    formSuccessTitle: "Thanks — we got it.",
    formSuccessBody:
      "Zheer or Armand will follow up shortly. You can also email either of us using the addresses on this page.",
    formAnother: "Send another message",

    footerBlurb:
      "Zheer & Armand — CS students building websites, apps, and systems.",
    footerCopy: "© 2026 Automated Zone. Built by Zheer & Armand.",
  },

  ku: {
    navHome: "سەرەکی",
    navWork: "کارەکان",
    navAbout: "دەربارەمان",
    navContact: "پەیوەندی",
    openMenu: "کردنەوەی لیستە",
    closeMenu: "داخستنی لیستە",
    brand: "Automated Zone",

    heroHeadline:
      "خوێندکاری زانستی کۆمپیوتەر کە وێبسایت، ئەپ و سیستەم دروست دەکەن.",
    heroBody:
      "Automated Zone بریتییە لە Zheer و Armand. نەرمەکاڵا دیزاین دەکەین و دروست دەکەین بۆ هەر کەسێک کە پێویستی پێیە — وێبسایت، ئەپ، سیستەم، هەموو جۆرێک. چەند کارێکمان ببینە، پاشان سڵاو بڵێ.",
    heroCtaWork: "بینینی کارەکان",
    heroCtaContact: "سڵاو بڵێ",

    workEyebrow: "کارەکان",
    workTitle: "هەندێک لە پڕۆژەکانمان",
    workIntro:
      "چەند شتێک کە دروستمان کردوون و خەڵک بەکاریان دەهێنن — گەیاندن، سیستەمی فرۆشتنی بازاڕ، مێنیوی کافێ، و ئامرازی دەرمانخانە.",

    deliveryEyebrow: "پلاتفۆرمی گەیاندنی دوو لایەنە",
    deliveryTitle: "ئەپی کارەکانی گەیاندن",
    deliveryProblemLabel: "کێشە — ",
    deliveryProblem:
      "فرۆشگاکان پێویستیان بە شوێنێکی یەکگرتوو بوو بۆ تۆمارکردنی داواکاری و گەیاندنی کاڵا بۆ کڕیار، بەبێ ئەوەی لە نێوان تەلەفۆن و خشتەدا سەرگەردان بن.",
    deliveryBuiltLabel: "ئەنجام — ",
    deliveryBuilt:
      "بازرگان داواکاری دروست دەکات؛ گەیەنەر لە فرۆشگا وەری دەگرێت و بۆ کڕیار دەیگەیەنێت — بازرگان، گەیەنەر و کڕیار لە یەک ڕێڕەوی ڕێکخراودا.",

    cashierEyebrow: "سیستەمی فرۆشتن · AZ Market",
    cashierTitle: "Market Cashier",
    cashierProblemLabel: "کێشە — ",
    cashierProblem:
      "فرۆشیارانی بازاڕ پێویستیان بە سیستەمێکی خێرا و متمانەپێکراو بوو بۆ وەرگرتنی پارە، نەک نەرمەکاڵای قورسی فرۆشگا.",
    cashierBuiltLabel: "ئەنجام — ",
    cashierBuilt:
      "AZ Market Cashier — سکان یان هەڵبژاردنی بەرهەم، بەڕێوەبردنی فرۆشتن بە دینار یان دۆلار، بەدواداچوونی کۆگا و شیکاری، و تەواوکردنی فرۆشتن لەسەر کاونتەر.",

    cafeEyebrow: "مێنیوی تابلێت بۆ سەر مێز",
    cafeTitle: "سیستەمی مێنیوی کافێ",
    cafeProblemLabel: "کێشە — ",
    cafeProblem:
      "کافێکان پێویستیان بە مێنیویەک بوو کە خزمەتکار بۆ سەر مێز بهێنێت — هەمیشە نوێ بێت و پێویستی بە چاپکردنەوە نەبێت.",
    cafeBuiltLabel: "ئەنجام — ",
    cafeBuilt:
      "مێنیوی دیجیتاڵی ئایپاد بۆ مێز: پۆل، بەرهەم و نرخی دیناری ڕاستەوخۆ بە کوردی · عەرەبی · ئینگلیزی — وەک مێنیو دەدرێت بە میوان، وەک نەرمەکاڵا نوێ دەکرێتەوە.",

    pharmacyEyebrow: "کارەکانی دابەشکردنی دەرمان",
    pharmacyTitle: "سیستەمی دەرمانخانە",
    pharmacyProblemLabel: "کێشە — ",
    pharmacyProblem:
      "دەرمانخانەکان پێویستیان بە نەرمەکاڵا بوو کە لەسەر ڕەچەتە، بەسەرچوونی کۆگا و دەرمانی کۆنترۆڵکراو دامەزرابێت — نەک تەنها تۆڕی فرۆشتنی گشتی.",
    pharmacyBuiltLabel: "ئەنجام — ",
    pharmacyBuilt:
      "کۆنسۆڵی دابەشکردنی کلینیکی: ڕیزی ڕەچەتە لەگەڵ پشکنینی لۆت و بەسەرچوون، لیستی چاودێری کۆگا، و ڕێڕەوی کار بۆ ستافی دەرمانخانە.",

    uniEyebrow: "لە زانکۆوە",
    uniTitle: "دروستکردنێک کە شانازی پێوە دەکەین.",
    uniProjectName: "سیستەمی ماڵی زیرەک و دۆزینەوەی گاز",
    uniBody:
      "بۆ خوێندنی زانستی کۆمپیوتەر مۆدێلی تەواوی ماڵێکی زیرەکمان دروست کرد — دۆزینەوەی گاز، دەروازەی RFID، شاشەی LCD بۆ دۆخ، و هەستەوەر لەسەر مایکرۆکۆنترۆڵەر. نەک نموونەی بۆردی تاقیکردنەوە. مۆدێلێکی تەواو کە لە پێشانگای زانستی کۆمپیوتەر پیشانمان دا.",

    capsEyebrow: "چی دەکەین",
    capsTitle: "وێبسایت، ئەپ و سیستەم — بۆ هەموو کەس.",
    capsIntro:
      "پێمان بڵێ پێویستیت بە چی هەیە. شتی دیجیتاڵی دروست دەکەین کە یارمەتی خەڵک و کاروبار دەدات کارەکانیان بکەن — ڕوون، بە وردی، و بۆ ماوەیەکی درێژ.",
    capsWebTitle: "وێبسایت",
    capsWebBody:
      "وێبسایتێک کە جوان بێت و باش کار بکات — بۆ فرۆشگا، ستۆدیۆ، تیم، یان پڕۆژەی کەسی. خێرا، ڕوون، و ئاسان بۆ نوێکردنەوە.",
    capsAppsTitle: "ئەپ",
    capsAppsBody:
      "ئەپی مۆبایل و وێب کە لەسەر شێوازی کارکردنی تۆ دروستکراوە. ڕووکارەکە سادە دەهێڵینەوە تا خەڵک حەزی لێ بکات.",
    capsSystemsTitle: "سیستەمی تایبەت",
    capsSystemsBody:
      "ئەگەر ئامرازی ئامادەکراو ناگونجێت، دەتوانین شتێک دروست بکەین کە گونجاو بێت — وەرگرتنی پارە، ئامرازی کارەکان، داشبۆردی ناوخۆیی، یان هەر شتێک کە کارەکە پێویستی پێیە.",

    aboutEyebrow: "دەربارەمان",
    aboutTitle: "دوو خوێندکاری زانستی کۆمپیوتەر. نەرمەکاڵای ڕاستەقینە.",
    aboutBody:
      "Zheer و Armand خوێندکاری زانستی کۆمپیوتەرن کە Automated Zoneیان دەستپێکرد بۆ دروستکردنی نەرمەکاڵا کە خەڵک بەڕاستی بەکاری دەهێنن. وێبسایت، ئەپ و سیستەم بۆ هەر کەسێک دروست دەکەین کە پێویستی پێیە — و پێشتر پڕۆژەی ڕاستەقینەمان ناردووەتە دەرەوە. بە ئیمەیڵ پەیوەندیمان پێوە بکە؛ ئێمە خودی کارەکە دەکەین.",
    aboutZheerRole:
      "هاودامەزرێنەر، خوێندکاری زانستی کۆمپیوتەر — زیاتر لە لایەنی سێرڤەر و پشتەوە: API، داتا، و دڵنیابوون لەوەی شتەکان ڕاست کار دەکەن.",
    aboutArmandRole:
      "هاودامەزرێنەر، خوێندکاری زانستی کۆمپیوتەر — زیاتر لە لایەنی ڕووکار: چۆن بەرهەمەکە دەردەکەوێت و هەستی پێ دەکرێت بۆ بەکارهێنەر.",

    contactEyebrow: "پەیوەندی",
    contactTitle: "سڵاو بڵێ.",
    contactBody:
      "ئیمەیڵ بۆ هەر یەکێکمان بنێرە، یان نامەیەکی کورت لە ڕێگەی فۆرمەکەوە بنێرە. هەموو شتێک خۆمان دەیخوێنینەوە.",
    formName: "ناو",
    formEmail: "ئیمەیڵ",
    formMessage: "نامە",
    formNamePh: "ناوت بنووسە",
    formEmailPh: "you@company.com",
    formMessagePh: "دەربارەی چی دەتەوێت قسە بکەین؟",
    formHint: "خۆت بناسێنە — زۆربەی کات لە ماوەی یەک ڕۆژدا وەڵام دەدەینەوە.",
    formSubmit: "ناردنی نامە",
    formSending: "لە ناردندایە…",
    formErrorRequired: "تکایە ناو، ئیمەیڵ و نامە پڕ بکەرەوە.",
    formErrorEmail: "ئیمەیڵێکی دروست بنووسە بۆ ئەوەی بتوانین وەڵامت بدەینەوە.",
    formErrorSend:
      "نەتوانرا نامەکە بنێردرێت. دووبارە هەوڵبدەرەوە یان ڕاستەوخۆ ئیمەیڵمان بۆ بنێرە.",
    formSuccessTitle: "سوپاس — وەرمانگرت.",
    formSuccessBody:
      "Zheer یان Armand بەم زووانە وەڵامت دەدەنەوە. دەتوانیت ڕاستەوخۆش ئیمەیڵ بۆ یەکێکمان بنێرە لەم پەڕەیە.",
    formAnother: "نامەیەکی تر بنێرە",

    footerBlurb:
      "Zheer و Armand — خوێندکاری زانستی کۆمپیوتەر کە وێبسایت، ئەپ و سیستەم دروست دەکەن.",
    footerCopy: "© 2026 Automated Zone. دروستکراوە لەلایەن Zheer و Armand.",
  },
};

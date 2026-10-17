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

  capsEyebrow: string;
  capsTitle: string;
  capsIntro: string;
  capsDeliveryTitle: string;
  capsDeliveryBody: string;
  capsPosTitle: string;
  capsPosBody: string;
  capsCraftTitle: string;
  capsCraftBody: string;

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

    heroHeadline: "CS grads who ship delivery platforms and market POS.",
    heroBody:
      "Automated Zone is Zheer and Armand. We design and build production software for operators on the ground — then stand behind how it looks and how it runs. Browse the work, then say hello.",
    heroCtaWork: "View selected work",
    heroCtaContact: "Get in touch",

    workEyebrow: "Work",
    workTitle: "Selected projects",
    workIntro:
      "Production systems we designed and shipped — delivery, market POS, cafe menus, and pharmacy ops.",

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

    capsEyebrow: "Capabilities",
    capsTitle: "What we're known for.",
    capsIntro:
      "Production software for operators — sharp UX, solid engineering, direct founders.",
    capsDeliveryTitle: "Delivery platforms",
    capsDeliveryBody:
      "Two-sided ops — merchants create orders, riders pick up and deliver, customers receive. Built for real street-level coordination.",
    capsPosTitle: "Market POS",
    capsPosBody:
      "Cashier systems for markets — fast checkout, multi-currency, product catalogs, and sales analysis that belongs on the counter.",
    capsCraftTitle: "End-to-end craft",
    capsCraftBody:
      "From interface to architecture. We design, build, and ship — then stand behind how it looks and how it runs.",

    aboutEyebrow: "About",
    aboutTitle: "Sharp young builders. Shipped systems.",
    aboutBody:
      "Zheer and Armand are computer science graduates who founded Automated Zone to build software operators actually use — a two-sided delivery platform and AZ Market Cashier. Not pitch-deck prototypes. Production apps with clear UX and solid engineering, from two people you can call directly.",
    aboutZheerRole:
      "Co-founder, CS — systems thinking, product sense, and an obsession with getting the operational details right.",
    aboutArmandRole:
      "Co-founder, CS — craft on the surface, rigor underneath. Builds interfaces people trust on the first try.",

    contactEyebrow: "Contact",
    contactTitle: "Talk to us directly.",
    contactBody:
      "Call either founder, or send a short note. We keep the line short on purpose — you reach the people who do the work.",
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
      "Could not send the message. Please try again or call us directly.",
    formSuccessTitle: "Thanks — we got it.",
    formSuccessBody:
      "Zheer or Armand will follow up shortly at automated.zoneaz@gmail.com. Prefer a call? Use the numbers on this page.",
    formAnother: "Send another message",

    footerBlurb:
      "Studio of Zheer & Armand — CS graduates shipping delivery platforms and market POS.",
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
      "دەرچووی کۆمپیوتەر کە پلاتفۆرمی گەیاندن و سیستەمی فرۆشتنی بازاڕ دەنێرنە دەرەوە.",
    heroBody:
      "Automated Zone بریتییە لە Zheer و Armand. نەرمەکاڵای کارکردن بۆ ئەو کەسانە دیزاین دەکەین و دروستی دەکەین کە ڕۆژانە لەسەر زەوی کاری پێ دەکەن — هەم شێوەکەی و هەم کارکردنەکەی بەرپرسیارین لێی. کارەکان ببینە، پاشان پەیوەندیمان پێوە بکە.",
    heroCtaWork: "بینینی کارەکان",
    heroCtaContact: "پەیوەندیمان پێوە بکە",

    workEyebrow: "کارەکان",
    workTitle: "پڕۆژە هەڵبژێردراوەکان",
    workIntro:
      "سیستەمی ڕاستەقینە کە دیزاینمان کردوون و ناردووماننە دەرەوە — گەیاندن، سیستەمی فرۆشتنی بازاڕ، مێنیوی کافێ، و کارەکانی دەرمانخانە.",

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

    capsEyebrow: "تواناکان",
    capsTitle: "بە چی ناسراوین.",
    capsIntro:
      "نەرمەکاڵای کارکردن بۆ کارپێکەران — ڕووکاری ڕوون، ئەندازیاری پتەو، و دامەزرێنەری ڕاستەوخۆ.",
    capsDeliveryTitle: "پلاتفۆرمی گەیاندن",
    capsDeliveryBody:
      "کارەکانی دوو لایەنە — بازرگان داواکاری دروست دەکات، گەیەنەر وەری دەگرێت و دەیگەیەنێت، کڕیار وەری دەگرێت. بۆ هاوئاهەنگی ڕاستەقینەی سەرشەقام دروستکراوە.",
    capsPosTitle: "سیستەمی فرۆشتنی بازاڕ",
    capsPosBody:
      "سیستەمی کاشێر بۆ بازاڕەکان — وەرگرتنی پارەی خێرا، فرەدراو، کەتەلۆگی بەرهەم، و شیکاری فرۆشتن کە لەسەر کاونتەر جێگای خۆی هەیە.",
    capsCraftTitle: "لە سەرەتاوە تا کۆتایی",
    capsCraftBody:
      "لە ڕووکارەوە تا تەلارسازی. دیزاین دەکەین، دروست دەکەین و دەینێرینە دەرەوە — پاشان بەرپرسیارین لە شێوە و کارکردنەکەی.",

    aboutEyebrow: "دەربارەمان",
    aboutTitle: "دروستکەری گەنجی زیرەک. سیستەمی نێردراو.",
    aboutBody:
      "Zheer و Armand دەرچووی زانستی کۆمپیوتەرن کە Automated Zoneیان دامەزراند بۆ دروستکردنی نەرمەکاڵا کە کارپێکەران بەڕاستی بەکاری دەهێنن — پلاتفۆرمی گەیاندنی دوو لایەنە و AZ Market Cashier. نەک نموونەی پڕۆپۆزەڵ. ئەپی کارکردن لەگەڵ ڕووکاری ڕوون و ئەندازیاری پتەو، لە دوو کەسەوە کە دەتوانیت ڕاستەوخۆ پەیوەندییان پێوە بکەیت.",
    aboutZheerRole:
      "هاودامەزرێنەر، زانستی کۆمپیوتەر — بیرکردنەوەی سیستەمی، هەستی بەرهەم، و گرنگیدان بە وردەکاری کارەکان.",
    aboutArmandRole:
      "هاودامەزرێنەر، زانستی کۆمپیوتەر — جوانی لە ڕووکار، توندی لە ژێرەوە. ڕووکار دروست دەکات کە خەڵک لە یەکەم هەوڵدا متمانەی پێ دەکەن.",

    contactEyebrow: "پەیوەندی",
    contactTitle: "ڕاستەوخۆ قسەمان لەگەڵ بکە.",
    contactBody:
      "تەلەفۆن بۆ هەر یەکێک لە دامەزرێنەران بکە، یان نامەیەکی کورت بنێرە. هێڵەکە بەئەنقەست کورت دەهێڵینەوە — دەگەیتە ئەو کەسانەی خودی کارەکە دەکەن.",
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
      "نەتوانرا نامەکە بنێردرێت. دووبارە هەوڵبدەرەوە یان تەلەفۆنمان بۆ بکە.",
    formSuccessTitle: "سوپاس — وەرمانگرت.",
    formSuccessBody:
      "Zheer یان Armand بەم زووانە لە automated.zoneaz@gmail.com وەڵامت دەدەنەوە. تەلەفۆنت پێ باشترە؟ ژمارەکان لەم پەڕەیەدان.",
    formAnother: "نامەیەکی تر بنێرە",

    footerBlurb:
      "ستۆدیۆی Zheer و Armand — دەرچووی کۆمپیوتەر کە پلاتفۆرمی گەیاندن و سیستەمی فرۆشتنی بازاڕ دەنێرنە دەرەوە.",
    footerCopy: "© 2026 Automated Zone. دروستکراوە لەلایەن Zheer و Armand.",
  },
};

import { useState, useRef } from "react";

const BG   = "#FAFAF8";
const INK  = "#111110";
const SOFT = "#6B6860";
const BRD  = "#E8E5E0";
const P    = "#FFFFFF";

const MEMBERS = [
  { key: "kavya",   name: "Kavya",   init: "K",  color: "#A0856C" },
  { key: "urvi",    name: "Urvi",    init: "U",  color: "#888878" },
  { key: "kushal",  name: "Kushal",  init: "Ku", color: "#6B7FA0" },
  { key: "swapnil", name: "Swapnil", init: "Sw", color: "#8A7A9A" },
  { key: "aditi",   name: "Aditi",   init: "Ad", color: "#5A8A6A" },
];

// ─────────────────────────────────────────────────────────────────────────────
// ALL QUESTION SETS — 63 sets: 15 chips + 5 member overviews + 10 group dynamics + 38 focused sub-questions
// tags: broad list including synonyms, Hinglish variants, related words
// ─────────────────────────────────────────────────────────────────────────────
const QA = [

  // ── CHIP QUESTIONS (15) ──────────────────────────────────────────────────

  {
    q: "Ek Sunday bina kisi plan ke, tum sab kahan hoge aur kya kar rahe hoge?",
    tags: ["sunday", "plan", "weekend", "day off", "free day", "holiday", "relax", "kahan", "without plan", "bina plan", "lazy", "rest", "off day", "sunday morning", "free sunday"],
    a: {
      kavya:   "honestly? bed mein. curtains drawn. do not disturb on. eating something i ordered at 11am. staring at ceiling and calling it self care\nhaina this counts 👉🏾👈🏾",
      urvi:    "plants ko paani. then coffee. then nothing for a very long time.",
      kushal:  "Depends on the sunday 🫡\nSometimes I is in the bads and wax up at 12\nSometimes colouring book\nSometimes heritage walk or some activity bahar\nVery varied sunday person\nBut always offline from work\nThis is non negotiable",
      swapnil: "sofa. phone. vahi rehna.",
      aditi:   "Hqhqhqhqhq\nSunday bina plan ke means either\nbahar nikal jaana for something\nor ghar pe ek achhi series\nboth are valid\nboth happen\ndepends on the mood honestly"
    }
  },

  {
    q: "Is group ki plans follow karne ki ability ko 10 mein kitne doge?",
    tags: ["plans", "follow", "rating", "score", "cancel", "ability", "group", "kitne", "rate", "marks", "10 mein", "follow through", "rate karo", "points", "out of 10"],
    a: {
      kavya:   "7 honestly\nwe do actually meet quite regularly which is genuinely impressive for five ADHD people\nhaina sometimes there's a delay but we always get there 👉🏾👈🏾",
      urvi:    "7. We show up more than people expect.",
      kushal:  "I givings it a solid 7 🫡\nWe actually do meet\nRegularly even\nSometimes takes a little coordination\nBut everyone comes\nVery good group actually",
      swapnil: "7. We make it happen.",
      aditi:   "Okay honestly 7 or 8\nwe actually do meet\nlike properly\nall five of us together\nand it's always so good\nhqhqhqhqhhq"
    }
  },

  {
    q: "3 baje raat ko tumhara brain kya karta hai?",
    tags: ["3am", "raat", "brain", "night", "sleep", "late night", "sone", "midnight", "insomnia", "3 baje", "3 am", "nahi sota", "late", "raat ko", "2am", "4am", "neend"],
    a: {
      kavya:   "unnecessary memories ka slideshow\nfir ek purana conversation jisme maine galat cheez bol di thi\nfir self correction\nfir correction ka correction\nfir 5am 🤡\nhaina it's a whole thing",
      urvi:    "Either dead asleep or running a documentary on something I'll never use.",
      kushal:  "Legal cases jo kabhi file nahi hue. Random theories. Ek baar poori raat socha ki dinosaurs agar abhi hote toh tax system kaisa hota 🫡\nVery productive braining",
      swapnil: "Khaana. Ya koi ek line jo subah yaad nahi rehti.",
      aditi:   "Jmdlr\nokayyy so\nlast week 3 baje\nmaine socha\nwhat if i learn the entire panchayat ost\non kiddy keyboard\nand then i did\nso brain is productive actually\nbas galat time pe"
    }
  },

  {
    q: "Koi ek cheez jo tumne recently impulsively kari, bina soche.",
    tags: ["impulsive", "impulsively", "bina soche", "spontaneous", "random", "suddenly", "recently", "kari", "without thinking", "impulse buy", "without reason", "abrupt", "suddenly did", "kiya", "impuls"],
    a: {
      kavya:   "ek course enrol kar liya\nab uski 47 emails aate hain\nmujhe kuch nahi karna tha bhai 🤡\n*karna",
      urvi:    "Ordered a plant at 11pm. It arrived. I don't know where to put it.",
      kushal:  "Bhai I subscribed to a documentary streaming service at 2am\nAbhi tak ek cheez nahi dekhi\nBut mausam bahut acha tha that night 🫡\nVery mausam has happened to my wallet",
      swapnil: "Ek app download kiya. Abhi bhi hai phone mein. Opened once.",
      aditi:   "Instamart se kiddy keyboard order kar liya\nmidnight mein\nbecause\nI wanted to learn panchayat title song\nright then\nno further explanation"
    }
  },

  {
    q: "Masala coke, nimbu soda, ya roohafza. Ek chuno.",
    tags: ["masala coke", "nimbu soda", "roohafza", "drink", "pina", "choose", "chuno", "drinks", "beverage", "cold drink", "peeना", "favourite drink", "best drink", "nimbu", "masala", "rooh afza"],
    a: {
      kavya:   "nimbu soda\nno contest\nmasala coke is kushal ki ijaad and it is genuinely elite\nbut nimbu soda is my comfort 👉🏾👈🏾",
      urvi:    "Nimbu soda. Always.",
      kushal:  "MASALA COKE 🫡🫡🫡\nI taught kavya how to make it and she still chose nimbu soda\nBetrayals bro\nVery cold of you\nBut masala coke. Ekdum spicy. The colder the better.",
      swapnil: "Nimbu soda. Simple.",
      aditi:   "Roohafza\nI said what I said\nit's not even a competition\nroohafza in milk\nin summer\nis a different dimension\nsorry not sorry"
    }
  },

  {
    q: "What is the most underrated feeling in the world?",
    tags: ["underrated", "feeling", "best feeling", "world", "emotion", "underrated feeling", "favourite feeling", "satisfying", "sab se acha", "joy", "happiness", "what feeling", "describe feeling"],
    a: {
      kavya:   "waking up and realising you have 2 more hours before your alarm\nand you're warm\nand nothing is urgent yet\nthat specific feeling\nhaina it's criminally underrated",
      urvi:    "Finishing something you'd been avoiding for weeks. That exhale.",
      kushal:  "Bro when the auto comes exactly when you reach the stand 🫡\nNo waiting. No negotiation. Just destiny working in your favour.\nVery satisfying has happened.",
      swapnil: "When plans cancel and you actually wanted them to.",
      aditi:   "OMGGGG\nokay okay\nwhen you wake up\nand for one second\nyou have no thoughts\njust blank\nbefore the day hits\nTHAT\nthat feeling\nhalf a second of peace\nbefore the chaos\nhahahah"
    }
  },

  {
    q: "If this group was a movie, what genre would it be?",
    tags: ["movie", "genre", "film", "group", "what kind", "bollywood", "hollywood", "type", "agar movie hoti", "cinema", "series", "show", "which movie", "what movie", "movie type"],
    a: {
      kavya:   "slice of life indie film\njahan kuch bhi nahi hota\nbut somehow by the end you're crying\nand you don't know why\nbut it felt very real\n\nalso some comedy. mostly unintentional.",
      urvi:    "Documentary. Shot in 4 different flats. Mostly just people on their phones.",
      kushal:  "Bhai it's a coming of age film but everyone is already 30\nWhere is my character arc 🫡\nVery late to the realisation\nBut also very good soundtrack\nAnd at least one scene where someone orders food at midnight",
      swapnil: "Dark comedy. Wholesome ending.",
      aditi:   "Okay hear me out\nit starts as a thriller\nbecause the group chat notifications are INTENSE\nthen becomes a comfort show\nthen one episode is just kavya sending stickers for 45 minutes\nthen back to comfort\noverall 9.5/10 on imdb"
    }
  },

  {
    q: "This group. More chaotic or more wholesome?",
    tags: ["chaotic", "wholesome", "group", "this group", "describe", "vibe", "both", "is this group", "how is this group", "group kaisa hai", "what is this group", "chaotic hai", "wholesome hai"],
    a: {
      kavya:   "wholesome BECAUSE of the chaos\nlike the chaos is the love language here\nbut we always show up\nhaina that combination is actually very rare and very special 👉🏾👈🏾",
      urvi:    "Both. Simultaneously. Always.",
      kushal:  "Statistically chaotic 🫡\nEmotionally wholesome\nThe chaos is just us trying to love each other in ADHD\nVery normal for us\nVery confusing for outsiders",
      swapnil: "Wholesome. Definitely.",
      aditi:   "BOTH\nbut like\nchaotic on the surface\nwholesome at the core\nlike a maggi packet\ndisorganised outside\ncomforting inside\nwe are the maggi of friend groups\njmdlrh"
    }
  },

  {
    q: "What is one thing only this group would truly understand?",
    tags: ["only this group", "understand", "inside", "unique", "special", "only we", "group thing", "sirf hum", "group samjhega", "no one else", "only you", "just us", "group mein"],
    a: {
      kavya:   "that showing up for each other doesn't always look the same\nsometimes it's being there in person\nsometimes it's a 2am text\nsometimes it's just existing in the same group\nhaina we understand all the versions of showing up 👉🏾👈🏾",
      urvi:    "That silence in the group doesn't mean anything is wrong.",
      kushal:  "Bro that it's okay to reply late and come back with a random meme 🫡\nNo explanation needed\nNo guilt\nVery liberating\nMost groups would not survive this",
      swapnil: "That showing up differently on different days is still showing up.",
      aditi:   "That sometimes the group chat is quiet for a bit\nand then everyone comes back\nand it's like no time passed at all\nbecause the love is always there\nlol"
    }
  },


  {
    q: "Koi ek nostalgia wali cheez jo instantly kuch feel kara de.",
    tags: ["nostalgia", "memory", "feel", "yaad", "childhood", "old", "instantly", "kuch feel", "past", "bachpan", "nostalgic", "purana", "miss", "missing", "old memories", "yaad aata hai", "school"],
    a: {
      kavya:   "wo specific smell\njab barish pehli baar aati hai\naur mitti se uthta hai\nmujhe immediately 8 saal ki umar pe le jaata hai\njab homework ki koi tension nahi thi\naur bas bajne ka wait rehta tha\n🥺",
      urvi:    "That red manchurian chowmein from a specific thela in Baroda. Still haven't found anything like it.",
      kushal:  "Bhai NCERT ki English textbook ki stories 😭\nFlamingo and Vistas\nThe one about the giant Handre\nI has been looking for it for years\nVery childhood has happened in those pages 🫡",
      swapnil: "Nokia snake game. Just that.",
      aditi:   "CADBURY BYTES\nwhere did they go\nwhy did they go\nkoi nahi samjhega mera dard\nwoh cheez thi hi aisi\nalso\nthe smell of new crayola crayons\nboth simultaneously\nboth illegal to discontinue"
    }
  },

  {
    q: "What would you do with one completely free day, no phone, no plans?",
    tags: ["free day", "no phone", "no plans", "completely free", "alone", "by yourself", "one day", "off", "phone nahi", "free time", "nothing to do", "unplug", "without phone", "bina phone", "digital detox"],
    a: {
      kavya:   "cry probably\nnot in a bad way\njust like\nfinally exhale\nfir journal karna\nfir some food\nfir sleep in the afternoon which I never do\nfir existential contemplation at sunset\nhaina this sounds perfect 👉🏾👈🏾",
      urvi:    "Garden. Sit. Watch the dragonflies. Make one very good cup of coffee. That's it.",
      kushal:  "Bhai honestly 🫡\nMaybe a heritage walk somewhere\nOr colouring book\nOr cook something unnecessarily elaborate\nRead something I've been meaning to read since 2021\nVery varied day\nBut no work\nThis is the only rule",
      swapnil: "Long walk. Come back. Sleep. Perfect day.",
      aditi:   "First I would panic\nbecause no phone means no anchor\nthen I would\nmake chai\nopen all windows\nput on some music\nrearrange furniture for no reason\nthen feel very peaceful\nthen nap\nthen wake up and miss my phone a little\nbut mostly be okay"
    }
  },


  {
    q: "Ek skill jo tumne kabhi bhi ek random raat mein khud se seekh li.",
    tags: ["skill", "seekh li", "learned", "random night", "self taught", "khud se", "midnight", "taught yourself", "sikh liya", "self learn", "skill seekha", "random", "overnight", "taught", "learn"],
    a: {
      kavya:   "ek baar 2am ko maine kisi sticker pack banane ki tutorial dekhi\naur fir 4am tak stickers bana rahi thi\nmujhe abhi bhi nahi pata tha woh software use karna\nbut I made 11 stickers that night\nand used exactly 2 of them 🤡",
      urvi:    "Looked up every butterfly species that visits my garden. In one sitting. At midnight.",
      kushal:  "Bhai I once learned to make the perfect masala coke at 1am 🫡\nIt took seven attempts\nVery scientific process\nNow I teaches others\nKavya is my only student\nShe betrayed masala coke for nimbu soda but still",
      swapnil: "Ek excel shortcut. Still use it daily.",
      aditi:   "PANCHAYAT TITLE SONG\non a kiddy keyboard\nthat i ordered on instamart at midnight\nbecause I suddenly NEEDED to learn it\nswapnil was sitting next to me\nhe witnessed everything\nit took maybe 20 minutes\nI is actually talented\nor the song is simple\n🤣🤣🤣hq"
    }
  },

  // ── MEMBER QUESTIONS ─────────────────────────────────────────────────────

  {
    q: "Tell me about Kavya.",
    tags: ["who is kavya", "tell me about kavya", "describe kavya", "introduce kavya", "kavya overall", "kavya general", "kavya introduction", "kavya person"],
    a: {
      kavya:   "wait am I describing myself\nthis is so awkward 👉🏾👈🏾\nokay fine\nI think I care too much about too many things\nand I'm working on that\nbut also maybe not 🤡",
      urvi:    "Kavya is the one who actually listens. Properly. And then sends you a voice note at midnight about it.",
      kushal:  "Bro Kavya is the heart of this group 🫡\nShe does very important social impact work\nBuilding workshops and resources\nVery serious work done very quietly\nAlso sends the most stickers of anyone I know\nBoth things are true simultaneously",
      swapnil: "Overthinks. But in a good way. Always means well.",
      aditi:   "Kavya is\nokay she is the warmest person\nshe doubts herself sometimes even when she is clearly right\nwe remind her and she is getting better at this\nalso she has a sticker for every single emotion\neveryone needs a kavya\n😂😂h"
    }
  },

  {
    q: "Tell me about Urvi.",
    tags: ["who is urvi", "tell me about urvi", "describe urvi", "introduce urvi", "urvi overall", "urvi general", "urvi introduction", "urvi person"],
    a: {
      kavya:   "urvi says the least and means the most\nyou have to pay attention\nbecause when she does say something it's always exactly right\nalso she is a photographer and her eye for things is just\n😮😮\nhaina she notices everything",
      urvi:    "I'd rather not.",
      kushal:  "Urvi bro 🫡\nSays three words\nAll three land perfectly\nPhotographer\nVegetarian\nHas extremely strong opinions about plants\nVery quietly eventful person",
      swapnil: "Very calm. Very sharp. Doesn't miss anything.",
      aditi:   "Urvi is the person who will\nnot say anything for hours\nand then say one thing\nthat makes everyone go\noh\nOHHH\nyeah that\nalso she has the most beautiful eye for photography"
    }
  },

  {
    q: "Tell me about Kushal.",
    tags: ["who is kushal", "tell me about kushal", "describe kushal", "introduce kushal", "kushal overall", "kushal general", "kushal introduction", "kushal person"],
    a: {
      kavya:   "kushal is the reason we actually leave our houses\nhe will plan, he will drive, he will pick everyone up\nand then crack a joke so bad that you forget you were tired\nhaina the dad joke energy is both his curse and his gift 🤡",
      urvi:    "Corporate lawyer who shows up with his car and a terrible pun. Every time.",
      kushal:  "I is very humble person\nCannot describe myself\n🫡\nBut also I has driven everyone everywhere\nSomeone must acknowledge this",
      swapnil: "Kushal shows up. Every time. That says everything.",
      aditi:   "KUSHAL\nokay so\nhe is a lawyer\nwhich you would never guess\nbecause he is always the one saying\n\"chalo aaj milte hain\"\nand then he comes and picks everyone up\nand then makes a joke that always lands somehow\nbecause delivery hai uski\nalso marathi mein jo karta hai swap ke saath\nthat is a whole show honestly"
    }
  },

  {
    q: "Tell me about Swapnil.",
    tags: ["who is swapnil", "tell me about swapnil", "describe swapnil", "introduce swapnil", "swapnil overall", "swapnil general", "swapnil introduction", "swapnil person"],
    a: {
      kavya:   "swapnil will say no to a plan\nthen show up first\ndesigner brain, always noticing things no one else noticed\nquiet but when he says something it just lands\nhaina that's the swapnil experience 👉🏾👈🏾",
      urvi:    "Says no. Shows up. Says nothing. Notices everything.",
      kushal:  "Bhai Swapnil 🫡\nUI UX designer\nFirst answer is always no\nSecond answer is also no\nThird answer is \"okay fine I'm coming\"\nAlso we do Marathi bits together which no one else understands\nThis is our power",
      swapnil: "...",
      aditi:   "Swapnil is\nthe most silent person in the room\nwho is also somehow the funniest\nbecause he will say ONE thing\njust one\nand it will be the most accurate thing ever said\nalso he was sitting right next to me when I learned panchayat on keyboard\nhe witnessed my entire journey\nrespect"
    }
  },

  {
    q: "Tell me about Aditi.",
    tags: ["who is aditi", "tell me about aditi", "describe aditi", "introduce aditi", "aditi overall", "aditi general", "aditi introduction", "aditi person"],
    a: {
      kavya:   "aditi is ENERGY\nshe is branding, marketing, filmmaking, driving, planning, doing\nand she is always somehow doing all of it at once\nalso she understands a little marathi and will throw in a pun sometimes\nwhich honestly no one sees coming\nhaina she keeps everyone on their toes 🤡",
      urvi:    "Aditi initiates. Aditi drives. Aditi does not stop.",
      kushal:  "Aditi bro 🫡\nHyperactivity personified\nBranding and marketing and filmmaking\nAlways has a plan and a backup plan\nAlso drives everyone places which is very appreciated\nSometimes throws a Marathi pun and catches everyone off guard\nVery surprising energy",
      swapnil: "Always moving. Always doing something. Hard to keep up. Very fun.",
      aditi:   "who gave you permission to ask about me\nijbolh\nokay fine\nI am just a girl\nwho loves her work\nand her friends\nand driving everyone around\nand occasionally understanding marathi well enough to make a pun\nand that is enough"
    }
  },

  // ── EXACT WHO IS X — guaranteed correct routing ──────────────────────────

  {
    q: "Who is Kavya?",
    tags: ["who is kavya", "kaun hai kavya", "kavya kaun hai", "kavya kon hai", "introduce kavya", "kavya intro"],
    a: {
      kavya:   "wait am I describing myself 👉🏾👈🏾\nokay fine\nI work in social impact, building workshops and resources in tier 2 and 3 cities\nI overthink everything, love deeply, and have a sticker for literally every emotion\nthat's me 🤡",
      urvi:    "Kavya is the one who actually listens. Properly. Not just waiting for her turn to speak. Actually listens.\nWorks in social impact. Sends stickers that are always exactly right.\nThe emotional anchor without making it a big deal.",
      kushal:  "Bro Kavya is the heart of this group 🫡\nShe does very serious social impact work very quietly\nBuilding resources and workshops for people who need them\nAlso she is people pleaser who is learning to say no\nAlso has more stickers than anyone I know\nVery complete person",
      swapnil: "Kavya feels everything deeply and still shows up warmly. Not easy to do. Very her.",
      aditi:   "Kavya is the warmest person\nshe does genuinely important social impact work\nshe overthinks but always from a place of caring\nand she has a sticker for every single human emotion\nlike every one\nhqhqh\nwe love her"
    }
  },

  {
    q: "Who is Urvi?",
    tags: ["who is urvi", "kaun hai urvi", "urvi kaun hai", "urvi kon hai", "introduce urvi", "urvi intro"],
    a: {
      kavya:   "urvi is a photographer\nand the way she sees the world through a lens is genuinely something else\nshe says very little but when she does it always lands perfectly\nalso she has the most beautiful garden, and is the quietest most perceptive person in any room\nhaina she notices everything 👉🏾👈🏾",
      urvi:    "Photographer. Vegetarian. Garden. Coffee.\nI notice things. That's about it.",
      kushal:  "Urvi bro 🫡\nSays very few words\nEvery word is precise\nPhotographer with a very specific eye\nVegetarian\nGarden person\nVery calm\nVery sharp\nVery quietly eventful person",
      swapnil: "Urvi sees everything. Says only what matters. Very calm. Very sharp. Photographer.",
      aditi:   "Urvi is the person who will be quiet for a long time\nand then say one thing\nthat makes everyone go\noh\nOHHHH\nyeah exactly that\nshe's a photographer and her eye for things is so beautiful\nalso her garden is actual goals\njmdh"
    }
  },

  {
    q: "Who is Kushal?",
    tags: ["who is kushal", "kaun hai kushal", "kushal kaun hai", "kushal kon hai", "introduce kushal", "kushal intro"],
    a: {
      kavya:   "kushal is a corporate lawyer who somehow also makes everyone feel at home\nhe's the one who says chalo milte hain and then actually makes it happen\ndrives everyone, makes everyone laugh, does Marathi bits with Swapnil\nhaina he's the activation energy of this group 👉🏾👈🏾",
      urvi:    "Corporate lawyer. Initiates everything. Shows up with his car and a terrible pun.\nAlso goes to therapy and talks about it openly. Good combination.",
      kushal:  "I is corporate lawyer 🫡\nI makes the plans\nI drives the car\nI has the jokes\nI also has tharepy\nVery well rounded person\nVery humble also",
      swapnil: "Kushal is the reason the group actually meets. He makes things happen. Also the jokes. We appreciate both.",
      aditi:   "Kushal is a corporate lawyer which you would never guess\nbecause he is so warm and goofy\nbut also sharp when it matters\nhe plans everything, picks everyone up, cracks a terrible joke\nand somehow it's the best evening\n💀💀h"
    }
  },

  {
    q: "Who is Swapnil?",
    tags: ["who is swapnil", "kaun hai swapnil", "swapnil kaun hai", "swapnil kon hai", "introduce swapnil", "swapnil intro"],
    a: {
      kavya:   "swapnil is a UI UX designer\nfirst answer to any plan is always no, then he shows up first\nquiet but when he speaks it lands perfectly every time\nand he does Marathi bits with Kushal that nobody else fully understands\nhaina that's the swapnil experience 👉🏾👈🏾",
      urvi:    "UI UX designer. Says no. Shows up. Says very little. Everything he says is worth it.",
      kushal:  "Bhai Swapnil 🫡\nUI UX designer\nVery quiet person\nVery thoughtful person\nFirst answer no, final answer yes\nWe do Marathi bits together\nThis is our bond\nAlso he witnessed Aditi learn panchayat on keyboard\nVery important historical moment",
      swapnil: "UI UX designer. Quiet. Overthinks sometimes. Shows up always.",
      aditi:   "Swapnil is a UI UX designer\nand he is the most quiet person in the group\nbut also somehow the most accurate\nhe will say one thing and it will be the most on-point thing anyone said all evening\nalso he was witness to my panchayat keyboard moment\nhe is a loyal friend\nhahahahah"
    }
  },

  {
    q: "Who is Aditi?",
    tags: ["who is aditi", "kaun hai aditi", "aditi kaun hai", "aditi kon hai", "introduce aditi", "aditi intro"],
    a: {
      kavya:   "aditi does branding, marketing and some filmmaking\nshe is hyperactive in the best way, always up for plans, always driving someone somewhere\nshe understands a little Marathi and will catch you off guard with a pun\nalso she has Suzy, the most adorable chihuahua, who is basically her daughter\nhaina she keeps everyone on their toes 🤡",
      urvi:    "Branding, marketing, filmmaking. Hyperactive. Drives everyone everywhere.\nAlso has Suzy who is very cutiebb and plays with everyone when we visit.",
      kushal:  "Aditi bro 🫡\nBranding and marketing and filmmaking\nAlways moving always doing\nDrives everyone\nUnderstands Marathi and throws puns when least expected\nAlso learned panchayat title song on kiddy keyboard at midnight\nAnd has Suzy who is the best chihuahua\nVery full of life person\nBoth Aditi and Suzy",
      swapnil: "Aditi is always there. Always moving. Always warm. Does branding and marketing and film.\nAlso has Suzy who plays with everyone when we visit. Very good dog.",
      aditi:   "okay fine I will describe myself\nI do branding marketing and some filmmaking\nI am very hyperactive yes\nI drive people around because I like having them near\nI understand enough Marathi to make a pun at the right moment\nand I once learned panchayat title song at midnight on a kiddy keyboard\nand I am proud of that\nalso I have Suzy\nmy chihuahua\nmy daughter\nthe love of my life\nlol okayhq"
    }
  },

  {
    q: "Who is Suzy?",
    tags: ["who is suzy", "who is susie", "suzy", "susie", "aditi dog", "aditi ka dog", "aditi ki dog", "chihuahua", "aditi pet", "suzy kaun hai", "suzy dog", "susie dog", "tell me about suzy", "tell me about susie", "aditi daughter", "cutiebb", "suzu", "chuha", "chuhiya", "momo", "beti"],
    a: {
      kavya:   "Suzy 💕\nshe is so calm and plays with literally everyone when we come over\nno drama, no barking, just pure love\nhaina she is genuinely one of the best parts of any meetup at Aditi's place 👉🏾👈🏾",
      urvi:    "Suzy. Very calm, very friendly. Plays with everyone when we visit. Honestly a delight.",
      kushal:  "Beti 🫡\nHamari beti\nVery shant\nVery friendly\nWhenever we go over beti is just there playing with everyone\nNo fuss at all\nWe all love her so much",
      swapnil: "Suzu. Very calm. Plays with everyone. We all love her.",
      aditi:   "okay SUZY\nmy baby my chuha my chuhiya my momo\nshe is my chihuahua and honestly my daughter\nshe is SO calm and friendly\nwhenever anyone comes home she just runs around and plays with everyone\nno barking no drama just love\nand she makes everyone stay longer\nbecause nobody wants to leave her honestly\nhqhqhqhqhqhq"
    }
  },

  {
    q: "What is Suzy like?",
    tags: ["suzy like", "suzy personality", "suzy kaisi hai", "suzy nature", "suzy character", "what is suzy", "suzy describe", "suzy vibe", "suzy energy", "suzy temperament"],
    a: {
      kavya:   "very calm and very friendly and very cutiebb\nshe just plays with everyone when we come over\nno drama no barking just pure love\nhaina she is genuinely one of the best parts of any meetup 👉🏾👈🏾",
      urvi:    "Small. Calm. Plays with everyone. Asks nothing in return. Ideal.",
      kushal:  "Beti is the most shant creature in any room 🫡\nWherever there is chaos\nBeti is just there\nPlaying\nUnbothered\nVery inspiring honestly",
      swapnil: "Suzu. Very calm. Very friendly. Good energy.",
      aditi:   "SUZY\nmy chuha my chuhiya my momo my baby\nshe is so calm and friendly and loving\nwhenever anyone comes home she just runs around and plays with everyone\nno fuss just love\nhqhqhqhqhhq"
    }
  },

  {
    q: "What does Suzy do when everyone comes over?",
    tags: ["suzy when group comes", "suzy meetup", "suzy group visit", "suzy jab sab aate", "suzy plays", "suzy greets", "suzy behaviour", "suzy visits", "suzy when people come", "suzy with group"],
    a: {
      kavya:   "she plays with literally everyone\nlike she does a full round of the room\nno favourites\nno drama\njust pure joy\nhaina she's the most socially intelligent one among us honestly 👉🏾👈🏾",
      urvi:    "Runs around. Plays with everyone. Then finds a spot and watches. Very wise.",
      kushal:  "Beti does the rounds 🫡\nEveryone gets attention\nNo one is left out\nVery fair distribution of love\nVery good hosting skills\nBetter than some humans I know",
      swapnil: "Plays with everyone. No drama. Perfect guest energy actually.",
      aditi:   "Suzy KNOWS when people are coming\nlike she can tell\nshe gets so excited\nand then she just runs around and plays with everyone\nand makes everyone stay longer\nbecause nobody wants to leave her\nhahahahq"
    }
  },

  {
    q: "Who is Suzy's favourite in the group?",
    tags: ["suzy favourite", "suzy favorite", "suzy likes who", "suzy ka favourite", "who does suzy love", "suzy best friend", "suzy close to", "suzy prefers", "suzy kaun pasand", "suzy likes most"],
    a: {
      kavya:   "aditi obviously\nbut also I feel like suzy loves everyone equally\nhaina she is just built different 👉🏾👈🏾",
      urvi:    "Aditi. But she's too polite to show it too obviously.",
      kushal:  "Beti loves everyone 🫡\nBut also beti lives with Aditi\nSo by default\nAditi has home advantage\nVery unfair competition honestly",
      swapnil: "Aditi. But Suzu treats the rest of us very well too.",
      aditi:   "ME\nOBVIOUSLY\nI am her person\nher mumma\nher home\nbut also she loves everyone who comes over\nwhich is why she is perfect\njmdlrhq"
    }
  },

  // ── GROUP DYNAMICS QUESTIONS ─────────────────────────────────────────────

  {
    q: "Who is the funniest in the group?",
    tags: ["funniest", "funny", "comedy", "jokes", "humor", "humour", "makes laugh", "kaun funny", "kaun hasata", "most funny", "comedian", "best jokes", "hansi", "hasai", "haste hain"],
    a: {
      kavya:   "kushal thinks he is\nbut honestly the funniest moments are accidental\njab koi galti karta hai\nand then laughs at himself before anyone else does\nthat's when it's actually funny\nhaina 🤡",
      urvi:    "Kushal is trying the hardest. Aditi lands it without trying.",
      kushal:  "It is me 🫡\nVery obviously\nI has the jokes\nBut also Aditi is very naturally funny\nAnd Swapnil says one thing once a week that beats everything\nSo unclear honestly",
      swapnil: "Kushal thinks so. Group disagrees.",
      aditi:   "Okay real answer\nKushal TRIES the hardest\nbut the funniest person is honestly\njust whoever does the most embarrassing thing that week\nand has the self awareness to tell everyone\nwhich means it rotates\nlolh"
    }
  },

  {
    q: "Who talks the most in this group?",
    tags: ["talks most", "most talkative", "loudest", "who talks", "who speaks", "bolta kaun", "kaun bolta", "most messages", "most active", "chatty", "most vocal", "who chats", "most texts", "messages bhejta"],
    a: {
      kavya:   "me probably\nbut in my defence\nI send thoughts as they arrive\nwhich is constantly\nhaina that's just transparency 🤡",
      urvi:    "Kavya. Then Aditi. Then me occasionally. Then Kushal in bursts. Then Swapnil once a week.",
      kushal:  "Bhai I am very strategic with my words 🫡\nKavya and Aditi are doing the heavy lifting\nI come in at key moments\nFor the jokes\nAnd the planning\nVery targeted communication",
      swapnil: "Not me.",
      aditi:   "ME\nand Kavya\nwe are basically co-anchors of this group\nbut I talk in one-word bursts\nso it might look like more\nKavya talks in paragraphs\nboth styles valid\n🤣🤣🤣h"
    }
  },

  {
    q: "Who is the most responsible one here?",
    tags: ["responsible", "most responsible", "mature", "sensible", "kaun responsible", "organised", "who organises", "adult", "who plans", "jimmedar", "responsible kaun", "who is mature", "grown up", "handles things"],
    a: {
      kavya:   "honestly both kushal and aditi\nkushal plans in a very structured way\naditi plans spontaneously but it always comes together\nhaina both make things happen in their own way 👉🏾👈🏾",
      urvi:    "Kushal and Aditi. Different styles, same outcome. Things happen.",
      kushal:  "Bhai I and Aditi both makes things happen 🫡\nI is more structured\nShe is more spontaneous\nBut both of us get the group moving\nVery good co-responsibility",
      swapnil: "Kushal and Aditi. One plans ahead, one plans in the moment. Both work.",
      aditi:   "Me and Kushal honestly\nhe is very structured about it\nI just decide something and then it happens\nboth styles valid\nboth get the group together\n😂😂h"
    }
  },

  {
    q: "What happens when you all actually meet?",
    tags: ["meet", "when you meet", "hangout", "milte hain", "kya hota hai", "what do you do", "getting together", "meetup", "get together", "jab milte", "milke", "gather", "meeting", "hanging out", "mil jaao", "qtbb", "quick tata bye bye"],
    a: {
      kavya:   "okay so it always starts as a qtbb\nquick tata bye bye\nbas thodi der ke liye\nand then somehow 3 hours pass\nwe order too much food, cover everything from childhood memories to random theories\nhaina it never stays short and it's always the best 👉🏾👈🏾",
      urvi:    "We call it qtbb. Quick tata bye bye. It's never quick. It's always good.",
      kushal:  "Bhai it starts as qtbb 🫡\nQuick tata bye bye\nBas thodi der\nAnd then somehow it is 3 hours later\nFood has been ordered\nSomebody said something that became a group joke\nVery reliable pattern\nVery good time every time",
      swapnil: "Starts as qtbb. Never is. Always worth it.",
      aditi:   "QTBB\nquick tata bye bye\nthat is what we say\nand then nobody leaves for hours\nbecause the food is good and the people are better\nand sometimes Suzy makes everyone stay even longer\nlolwahq"
    }
  },

  {
    q: "How does this group handle ADHD together?",
    tags: ["adhd", "neurodivergent", "neurodivergence", "nd", "attention", "focus", "hyperactive", "executive dysfunction", "how do you manage", "relate", "understand each other", "brain", "adhd group", "all adhd", "mental health", "nd friends"],
    a: {
      kavya:   "honestly the biggest thing is\nnobody judges you for forgetting\nnobody takes it personally when you disappear for 3 days\nnobody questions why you couldn't do the one thing\nit's the safest group I've been in because of that\nhaina that's rare 👉🏾👈🏾",
      urvi:    "We just get it. No explanation needed for most things. That's the whole thing.",
      kushal:  "Bro the best part is nobody sends a passive aggressive \"seen\" 🫡\nYou reply when you reply\nYou come when you come\nAnd when someone is struggling\nEveryone just\nShows up\nVery good system actually",
      swapnil: "We understand each other without explaining. That's enough.",
      aditi:   "Okay so\nthe biggest thing is\nnone of us make each other feel bad\nfor the ADHD things\nlike forgetting\nor a slow day\nor needing more time\nwe all get it\nbecause we are all living it\nijbolhq\nit's the most freeing thing"
    }
  },

  // ── KUSHAL FOCUSED (8) ───────────────────────────────────────────────────

  {
    q: "Why does Kushal crack lame jokes all the time?",
    tags: ["kushal jokes", "kushal lame", "kushal funny", "kushal crack", "kushal puns", "dad jokes kushal", "why jokes", "kushal comedy", "kushal humor", "kushal humour", "kushal witty", "bakwaas jokes", "why does kushal", "kushal always jokes", "jokes all time"],
    a: {
      kavya:   "honestly I think it's his love language\nhe genuinely wants everyone around him to smile\nand the jokes are always so bad that you laugh at them anyway\nhaina it's actually very sweet when you think about it 👉🏾👈🏾",
      urvi:    "Because it works. Every time. Despite everything.",
      kushal:  "I is very talented 🫡\nThe jokes are carefully crafted\nVery much rehearsed\nAlso I cannot stop\nIt is a condition",
      swapnil: "He's been doing it forever. It's just Kushal. We'd miss it honestly.",
      aditi:   "Okay real answer\nhe does it because he genuinely enjoys making people laugh\nand there is something so endearing about someone who commits to a terrible pun\nwith full confidence\nzero shame\nwe love him for it\nhqhqh"
    }
  },


  {
    q: "Why does Kushal drive everyone and pick them up?",
    tags: ["kushal drives", "kushal driving", "kushal car", "kushal picks up", "kushal drop", "kushal chauffeur", "kushal lifts", "kushal pickup", "kushal gadi", "kushal gaadi", "kushal cabbie", "who drives", "drives everyone", "picks everyone", "kushal ride"],
    a: {
      kavya:   "because that's just who he is\nhe will plan it, show up, pick you up, drive you there, and then make a terrible joke in the car\nand somehow that whole package is one of the most comforting things in the world\nhaina 👉🏾👈🏾",
      urvi:    "It's his way of showing up. Quite literally.",
      kushal:  "I has the car 🫡\nAlso I likes everyone being comfortable\nNo auto negotiation stress\nNo cab surge pricing\nJust I is driving\nVery smooth operation",
      swapnil: "It's generous and he enjoys it. Works well for everyone.",
      aditi:   "Kushal just shows up at your gate\nand the plan happens\nbecause of him\nhe makes it easy for everyone to come together\nwe appreciate him so much for this"
    }
  },

  {
    q: "What does Kushal do for work?",
    tags: ["kushal work", "kushal job", "kushal lawyer", "kushal profession", "kushal corporate", "kushal law", "kushal kya karta", "kushal career", "kushal legal", "kushal firm", "what is kushal", "kushal professional", "kushal barrister", "kushal advocate"],
    a: {
      kavya:   "he's a corporate lawyer\nand honestly the funniest thing is that you would never guess\nbecause he's the most warm and goofy person\nbut yes professionally very sharp\nhaina the contrast is adorable 🤡",
      urvi:    "Corporate lawyer. Very good at it. Also very good at hiding it socially.",
      kushal:  "I is the legal eagle 🫡\nCorporate law\nContracts, deals, all the serious things\nBut also I is the jokes and the plans\nLife is multifaceted\nVery versatile person",
      swapnil: "Lawyer. Corporate. Takes it seriously. Doesn't show it much outside work.",
      aditi:   "Corporate lawyer\nwhich is honestly so funny\nbecause when you're with him\nhe's just the fun guy who makes terrible jokes\nand picks everyone up\nbut yes he is a full serious lawyer\nand very good at it apparently\njmdhq"
    }
  },

  {
    q: "What is the Marathi thing between Kushal and Swapnil?",
    tags: ["kushal marathi", "swapnil marathi", "marathi jokes", "marathi bits", "marathi language", "kushal swapnil marathi", "marathi banter", "marathi puns", "speak marathi", "marathi mein", "marathi talking", "marathi conversation", "maharashtrian", "marathi bond"],
    a: {
      kavya:   "they just switch into Marathi sometimes\nand the rest of us are just watching a show we can't understand\nbut you can tell it's funny\nbecause they're both laughing\nhaina it's actually very wholesome to watch 👉🏾👈🏾",
      urvi:    "It's their own frequency. Nobody else gets it. That's the point.",
      kushal:  "Bhai it's a whole world 🫡\nSwapnil and I have this natural Marathi wavelength\nSometimes a joke only works in Marathi\nAnd Aditi will sometimes throw in a Marathi pun out of nowhere\nWhich is always very surprising and very appreciated\nKavya just watches with confusion and that is also very entertaining",
      swapnil: "It's just natural. Some things are funnier in Marathi. Kushal gets it.",
      aditi:   "I understand more Marathi than they think I do\nand occasionally I will say something\nand they both look at me like\nwait\nhow did she\nand I just smile\n💀💀hq\nit's my superpower"
    }
  },

  {
    q: "How does Kushal deal with his ADHD?",
    tags: ["kushal adhd", "kushal neurodivergent", "kushal focus", "kushal attention", "kushal nd", "kushal mental health", "kushal brain", "kushal manages", "kushal cope", "kushal therapy", "kushal handles", "kushal executive", "kushal distraction", "adhd kushal"],
    a: {
      kavya:   "he channels it into being the group's action person I think\nlike all that energy becomes planning and driving and doing\nand the jokes are probably also part of it\nhaina channelling ADHD into making people smile is actually quite beautiful 👉🏾👈🏾",
      urvi:    "Therapy. Planning. And apparently making puns. Seems to work for him.",
      kushal:  "Bhai I has tharepy 🫡\nAlso I puts things into lists\nAnd when the brain is loud\nI goes for a drive\nOr makes a plan\nMovement helps\nVery scientific approach",
      swapnil: "He keeps moving. Keeps planning. Keeps everyone together. That's how.",
      aditi:   "I think the planning and organising thing IS his ADHD working for him\nlike his brain needs to be doing something\nso it does the most useful possible thing\nwhich is getting all of us together\nhow wonderful is that honestly"
    }
  },

  {
    q: "Why does Kushal speak in broken English sometimes?",
    tags: ["kushal broken english", "kushal english", "kushal language", "kushal speaks funny", "kushal wax up", "kushal gnsdtc", "kushal slipe", "kushal funny english", "kushal talks", "kushal typing", "kushal texts", "very mausam", "tring of spearls", "kushal style", "kushal way"],
    a: {
      kavya:   "it's fully intentional and fully hilarious\nlike he does it to make everyone laugh\nand the timing is always perfect\nhaina it's actually a form of art at this point 🤡",
      urvi:    "It's a bit. A very committed, very enjoyable bit.",
      kushal:  "I is very multilingual 🫡\nSometimes the brain switches\nAnd the English comes out\nIn its own special form\nVery mausam has happened to my grammar\nBut I stands by it",
      swapnil: "It makes everyone laugh. He knows exactly what he's doing.",
      aditi:   "It started as a joke\nbut now it's just\npart of who he is in this group\n\"Very mausam has happened\"\n\"Tring of spearls\"\n\"I is in the bads\"\nthese are iconic\nwe would not change them\nhahahahahq"
    }
  },

  {
    q: "Why is Kushal the organiser of the group?",
    tags: ["kushal organiser", "kushal organizer", "kushal leader", "kushal glue", "kushal holds", "kushal together", "kushal group", "kushal anchor", "kushal responsible", "kushal manages group", "kushal takes charge", "kushal steps up", "group organiser", "who organises", "who leads"],
    a: {
      kavya:   "I think some people are just wired to bring others together\nand kushal is genuinely that person\nhe gets joy from everyone being in the same room\nand that joy is contagious\nhaina we're all very lucky he's in our lives 👉🏾👈🏾",
      urvi:    "He enjoys it. And he's good at it. Natural fit.",
      kushal:  "I is just very caring 🫡\nI wants everyone to be okay\nAnd together\nAnd happy\nSo I makes it happen\nVery simple motivation actually",
      swapnil: "Because he genuinely wants us all together. You can feel it.",
      aditi:   "Kushal has this quality\nwhere he genuinely lights up\nwhen the whole group is together\nand I think we all feel that\nso when he says chalo milte hain\nwe all want to say yes\nbecause his enthusiasm is real\nand that's rare"
    }
  },

  // ── KAVYA FOCUSED (8) ────────────────────────────────────────────────────

  {
    q: "Why does Kavya overthink everything?",
    tags: ["kavya overthink", "kavya thinks too much", "kavya analysis", "kavya overanalyse", "kavya overanalyze", "kavya brain", "kavya worry", "kavya anxious", "kavya anxiety", "why kavya", "kavya so much", "kavya keeps thinking", "kavya spiral", "overthink kavya", "kavya second guess"],
    a: {
      kavya:   "I literally cannot help it\nthe brain just goes\nand goes\nand then corrects itself\nand then questions the correction\nI'm working on it\nbut also haina it means I care a lot 🤡",
      urvi:    "Big heart. Brain that won't slow down. Both at the same time.",
      kushal:  "Bro Kavya's brain is always running 3 parallel tabs 🫡\nAnd each tab has 12 sub-tabs\nBut that's also why she gives the most thoughtful responses\nVery thorough person\nWe appreciate it",
      swapnil: "Because she cares deeply. The overthinking comes from that.",
      aditi:   "Kavya overthinks\nbut the beautiful thing is\nshe always comes back to warmth\nlike even after all the spiralling\nher conclusion is always\nhow can I help\nhow can I be there\nthat's who she is\nlol okayh"
    }
  },

  {
    q: "Why is Kavya a people pleaser?",
    tags: ["kavya people pleaser", "kavya pleasing", "kavya says yes", "kavya agree", "kavya can't say no", "kavya too nice", "kavya accommodating", "kavya boundary", "kavya approval", "kavya kind", "people pleaser kavya", "why kavya nice", "kavya selfless", "kavya gives in"],
    a: {
      kavya:   "it's something I'm actively working on in therapy honestly\nI think I was conditioned to keep the peace\nbut I'm slowly learning that my needs matter too\nhaina it's a process 👉🏾👈🏾\nslowly getting better",
      urvi:    "She's working on it. And she's doing well. That takes courage.",
      kushal:  "Bhai Kavya has the biggest heart 🫡\nShe genuinely wants everyone around her to be okay\nAnd sometimes that means she puts herself last\nBut she's getting much better at speaking up\nVery proud of her growth",
      swapnil: "She's learning to prioritise herself more. Doing well at it.",
      aditi:   "She's getting better at saying no\nand we love her for trying\nbut also\nher people pleasing comes from such a genuine place\nlike she truly wants everyone to be okay\nand that's beautiful\neven while she works on the balance"
    }
  },

  {
    q: "What does Kavya do for work?",
    tags: ["kavya work", "kavya job", "kavya profession", "kavya career", "kavya social", "kavya impact", "kavya workshop", "kavya survivors", "kavya ngo", "kavya rural", "kavya tier", "kavya kya karti", "kavya profession", "kavya social work", "kavya trauma"],
    a: {
      kavya:   "I work in social impact\nbuilding workshops and resources for communities that need them most\nmostly in tier 2 and tier 3 cities\nit's meaningful work and it matters a lot to me\nhaina it's what I want to spend my energy on 👉🏾👈🏾",
      urvi:    "She builds resources and workshops for communities that need them most. Very important work, done very quietly.",
      kushal:  "Bhai Kavya does genuinely meaningful work 🫡\nWorkshops and materials for survivors\nTier 2 and tier 3 cities\nWhere these resources often don't exist\nVery serious and very needed\nShe doesn't talk about it much but it's impactful",
      swapnil: "Social impact work. Workshops for survivors. Important and meaningful.",
      aditi:   "Kavya builds resources for people who need them most\nin cities where support systems are limited\nand she does it so quietly\nyou'd never know the scale of it\nunless you asked\nwhich you should\nbecause it's incredible work"
    }
  },

  {
    q: "Why is Kavya obsessed with stickers?",
    tags: ["kavya stickers", "kavya sticker", "kavya sends stickers", "kavya sticker pack", "kavya emojis", "kavya reactions", "sticker obsession", "kavya collection", "kavya whatsapp stickers", "kavya loves stickers", "stickers kavya", "kavya packs", "kavya reaction stickers"],
    a: {
      kavya:   "OKAY IN MY DEFENCE\nstickers are the perfect way to communicate something\nwhen words feel too much OR too little\nthere is a sticker for every single emotion\nand I have found most of them\nhaina it's a legitimate communication tool 🤡",
      urvi:    "She has one for every emotion. Every situation. It's genuinely impressive.",
      kushal:  "Bhai the sticker game is unmatched 🫡\nKavya has a sticker for literally everything\nHappy sticker. Sad sticker. Confused sticker. Proud sticker.\nI think she also makes some herself\nVery dedicated art form",
      swapnil: "She finds the perfect sticker every time. It's a skill honestly.",
      aditi:   "Kavya's sticker collection is a whole archive\nI have secondhand sticker obsession because of her\nbecause she sends them and I screenshot them\nand then use them\nso technically we are sticker co-dependents\nhqhqhqhqhqhq"
    }
  },

  {
    q: "Why is Kavya sometimes out of town?",
    tags: ["kavya out of town", "kavya travel", "kavya away", "kavya not here", "kavya missing", "kavya travelling", "kavya trip", "kavya work travel", "kavya bahar", "kavya gai hui", "kavya field", "kavya fieldwork", "kavya outstation", "kavya gone"],
    a: {
      kavya:   "my work takes me to tier 2 and tier 3 cities\nfor fieldwork and workshops\nit's not glamorous travel but it's purposeful\nand when I come back the group chat has 847 unread messages\nhaina that's always a fun moment 🤡",
      urvi:    "Work trips mostly. She comes back and we catch her up on everything she missed.",
      kushal:  "Bro Kavya travels for her social impact work 🫡\nFieldwork in smaller cities\nVery important reason to be away\nAnd when she comes back everyone is very happy\nGroup feels more complete",
      swapnil: "Work takes her out. She always comes back. That's what matters.",
      aditi:   "She goes for fieldwork\nher workshops happen in cities that need them\nwhich means sometimes she's not around\nand we miss her\nbut the other four of us still meet\nand report back to her everything\nhqhqhqhqhhq"
    }
  },

  {
    q: "How does Kavya handle her ADHD?",
    tags: ["kavya adhd", "kavya neurodivergent", "kavya nd", "kavya focus", "kavya attention", "kavya brain", "kavya mental health", "kavya manages", "kavya cope", "kavya handles", "kavya therapy", "kavya executive", "adhd kavya", "kavya distraction"],
    a: {
      kavya:   "therapy definitely helps\nand also this group honestly\nbecause nobody here makes me feel bad for being exactly the way I am\nhaina that kind of safety is half the battle 👉🏾👈🏾",
      urvi:    "She processes out loud. With us. That seems to help.",
      kushal:  "Bhai Kavya processes things very openly 🫡\nShe talks about what she's feeling\nShe asks for what she needs\nAnd she's very self aware about her patterns\nVery good at the emotional work\nWe learn from her honestly",
      swapnil: "She talks it through. With us, with her therapist. It helps her.",
      aditi:   "Kavya is one of the most self aware people I know\nlike she will name exactly what's happening in her brain\nand that self awareness means she catches herself\nbefore things spiral too far\nalso we are all here for her\nalways"
    }
  },

  {
    q: "Why is Kavya the emotional anchor of the group?",
    tags: ["kavya emotional", "kavya anchor", "kavya support", "kavya listens", "kavya heart", "kavya warm", "kavya caring", "kavya empathy", "kavya feelings", "kavya nurtures", "kavya holds", "emotional support kavya", "kavya therapist", "kavya understanding"],
    a: {
      kavya:   "I don't know if I'm the anchor\nI think we all hold each other in different ways\nbut I do feel things very deeply\nand I think people can feel that\nhaina maybe that's what makes it safe to share 👉🏾👈🏾",
      urvi:    "She makes people feel heard. Genuinely heard. That's rare.",
      kushal:  "Bro Kavya is the person you call when something is actually wrong 🫡\nNot just to vent\nBut because she will sit with you in it\nAnd not try to fix it immediately\nJust be there\nVery rare quality",
      swapnil: "She holds space for everyone. Naturally. Without being asked.",
      aditi:   "When something hard happens\nyou want kavya there\nnot because she has answers\nbut because she makes you feel\nthat whatever you're feeling is valid\nand that you're not alone\nand honestly sometimes that's everything"
    }
  },

  {
    q: "Why is Kavya a social impact worker?",
    tags: ["kavya passion", "kavya why social", "kavya why work", "kavya motivated", "kavya chose", "kavya purpose", "kavya calling", "kavya meaningful work", "kavya mission", "kavya values", "kavya driven", "why kavya chose", "kavya committed", "kavya dedication"],
    a: {
      kavya:   "because I genuinely believe these things need to exist\nand if someone is going to build them\nit might as well be someone who cares this much\nhaina the work is hard but it never feels pointless 👉🏾👈🏾",
      urvi:    "She cares. Deeply and specifically. That's where meaningful work comes from.",
      kushal:  "Bhai Kavya has always been the person who sees the gap 🫡\nAnd thinks about who falls through it\nHer work fills those gaps\nFor people who often have nowhere else to go\nVery important and very her",
      swapnil: "It suits her completely. She's built for it.",
      aditi:   "Because she's been paying attention\nher whole life\nto who gets left behind\nand she decided\nthat she would do something about it\nand she actually does\nevery day\nthat's Kavya"
    }
  },

  // ── URVI FOCUSED (7) ─────────────────────────────────────────────────────

  {
    q: "Why does Urvi say so little?",
    tags: ["urvi quiet", "urvi silent", "urvi says less", "urvi few words", "urvi minimal", "urvi short", "urvi doesn't talk", "urvi kum bolta", "urvi chup", "urvi terse", "urvi reserved", "why urvi quiet", "urvi not talkative", "urvi low key", "urvi introvert"],
    a: {
      kavya:   "because she only says things when she means them\nlike she has a very high bar for what's worth saying out loud\nand that means when she does speak\nyou actually pay attention\nhaina there's something powerful about that 👉🏾👈🏾",
      urvi:    "Because most things don't need to be said. The ones that do, I say.",
      kushal:  "Bhai Urvi is a very selective communicator 🫡\nNot because she has nothing to say\nBut because she filters it very well\nAnd when she does speak\nIt usually lands perfectly\nVery efficient person",
      swapnil: "Quality over quantity. It's a good approach.",
      aditi:   "Urvi doesn't say much\nbut what she says\nis always exactly the right thing\nlike she just\nwaits\nand then\none sentence\nand everyone goes ohhhh\nthat's the gift"
    }
  },

  {
    q: "What does Urvi do for work?",
    tags: ["urvi work", "urvi job", "urvi photographer", "urvi photography", "urvi profession", "urvi career", "urvi kya karti", "urvi professional", "urvi shoots", "urvi camera", "urvi photos", "urvi images", "urvi ai course", "urvi skill", "urvi creative"],
    a: {
      kavya:   "she's a photographer\nand her eye for things is just extraordinary\nlike she notices light and composition and feeling in a way most people don't\nalso she did an AI course recently which is very cool\nhaina she keeps evolving 👉🏾👈🏾",
      urvi:    "Photographer. And slowly learning AI tools too. Still figuring out where those two things meet.",
      kushal:  "Bhai Urvi is a photographer 🫡\nAnd a very good one\nHas a very distinct eye\nAlso did an AI course\nVery multidimensional skill set\nWe are proud",
      swapnil: "Photographer. Great eye. Does AI stuff too now.",
      aditi:   "She is a photographer\nand the way she sees the world\ncomes through in her work\nalso she did an AI course\nwhich is very fitting\nbecause she's always been curious\nabout everything\nhahahah"
    }
  },

  {
    q: "Why is Urvi vegetarian?",
    tags: ["urvi vegetarian", "urvi veg", "urvi no meat", "urvi food", "urvi eating", "urvi diet", "urvi veggie", "urvi plants", "urvi green", "vegetarian urvi", "urvi vegan", "urvi meatless", "urvi food habits", "urvi khana"],
    a: {
      kavya:   "it's just who she is\nand she holds it very naturally\nnever makes a big deal about it but also never compromises\nhaina that kind of quiet conviction is very Urvi 👉🏾👈🏾",
      urvi:    "Always have been. It just is.",
      kushal:  "Bhai Urvi has always been vegetarian 🫡\nShe navigates it very smoothly\nAlways finds what she needs\nNever makes anyone else feel bad about it\nVery balanced approach",
      swapnil: "It's just her. Nobody thinks about it. It's normal.",
      aditi:   "Urvi is vegetarian\nand the most non-dramatic vegetarian I know\nlike she just\nfinds the vegetarian option\neats it happily\nnever complains\nand never makes it anyone else's problem\ngoals honestly"
    }
  },

  {
    q: "Why is Urvi obsessed with plants?",
    tags: ["urvi plants", "urvi garden", "urvi nature", "urvi flowers", "urvi botanical", "urvi greenery", "urvi plant lover", "urvi butterflies", "urvi dragonflies", "urvi outdoor", "urvi wildlife", "urvi flora", "urvi gardening", "plants urvi", "urvi horticulture"],
    a: {
      kavya:   "I think it connects to her photography eye\nlike she notices the beauty in quiet living things\nand plants are these incredibly patient beautiful organisms\nhaina it makes complete sense for her 👉🏾👈🏾",
      urvi:    "They're calming. They're interesting. They don't need much from you but they give a lot back.",
      kushal:  "Bro Urvi and plants is a whole relationship 🫡\nShe knows every species\nThe butterflies and dragonflies that visit\nThe specific soil conditions\nVery dedicated\nVery peaceful side of her",
      swapnil: "It suits her. Patient, observant, gentle. Same qualities.",
      aditi:   "Urvi and her plants\nis one of my favourite things about her\nshe has this whole world in her garden\nand she knows everything about everything in it\nbutterfly names\nplant species\nwhat grows where\njmdlrh\nit's so beautiful"
    }
  },

  {
    q: "How does Urvi handle her ADHD?",
    tags: ["urvi adhd", "urvi neurodivergent", "urvi nd", "urvi focus", "urvi attention", "urvi brain", "urvi mental health", "urvi manages", "urvi cope", "urvi handles", "urvi therapy", "adhd urvi", "urvi executive", "urvi quiet adhd"],
    a: {
      kavya:   "she processes things very internally I think\nand then shares what she's comfortable sharing\nand she has this remarkable ability to ground herself\nhaina she's taught me a lot about regulation honestly 👉🏾👈🏾",
      urvi:    "Quietly. Plants help. Photography helps. This group helps.",
      kushal:  "Bhai Urvi is very self contained with it 🫡\nShe processes internally\nAnd when she comes out the other side\nShe has usually figured out what she needed\nVery independent way of handling things",
      swapnil: "She handles it quietly. But she handles it well.",
      aditi:   "Urvi is one of those people\nwho seems very calm on the outside\nbut is probably running a lot internally\nand she manages it by\nnature\nphotography\nthis group\nand occasionally by saying one thing\nthat puts everything in perspective"
    }
  },

  {
    q: "Why is Urvi so perceptive?",
    tags: ["urvi perceptive", "urvi notices", "urvi observant", "urvi sharp", "urvi intuitive", "urvi aware", "urvi sees", "urvi reads people", "urvi insight", "urvi smart", "urvi clever", "urvi understands", "urvi catches", "urvi picks up", "perceptive urvi"],
    a: {
      kavya:   "I think it comes from listening more than speaking\nlike when you're not busy forming your next sentence\nyou actually hear what people are saying\nand what they're not saying\nhaina Urvi has that quality fully 👉🏾👈🏾",
      urvi:    "You notice more when you're not always talking.",
      kushal:  "Bhai Urvi sees things 🫡\nNot just visually as a photographer\nBut in people and situations\nShe will pick up on something\nThat nobody else caught\nAnd she'll say it in four words\nAnd everyone will immediately get it",
      swapnil: "She pays attention. More than most people realise.",
      aditi:   "Urvi is the person who notices\nthe small thing that changed\nor the feeling in the room\nor the thing nobody said\nbut was clearly there\nand she does it so naturally\nit's kind of extraordinary honestly"
    }
  },


  // ── SWAPNIL FOCUSED (7) ──────────────────────────────────────────────────

  {
    q: "Why does Swapnil always say no first?",
    tags: ["swapnil no", "swapnil says no", "swapnil refuses", "swapnil declines", "swapnil first no", "swapnil hesitates", "swapnil reluctant", "swapnil then yes", "swapnil nahi", "swapnil na", "swapnil resist", "swapnil convincing", "swapnil join", "swapnil plan no"],
    a: {
      kavya:   "I think his brain needs a moment to process before committing\nlike saying no first is actually just\nbuy me a second to think\nand then the yes comes naturally\nhaina it's very Swapnil 👉🏾👈🏾",
      urvi:    "The no is the processing step. The yes comes after. Always.",
      kushal:  "Bhai Swapnil's no is not a no 🫡\nIt is a maybe that needs 10 minutes\nAnd then it becomes yes\nAnd then he shows up\nAnd has a great time\nVery reliable process",
      swapnil: "I need to check with myself first. That's all.",
      aditi:   "It's his way of processing\nlike he doesn't give automatic yesses\nhe thinks\nand THEN commits\nand when swapnil commits to something\nhe actually means it\nso the no first is actually a good sign\nlolh"
    }
  },

  {
    q: "What does Swapnil do for work?",
    tags: ["swapnil work", "swapnil job", "swapnil designer", "swapnil design", "swapnil ui", "swapnil ux", "swapnil ui ux", "swapnil profession", "swapnil career", "swapnil kya karta", "swapnil creative", "swapnil product", "swapnil interface", "swapnil design work"],
    a: {
      kavya:   "he's a UI UX designer\nand it makes complete sense\nbecause he has this very precise eye for how things should feel\nnot just look\nhaina the design brain explains so much about him 👉🏾👈🏾",
      urvi:    "UI UX designer. Very good eye for what works and what doesn't. In design and in life.",
      kushal:  "Bhai Swapnil is a UI UX designer 🫡\nHe makes digital things feel good to use\nVery detail oriented work\nAnd you can see that precision in everything he does\nVery thoughtful person",
      swapnil: "UI UX design. Making things work better. That's the job.",
      aditi:   "He's a UI UX designer\nand it explains so much about him\nlike he cares about how things feel to use\nthe details\nthe flow\nthe experience\nand he applies that same lens to everything\nnot just work"
    }
  },

  {
    q: "Why is Swapnil so quiet in the group?",
    tags: ["swapnil quiet", "swapnil silent", "swapnil doesn't talk", "swapnil says little", "swapnil shant", "swapnil reserved", "swapnil introvert", "swapnil low key", "swapnil chup", "swapnil observes", "swapnil watches", "swapnil background", "swapnil minimal", "quiet swapnil"],
    a: {
      kavya:   "he's actually explained this himself\nhe said he's mostly quiet in chats\nbut please don't misunderstand\nand honestly that's just self awareness\nhaina knowing your style and owning it is very mature 👉🏾👈🏾",
      urvi:    "He processes quietly. When he has something to say, he says it. No filler.",
      kushal:  "Bhai Swapnil is very intentional 🫡\nHe doesn't speak just to fill space\nAnd that means when he does say something\nEveryone actually hears it\nVery good communication strategy honestly",
      swapnil: "I listen more than I talk. That works for me.",
      aditi:   "Swapnil is quiet\nbut not absent\nlike you always know he's there\nand paying attention\nand when he says something\nit's usually the most on-point thing in the conversation\nquality over quantity fully"
    }
  },


  {
    q: "How does Swapnil handle his ADHD?",
    tags: ["swapnil adhd", "swapnil neurodivergent", "swapnil nd", "swapnil focus", "swapnil attention", "swapnil brain", "swapnil mental health", "swapnil manages", "swapnil cope", "swapnil handles", "adhd swapnil", "swapnil executive", "swapnil quiet adhd"],
    a: {
      kavya:   "I think his design work actually channels it well\nlike the attention to detail that ADHD brings\nflows right into UI UX\nhaina sometimes your brain wiring is exactly right for what you do 👉🏾👈🏾",
      urvi:    "Quietly. Methodically. Doesn't make a lot of noise about it.",
      kushal:  "Bhai Swapnil handles it in his own way 🫡\nVery quietly\nHe structures things in his head\nAnd the design work gives him a good outlet\nVery self managed",
      swapnil: "One thing at a time. Slowly. It works.",
      aditi:   "Swapnil is very self contained about it\nbut I think his design brain\nis actually his ADHD working really well for him\nlike that hyperfocus and detail obsession\nis exactly what great UI UX needs\nit's a feature not a bug"
    }
  },

  {
    q: "Why is Swapnil sometimes a people pleaser?",
    tags: ["swapnil people pleaser", "swapnil pleasing", "swapnil says yes", "swapnil too nice", "swapnil accommodating", "swapnil can't say no", "swapnil gives in", "swapnil conflict averse", "swapnil avoid conflict", "swapnil gentle", "swapnil kind", "swapnil too agreeable"],
    a: {
      kavya:   "I think it comes from genuinely not wanting to make things difficult for anyone\nand that's such a kind impulse\nhaina even if it means sometimes he needs to speak up for himself more 👉🏾👈🏾",
      urvi:    "He dislikes conflict. Which is kind. He's learning to speak up when it matters.",
      kushal:  "Bhai Swapnil is very considerate 🫡\nHe thinks about how things affect others\nSometimes more than himself\nBut he's also getting better at standing firm\nWhen it counts",
      swapnil: "I prefer harmony. Working on the balance.",
      aditi:   "Swapnil cares about the people around him\nand doesn't want to cause friction\nwhich is beautiful\nbut we also want him to know\nhis comfort matters too\nand we're here for that"
    }
  },

  {
    q: "What are Swapnil's Marathi bits with Kushal like?",
    tags: ["swapnil marathi", "swapnil kushal marathi", "marathi swapnil", "swapnil language", "swapnil marathi jokes", "swapnil marathi banter", "swapnil native", "swapnil regional", "swapnil bond kushal", "swapnil language bond", "marathi thing", "marathi humor"],
    a: {
      kavya:   "it's like watching a show with no subtitles\nthey're clearly having a great time\nand you can tell it's funny\nbut the rest of us are just smiling and nodding\nhaina it's their thing and we respect it 🤡",
      urvi:    "Their own world. Everyone else watches. Nobody minds.",
      kushal:  "Bhai some things are just funnier in Marathi 🫡\nSwapnil and I have a natural wavelength in it\nAnd Aditi sometimes throws in a Marathi pun\nWhich always catches everyone off guard\nKavya watches with polite confusion\nVery entertaining for all involved",
      swapnil: "It's natural. Some jokes just work better in Marathi. Kushal gets it immediately.",
      aditi:   "They just have this frequency\nand it's very warm to watch\neven if you don't understand it\nand I understand a little Marathi\nso I occasionally join\nand the looks on their faces are worth everything\n🤣🤣🤣hq"
    }
  },

  // ── ADITI FOCUSED (8) ────────────────────────────────────────────────────

  {
    q: "Why is Aditi so hyperactive and energetic?",
    tags: ["aditi hyperactive", "aditi energy", "aditi energetic", "aditi always moving", "aditi active", "aditi enthusiastic", "aditi excited", "aditi hyper", "aditi non stop", "aditi always doing", "aditi fast", "aditi go go", "aditi constant", "why aditi energy", "aditi high energy"],
    a: {
      kavya:   "I think that's just her natural state\nand honestly being around her energy is contagious in the best way\nlike she makes you want to do things\nhaina that's a gift 👉🏾👈🏾",
      urvi:    "It's just how she's wired. You get used to it. Then you miss it when she's not around.",
      kushal:  "Bhai Aditi energy is a force of nature 🫡\nShe is always doing something\nOr planning something\nOr both simultaneously\nVery impressive output\nVery fun person to be around",
      swapnil: "She just has more energy than the rest of us. It's inspiring honestly.",
      aditi:   "I literally cannot explain it\nI just\nwake up\nand there are things to do\nand I want to do all of them\nand sometimes that is exhausting\nbut mostly it is just\nwho I am\n😂😂hq"
    }
  },

  {
    q: "What does Aditi do for work?",
    tags: ["aditi work", "aditi job", "aditi branding", "aditi marketing", "aditi film", "aditi filmmaking", "aditi creative", "aditi profession", "aditi career", "aditi kya karti", "aditi professional", "aditi brand", "aditi content", "aditi media", "aditi strategy"],
    a: {
      kavya:   "branding, marketing, and filmmaking\nshe does it all and she genuinely loves every part of it\nthe creative side especially\nhaina she's one of those people who found what they're meant to do 👉🏾👈🏾",
      urvi:    "Branding, marketing, filmmaking. Creative across the board. And very good at all of it.",
      kushal:  "Bhai Aditi does branding and marketing and filmmaking 🫡\nVery creative portfolio\nAnd she brings that creative energy to everything she does\nNot just work\nVery full person",
      swapnil: "Branding, marketing, film. She's good at all of it. Creative all the way.",
      aditi:   "Branding\nmarketing\nand filmmaking is the dream\nI love the creative process\nbeing on set\nbuilding a brand from scratch\nall of it\nit's the work that feels like play\nmost days"
    }
  },

  {
    q: "Why does Aditi also drive and pick everyone up?",
    tags: ["aditi drives", "aditi driving", "aditi car", "aditi picks up", "aditi drop", "aditi lifts", "aditi pickup", "aditi gadi", "aditi gaadi", "aditi chauffeur", "aditi ride", "aditi takes", "aditi brings", "aditi drops", "aditi transport"],
    a: {
      kavya:   "because she's generous and she genuinely enjoys having people in her car\nlike it's its own form of hangout time\nhaina road time with Aditi is always a good time 👉🏾👈🏾",
      urvi:    "She just does it. Cheerfully. Without making it a thing.",
      kushal:  "Bhai Aditi and I are the driving squad 🫡\nBetween us everyone gets picked up\nShe does it very naturally\nNo fuss\nJust shows up and the plan happens",
      swapnil: "She offers before you even ask. That's who she is.",
      aditi:   "I like driving honestly\nand I like having my friends in the car\nso it's like\ntwo things I enjoy\nhappening at the same time\nplus the conversations in cars are always the best ones\nlolwah"
    }
  },

  {
    q: "What is Aditi's Marathi pun thing?",
    tags: ["aditi marathi", "aditi pun", "aditi marathi pun", "aditi language", "aditi understands marathi", "aditi marathi joke", "aditi marathi humor", "aditi surprises", "aditi unexpected", "aditi marathi bit", "aditi regional", "aditi funny marathi"],
    a: {
      kavya:   "she drops a Marathi pun when nobody expects it\nand the looks on Kushal and Swapnil's faces are priceless\nlike they're genuinely surprised every time even though they know she understands more than she lets on\nhaina it's brilliant 🤡",
      urvi:    "She understands more than she admits. Then deploys it at the perfect moment.",
      kushal:  "Bhai Aditi understands more Marathi than she pretends 🫡\nAnd she will hold it\nAnd hold it\nAnd then drop one perfect pun\nAnd Swapnil and I will just look at each other\nEvery time\nVery surprising every time",
      swapnil: "She saves it. Waits. Then lands it perfectly. Respect.",
      aditi:   "I understand more Marathi than they think I do\nand I choose when to reveal this\nstrategically\nfor maximum impact\nijbolhq\nit's my secret weapon\nalways will be"
    }
  },

  {
    q: "How does Aditi handle her ADHD?",
    tags: ["aditi adhd", "aditi neurodivergent", "aditi nd", "aditi focus", "aditi attention", "aditi brain", "aditi mental health", "aditi manages", "aditi cope", "aditi handles", "aditi therapy", "adhd aditi", "aditi executive", "aditi hyperactive adhd"],
    a: {
      kavya:   "I think her energy is actually her ADHD working with her not against her\nlike the hyperactivity becomes doing things\nand creating things\nand making plans happen\nhaina it's channelled so beautifully 👉🏾👈🏾",
      urvi:    "She channels it into doing things. Lots of things. All at once. It works.",
      kushal:  "Bhai Aditi's ADHD is basically her superpower 🫡\nAll that energy goes into work and creativity and friends\nAnd it produces really great output\nVery productive way to exist",
      swapnil: "She channels it into everything she does. You can see it in her work.",
      aditi:   "Honestly\nI think I just\ngo with it\nlike the energy is there anyway\nso I might as well aim it at things I care about\nwork\nfriends\ncreative things\nand when it gets too much\nI give myself permission to just\nsit\nand that helps too"
    }
  },

  {
    q: "Tell me about Aditi and the keyboard panchayat story.",
    tags: ["aditi keyboard", "aditi panchayat", "aditi music", "aditi piano", "aditi kiddy keyboard", "aditi learn music", "aditi midnight music", "aditi instamart", "aditi song", "aditi talent", "aditi self taught music", "panchayat keyboard", "aditi learns", "aditi night skill"],
    a: {
      kavya:   "she ordered a kiddy keyboard on instamart at midnight\nbecause she suddenly needed to learn panchayat's title song right then\nswapnil was sitting right next to her and watched the whole thing\nshe learned it in 20 minutes\nhaina absolute icon behaviour 🤡",
      urvi:    "Ordered a keyboard. Midnight. Learned a song. 20 minutes. That's Aditi.",
      kushal:  "Bhai this is one of my favourite Aditi stories 🫡\nMidnight\nSudden impulse\nInstamart keyboard order\nSwapnil witnessing everything\n20 minute self tutorial\nPanchayat title song achieved\nVery committed to the hyperfocus",
      swapnil: "I was there. I watched the whole thing. She got it so fast. Didn't even look surprised.",
      aditi:   "Okay so\nI just NEEDED to learn it\nright then\nand the proper keyboard needed too much setup\nso instamart\nmidnight order\nkiddy keyboard arrived\nfingers barely fit the keys\nbut panchayat happened\nI am not apologising for any of this\nhqhqhqhq"
    }
  },

  {
    q: "Why is Aditi always up for plans?",
    tags: ["aditi plans", "aditi always yes", "aditi ready", "aditi up for it", "aditi enthusiastic", "aditi joins", "aditi comes", "aditi never cancels", "aditi initiates", "aditi first", "aditi keen", "aditi eager", "aditi plan lover", "aditi never says no", "aditi willing"],
    a: {
      kavya:   "because she genuinely loves being with people\nand she loves doing things\nand when you combine those two\nyou get someone who is almost always ready\nhaina it's a very life-affirming quality 👉🏾👈🏾",
      urvi:    "She likes people. She likes doing things. Plans combine both. Simple.",
      kushal:  "Bhai Aditi just loves life bro 🫡\nShe wants to do the thing\nAnd see the people\nAnd try the food\nAnd experience everything\nVery enthusiastic approach to being alive\nVery good energy for the group",
      swapnil: "She's genuinely excited by things. That makes you want to say yes too.",
      aditi:   "Because being at home doing nothing\nis also fun\nbut being out with these people\nis VERY fun\nand I prefer VERY fun\nwhen possible\njmdhq"
    }
  },

  {
    q: "Why does Aditi text in one word bursts?",
    tags: ["aditi texts", "aditi messages", "aditi one word", "aditi short messages", "aditi typing style", "aditi bursts", "aditi rapid fire", "aditi sends", "aditi whatsapp", "aditi hqhqhq", "aditi jmdlr", "aditi style", "aditi typing", "aditi text style", "aditi message style"],
    a: {
      kavya:   "because her brain moves faster than she can type in full sentences\nso the thoughts come out one by one\nand honestly it's very endearing\nhaina it's like getting a thought in real time 👉🏾👈🏾",
      urvi:    "Her brain moves faster than full sentences allow. The one-word burst is more accurate.",
      kushal:  "Bhai Aditi typing is its own language 🫡\nOne word\nThen another word\nThen another word\nAnd then one full sentence that ties it all together\nVery dramatic pacing\nVery entertaining",
      swapnil: "It's how her thoughts arrive. Fast. One at a time. Very her.",
      aditi:   "Okay so\nmy brain\ngoes very fast\nand if I wait to type a full sentence\nI will forget something\nso I just\nsend\nas I think\nand it arrives\nin pieces\nbut it all makes sense\nat least to me\n💀💀hq"
    }
  },

  // ── KUSHAL CUSTOM QUESTIONS ──────────────────────────────────────────────

  {
    q: "What is Kushal like when things go wrong?",
    tags: ["kushal stress", "kushal problems", "kushal crisis", "kushal when things go wrong", "kushal difficult", "kushal handle stress", "kushal tough times", "kushal problem solving", "kushal calm", "kushal under pressure"],
    a: {
      kavya:   "he gets very focused\nlike suddenly very calm and strategic\nhaina it's the lawyer brain kicking in\nhe becomes the person who just says okay what do we do next 👉🏾👈🏾",
      urvi:    "Focused. Quiet. Then action. He doesn't spiral. He solves.",
      kushal:  "I has tharepy for a reason 🫡\nWhen things go wrong I try to focus on what can be controlled\nNot what cannot\nVery systematic approach\nSometimes it takes a little time\nBut eventually I finds the way",
      swapnil: "He becomes very calm and clear. Helpful to have around.",
      aditi:   "Kushal in a crisis is genuinely impressive\nhe just\nswitches modes\nstops joking\nstarts solving\nand he will call you to check in\nhahahahah"
    }
  },

  {
    q: "What does Kushal do for fun?",
    tags: ["kushal fun", "kushal hobbies", "kushal free time", "kushal interests", "kushal outside work", "kushal enjoy", "kushal weekend", "kushal activities", "kushal likes", "kushal passions"],
    a: {
      kavya:   "getting everyone together is genuinely his thing\nhe loves a good meal with good people\nand he's always up for trying somewhere new\nhaina for kushal fun and connection are the same thing 👉🏾👈🏾",
      urvi:    "Organising the group. Food. Good conversation. Those are his fun.",
      kushal:  "Bhai I enjoy good food with good people 🫡\nAlso I make very good masala coke\nAnd I has been trying to build good habits\nWorkout\nRead\nVery well rounded person\nAlso the jokes are hobby also",
      swapnil: "Being with people. Food. The jokes. All of the above.",
      aditi:   "Kushal's fun is the group honestly\nhe loves having everyone together\nhe loves food\nhe loves a good conversation at midnight\nthat IS his fun\nlol okayh"
    }
  },

  {
    q: "Is Kushal good at his job?",
    tags: ["kushal good lawyer", "kushal work performance", "kushal professional", "kushal skilled", "kushal talented", "kushal job good", "kushal expert", "kushal law good", "kushal smart", "kushal capable"],
    a: {
      kavya:   "from what I can tell absolutely yes\nhe thinks about problems from every angle\nand he's meticulous\nhaina that combination is exactly what you want in a lawyer 👉🏾👈🏾",
      urvi:    "He thinks like a lawyer even when he's not working. So yes.",
      kushal:  "I is very good at job 🫡\nVery humble statement\nBut also very true\nI works hard\nI is thorough\nAnd I also has good people skills which helps\nVery complete package",
      swapnil: "Yes. You can tell from how he thinks through things.",
      aditi:   "Kushal is absolutely good at his job\nthe precision and the people skills\nboth together\nthat's not easy to find\nhqhqhqhqhqh"
    }
  },

  {
    q: "Does Kushal go to therapy?",
    tags: ["kushal therapy", "kushal therapist", "kushal mental health support", "kushal counseling", "kushal self work", "kushal tharepy", "kushal professional help", "kushal growth"],
    a: {
      kavya:   "yes and I find that genuinely admirable\nit takes self awareness and courage to go\nhaina he talks about it openly which also makes it more normal for the rest of us 👉🏾👈🏾",
      urvi:    "Yes. And he's open about it. Which is good for everyone.",
      kushal:  "I has tharepy 🫡\nVery good decision I made\nHighly recommend to all\nVery investment in self\nMuch return",
      swapnil: "Yes. Good for him. Good example.",
      aditi:   "Yes Kushal goes to therapy\nand I love that he's so open about it\nbecause it normalises it for everyone\nhqhqhqhqhh"
    }
  },

  // ── KAVYA CUSTOM QUESTIONS ───────────────────────────────────────────────

  {
    q: "What does Kavya do for fun?",
    tags: ["kavya fun", "kavya hobbies", "kavya free time", "kavya interests", "kavya outside work", "kavya enjoy", "kavya weekend", "kavya activities", "kavya likes", "kavya passions"],
    a: {
      kavya:   "stickers obviously 🤡\nbut also I genuinely love being with this group\ngood food\ngood conversation that goes deep\nhaina and honestly I love learning random things\nright now I'm trying to understand tarot card art\nnot the readings just the illustrations",
      urvi:    "Collecting stickers. Deep conversations. Learning random things quietly.",
      kushal:  "Bhai Kavya loves the group hangouts 🫡\nAlso stickers obviously\nAlso she is curious about many things\nVery wide interests\nVery good conversationalist\nAlways has something interesting to say",
      swapnil: "Being with people she loves. Learning things. Sending stickers.",
      aditi:   "Kavya's fun is connection honestly\nshe lights up when the group is together\nalso she collects stickers like it's her second job\nand she gets deep into random topics at midnight\nhahahah"
    }
  },

  {
    q: "Is Kavya introverted or extroverted?",
    tags: ["kavya introvert", "kavya extrovert", "kavya social", "kavya energy", "kavya people", "kavya crowds", "kavya alone time", "kavya social battery", "kavya ambivert", "kavya with people"],
    a: {
      kavya:   "ambivert I think\nI love people and I genuinely love connection\nbut I also need time to decompress alone after\nhaina the recharg alone time is just as real as the need to be with people 👉🏾👈🏾",
      urvi:    "Extroverted heart, introverted battery. Needs both.",
      kushal:  "Bhai Kavya is very warm and social 🫡\nBut she also needs her alone time\nVery classic ambivert\nLoves people\nAlso needs to recover from people\nVery relatable honestly",
      swapnil: "Both. Depends on the day. And the people.",
      aditi:   "Kavya is an ambivert for sure\nshe is so warm and loves being with people\nbut she also needs quiet time to process\nand that's completely valid\njmdlrh"
    }
  },

  {
    q: "What makes Kavya laugh?",
    tags: ["kavya laugh", "kavya funny", "kavya humor", "kavya humour", "kavya jokes", "kavya finds funny", "kavya hasti", "kavya hansi", "what makes kavya happy", "kavya smile"],
    a: {
      kavya:   "unexpected things\nlike when someone does something very earnest and slightly chaotic\nand doesn't realise how funny it is\nhaina that kind of unintentional comedy gets me every time 🤡",
      urvi:    "Unintentional moments. The ones nobody planned to be funny.",
      kushal:  "Bhai my jokes make Kavya laugh 🫡\nShe pretends they don't\nBut they do\nAlso she laughs at her own typos\nAnd at stickers that are too accurate\nVery pure laugh",
      swapnil: "The group being itself. That's usually enough.",
      aditi:   "Kavya laughs at the most genuine things\nlike when something is just so real and slightly absurd\nand she will laugh and then immediately send a perfect sticker about it\nlolh"
    }
  },


  // ── URVI CUSTOM QUESTIONS ────────────────────────────────────────────────

  {
    q: "What does Urvi do for fun?",
    tags: ["urvi fun", "urvi hobbies", "urvi free time", "urvi interests", "urvi outside work", "urvi enjoy", "urvi weekend", "urvi activities", "urvi likes", "urvi passions"],
    a: {
      kavya:   "her garden is basically a whole project\nand her photography obviously\nhaina she also has this incredible ability to get deep into one topic and just\ngo all the way in\nthe butterfly species thing is a perfect example 👉🏾👈🏾",
      urvi:    "Garden. Photography. Getting obsessed with one topic at a time. Repeat.",
      kushal:  "Bhai Urvi and her garden 🫡\nAnd her photography\nAnd the way she notices things\nHer fun is observation and attention\nVery quiet activities\nVery her",
      swapnil: "Photography. Her garden. Being very still and present.",
      aditi:   "Urvi's fun is so beautifully her\nher garden\nher photography\ngoing deep into one topic\nwatching dragonflies\n🤣🤣🤣h"
    }
  },

  {
    q: "Is Urvi introverted?",
    tags: ["urvi introvert", "urvi extrovert", "urvi social", "urvi energy", "urvi people", "urvi alone time", "urvi social battery", "urvi quiet person", "urvi with people", "urvi social life"],
    a: {
      kavya:   "I think yes leaning introvert\nbut she is very warm and present with people she trusts\nhaina it's more that she's selective with her energy\nwhich is actually very healthy 👉🏾👈🏾",
      urvi:    "Selective. Not anti-social. There's a difference.",
      kushal:  "Bhai Urvi is more introvert yes 🫡\nShe is very warm with the people she is close to\nBut she does not waste energy on surface level things\nVery intentional about who she gives time to\nVery good quality actually",
      swapnil: "More introvert. But fully present with people she loves.",
      aditi:   "Urvi is introverted but not in a cold way\nshe is so warm with the people she loves\nshe just guards her energy carefully\nwhich is honestly very wise\n😂😂h"
    }
  },


  // ── SWAPNIL CUSTOM QUESTIONS ─────────────────────────────────────────────

  {
    q: "What does Swapnil do for fun?",
    tags: ["swapnil fun", "swapnil hobbies", "swapnil free time", "swapnil interests", "swapnil outside work", "swapnil enjoy", "swapnil weekend", "swapnil activities", "swapnil likes", "swapnil passions"],
    a: {
      kavya:   "I genuinely want to know this more\nhe's quite private about it\nhaina what I do know is he observes everything around him\nand there's probably a lot going on in his head that we don't see 👉🏾👈🏾",
      urvi:    "More than he shows. He's private about it.",
      kushal:  "Bhai Swapnil keeps his fun quite personal 🫡\nBut he loves a good hangout when he commits\nAnd food\nAnd I imagine design related things interest him beyond just work\nVery curious person underneath the quiet",
      swapnil: "Design. Food. Watching the group be chaotic.",
      aditi:   "Swapnil is private about his fun\nbut I know he genuinely enjoys being with the group when he shows up\nand he is very present when he's there\nlolwah"
    }
  },


  {
    q: "What makes Swapnil laugh?",
    tags: ["swapnil laugh", "swapnil funny", "swapnil humor", "swapnil humour", "swapnil jokes", "swapnil finds funny", "swapnil hasti", "swapnil hansi", "what makes swapnil happy", "swapnil smile"],
    a: {
      kavya:   "when something is so perfectly absurd that it speaks for itself\nhaina he'll just say \"hehe\" and that contains everything 👉🏾👈🏾",
      urvi:    "The group being the group. He has a good eye for it.",
      kushal:  "Bhai Swapnil laughs at very precise things 🫡\nUsually something absurd\nOr something someone said that is so accurate it's funny\nHis \"hehe\" contains multitudes\nVery efficient laugh",
      swapnil: "When something is exactly right in a funny way.",
      aditi:   "Swapnil laughs at the group just being itself honestly\nand when someone says something that is just SO accurate\nhis \"hehe\" is so satisfying to receive\nijbolh"
    }
  },

  {
    q: "Does Swapnil have any hobbies outside design?",
    tags: ["swapnil hobbies", "swapnil outside design", "swapnil interests beyond work", "swapnil other interests", "swapnil non design", "swapnil personal interests", "swapnil creative outside work", "swapnil activities outside"],
    a: {
      kavya:   "I think there's a lot more going on in swapnil's world that he keeps close\nhaina he's quite private but in a very content way\nnoticing things is probably its own hobby for him 👉🏾👈🏾",
      urvi:    "He keeps that private. But you can tell there's depth there.",
      kushal:  "Bhai Swapnil is private person 🫡\nBut I think he has many interests\nHe just does not broadcast them\nVery internal person\nVery rich inner world I think",
      swapnil: "Yes. Just not everything needs to be shared.",
      aditi:   "Swapnil definitely has things he loves beyond design\nhe just doesn't make a big thing of it\nwhich is so him\nhqhqh"
    }
  },

  // ── ADITI CUSTOM QUESTIONS ───────────────────────────────────────────────

  {
    q: "What does Aditi do when she's not working?",
    tags: ["aditi free time", "aditi fun", "aditi hobbies", "aditi relaxes", "aditi when not working", "aditi activities", "aditi off time", "aditi personal time", "aditi outside work", "aditi enjoys"],
    a: {
      kavya:   "honestly I'm not sure aditi has a fully clear boundary between working and not\nshe's just always doing something interesting\nhaina that's the hyperactive brain isn't it 👉🏾👈🏾",
      urvi:    "Watching something. Driving. Ordering random things online at midnight.",
      kushal:  "Bhai Aditi off duty is still very Aditi 🫡\nStill moving\nStill interested in things\nMaybe watching something\nMaybe exploring a random new topic\nVery hard to catch fully still",
      swapnil: "Still going. Just in a different direction.",
      aditi:   "Okay when I'm not working I am\nwatching something\nor deep in a rabbit hole about something random\nor cooking\nor driving\nor rearranging my room\nor learning something midnight\njmdhq"
    }
  },

  {
    q: "Does Aditi sleep?",
    tags: ["aditi sleep", "aditi sleeps", "aditi neend", "aditi rest", "aditi soti hai", "aditi awake", "aditi late night", "aditi midnight", "aditi insomnia", "aditi night"],
    a: {
      kavya:   "technically yes\nbut at what hours is another question\nhaina the midnight keyboard ordering suggests the sleep schedule is flexible 🤡",
      urvi:    "Eventually. The timestamps suggest not immediately.",
      kushal:  "Bhai Aditi sleep and Aditi midnight activities both exist 🫡\nSometimes simultaneously\nVery efficient use of night hours\nI has seen the evidence",
      swapnil: "She does. But on her own schedule.",
      aditi:   "YES I SLEEP\nI love sleep\nI just also love being awake\nboth are valid\n💀💀hq\nI will sleep eventually"
    }
  },

  {
    q: "What makes Aditi happy?",
    tags: ["aditi happy", "aditi joy", "aditi smile", "aditi laugh", "aditi loves", "aditi excited", "aditi khush", "aditi enjoy", "what makes aditi happy", "aditi feels good", "aditi lights up"],
    a: {
      kavya:   "being around the people she loves\ngood food\ncreative work that actually lands\nhaina and honestly she lights up when she's helping someone figure something out 👉🏾👈🏾",
      urvi:    "The group. Good work. Food. In no particular order.",
      kushal:  "Bhai Aditi is happy when everyone is together 🫡\nAnd when her creative work goes well\nAnd good food\nAnd driving\nAnd random midnight discoveries\nVery many sources of happiness\nVery abundant person",
      swapnil: "Being with the group. Creative work going well. Food.",
      aditi:   "Okay things that make me genuinely happy\nthis group together\ngood food\nwork that actually made a difference\na perfect piece of music\nmidnight discoveries\nand honestly\njust a good day that felt like mine\nhahahahahq"
    }
  },


  // ── WHAT IS THIS GROUP ───────────────────────────────────────────────────

  {
    q: "What is this group about?",
    tags: ["what is this group", "about this group", "what is thank you gary", "yeh group kya hai", "group ke baare mein", "what is the round table", "explain this group", "tell me about the group", "what is this", "group intro", "who are you", "what is this app", "what is going on here", "kya hai ye"],
    a: {
      kavya:   "it's five people who found each other\nand decided to stay\nhaina that's the whole thing\nwe are all neurodivergent\nwe all get it\nand we show up for each other in the ways we can 👉🏾👈🏾",
      urvi:    "Five friends. ADHD. A WhatsApp group that somehow became a round table.",
      kushal:  "Bhai this group is called Thank You Gary 💕 🫡\nFive people\nAll neurodivergent\nAll very different\nAll very good friends\nWe meet regularly\nAlways starts as a qtbb, quick tata bye bye\nNever stays short\nVery good group",
      swapnil: "Five friends who actually get each other. Meet often. Call it qtbb. Never is.",
      aditi:   "Okay so\nthis is five of us\nKavya Urvi Kushal Swapnil and me\nwe are all neurodivergent\nwe met and we just clicked\nwe meet regularly and it always starts as a qtbb\nquick tata bye bye\nand then nobody leaves for hours\nlol okayhq"
    }
  },

  // ── DEEP GROUP QUESTIONS (11) ────────────────────────────────────────────

  {
    q: "Why does Urvi always know exactly what to say?",
    tags: ["urvi always right", "urvi knows what to say", "urvi accurate", "urvi words", "why urvi perfect", "urvi says right thing", "urvi insight", "urvi wisdom", "why urvi so accurate", "urvi observation", "urvi perceptive words"],
    a: {
      kavya:   "because she listens more than she speaks\nand by the time she says something\nshe has already processed everything properly\nhaina it's not magic it's just attention 👉🏾👈🏾",
      urvi:    "I don't always. I just wait until I do.",
      kushal:  "Bhai Urvi has very high signal to noise ratio 🫡\nShe does not say things just to fill silence\nSo when she speaks\nEveryone is ready to hear it\nVery effective communication style",
      swapnil: "She listens first. That's the whole answer.",
      aditi:   "Urvi says less so when she says something\nit lands harder\nbecause you know she meant it\nhqhqhqhqhqh"
    }
  },

  {
    q: "Does Kushal ever get tired of organising everything?",
    tags: ["kushal tired", "kushal organising", "kushal exhausted", "kushal always plans", "kushal effort", "does kushal get tired", "kushal burnout", "kushal energy", "kushal always organises", "why kushal organises", "kushal keeps going"],
    a: {
      kavya:   "I don't think so honestly\nit seems like he genuinely loves having everyone together\nand organising is just how he expresses that\nhaina it's his love language basically 👉🏾👈🏾",
      urvi:    "Probably sometimes. But he keeps going. That's the thing.",
      kushal:  "Bhai I does not get tired 🫡\nI gets energy FROM organising\nSeeing everyone together is the reward\nVery worth the effort\nAlways",
      swapnil: "Even if he does, he never shows it. Very Kushal.",
      aditi:   "Kushal THRIVES on it honestly\nlike the planning and the logistics and the driving\nit's not a burden for him\nit's how he loves people\nhqhqhqhqhh"
    }
  },

  {
    q: "What does Kavya do when she is not working or overthinking?",
    tags: ["kavya free time", "kavya not working", "kavya relax", "kavya when not overthinking", "kavya downtime", "kavya when she rests", "kavya off", "kavya fun time", "kavya personal time", "kavya not at work", "kavya chill"],
    a: {
      kavya:   "honestly these two things cover most of my waking hours 🤡\nbut in the gaps\nstickers\ngood food\nthis group\nand sometimes just sitting with a cup of chai doing absolutely nothing\nhaina that nothing is very necessary",
      urvi:    "She's either with us, resting, or collecting more stickers.",
      kushal:  "Bhai Kavya collects stickers 🫡\nAnd she eats good food\nAnd she is very present with the people she loves\nAnd she talks about things properly\nVery rich inner life\nVery good company",
      swapnil: "She's with people she loves. That's when she recharges.",
      aditi:   "Kavya when not working or overthinking is\nso warm and present\nshe laughs easily\nshe notices little things\nshe sends the perfect sticker\nit's genuinely lovely\nhahahah"
    }
  },

  {
    q: "Why does Kushal need everyone together so much?",
    tags: ["kushal togetherness", "kushal needs group", "kushal why together", "kushal always wants to meet", "kushal love group", "why kushal brings everyone", "kushal plans meetings", "kushal group love", "kushal why meet", "kushal chalo milte hain", "kushal misses group"],
    a: {
      kavya:   "because I think he genuinely loves this group\nand togetherness is how he experiences that love\nhaina some people text their feelings\nkushal drives to yours 👉🏾👈🏾",
      urvi:    "Because he's happier when everyone is around. Simple as that.",
      kushal:  "Bhai I just like when we are all in one place 🫡\nEveryone laughing\nEating too much food\nTalking about everything\nWhat is better than this\nI ask you\nWhat is better",
      swapnil: "He loves the group. This is how it shows. Nothing more complicated.",
      aditi:   "Kushal lights up when everyone is together\nlike genuinely lights up\nand I think he knows that this kind of group is rare\nso he protects it by making it happen\njmdlrh"
    }
  },

  {
    q: "Why does Kavya always put others before herself?",
    tags: ["kavya selfless", "kavya others first", "kavya people pleaser", "kavya self sacrifice", "why kavya puts others first", "kavya doesn't think of herself", "kavya too giving", "kavya always helps", "kavya forgets herself", "kavya cares too much", "kavya self last"],
    a: {
      kavya:   "because it's easier honestly\nthinking about other people's needs is less scary than sitting with my own\nhaina I'm working on this\nvery much a work in progress 🤡",
      urvi:    "She cares too much. Working on the balance. Slowly.",
      kushal:  "Bhai Kavya has very large heart 🫡\nShe absorbs other people's feelings very easily\nAnd she wants everyone to be okay\nSometimes at her own expense\nWe see this\nWe also tell her\nShe is getting better\nVery proud",
      swapnil: "It comes from care. She's learning to care for herself the same way.",
      aditi:   "Kavya puts others first because she genuinely loves people\nbut we also remind her\nthat she is also a people\nand she deserves the same care she gives everyone else\nlolhq"
    }
  },


  {
    q: "What does this group mean to each of you?",
    tags: ["group meaning", "what does group mean", "group importance", "why this group", "group matters", "group significance", "what is this group to you", "group value", "why do you love this group", "group feelings", "group means what", "yeh group kya hai tumhare liye", "group ke baare mein feelings"],
    a: {
      kavya:   "safety\nlike the kind where you don't have to explain yourself\nor perform okayness\nor earn your place\nhaina that's rare and I know it 👉🏾👈🏾",
      urvi:    "Home. Just that.",
      kushal:  "Bhai this group is very important to me 🫡\nFive people who actually get it\nWho show up\nWho don't make you feel bad for being exactly who you are\nVery rare thing\nVery grateful",
      swapnil: "The people I don't have to explain myself to. That means a lot.",
      aditi:   "This group means\nI don't have to be okay when I am not okay\nand I don't have to be calm when I am not calm\nthey take me as I am\nand I take them as they are\nand that is honestly everything\n🤣🤣🤣hq"
    }
  },

  {
    q: "What would the group be like without Kushal?",
    tags: ["without kushal", "group without kushal", "if kushal wasnt here", "no kushal", "kushal missing", "kushal not there", "group minus kushal", "agar kushal nahi hota", "kushal leaving", "group bina kushal"],
    a: {
      kavya:   "we would love each other but probably from a distance\nhaina kushal is the one who makes it physical\nwho says chalo and then drives and then it happens\nwithout him we'd just be a very warm whatsapp group 🤡",
      urvi:    "Less food. Less logistics. Less puns. Quieter. We'd miss him immediately.",
      kushal:  "I refuse to entertain this hypothetical 🫡\nVery uncomfortable question\nNext question please",
      swapnil: "We'd still be close. But we'd meet a lot less. He makes it happen.",
      aditi:   "WITHOUT KUSHAL\nokay I cannot\nhe is the reason we actually exist as a group in real life\nlike physically together\nhe is the logistics and the jokes and the warmth\nwe would be incomplete\n😂😂h"
    }
  },

  {
    q: "What would the group be like without Aditi?",
    tags: ["without aditi", "group without aditi", "if aditi wasnt here", "no aditi", "aditi missing", "aditi not there", "group minus aditi", "agar aditi nahi hoti", "group bina aditi", "aditi leaving"],
    a: {
      kavya:   "quieter\nand missing something essential\nlike aditi brings an energy that makes everything feel possible\nhaina she says yes when others are still thinking about it 👉🏾👈🏾",
      urvi:    "Less noise. Less movement. Less warmth. We'd notice immediately.",
      kushal:  "Bhai without Aditi the group would be much less fun 🫡\nShe drives literally and figuratively\nAlways up for things\nAlways bringing energy\nAlways saying yes\nVery essential person\nWe don't talk about this",
      swapnil: "Less energy. Less spontaneity. She makes things happen differently than Kushal. Both needed.",
      aditi:   "I'm not going anywhere so\nlolwah\nbut honestly this is too sweet to answer properly\nI just want to be here\nwith all of you\nfor a very long time"
    }
  },

  {
    q: "Who does everyone go to first when something is wrong?",
    tags: ["who do you go to", "who first when problem", "who helps when sad", "who do you call", "first person you tell", "who to talk to", "problem share", "emotional support", "who do you trust first", "jab kuch galat ho", "sabse pehle kaun", "kise batate ho"],
    a: {
      kavya:   "depends what's wrong\nfor feelings, aditi or kushal\nfor practical, kushal\nfor someone to just sit with it quietly, urvi\nhaina we all have our roles 👉🏾👈🏾",
      urvi:    "Depends on the problem. This group has different people for different things. That's the good part.",
      kushal:  "Bhai we all go to different people for different things 🫡\nKavya for emotional processing\nAditi for energy and action\nUrvi for clear perspective\nSwapnil for quiet steadiness\nVery well rounded support system",
      swapnil: "Different people for different things. That's actually the sign of a good group.",
      aditi:   "Okay honestly\nfor feelings I go to Kavya\nfor a reality check I go to Urvi\nfor logistics and making it better I go to Kushal\nSwapnil I go to when I need someone to just be there\nijbolh"
    }
  },

  {
    q: "What is one thing nobody has said out loud but everyone knows?",
    tags: ["unsaid things", "unspoken", "nobody says", "everyone knows", "unsaid truth", "group secret", "what everyone feels", "unsaid group feeling", "jo koi nahi bolta", "sab jaante hain", "unspoken truth", "implicit", "silent understanding", "what we all know"],
    a: {
      kavya:   "that this group is one of the most important things in each of our lives\nand we don't say it enough\nhaina we say thank you gary\nand that has to carry a lot 👉🏾👈🏾",
      urvi:    "That we're all very lucky. And we know it.",
      kushal:  "Bhai I think everyone knows 🫡\nThat this group is rare\nThat these people are rare\nWe don't say it in words usually\nWe say it by showing up\nBy driving across the city\nBy qtbb that goes till 1am\nThank you Gary",
      swapnil: "That we all chose each other. And we'd choose each other again.",
      aditi:   "That we love each other\nlike genuinely\nand that this thing we have\nis not something most people find\nand we all know it even when we don't say it\nthank you gary\nhqhqhq"
    }
  },

];

// ── Chip questions for the UI ─────────────────────────────────────────────
const CHIP_QUESTIONS = QA.map(x => x.q); // All questions in pool

// ── Categorise questions for balanced rotation ────────────────────────────
const STORAGE_KEY = "tygary_seen_v1";

function categorise(q) {
  const lower = q.toLowerCase();
  if (lower.includes("suzy") || lower.includes("suzu")) return "suzy";
  if (lower.includes("kushal")) return "kushal";
  if (lower.includes("kavya")) return "kavya";
  if (lower.includes("urvi")) return "urvi";
  if (lower.includes("swapnil")) return "swapnil";
  if (lower.includes("aditi")) return "aditi";
  return "group";
}

const CATEGORIES = ["group", "kushal", "kavya", "urvi", "swapnil", "aditi", "suzy"];

// Group all questions by category
const BY_CAT = {};
CATEGORIES.forEach(c => { BY_CAT[c] = []; });
CHIP_QUESTIONS.forEach(q => BY_CAT[categorise(q)].push(q));

// Load seen questions from localStorage
function loadSeen() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// Save seen questions to localStorage
function saveSeen(seen) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(seen)); } catch {}
}

// Pick one unseen question from a category, falling back to any unseen
function pickFromCat(cat, seen) {
  const unseen = BY_CAT[cat].filter(q => !seen.includes(q));
  if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)];
  return null;
}

// Get 4 balanced chips — one from group, one from a rotating member, fill rest
function getBalancedChips(seen) {
  const result = [];
  const used = new Set();

  // Always try one group question
  const groupQ = pickFromCat("group", seen);
  if (groupQ) { result.push(groupQ); used.add(groupQ); }

  // Rotate through members — pick 3 different members randomly
  const members = ["kushal", "kavya", "urvi", "swapnil", "aditi", "suzy"];
  const shuffled = [...members].sort(() => 0.5 - Math.random());
  for (const m of shuffled) {
    if (result.length >= 4) break;
    const q = pickFromCat(m, seen);
    if (q && !used.has(q)) { result.push(q); used.add(q); }
  }

  // If still need more, pick any unseen
  if (result.length < 4) {
    const allUnseen = CHIP_QUESTIONS.filter(q => !seen.includes(q) && !used.has(q));
    const extra = [...allUnseen].sort(() => 0.5 - Math.random());
    for (const q of extra) {
      if (result.length >= 4) break;
      result.push(q);
    }
  }

  // If everything is seen — signal completion, don't silently reset
  if (result.length < 4) {
    return null;
  }

  return result;
}

function getRandomChips(seen) {
  return getBalancedChips(seen);
}

// ── Smart fuzzy matcher ───────────────────────────────────────────────────
// Normalise: lowercase, remove punctuation, stem common suffixes
function normalise(text) {
  return text
    .toLowerCase()
    .replace(/[?!.,।'"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stems(word) {
  // Return word + common suffix variations
  return [word, word + "s", word + "ed", word + "ing", word + "er",
          word.replace(/ing$/, ""), word.replace(/ed$/, ""),
          word.replace(/s$/, "")].filter(Boolean);
}

function scoreMatch(query, qa) {
  const q = normalise(query);
  let score = 0;
  const words = q.split(" ").filter(w => w.length > 2);

  for (const tag of qa.tags) {
    const normTag = normalise(tag);
    // Exact tag match — high weight
    if (q.includes(normTag)) {
      score += normTag.split(" ").length > 1 ? 5 : 3;
    }
    // Stem match
    for (const word of words) {
      for (const stem of stems(word)) {
        if (normTag.includes(stem) && stem.length > 3) score += 1;
      }
    }
  }

  // Bonus: multiple strong tag hits
  if (score >= 6) score += 3;

  return score;
}

function findBestMatch(query) {
  let best = null;
  let bestScore = 0;

  for (const qa of QA) {
    const score = scoreMatch(query, qa);
    if (score > bestScore) {
      bestScore = score;
      best = qa;
    }
  }
  return { qa: best || QA[Math.floor(Math.random() * QA.length)], score: bestScore };
}

// ── Member detection — any question mentioning a member ───────────────────
const MEMBER_NAMES = {
  kavya:   ["kavya", "kathpalia"],
  urvi:    ["urvi", "arora"],
  kushal:  ["kushal", "asawa"],
  swapnil: ["swapnil", "dhanawade"],
  aditi:   ["aditi", "bhalla"],
  suzy:    ["suzy", "susie", "cutiebb"],
};

const MEMBER_QA = {
  kavya:   QA.find(q => q.q === "Who is Kavya?"),
  urvi:    QA.find(q => q.q === "Who is Urvi?"),
  kushal:  QA.find(q => q.q === "Who is Kushal?"),
  swapnil: QA.find(q => q.q === "Who is Swapnil?"),
  aditi:   QA.find(q => q.q === "Who is Aditi?"),
  suzy:    QA.find(q => q.q === "Who is Suzy?"),
};

function detectMember(query) {
  const q = normalise(query);
  const found = [];
  const humanMembers = ["kavya", "urvi", "kushal", "swapnil", "aditi"];
  for (const [key, names] of Object.entries(MEMBER_NAMES)) {
    if (names.some(n => q.includes(n))) found.push(key);
  }
  const humanFound = found.filter(k => humanMembers.includes(k));
  if (humanFound.length >= 3) return "all";
  if (found.length === 1) return found[0];
  return null;
}

// ── Wild card responses for truly unmatched questions ─────────────────────
// ── No answer fallback — all 5 reacting in character ─────────────────────
// ── Real-time / location questions — things we can't answer ──────────────


// ── Thinking status messages ──────────────────────────────────────────────
const THINKING = [
  "gathering the group...",
  "waking everyone up...",
  "asking the table...",
  "waiting for kavya to stop typing and deleting...",
  "urvi is thinking...",
  "kushal is coming up with a pun...",
  "swapnil said no, then yes...",
  "aditi is sending one word at a time...",
  "almost there...",
];

// ── App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [loading,   setLoading]   = useState(false);
  const [status,    setStatus]    = useState("");
  const [question,  setQuestion]  = useState("");
  const [answers,   setAnswers]   = useState(null);
  const [matchedQ,  setMatchedQ]  = useState("");
  const [chips,     setChips]     = useState(() => getRandomChips(loadSeen()) || getRandomChips([]));
  const [allSeen,   setAllSeen]   = useState(false);
  const loadingRef = useRef(false);

  const hasAnswers = !!answers && !loading;
  async function fakeThink(isCustom) {
    const steps = isCustom ? 3 : 2;
    const delay = isCustom ? 600 : 400;
    for (let i = 0; i < steps; i++) {
      setStatus(THINKING[Math.floor(Math.random() * (THINKING.length - 1))]);
      await new Promise(r => setTimeout(r, delay + Math.random() * 300));
    }
    setStatus("almost there...");
    await new Promise(r => setTimeout(r, 250));
  }

  async function fire(query) {
    if (!query || loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);
    setQuestion(query);
    setAnswers(null);
    setMatchedQ("");

    const isChip = CHIP_QUESTIONS.includes(query);
    await fakeThink(!isChip);

    // 1. Exact chip match
    const exactQA = QA.find(qa => qa.q === query);
    if (exactQA) {
      setAnswers(exactQA.a);
      loadingRef.current = false;
      setLoading(false);
      return;
    }

    // 2. Member detection — always before fuzzy so names route correctly
    const memberKey = detectMember(query);
    if (memberKey === "all") {
      const groupQA = QA.find(qa => qa.q === "What is this group about?");
      setAnswers(groupQA ? groupQA.a : QA[0].a);
      loadingRef.current = false;
      setLoading(false);
      return;
    }

    if (memberKey) {
      const q = normalise(query);

      // General profile questions
      const isGeneral = ["who is","kaun hai","kon hai","tell me about","introduce","describe","about"].some(p => q.includes(p));
      if (isGeneral) {
        const profile = MEMBER_QA[memberKey];
        setAnswers(profile ? profile.a : QA[0].a);
        loadingRef.current = false;
        setLoading(false);
        return;
      }

      // Focused sub-question — needs high confidence
      const { qa: focusedQA, score: focusedScore } = findBestMatch(query);
      const focusedQ = normalise(focusedQA.q);
      const isFocused = focusedScore >= 10 && focusedQ.includes(memberKey);
      if (isFocused) {
        setAnswers(focusedQA.a);
      } else {
        // Default to profile
        const profile = MEMBER_QA[memberKey];
        setAnswers(profile ? profile.a : QA[0].a);
      }
      loadingRef.current = false;
      setLoading(false);
      return;
    }

    // 3. Fuzzy match — only show if score is high enough to be confident
    const { qa: fuzzyQA, score: fuzzyScore } = findBestMatch(query);
    if (fuzzyScore >= 9) {
      setAnswers(fuzzyQA.a);
      const memberNames = ["kavya","urvi","kushal","swapnil","aditi","kathpalia","arora","asawa","dhanawade","bhalla"];
      const isAboutMember = memberNames.some(n => normalise(fuzzyQA.q).includes(n));
      if (!isAboutMember) setMatchedQ(fuzzyQA.q);
    }

    loadingRef.current = false;
    setLoading(false);
  }

  function chipClick(c) {
    if (loadingRef.current) return;
    const seen = loadSeen();
    const newSeen = seen.includes(c) ? seen : [...seen, c];
    saveSeen(newSeen);
    const next = getRandomChips(newSeen);
    if (!next) {
      setAllSeen(true);
    } else {
      setChips(next);
    }
    fire(c);
  }

  function handleReset() {
    saveSeen([]);
    setAllSeen(false);
    setAnswers(null);
    setChips(getRandomChips([]));
  }



  return (
    <div style={{ minHeight:"100vh", background:BG }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        @keyframes up  { from{opacity:0;transform:translateY(7px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dot { 0%,100%{opacity:.15} 50%{opacity:.65} }
      `}</style>

      <div style={{ maxWidth:520, margin:"0 auto", padding:"44px 20px 100px", fontFamily:"'DM Sans',sans-serif" }}>

        {/* WORDMARK */}
        <div style={{ textAlign:"center", marginBottom:36 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:SOFT, opacity:.55, marginBottom:6 }}>
            thank you, gary 💕
          </div>
          <h1 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:24, fontWeight:300, color:INK, letterSpacing:"-0.02em" }}>
            the round table
          </h1>
        </div>

        {/* CHIPS */}
        {!hasAnswers && !loading && !allSeen && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:28, animation:"up .4s ease both" }}>
            {chips.map((c, i) => (
              <button key={i} onClick={() => chipClick(c)}
                style={{ padding:"6px 13px", background:"transparent", border:`1px solid ${BRD}`, borderRadius:100, fontFamily:"'DM Mono',monospace", fontSize:11, color:SOFT, cursor:"pointer", transition:"all .15s", lineHeight:1.5, textAlign:"left" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=INK; e.currentTarget.style.color=INK; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=BRD; e.currentTarget.style.color=SOFT; }}
              >{c}</button>
            ))}
          </div>
        )}

        {/* ALL SEEN MESSAGE */}
        {allSeen && !loading && (
          <div style={{ animation:"up .4s ease both", marginBottom:28, textAlign:"center", padding:"20px 0" }}>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, color:INK, marginBottom:8 }}>
              you've seen everything the table has to say 💕
            </div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:SOFT, opacity:.6, fontStyle:"italic", marginBottom:20 }}>
              the round table is getting to know itself more
            </div>
            <button onClick={handleReset}
              style={{ padding:"8px 20px", background:"transparent", border:`1px solid ${BRD}`, borderRadius:100, fontFamily:"'DM Mono',monospace", fontSize:11, color:SOFT, cursor:"pointer", transition:"all .15s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=INK; e.currentTarget.style.color=INK; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=BRD; e.currentTarget.style.color=SOFT; }}
            >see all questions again</button>
          </div>
        )}

        {/* THINKING */}
        {loading && (
          <div style={{ display:"flex", alignItems:"center", gap:10, padding:"20px 4px", animation:"up .3s ease both" }}>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:SOFT, fontStyle:"italic" }}>{status}</span>
            {[0,1,2].map(j => <span key={j} style={{ display:"inline-block", width:4, height:4, borderRadius:"50%", background:SOFT, animation:`dot 1.1s ease ${j*.18}s infinite` }}/>)}
          </div>
        )}

        {/* ANSWERS */}
        {hasAnswers && (
          <div style={{ animation:"up .35s ease both" }}>

            <div style={{ padding:"10px 0 14px", display:"flex", alignItems:"flex-start", gap:10, borderBottom:`1px solid ${BRD}`, marginBottom:4 }}>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"#A0856C", paddingTop:2, flexShrink:0 }}>Q</span>
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:SOFT, lineHeight:1.55, fontStyle:"italic" }}>{question}</span>
            </div>

            {matchedQ && (
              <div style={{ marginBottom:12, padding:"7px 12px", background:"#F5F3EF", border:`1px solid ${BRD}`, borderRadius:8, display:"flex", alignItems:"flex-start", gap:8 }}>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:SOFT, opacity:.5, paddingTop:1, flexShrink:0 }}>closest</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:SOFT, lineHeight:1.5 }}>{matchedQ}</span>
              </div>
            )}

            <div style={{ background:P, border:`1px solid ${BRD}`, borderRadius:12, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.06)", marginBottom:24 }}>
              {MEMBERS.map((m, i) => (
                <div key={m.key} style={{ display:"flex", gap:12, padding:"14px 16px", borderBottom: i < MEMBERS.length-1 ? `1px solid ${BRD}` : "none", animation:`up .3s ease ${i*.07}s both` }}>
                  <div style={{ width:30, height:30, borderRadius:"50%", flexShrink:0, background:BG, border:`1px solid ${BRD}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'DM Mono',monospace", fontSize:9, fontWeight:500, color:m.color }}>{m.init}</div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, fontWeight:500, letterSpacing:"0.12em", textTransform:"uppercase", color:m.color, marginBottom:5 }}>{m.name}</div>
                    <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, lineHeight:1.85, color:INK, whiteSpace:"pre-wrap" }}>{answers[m.key] || "..."}</div>
                  </div>
                </div>
              ))}
            </div>

            {!allSeen && (
            <div style={{ marginBottom:28, animation:"up .5s ease .25s both" }}>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:"0.16em", textTransform:"uppercase", color:SOFT, opacity:.4, marginBottom:10 }}>more questions</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                {chips.map((c, i) => (
                  <button key={i} onClick={() => chipClick(c)}
                    style={{ padding:"6px 13px", background:"transparent", border:`1px solid ${BRD}`, borderRadius:100, fontFamily:"'DM Mono',monospace", fontSize:11, color:SOFT, cursor:"pointer", transition:"all .15s", lineHeight:1.5, textAlign:"left" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor=INK; e.currentTarget.style.color=INK; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor=BRD; e.currentTarget.style.color=SOFT; }}
                  >{c}</button>
                ))}
              </div>
            </div>
            )}
          </div>
        )}

        {/* ROUND TABLE */}
        <div style={{ display:"flex", justifyContent:"center", opacity: hasAnswers ? 0.45 : 1, transition:"opacity .4s" }}>
          <div style={{ position:"relative", width:160, height:160 }}>
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" style={{ position:"absolute", inset:0 }}>
              <circle cx="80" cy="80" r="76" stroke={BRD} strokeWidth="1"/>
              <circle cx="80" cy="80" r="42" fill={P} stroke={BRD} strokeWidth="1"/>
              <circle cx="80" cy="80" r="28" stroke={BRD} strokeWidth="1" strokeDasharray="2 3" opacity=".5"/>
            </svg>
            <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontSize:13, opacity:.65, pointerEvents:"none" }}>💕</div>
            {MEMBERS.map((m, i) => {
              const a   = ((i * 72) - 90) * Math.PI / 180;
              const lft = 50 + 43 * Math.cos(a);
              const top = 50 + 43 * Math.sin(a);
              return (
                <div key={m.key} style={{ position:"absolute", left:`${lft}%`, top:`${top}%`, transform:"translate(-50%,-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
                  <div style={{ width:24, height:24, borderRadius:"50%", background:P, border:`1px solid ${BRD}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'DM Mono',monospace", fontSize:7.5, fontWeight:500, color:m.color, boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>{m.init}</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:6, color:SOFT, opacity:.6, whiteSpace:"nowrap" }}>{m.name}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

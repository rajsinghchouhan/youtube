import type { CartoonVideo } from '../utils/bundleLogic';

export interface CreatorTestimonial {
  id: string;
  nameHi: string;
  nameEn: string;
  roleHi: string;
  roleEn: string;
  channelNameHi: string;
  channelNameEn: string;
  persona: 'creator' | 'homemaker' | 'student' | 'job';
  subsBefore: string;
  subsAfter: string;
  monthlyIncomeInr: string;
  quoteHi: string;
  quoteEn: string;
  uploadFrequency: string;
  growthProofImage: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
}

// Exact Hero VSL Video from https://www.youtuberexperts.com/ (Wistia ID: xb9kvwhz7g)
export const HERO_VSL_VIDEO = {
  id: 'vsl-hero',
  wistiaId: 'xb9kvwhz7g',
  titleHi: 'बिना मेहनत YouTube चैनल कैसे बढ़ाएं (VSL Preview)',
  titleEn: 'How to Grow Your YouTube Channel Effortlessly (VSL Preview)',
  mp4Url: 'https://embed-ssl.wistia.com/deliveries/3cf400bd365cd8d97a8a5084d6accf4b3d7438e0/file.mp4',
  posterUrl: 'https://embed-ssl.wistia.com/deliveries/9e5628035d06e2647e913723d88021b5.jpg',
  iframeUrl: 'https://fast.wistia.net/embed/iframe/xb9kvwhz7g?videoFoam=true',
  resolution: '4K UHD (3840×2030)',
  duration: '00:17',
};

// Exact Thumbnail Carousel Images from https://www.youtuberexperts.com/
export const ORIGINAL_CAROUSEL_IMAGES = [
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a1821559e88a6.67060358_1.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a1821559e0c92.01365175_2.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a18215595a333.41773817_3.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a1821559d83d7.76794302_4.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a1821559c1901.79545964_5.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a18215595a330.75574221_6.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a1821559ad931.98695254_7.png',
];

// Exact "एक वीडियो की कमाई" (Single Video Earning Proof) Images from https://www.youtuberexperts.com/
export const SINGLE_VIDEO_EARNING_PROOFS = [
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a10933814b983.74784722_img1.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a109338182294.70694850_img2.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a10933814b985.11789857_img3.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a1093381a0f34.62044343_img4.png',
  'https://d1yei2z3i6k35z.cloudfront.net/15780585/6a10933816d1a0.12800340_img5.png',
];

export const CREATOR_TICKER_ITEMS = [
  {
    nameHi: 'समीर खान (नन्हे कलाकार)',
    nameEn: 'Sameer Khan (Nanhe Kalakar)',
    growthHi: '50K → 215K सब्सक्राइबर्स',
    growthEn: '50K → 215K Subscribers',
    income: '₹2.4L / माह',
  },
  {
    nameHi: 'अनिता शर्मा (होम मेकर)',
    nameEn: 'Anita Sharma (Homemaker)',
    growthHi: '10K → 82K सब्सक्राइबर्स',
    growthEn: '10K → 82K Subscribers',
    income: '₹1.1L / माह',
  },
  {
    nameHi: 'साहिल कपूर (स्टूडेंट)',
    nameEn: 'Sahil Kapoor (Student)',
    growthHi: '5K → 112K सब्सक्राइबर्स',
    growthEn: '5K → 112K Subscribers',
    income: '₹1.45L / माह',
  },
  {
    nameHi: 'रोहन दास (देसी कार्टून टेल्स)',
    nameEn: 'Rohan Das (Desi Cartoon Tales)',
    growthHi: '18K → 164K सब्सक्राइबर्स',
    growthEn: '18K → 164K Subscribers',
    income: '₹1.9L / माह',
  },
];

export const BUNDLE_HIGHLIGHTS = [
  {
    index: '01',
    titleHi: '5,000+ रेडी-टू-यूज़ हिंदी कार्टून Videos',
    titleEn: '5,000+ Ready-to-Upload Hindi Cartoon Videos',
    descHi: 'बिना किसी वाटरमार्क या लोगो के Full HD/4K मोरल स्टोरीज, पंचतंत्र और जादुई कहानियाँ सीधे डाउनलोड करके अपने फ़ोन से अपलोड करने के लिए तैयार।',
    descEn: 'Full HD/4K moral stories, Panchatantra tales, and magical folklore with zero watermark—ready to download and publish straight from your phone.',
    metric: '5,000+ HD Files • Ready to Upload',
  },
  {
    index: '02',
    titleHi: 'प्रोफेशनल और आकर्षक High-CTR थंबनेल्स',
    titleEn: 'High-CTR Custom Thumbnail Pack Included',
    descHi: 'हर कार्टून कहानी के साथ पहले से डिज़ाइन किए गए हाई-क्लिक-थ्रू-रेट (10%+ CTR) थंबनेल्स ताकि आपके वीडियो पर पहले दिन से ज़्यादा व्यूज़ आएं।',
    descEn: 'Pre-designed high-click-through-rate (10%+ CTR) thumbnails paired with every story so your videos attract clicks on YouTube Home & Browse feeds.',
    metric: '5,000+ Ready Thumbnails',
  },
  {
    index: '03',
    titleHi: 'SEO के अनुसार डिस्क्रिप्शन, टाइटल्स और वायरल टैग्स',
    titleEn: 'Pre-Researched YouTube SEO Titles, Descriptions & Tags',
    descHi: 'हिंदी और हिंग्लिश में हाई-सर्च वॉल्यूम कीवर्ड्स के साथ तैयार किए गए टाइटल्स, डिस्क्रिप्शन और हैशटैग्स—बस कॉपी-पेस्ट करें।',
    descEn: 'Copy-paste Hindi & Hinglish titles, descriptions, and high-ranking tags engineered to trigger YouTube search and suggested video algorithms.',
    metric: 'Copy-Paste SEO Vault',
  },
  {
    index: '04',
    titleHi: 'बिना लैपटॉप, बिना एडिटिंग और बिना कॉपीराइट',
    titleEn: 'Zero Laptop Required & Monetization-Safe License',
    descHi: 'ऑफिस के बाद या घर के कामों के बीच सिर्फ अपने स्मार्टफोन से 10 मिनट में वीडियो अपलोड करें। ओरिजिनल वॉइसओवर और साउंडट्रैक के साथ मोनेटाइजेशन सुरक्षित।',
    descEn: 'Publish in 10 minutes straight from your smartphone using the YouTube Studio app. Includes commercial usage rights for safe channel monetization.',
    metric: 'Lifetime Google Drive Access',
  },
];

// Exact 4 Original Cartoon Videos (OG VIDEO 1, OG VIDEO 2, OG VIDEO 3, OG VIDEO 4) from https://www.youtuberexperts.com/
export const CARTOON_PREVIEW_VIDEOS: CartoonVideo[] = [
  {
    id: 'og-video-3',
    wistiaId: 'jfvo0gmfoh',
    mp4Url: 'https://embed-ssl.wistia.com/deliveries/f0d471f6efd39a156774979810dc0b66a7f3b28b/file.mp4',
    posterUrl: 'https://embed-ssl.wistia.com/deliveries/e99359abe0c7529778f2c955328d606c.jpg',
    titleHi: 'OG VIDEO 3 — हिंदी कार्टून स्टोरी सैंपल #1',
    titleEn: 'OG VIDEO 3 — Hindi Cartoon Story Sample #1',
    category: 'moral',
    categoryLabelHi: 'नैतिक कहानियाँ',
    categoryLabelEn: 'Moral Stories',
    duration: '00:19',
    resolution: '4K UHD (3840×2030)',
    aspectRatio: '16:9',
    estimatedCtr: '13.4% CTR',
    sampleViews: '4.8M Views',
    sampleEarningsInr: '₹2,65,000',
    seoTitle: 'हिंदी कार्टून कहानी | Moral Stories in Hindi | Bedtime Kahaniyan | Hindi Cartoon Bundle',
    seoTags: ['#HindiKahani', '#MoralStories', '#CartoonVideo', '#HindiCartoon', '#KidsStoriesHindi'],
    storySynopsisHi: 'YouTuber Experts बंडल का ओरिजिनल हाई-क्वालिटी कार्टून वीडियो प्रूफ — साफ़ हिंदी वॉइसओवर, प्रोफेशनल एनीमेशन और हाई-रिटेंशन विज़ुअल्स के साथ।',
    storySynopsisEn: 'Original high-definition Hindi cartoon video from the YouTuber Experts bundle with crisp voiceover and studio animation.',
    artVariant: 'banyan',
  },
  {
    id: 'og-video-2',
    wistiaId: 'dk9kjumbe4',
    mp4Url: 'https://embed-ssl.wistia.com/deliveries/57e85fd9cd6c25169e4b4b139d83c0cdc01028f7/file.mp4',
    posterUrl: 'https://embed-ssl.wistia.com/deliveries/4c1e41cb44a06f52030e1c2da42ddb87.jpg',
    titleHi: 'OG VIDEO 2 — हिंदी कार्टून स्टोरी सैंपल #2',
    titleEn: 'OG VIDEO 2 — Hindi Cartoon Story Sample #2',
    category: 'panchatantra',
    categoryLabelHi: 'पंचतंत्र कहानियाँ',
    categoryLabelEn: 'Panchatantra',
    duration: '00:19',
    resolution: '4K UHD (3840×2030)',
    aspectRatio: '16:9',
    estimatedCtr: '12.9% CTR',
    sampleViews: '6.2M Views',
    sampleEarningsInr: '₹3,18,000',
    seoTitle: 'पंचतंत्र और जंगल की कहानी | Hindi Kahaniyan | Cartoon Moral Story in Hindi',
    seoTags: ['#Panchatantra', '#HindiKahaniyan', '#CartoonStory', '#DesiKahani', '#ViralCartoon'],
    storySynopsisHi: 'बंडल में मिलने वाला ओरिजिनल कार्टून वीडियो सैंपल — बिना किसी वाटरमार्क या कॉपीराइट के सीधे अपने यूट्यूब चैनल पर अपलोड करने के लिए तैयार।',
    storySynopsisEn: 'Original ready-to-upload Hindi cartoon video from the bundle—zero watermark, ready for YouTube monetization.',
    artVariant: 'lion_rabbit',
  },
  {
    id: 'og-video-1',
    wistiaId: '55ozvit0k0',
    mp4Url: 'https://embed-ssl.wistia.com/deliveries/3cf400bd365cd8d97a8a5084d6accf4b3d7438e0/file.mp4',
    posterUrl: 'https://embed-ssl.wistia.com/deliveries/e53f6109b59a7f7641f73b2efb560094.jpg',
    titleHi: 'OG VIDEO 1 — हिंदी कार्टून स्टोरी सैंपल #3',
    titleEn: 'OG VIDEO 1 — Hindi Cartoon Story Sample #3',
    category: 'magical',
    categoryLabelHi: 'जादुई कहानियाँ',
    categoryLabelEn: 'Magical Tales',
    duration: '00:17',
    resolution: '4K UHD (3840×2030)',
    aspectRatio: '16:9',
    estimatedCtr: '14.1% CTR',
    sampleViews: '5.5M Views',
    sampleEarningsInr: '₹2,84,000',
    seoTitle: 'जादुई हिंदी कहानी | Magical Hindi Cartoon Story | Moral Kahaniyan',
    seoTags: ['#MagicalStories', '#JaduiKahani', '#HindiCartoon', '#FamilyStories', '#YouTubeGrowth'],
    storySynopsisHi: 'शानदार एनीमेशन और साफ़ ऑडियो क्वालिटी वाला ओरिजिनल कार्टून वीडियो सैंपल जिसे आप सीधे अपने मोबाइल से अपलोड कर सकते हैं।',
    storySynopsisEn: 'Original 4K animated Hindi cartoon sample ready to upload directly from your mobile phone.',
    artVariant: 'village_fest',
  },
  {
    id: 'og-video-4',
    wistiaId: 'fjyuzsfwgc',
    mp4Url: 'https://embed-ssl.wistia.com/deliveries/56351a74f595756232e2fdb2894a5743646f5a2d/file.mp4',
    posterUrl: 'https://embed-ssl.wistia.com/deliveries/24d2796e3c88540a7d90fd3047527081.jpg',
    titleHi: 'OG VIDEO 4 — हिंदी कार्टून स्टोरी सैंपल #4',
    titleEn: 'OG VIDEO 4 — Hindi Cartoon Story Sample #4',
    category: 'magical',
    categoryLabelHi: 'जादुई कहानियाँ',
    categoryLabelEn: 'Magical Tales',
    duration: '00:22',
    resolution: '4K UHD (3840×2030)',
    aspectRatio: '16:9',
    estimatedCtr: '12.6% CTR',
    sampleViews: '3.9M Views',
    sampleEarningsInr: '₹2,14,000',
    seoTitle: 'रोमांचक हिंदी कार्टून कहानी | Kids & Family Animated Story in Hindi',
    seoTags: ['#HindiAnimation', '#CartoonKahani', '#KidsMoralStory', '#HindiStories'],
    storySynopsisHi: 'कई millions views generate करने के बाद तैयार किए गए 5,000+ कार्टून वीडियो बंडल का चौथा ओरिजिनल डेमो वीडियो।',
    storySynopsisEn: 'Fourth original demo video from the 5,000+ Hindi Cartoon Stories bundle.',
    artVariant: 'mountain_quest',
  },
];

export const WRONG_PATH_POINTS = [
  {
    hi: 'खुद से कार्टून वीडियो बनाना सीखने में महीनों–सालों बर्बाद करना',
    en: 'Wasting months or years trying to learn complex 2D/3D animation from scratch',
  },
  {
    hi: 'एडिटिंग, एनिमेशन और स्क्रिप्टिंग में उलझे रहना',
    en: 'Getting stuck for hours per video on scripting, voiceovers, and timeline editing',
  },
  {
    hi: 'हर वीडियो ट्रायल-एंड-एरर से सीखना',
    en: 'Guessing thumbnails and tags through trial-and-error with minimal views',
  },
  {
    hi: 'महंगे टूल्स, सॉफ्टवेयर और freelancers पर पैसा खर्च करना',
    en: 'Spending thousands on expensive software and freelance animators',
  },
  {
    hi: 'दूसरों को ग्रो करते देखते रहना',
    en: 'Watching other faceless cartoon channels grow while yours stays stuck',
  },
];

export const RIGHT_PATH_POINTS = [
  {
    hi: 'रेडी-मेड कार्टून वीडियो बंडल खरीदकर सीधे अपलोड करना',
    en: 'Download 5,000+ ready-made Hindi cartoon stories and upload directly from your phone',
  },
  {
    hi: 'बिना एडिटिंग, एनिमेशन या टेक्निकल स्किल सीखे',
    en: 'Launch your channel today without learning animation, editing, or expensive tools',
  },
  {
    hi: 'पहले से proven cartoon content का इस्तेमाल करना',
    en: 'Use proven high-retention story formats paired with custom 10%+ CTR thumbnails',
  },
  {
    hi: 'कम समय और कम मेहनत में ज़्यादा वीडियो पब्लिश करना',
    en: 'Spend just 10 minutes a day scheduling consistent uploads with copy-paste SEO tags',
  },
  {
    hi: 'Beginner होते हुए भी प्रोफेशनल दिखने वाला कंटेंट डालना',
    en: 'Publish studio-grade Hindi animated content from Day 1 even as a complete beginner',
  },
];

export const CREATOR_TESTIMONIALS: CreatorTestimonial[] = [
  {
    id: 't1',
    nameHi: 'समीर खान',
    nameEn: 'Sameer Khan',
    roleHi: 'नन्हे कलाकार - कार्टून वर्ल्ड • 215K+ Subs',
    roleEn: 'Nanhe Kalakar - Cartoon World • 215K+ Subs',
    channelNameHi: 'कार्टून वर्ल्ड',
    channelNameEn: 'Cartoon World',
    persona: 'creator',
    subsBefore: '50K',
    subsAfter: '215K+ Subs',
    monthlyIncomeInr: '₹2,40,000/माह',
    quoteHi:
      '"मैंने यह बंडल खरीदा जिसमें मुझे बनी-बनाई (premade) कार्टून वीडियो मिलीं। मैंने उन्हें बस अपने चैनल पर अपलोड किया और कुछ ही हफ्तों में मेरे चैनल की ग्रोथ देख कर मैं हैरान रह गया!"',
    quoteEn:
      '"I purchased this bundle and got ready-made Hindi cartoon stories. I simply uploaded them to my channel, and within weeks my channel growth amazed me!"',
    uploadFrequency: '1 Video / Day (Mobile)',
    growthProofImage: 'https://d1yei2z3i6k35z.cloudfront.net/15390000/69446b1a19f47_2.png',
    avatarUrl: 'https://i.pravatar.cc/150?u=samir_khan',
  },
  {
    id: 't2',
    nameHi: 'रोहन दास',
    nameEn: 'Rohan Das',
    roleHi: 'देसी कार्टून टेल्स • 164K+ Subs',
    roleEn: 'Desi Cartoon Tales • 164K+ Subs',
    channelNameHi: 'देसी कार्टून टेल्स',
    channelNameEn: 'Desi Cartoon Tales',
    persona: 'creator',
    subsBefore: '18K',
    subsAfter: '164K+ Subs',
    monthlyIncomeInr: '₹1,92,000/माह',
    quoteHi:
      '"मुझे एनीमेशन बिलकुल नहीं आता था, लेकिन इस बंडल की प्री-मेड कार्टून वीडियोज़ ने कमाल कर दिया। मैंने बस वीडियोज़ डाउनलोड कीं और अपने चैनल पर अपलोड कीं आज मैं अपने चैनल से कमाई कर रहा हूँ!"',
    quoteEn:
      '"I knew zero animation, but the pre-made cartoon videos in this bundle worked wonders. I just downloaded the videos and uploaded them—today I am earning from my channel!"',
    uploadFrequency: '5 Videos / Week',
    growthProofImage: 'https://d1yei2z3i6k35z.cloudfront.net/15390000/69446b1a0fc99_5.png',
    avatarUrl: 'https://i.pravatar.cc/150?u=rohan_das',
  },
  {
    id: 't3',
    nameHi: 'अनिता शर्मा',
    nameEn: 'Anita Sharma',
    roleHi: 'होम मेकर - किड्स स्टोरीज • 82K+ Subs',
    roleEn: 'Homemaker - Kids Stories • 82K+ Subs',
    channelNameHi: 'किड्स स्टोरीज',
    channelNameEn: 'Kids Stories',
    persona: 'homemaker',
    subsBefore: '10K',
    subsAfter: '82K+ Subs',
    monthlyIncomeInr: '₹1,15,000/माह',
    quoteHi:
      '"घर के कामों के बीच वीडियो बनाना बहुत मुश्किल था, लेकिन इस बंडल की प्री-मेड वीडियोज़ ने मेरी लाइफ आसान कर दी। अब मुझे घंटों एडिटिंग नहीं करनी पड़ती, बस अपलोड करती हूँ और लाखों व्यूज़ आ रहे हैं!"',
    quoteEn:
      '"Between household chores, making videos was very difficult, but this bundle made my life easy. Now I don’t spend hours editing—I just upload and get lakhs of views!"',
    uploadFrequency: '4 Videos / Week',
    growthProofImage: 'https://d1yei2z3i6k35z.cloudfront.net/15390000/69446b1a16f3a_3.png',
    avatarUrl: 'https://i.pravatar.cc/150?u=anita_sharma',
  },
  {
    id: 't4',
    nameHi: 'सुमित खन्ना',
    nameEn: 'Sumit Khanna',
    roleHi: 'सॉफ्टवेयर इंजीनियर - टेक कार्टून्स • 142K+ Subs',
    roleEn: 'Software Engineer - Tech Cartoons • 142K+ Subs',
    channelNameHi: 'टेक कार्टून्स',
    channelNameEn: 'Tech Cartoons',
    persona: 'job',
    subsBefore: '12K',
    subsAfter: '142K+ Subs',
    monthlyIncomeInr: '₹1,75,000/माह',
    quoteHi:
      '"9-to-5 जॉब के साथ यूट्यूब के लिए वीडियो बनाना और एडिट करना लगभग नामुमकिन था। इस बंडल की प्री-मेड वीडियोज़ ने मेरा काम बहुत आसान कर दिया। अब मैं ऑफिस के बाद सिर्फ 10 मिनट में वीडियो अपलोड कर देता हूँ और मेरे चैनल पर ज़बरदस्त ग्रोथ हो रही है।"',
    quoteEn:
      '"With a 9-to-5 job, creating and editing videos was nearly impossible. Now I spend just 10 minutes after office uploading pre-made videos from this bundle and my channel is growing rapidly."',
    uploadFrequency: '10 Mins / Evening',
    growthProofImage: 'https://d1yei2z3i6k35z.cloudfront.net/15390000/69446b1a1c808_1.png',
    avatarUrl: 'https://i.pravatar.cc/150?u=sumit_khanna',
  },
  {
    id: 't5',
    nameHi: 'अमित मल्होत्रा',
    nameEn: 'Amit Malhotra',
    roleHi: 'डिजिटल एंटरप्रेन्योर - कार्टून हब • 187K+ Subs',
    roleEn: 'Digital Entrepreneur - Cartoon Hub • 187K+ Subs',
    channelNameHi: 'कार्टून हब',
    channelNameEn: 'Cartoon Hub',
    persona: 'creator',
    subsBefore: '25K',
    subsAfter: '187K+ Subs',
    monthlyIncomeInr: '₹2,18,000/माह',
    quoteHi:
      '"मैंने पहले कई बिजनेस ट्राई किए—ड्रॉपशिपिंग - एफिलिएट मार्केटिंग तक, लेकिन कहीं भी सफलता नहीं मिली। फिर मैंने यह कार्टून वीडियोज़ बंडल लिया और इसकी वीडियोज़ अपलोड करना शुरू किया। सच कहूँ तो, इतनी जल्दी से मेरा चैनल पूरी तरह से ग्रो हो चुका है!"',
    quoteEn:
      '"I tried dropshipping and affiliate marketing without success. Then I took this cartoon videos bundle and started uploading—my channel grew faster than anything else!"',
    uploadFrequency: 'Daily Uploads',
    growthProofImage: 'https://d1yei2z3i6k35z.cloudfront.net/15390000/69446b1a1a7e9_6.png',
    avatarUrl: 'https://i.pravatar.cc/150?u=amit_malhotra',
  },
  {
    id: 't6',
    nameHi: 'साहिल सिंगला',
    nameEn: 'Sahil Singla',
    roleHi: 'स्टूडेंट क्रिएटर - कार्टून किंग • 112K+ Subs',
    roleEn: 'Student Creator - Cartoon King • 112K+ Subs',
    channelNameHi: 'कार्टून किंग',
    channelNameEn: 'Cartoon King',
    persona: 'student',
    subsBefore: '5K',
    subsAfter: '112K+ Subs',
    monthlyIncomeInr: '₹1,45,000/माह',
    quoteHi:
      '"पढ़ाई के साथ कंटेंट बनाना मेरे लिए नामुमकिन था, लेकिन इस बंडल ने सब बदल दिया। इसमें मिली बनी-बनाई वीडियोज़ को मैंने बस शेड्यूल किया और अपलोड किया। आज मैं अपनी कॉलेज फीस खुद भर रहा हूँ और मेरा चैनल बहुत तेज़ी से ग्रो कर रहा है!"',
    quoteEn:
      '"Creating content alongside studies was impossible, but this bundle changed everything. I scheduled and uploaded the pre-made videos and now I pay my own college fees!"',
    uploadFrequency: 'Mobile Only Setup',
    growthProofImage: 'https://d1yei2z3i6k35z.cloudfront.net/15390000/69446b1a1065b_4.png',
    avatarUrl: 'https://i.pravatar.cc/150?u=sahil_kapoor',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    questionHi: 'क्या हम इन videos को अपने YouTube चैनल पर upload कर सकते हैं?',
    questionEn: 'Can we upload these videos to our YouTube channel?',
    answerHi: 'हाँ, आप इन videos को अपने YouTube चैनल पर upload कर सकते हैं।',
    answerEn: 'Yes, you can directly upload these videos to your YouTube channel.',
  },
  {
    id: 'faq-2',
    questionHi: 'क्या इन videos से YouTube channel monetize किया जा सकता है?',
    questionEn: 'Can a YouTube channel be monetized with these videos?',
    answerHi: 'इन videos को सही तरीके से इस्तेमाल करके YouTube channel को monetize किया जा सकता है।',
    answerEn: 'Yes, by using these videos properly with the included thumbnails and metadata, your YouTube channel can be monetized.',
  },
  {
    id: 'faq-3',
    questionHi: 'Payment के बाद videos कैसे मिलेंगी?',
    questionEn: 'How will I receive the videos after payment?',
    answerHi: 'Payment के बाद आपको email के ज़रिये download link मिलेगा, जहाँ से आप सभी videos access कर सकते हैं।',
    answerEn: 'Immediately after payment, you will receive the download link via email and on-screen to access all 5,000+ videos.',
  },
  {
    id: 'faq-4',
    questionHi: 'यह videos कितने समय तक मिलेंगी?',
    questionEn: 'How long will I have access to these videos?',
    answerHi: 'यह bundle आपको lifetime access के साथ मिलेगा।',
    answerEn: 'This bundle comes with lifetime access and zero recurring monthly fees.',
  },
  {
    id: 'faq-5',
    questionHi: 'क्या laptop या editing की ज़रूरत है?',
    questionEn: 'Is a laptop or video editing required?',
    answerHi: 'नहीं, आप इन videos को सिर्फ mobile से भी upload कर सकते हैं। Laptop या editing अनिवार्य नहीं है।',
    answerEn: 'No, you can upload these videos directly from your mobile phone. A laptop or editing software is not required.',
  },
];

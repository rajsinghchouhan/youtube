import React, { useState, useEffect } from 'react';
import {
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  Sun,
  Moon,
  CheckCircle2,
  XCircle,
  X,
} from 'lucide-react';
import {
  HERO_VSL_VIDEO,
  ORIGINAL_CAROUSEL_IMAGES,
  SINGLE_VIDEO_EARNING_PROOFS,
  CREATOR_TICKER_ITEMS,
  CARTOON_PREVIEW_VIDEOS,
  WRONG_PATH_POINTS,
  RIGHT_PATH_POINTS,
  CREATOR_TESTIMONIALS,
  FAQ_ITEMS,
} from './data/bundleData';
import { WistiaVideoPlayer } from './components/WistiaVideoPlayer';
import { EarningsCalculator } from './components/EarningsCalculator';
import { CheckoutSheet } from './components/CheckoutSheet';

type PolicyType = 'contact' | 'terms' | 'privacy' | 'disclaimer' | 'refund' | null;

interface OfferCtaBlockProps {
  minutesStr: string;
  secondsStr: string;
  onBuyClick: () => void;
  testId?: string;
}

const OfferCtaBlock: React.FC<OfferCtaBlockProps> = ({
  minutesStr,
  secondsStr,
  onBuyClick,
  testId,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center space-y-3">
      {/* Single-line Countdown Timer RIGHT ABOVE the Buy Now button */}
      <div className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden">
        <Clock className="w-4 h-4 text-amber-500 shrink-0" />
        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate">
          OFFER कुछ मिनट में खत्म हो जाएगा
        </span>
        <span className="font-mono-num text-xs sm:text-sm font-extrabold text-amber-600 dark:text-amber-400 shrink-0">
          {minutesStr} Min : {secondsStr} Sec
        </span>
      </div>

      {/* Buy Now Button */}
      <button
        type="button"
        data-testid={testId}
        onClick={onBuyClick}
        className="w-full min-h-[56px] px-5 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-zinc-950 flex flex-col items-center justify-center shadow-lg shadow-amber-500/20 cursor-pointer transition-all"
      >
        <div className="flex items-center gap-2 text-base sm:text-lg font-extrabold whitespace-nowrap">
          <span>Buy Now Only</span>
          <span className="line-through opacity-75 font-mono-num text-sm">₹1999</span>
          <span className="font-mono-num text-xl sm:text-2xl">₹197</span>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </div>
        <span className="text-[11px] sm:text-xs font-semibold opacity-90 whitespace-nowrap mt-0.5">
          Last Chance • 90% off • Ending today
        </span>
      </button>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  // Offer countdown timer (starts at 13m 06s)
  const [secondsLeft, setSecondsLeft] = useState<number>(13 * 60 + 6);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 60 ? prev - 1 : 13 * 60 + 6));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutesStr = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secondsStr = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pb-20 sm:pb-0 transition-colors">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="relative sm:sticky sm:top-0 z-30 h-14 sm:h-16 flex items-center justify-between gap-8 px-4 sm:px-8 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80">
        <a
          href="#top"
          className="text-base sm:text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 whitespace-nowrap shrink-0 font-display"
        >
          YouTuber Experts
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400"
        >
          <a
            href="#demo-videos"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            डेमो वीडियो
          </a>
          <a
            href="#earning-proofs"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            एक वीडियो की कमाई
          </a>
          <a
            href="#creator-stories"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            ग्राहकों का अनुभव
          </a>
          <a
            href="#faq"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            सवाल-जवाब (FAQ)
          </a>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="min-h-[38px] min-w-[38px] px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsCheckoutOpen(true)}
            className="min-h-[40px] px-4 py-2 text-xs sm:text-sm font-bold text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Buy Now • ₹197
          </button>
        </div>
      </header>

      <main id="top">
        {/* Top Sliding Creator Growth Ticker (Just like youtuberexperts.com) */}
        <div className="bg-zinc-900 border-b border-zinc-800 py-2.5 overflow-hidden">
          <div className="animate-marquee-fast gap-4 px-4">
            {[...CREATOR_TICKER_ITEMS, ...CREATOR_TICKER_ITEMS].map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-zinc-950/90 border border-zinc-800 text-xs whitespace-nowrap shrink-0"
              >
                <span className="font-bold text-zinc-100">{item.nameHi}</span>
                <span className="text-zinc-500">·</span>
                <span className="font-mono-num text-emerald-400 font-semibold">
                  {item.growthHi}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section: Headline -> Subtitle -> VSL Video right below subtitle -> 3 Bullets -> 1-Line Timer above Buy Button */}
        <section className="pt-5 sm:pt-8 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
            <h1 className="text-[17px] sm:text-2xl lg:text-[32px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.35] max-w-3xl mx-auto">
              अब आप भी YouTube पर बने बनाये Cartoon Videos अपने फ़ोन से अपलोड करके महीने के{' '}
              <span className="text-amber-500">2 से 3 लाख रुपये</span> अपने यूट्यूब चैनल से कमा सकते हो
            </h1>

            <p className="mt-3 text-xs sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              बिना लैपटॉप, बिना एडिटिंग, बिना कॉपीराइट और इस Bundle में आपको 5,000+ Hindi Cartoon Stories Videos मिलेंगे
            </p>

            {/* VSL Video Placed Directly Below Subtitle Text */}
            <div className="mt-7 max-w-2xl mx-auto">
              <p className="text-sm sm:text-base font-bold text-amber-600 dark:text-amber-400 mb-3">
                बिना मेहनत YouTube चैनल कैसे बढ़ाएं
              </p>
              <WistiaVideoPlayer
                wistiaId={HERO_VSL_VIDEO.wistiaId}
                mp4Url={HERO_VSL_VIDEO.mp4Url}
                posterUrl={HERO_VSL_VIDEO.posterUrl}
                title={HERO_VSL_VIDEO.titleHi}
              />
            </div>

            {/* 3 Core Bullet Points */}
            <ul className="mt-7 max-w-lg mx-auto space-y-2.5 text-left text-sm sm:text-base text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold">5,000+ रेडी-टू-यूज़ हिंदी कार्टून Video&apos;s</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold">प्रोफेशनल और आकर्षक थंबनेल्स</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold">SEO के अनुसार डिस्क्रिप्शन और टैग्स</span>
              </li>
            </ul>

            {/* 1-Line Timer RIGHT ABOVE Buy Now Only ₹197 Button */}
            <div className="mt-7">
              <OfferCtaBlock
                minutesStr={minutesStr}
                secondsStr={secondsStr}
                onBuyClick={() => setIsCheckoutOpen(true)}
                testId="hero-buy-btn"
              />
            </div>
          </div>
        </section>

        {/* Continuous Auto-Scrolling Carousel of ALL 7 Original Bundle Images */}
        <section className="py-8 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 overflow-hidden">
          <div className="overflow-hidden py-2">
            <div className="animate-marquee gap-4 px-4">
              {[...ORIGINAL_CAROUSEL_IMAGES, ...ORIGINAL_CAROUSEL_IMAGES].map(
                (imgUrl, index) => (
                  <div
                    key={index}
                    className="w-60 sm:w-72 shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md"
                  >
                    <img
                      src={imgUrl}
                      alt={`Carousel Image ${(index % 7) + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-8 px-4">
            <OfferCtaBlock
              minutesStr={minutesStr}
              secondsStr={secondsStr}
              onBuyClick={() => setIsCheckoutOpen(true)}
            />
          </div>
        </section>

        {/* Section: "एक वीडियो की कमाई" — Directly Contains the 4 Original Videos */}
        <section
          id="earning-proofs"
          className="py-12 sm:py-16 border-t border-zinc-200 dark:border-zinc-800/80"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2
              id="demo-videos"
              className="text-2xl sm:text-4xl font-extrabold text-center tracking-tight text-zinc-900 dark:text-zinc-50 mb-8"
            >
              एक वीडियो की कमाई
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CARTOON_PREVIEW_VIDEOS.map((video, idx) => (
                <WistiaVideoPlayer
                  key={video.id}
                  wistiaId={video.wistiaId}
                  mp4Url={video.mp4Url}
                  posterUrl={video.posterUrl}
                  title={`एक वीडियो की कमाई प्रूफ ${idx + 1}`}
                />
              ))}
            </div>

            <p className="mt-8 text-sm sm:text-lg text-center text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto font-medium">
              कई millions views generate करने के बाद, हमने कई YouTube channels को लाखों subscribers तक grow किया है और उनसे लाखों की earning की है। इसी experience के आधार पर हमने आपके लिए यह Bundle बनाया है, जिससे आप भी अपनी YouTube journey को सही तरीके से शुरू कर सकें।
            </p>

            <div className="mt-8">
              <OfferCtaBlock
                minutesStr={minutesStr}
                secondsStr={secondsStr}
                onBuyClick={() => setIsCheckoutOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* Section: "हमारे ग्राहकों का अनुभव" (Customer Testimonials + Customer Experience Image Slider) */}
        <section
          id="creator-stories"
          aria-labelledby="testimonials-heading"
          className="py-14 sm:py-20 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2
                id="testimonials-heading"
                className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
              >
                हमारे ग्राहकों का अनुभव
              </h2>
            </div>

            {/* First Row of 3 Customer Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CREATOR_TESTIMONIALS.slice(0, 3).map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                      <span>चैनल ग्रोथ प्रूफ</span>
                      <span>★ ★ ★ ★ ★</span>
                    </div>

                    <div className="bg-zinc-950 p-2 border-b border-zinc-200 dark:border-zinc-800">
                      <img
                        src={item.growthProofImage}
                        alt="Growth Proof"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-44 object-contain rounded-lg"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {item.quoteHi}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.nameHi}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover border border-amber-500/40 shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {item.nameHi}
                      </h3>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                        {item.roleHi}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Customer Experience Image Slider (img1 to img5) right inside "हमारे ग्राहकों का अनुभव" */}
          <div className="overflow-hidden py-8 my-2">
            <div className="animate-marquee-fast gap-5 px-4">
              {[...SINGLE_VIDEO_EARNING_PROOFS, ...SINGLE_VIDEO_EARNING_PROOFS].map(
                (proofUrl, idx) => (
                  <div
                    key={idx}
                    className="w-64 sm:w-72 shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2 shadow-md"
                  >
                    <img
                      src={proofUrl}
                      alt={`हमारे ग्राहकों का अनुभव ${(idx % 5) + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto rounded-xl object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Second Row of 3 Customer Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CREATOR_TESTIMONIALS.slice(3, 6).map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                      <span>चैनल ग्रोथ प्रूफ</span>
                      <span>★ ★ ★ ★ ★</span>
                    </div>

                    <div className="bg-zinc-950 p-2 border-b border-zinc-200 dark:border-zinc-800">
                      <img
                        src={item.growthProofImage}
                        alt="Growth Proof"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-44 object-contain rounded-lg"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {item.quoteHi}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.nameHi}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover border border-amber-500/40 shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {item.nameHi}
                      </h3>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                        {item.roleHi}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <OfferCtaBlock
                minutesStr={minutesStr}
                secondsStr={secondsStr}
                onBuyClick={() => setIsCheckoutOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* Section: Wrong Path vs Right Path Comparison (अभी आपके पास दो रास्ते है) */}
        <section className="py-14 sm:py-20 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-center tracking-tight text-zinc-900 dark:text-zinc-50 mb-10">
              अभी आपके पास दो रास्ते है
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Wrong Path Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400 flex items-center gap-2 pb-4 mb-5 border-b border-zinc-200 dark:border-zinc-800">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>❌ गलत रास्ता</span>
                </h3>

                <ul className="space-y-4">
                  {WRONG_PATH_POINTS.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300"
                    >
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                      <span>{pt.hi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Path Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-amber-500/40 text-zinc-100">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-400 flex items-center gap-2 pb-4 mb-5 border-b border-zinc-800">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>✅ सही रास्ता</span>
                </h3>

                <ul className="space-y-4">
                  {RIGHT_PATH_POINTS.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-zinc-100"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{pt.hi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <OfferCtaBlock
                minutesStr={minutesStr}
                secondsStr={secondsStr}
                onBuyClick={() => setIsCheckoutOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* Interactive Earnings Calculator */}
        <EarningsCalculator
          lang={lang}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Section: Interactive FAQ Accordion */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="py-14 sm:py-20 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight text-zinc-900 dark:text-zinc-50 mb-8"
            >
              अक्सर पूछे जाने वाले सवाल (FAQ)
            </h2>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      className="w-full min-h-[56px] px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                        {faq.questionHi}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-amber-500' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-200/60 dark:border-zinc-800/60">
                        {faq.answerHi}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer with Working Legal & Support Dialogs */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5 text-center">
          <p className="text-[11px] leading-relaxed text-zinc-400 dark:text-zinc-500 max-w-3xl mx-auto">
            Per Instagram™ rules, we must mention that this is in no way sponsored, administered, or associated with Instagram, Inc. This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setActivePolicy('contact')}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 underline underline-offset-4 cursor-pointer min-h-[36px]"
            >
              Contact Us
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 underline underline-offset-4 cursor-pointer min-h-[36px]"
            >
              Terms & Condition
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 underline underline-offset-4 cursor-pointer min-h-[36px]"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('disclaimer')}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 underline underline-offset-4 cursor-pointer min-h-[36px]"
            >
              Disclaimer
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('refund')}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 underline underline-offset-4 cursor-pointer min-h-[36px]"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile-First Ergonomic Thumb-Zone Bottom CTA Bar (Strictly <= 15% viewport height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 h-16 px-4 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-baseline gap-1.5 font-mono-num">
            <span className="text-lg font-extrabold text-amber-400">₹197</span>
            <span className="text-xs text-zinc-500 line-through">₹1,999</span>
            <span className="text-[11px] text-emerald-400 font-semibold">90% OFF</span>
          </div>
          <p className="text-[11px] text-zinc-300 truncate font-mono-num">
            {minutesStr}:{secondsStr} • OFFER खत्म हो रहा है
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCheckoutOpen(true)}
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-500 active:bg-amber-400 text-zinc-950 font-extrabold text-xs flex items-center gap-1.5 shrink-0 cursor-pointer whitespace-nowrap"
        >
          <span>Buy Now ₹197</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Checkout Bottom Sheet / Modal */}
      <CheckoutSheet
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        lang={lang}
      />

      {/* Policy Modal */}
      {activePolicy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
        >
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 text-zinc-900 dark:text-zinc-100 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <h3 id="policy-modal-title" className="text-base font-bold capitalize">
                {activePolicy === 'contact' && 'Contact Us'}
                {activePolicy === 'terms' && 'Terms & Conditions'}
                {activePolicy === 'privacy' && 'Privacy Policy'}
                {activePolicy === 'disclaimer' && 'Disclaimer'}
                {activePolicy === 'refund' && 'Refund Policy'}
              </h3>
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                aria-label="Close policy dialog"
                className="min-h-[40px] min-w-[40px] rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-2 leading-relaxed">
              {activePolicy === 'contact' && (
                <p>
                  Email: support@youtuberexperts.com · Instant delivery support via Email & WhatsApp.
                </p>
              )}
              {activePolicy === 'terms' && (
                <p>
                  Purchasing the 5,000+ Hindi Cartoon Stories Bundle grants you lifetime access to download and upload the included videos on your YouTube channel.
                </p>
              )}
              {activePolicy === 'privacy' && (
                <p>
                  We collect your Name, Email Address, and WhatsApp Number strictly to send your instant download link.
                </p>
              )}
              {activePolicy === 'disclaimer' && (
                <p>
                  Results depend on consistent uploads and following YouTube guidelines.
                </p>
              )}
              {activePolicy === 'refund' && (
                <p>
                  Due to the instant digital nature of the 5,000+ video bundle, all sales are final once the access link is delivered.
                </p>
              )}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="min-h-[40px] px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

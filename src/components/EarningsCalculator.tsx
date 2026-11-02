import React, { useState } from 'react';
import { Calculator, Clock, Users, ArrowRight } from 'lucide-react';
import { calculateEarnings, formatInr, CHECKOUT_URL } from '../utils/bundleLogic';

interface EarningsCalculatorProps {
  lang: 'hi' | 'en';
  checkoutUrl?: string;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({
  lang,
  checkoutUrl = CHECKOUT_URL,
}) => {
  const [videosPerWeek, setVideosPerWeek] = useState<number>(7);
  const [avgViewsPerVideo, setAvgViewsPerVideo] = useState<number>(85000);
  const [format, setFormat] = useState<'long' | 'hybrid' | 'shorts'>('long');

  const result = calculateEarnings({
    videosPerWeek,
    avgViewsPerVideo,
    format,
  });

  const applyPreset = (vpw: number, views: number, fmt: 'long' | 'hybrid' | 'shorts') => {
    setVideosPerWeek(vpw);
    setAvgViewsPerVideo(views);
    setFormat(fmt);
  };

  return (
    <section
      id="earnings-calculator"
      aria-labelledby="calculator-heading"
      className="py-14 sm:py-20 border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-2">
            {lang === 'hi'
              ? 'एक वीडियो की कमाई • इंटरएक्टिव रेवेन्यू कैलकुलेटर'
              : 'Channel Revenue Estimator • Real Indian Cartoon Niche RPM'}
          </p>
          <h2
            id="calculator-heading"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance"
          >
            {lang === 'hi'
              ? 'जानिए आप अपने कार्टून चैनल से हर महीने कितना कमा सकते हैं'
              : 'Calculate Your Potential Monthly YouTube Cartoon Channel Income'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {lang === 'hi'
              ? 'कई millions views generate करने और सैकड़ों चैनल्स को लाखों सब्सक्राइबर्स तक ग्रो करने के अनुभव के आधार पर अपनी संभावित मासिक कमाई चेक करें।'
              : 'Based on real Indian Kids & Moral Stories channel analytics, adjust your weekly upload schedule to estimate monthly AdSense revenue.'}
          </p>
        </div>

        {/* Preset Quick Selectors */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-1">
            {lang === 'hi' ? 'क्रिएटर शेड्यूल चुनें:' : 'Quick Presets:'}
          </span>
          <button
            type="button"
            onClick={() => applyPreset(4, 45000, 'long')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 border ${
              videosPerWeek === 4 && avgViewsPerVideo === 45000
                ? 'bg-amber-500 text-zinc-950 border-amber-500 font-semibold'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50'
            }`}
          >
            {lang === 'hi' ? 'पार्ट-टाइम (4 वीडियो/सप्ताह)' : 'Part-Time (4 Videos/Wk)'}
          </button>
          <button
            type="button"
            onClick={() => applyPreset(7, 85000, 'long')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 border ${
              videosPerWeek === 7 && avgViewsPerVideo === 85000
                ? 'bg-amber-500 text-zinc-950 border-amber-500 font-semibold'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50'
            }`}
          >
            {lang === 'hi' ? 'डेली अपलोड (1 वीडियो/दिन)' : 'Daily Creator (7 Videos/Wk)'}
          </button>
          <button
            type="button"
            onClick={() => applyPreset(14, 120000, 'hybrid')}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 border ${
              videosPerWeek === 14 && avgViewsPerVideo === 120000
                ? 'bg-amber-500 text-zinc-950 border-amber-500 font-semibold'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50'
            }`}
          >
            {lang === 'hi' ? 'फास्ट ग्रोथ (2 वीडियो/दिन)' : 'Fast Growth (14 Videos/Wk)'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Controls Column */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 p-5 sm:p-7 flex flex-col justify-between space-y-6">
            {/* Format Segmented Control */}
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2.5">
                {lang === 'hi' ? '1. वीडियो फॉर्मेट चुनें' : '1. Select Upload Strategy'}
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setFormat('long')}
                  className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap truncate ${
                    format === 'long'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {lang === 'hi' ? 'Long Stories (16:9)' : 'Long Stories (16:9)'}
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('hybrid')}
                  className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap truncate ${
                    format === 'hybrid'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {lang === 'hi' ? 'Long + Shorts मिक्स' : 'Long + Shorts Mix'}
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('shorts')}
                  className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap truncate ${
                    format === 'shorts'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {lang === 'hi' ? 'सिर्फ Shorts (9:16)' : 'Shorts Only (9:16)'}
                </button>
              </div>
            </div>

            {/* Slider 1: Videos Per Week */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="videos-per-week-slider"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {lang === 'hi'
                    ? '2. हर हफ्ते अपलोड किए जाने वाले वीडियो'
                    : '2. Videos Uploaded Per Week'}
                </label>
                <span className="font-mono-num text-base font-bold text-amber-600 dark:text-amber-400">
                  {videosPerWeek} {lang === 'hi' ? 'वीडियो / सप्ताह' : 'videos / wk'}
                </span>
              </div>
              <input
                id="videos-per-week-slider"
                type="range"
                min={1}
                max={21}
                step={1}
                value={videosPerWeek}
                onChange={(e) => setVideosPerWeek(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-1.5 font-mono-num">
                <span>1 / wk</span>
                <span>7 / wk (Daily)</span>
                <span>14 / wk</span>
                <span>21 / wk</span>
              </div>
            </div>

            {/* Slider 2: Average Views Per Video */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="avg-views-slider"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {lang === 'hi'
                    ? '3. प्रति वीडियो औसत व्यूज़ (Avg Views)'
                    : '3. Average Views Per Cartoon Video'}
                </label>
                <span className="font-mono-num text-base font-bold text-amber-600 dark:text-amber-400">
                  {avgViewsPerVideo.toLocaleString('en-IN')} {lang === 'hi' ? 'व्यूज़' : 'views'}
                </span>
              </div>
              <input
                id="avg-views-slider"
                type="range"
                min={5000}
                max={300000}
                step={5000}
                value={avgViewsPerVideo}
                onChange={(e) => setAvgViewsPerVideo(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-1.5 font-mono-num">
                <span>5,000</span>
                <span>1,00,000</span>
                <span>2,00,000</span>
                <span>3,00,000</span>
              </div>
            </div>
          </div>

          {/* Right Output Card */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 p-6 sm:p-7 text-zinc-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-4 border-b border-zinc-800">
                <span className="flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  {lang === 'hi' ? 'अनुमानित मासिक यूट्यूब आय' : 'Estimated Monthly AdSense Income'}
                </span>
                <span className="font-mono-num text-amber-400">
                  {result.monthlyVideos} {lang === 'hi' ? 'वीडियो/माह' : 'videos/mo'}
                </span>
              </div>

              <div className="my-6">
                <div
                  data-testid="estimated-monthly-income"
                  className="font-mono-num text-3xl sm:text-5xl font-extrabold text-amber-400 tracking-tight"
                >
                  {result.estimatedMonthlyInrFormatted}
                  <span className="text-base sm:text-lg font-normal text-zinc-400 ml-1.5">
                    / {lang === 'hi' ? 'महीना' : 'month'}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 font-mono-num">
                  {lang === 'hi' ? 'संभावित रेंज:' : 'Typical Range:'} {result.estimatedMonthlyRangeText}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
                <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'hi' ? '90 दिन में सब्सक्राइबर्स' : '90-Day Subscribers'}</span>
                  </div>
                  <div className="font-mono-num text-lg font-bold text-zinc-100">
                    +{result.estimatedSubscribers90Days.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'hi' ? 'एडिटिंग समय की बचत' : 'Editing Time Saved'}</span>
                  </div>
                  <div className="font-mono-num text-lg font-bold text-zinc-100">
                    {result.editingHoursSavedMonthly} {lang === 'hi' ? 'घंटे/माह' : 'hrs/mo'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800">
              <a
                href={checkoutUrl}
                target={typeof window !== 'undefined' && window.self !== window.top ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer whitespace-nowrap"
              >
                <span>
                  {lang === 'hi'
                    ? `अभी 5,000+ कार्टून बंडल लें — सिर्फ ${formatInr(199)}`
                    : `Unlock 5,000+ Videos Now — Only ${formatInr(199)}`}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

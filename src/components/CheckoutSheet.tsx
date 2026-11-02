import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Download,
  Copy,
  Check,
  Sparkles,
  Lock,
  Smartphone,
  CreditCard,
  Building2,
} from 'lucide-react';
import {
  calculateCheckoutSummary,
  validateCheckoutForm,
  formatInr,
} from '../utils/bundleLogic';

interface CheckoutSheetProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'hi' | 'en';
}

export const CheckoutSheet: React.FC<CheckoutSheetProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [includeReelsBump, setIncludeReelsBump] = useState(false);
  const [includeSeoBump, setIncludeSeoBump] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [appliedCouponCode, setAppliedCouponCode] = useState('');
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    whatsapp?: string;
  }>({});
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const summary = calculateCheckoutSummary({
    includeReelsBump,
    includeSeoBump,
    couponCode: appliedCouponCode,
  });

  const handleApplyCoupon = () => {
    setAppliedCouponCode(couponInput.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateCheckoutForm({
      fullName,
      email,
      whatsapp,
      paymentMethod,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setOrderCompleted(true);
  };

  const handleCopyDriveLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(
        'https://drive.google.com/drive/folders/youtuber-experts-5000-hindi-cartoon-bundle-hd'
      );
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const resetAndClose = () => {
    setOrderCompleted(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="w-full sm:max-w-xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-white dark:bg-zinc-900 border-t sm:border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-2xl">
        {/* Mobile bottom sheet drag handle */}
        <div className="w-10 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mt-3 sm:hidden" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md z-10">
          <div>
            <h2 id="checkout-modal-title" className="text-base sm:text-lg font-bold">
              {orderCompleted
                ? lang === 'hi'
                  ? 'बधाई हो! आपका बंडल तैयार है'
                  : 'Order Confirmed! Your Bundle is Ready'
                : lang === 'hi'
                ? 'इंस्टेंट एक्सेस चेकआउट • 90% OFF'
                : 'Instant Bundle Access Checkout • 90% OFF'}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {lang === 'hi'
                ? 'पेमेंट के तुरंत बाद ईमेल और WhatsApp पर लाइफटाइम डाउनलोड लिंक'
                : 'Instant Google Drive Delivery via Email & WhatsApp'}
            </p>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close checkout"
            className="min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderCompleted ? (
          <div className="p-6 space-y-5" data-testid="checkout-success-view">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold text-emerald-600 dark:text-emerald-400">
                  {lang === 'hi'
                    ? `धन्यवाद, ${fullName}! आपका ₹${summary.finalTotal} का ऑर्डर कन्फर्म हो गया है।`
                    : `Thank you, ${fullName}! Your order of ₹${summary.finalTotal} is confirmed.`}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                  {lang === 'hi'
                    ? `हमने ${email} और WhatsApp (${whatsapp}) पर भी एक्सेस भेज दिया है।`
                    : `We have also dispatched your lifetime access link to ${email} and WhatsApp (${whatsapp}).`}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>5,000+ Hindi Cartoon Stories (Master Vault)</span>
                <span className="font-mono-num text-emerald-600 dark:text-emerald-400 font-semibold">
                  Unlocked • Lifetime
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={handleCopyDriveLink}
                  className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>
                        {lang === 'hi' ? 'ड्राइव लिंक कॉपी हो गया!' : 'Google Drive Link Copied!'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>
                        {lang === 'hi'
                          ? 'Google Drive फोल्डर लिंक कॉपी करें'
                          : 'Copy Google Drive Master Link'}
                      </span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'ब्राउज़ जारी रखें' : 'Back to Studio'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-6 space-y-5">
            {/* Core Product Summary */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  5,000+ Hindi Cartoon Stories Video Bundle
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Full HD 1080p • Thumbnails • SEO Titles & Tags • Lifetime Access
                </p>
              </div>
              <div className="text-right shrink-0 font-mono-num">
                <div className="text-xs text-zinc-400 line-through">₹1,999</div>
                <div className="text-lg font-extrabold text-amber-500">₹199</div>
              </div>
            </div>

            {/* Contact Inputs */}
            <div className="space-y-3.5">
              <div>
                <label
                  htmlFor="checkout-fullname"
                  className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                >
                  {lang === 'hi' ? 'आपका पूरा नाम (Full Name) *' : 'Your Full Name *'}
                </label>
                <input
                  id="checkout-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={lang === 'hi' ? 'उदा. समीर खान' : 'e.g. Sameer Khan'}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm focus:outline-none focus:border-amber-500"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="checkout-email"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    {lang === 'hi' ? 'ईमेल आईडी (Email Address) *' : 'Email Address (For Link) *'}
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@gmail.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm focus:outline-none focus:border-amber-500"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="checkout-whatsapp"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    {lang === 'hi' ? 'WhatsApp नंबर (10 अंक) *' : 'WhatsApp Number (10 Digits) *'}
                  </label>
                  <input
                    id="checkout-whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="9876543210"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm font-mono-num focus:outline-none focus:border-amber-500"
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-red-500 mt-1" role="alert">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Optional Order Bumps */}
            <div className="space-y-2.5">
              <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                {lang === 'hi'
                  ? 'स्पेशल वन-टाइम अपग्रेड (Optional Add-ons):'
                  : 'Optional Fast-Growth Add-ons:'}
              </p>

              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/30 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeReelsBump}
                  onChange={(e) => setIncludeReelsBump(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-amber-500 rounded"
                />
                <div className="flex-1 text-xs">
                  <div className="flex items-center justify-between font-bold text-zinc-900 dark:text-zinc-100">
                    <span>+ 1,000 Viral Hindi Moral Shorts & Reels Pack (9:16)</span>
                    <span className="font-mono-num text-amber-600 dark:text-amber-400">+₹99</span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {lang === 'hi'
                      ? 'YouTube Shorts और Instagram Reels पर तेज़ सब्सक्राइबर ग्रोथ के लिए 1,000 वर्टिकल कार्टून शॉर्ट्स।'
                      : '1,000 vertical 60-sec cartoon shorts engineered for rapid subscriber growth.'}
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeSeoBump}
                  onChange={(e) => setIncludeSeoBump(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-amber-500 rounded"
                />
                <div className="flex-1 text-xs">
                  <div className="flex items-center justify-between font-bold text-zinc-900 dark:text-zinc-100">
                    <span>+ 30-Day Faceless Channel Monetization Blueprint</span>
                    <span className="font-mono-num text-amber-600 dark:text-amber-400">+₹49</span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {lang === 'hi'
                      ? 'सही अपलोड टाइमिंग, कैटेगरी सेटिंग्स और पहले 1,000 सब्सक्राइबर्स का स्टेप-बाय-स्टेप गाइड।'
                      : 'Step-by-step upload timing, channel settings, and monetization checklist.'}
                  </p>
                </div>
              </label>
            </div>

            {/* Coupon Code Bar */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                aria-label="Coupon code"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                placeholder={
                  lang === 'hi' ? 'प्रोमो कोड (Try EXPERT20)' : 'Promo code (Try EXPERT20)'
                }
                className="flex-1 min-h-[44px] px-3.5 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono-num"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xs font-semibold cursor-pointer whitespace-nowrap"
              >
                {lang === 'hi' ? 'लागू करें' : 'Apply Code'}
              </button>
            </div>

            {/* Payment Method Selector */}
            <div>
              <span className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                {lang === 'hi' ? 'पेमेंट का तरीका चुनें:' : 'Select Payment Method:'}
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`min-h-[44px] px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>UPI / GPay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`min-h-[44px] px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`min-h-[44px] px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'netbanking'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>NetBanking</span>
                </button>
              </div>
            </div>

            {/* Final Price Breakdown & Submit CTA */}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>
                  {lang === 'hi' ? 'कुल बचत (Total Savings):' : 'Total Bundle Savings:'}
                </span>
                <span className="font-mono-num text-emerald-600 dark:text-emerald-400 font-semibold">
                  -{formatInr(summary.totalSavings)} ({summary.discountPercentage}% OFF)
                </span>
              </div>

              {summary.appliedCoupon && (
                <div className="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400">
                  <span>Coupon Applied ({summary.appliedCoupon}):</span>
                  <span className="font-mono-num">-₹{summary.couponDiscount}</span>
                </div>
              )}

              <button
                type="submit"
                data-testid="checkout-submit-btn"
                className="w-full min-h-[50px] px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/15 cursor-pointer transition-transform active:scale-[0.99]"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {lang === 'hi'
                    ? `अभी पेमेंट करें और डाउनलोड करें — ${formatInr(summary.finalTotal)}`
                    : `Complete Secure Order — ${formatInr(summary.finalTotal)}`}
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  100% Secure 256-Bit Encrypted Checkout • Instant Google Drive Access
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

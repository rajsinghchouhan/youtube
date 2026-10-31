export interface CartoonVideo {
  id: string;
  wistiaId: string;
  mp4Url: string;
  posterUrl: string;
  titleHi: string;
  titleEn: string;
  category: 'moral' | 'panchatantra' | 'magical' | 'shorts';
  categoryLabelHi: string;
  categoryLabelEn: string;
  duration: string;
  resolution: string;
  aspectRatio: '16:9' | '9:16';
  estimatedCtr: string;
  sampleViews: string;
  sampleEarningsInr: string;
  seoTitle: string;
  seoTags: string[];
  storySynopsisHi: string;
  storySynopsisEn: string;
  artVariant: 'banyan' | 'lion_rabbit' | 'village_fest' | 'mountain_quest' | 'royal_court' | 'merchant_well' | 'farmer_rain' | 'jungle_race';
}

export interface EarningsInput {
  videosPerWeek: number;
  avgViewsPerVideo: number;
  format: 'long' | 'hybrid' | 'shorts';
}

export interface EarningsResult {
  monthlyVideos: number;
  monthlyViews: number;
  estimatedMonthlyInr: number;
  estimatedMonthlyInrFormatted: string;
  estimatedMonthlyRangeText: string;
  estimatedSubscribers90Days: number;
  editingHoursSavedMonthly: number;
}

export interface CheckoutOptions {
  includeReelsBump: boolean;
  includeSeoBump: boolean;
  couponCode: string;
}

export interface CheckoutSummary {
  originalPrice: number;
  baseOfferPrice: number;
  bumpsTotal: number;
  couponDiscount: number;
  appliedCoupon: string | null;
  finalTotal: number;
  totalSavings: number;
  discountPercentage: number;
}

export interface CheckoutFormInput {
  fullName: string;
  email: string;
  whatsapp: string;
  paymentMethod: 'upi' | 'card' | 'netbanking';
}

export interface CheckoutValidationResult {
  valid: boolean;
  errors: {
    fullName?: string;
    email?: string;
    whatsapp?: string;
  };
}

export function formatInr(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

export function calculateEarnings(input: EarningsInput): EarningsResult {
  const safeVideosPerWeek = Math.max(1, Math.min(30, Math.round(input.videosPerWeek)));
  const safeAvgViews = Math.max(1000, Math.min(2000000, Math.round(input.avgViewsPerVideo)));

  const monthlyVideos = safeVideosPerWeek * 4;
  const monthlyViews = monthlyVideos * safeAvgViews;

  // Realistic Indian YouTube Cartoon / Kids Storytelling RPM in INR per 1,000 views
  // Long-form 8-12 min stories have mid-roll ads (~₹65 per 1K views), hybrid (~₹52), shorts (~₹18)
  const rpmInr =
    input.format === 'long' ? 68 : input.format === 'hybrid' ? 54 : 22;

  const estimatedMonthlyInr = Math.round((monthlyViews / 1000) * rpmInr);
  const lowEstimate = Math.round(estimatedMonthlyInr * 0.85);
  const highEstimate = Math.round(estimatedMonthlyInr * 1.25);

  // Subscriber conversion rate (~0.65% of views over 90 days)
  const estimatedSubscribers90Days = Math.round((monthlyViews * 3) * 0.0045);

  // Average cartoon animation + voiceover + editing takes ~6 hours per video manually
  const editingHoursSavedMonthly = monthlyVideos * 6;

  return {
    monthlyVideos,
    monthlyViews,
    estimatedMonthlyInr,
    estimatedMonthlyInrFormatted: formatInr(estimatedMonthlyInr),
    estimatedMonthlyRangeText: `${formatInr(lowEstimate)} – ${formatInr(highEstimate)}`,
    estimatedSubscribers90Days,
    editingHoursSavedMonthly,
  };
}

export function filterCartoonVideos(
  videos: CartoonVideo[],
  category: string,
  searchQuery: string
): CartoonVideo[] {
  const normalizedCategory = category.trim().toLowerCase();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return videos.filter((video) => {
    const matchesCategory =
      normalizedCategory === 'all' || video.category === normalizedCategory;

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const haystack = [
      video.titleHi,
      video.titleEn,
      video.categoryLabelHi,
      video.categoryLabelEn,
      video.seoTitle,
      ...video.seoTags,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function calculateCheckoutSummary(options: CheckoutOptions): CheckoutSummary {
  const originalPrice = 1999;
  const baseOfferPrice = 197;
  const reelsBumpPrice = options.includeReelsBump ? 99 : 0;
  const seoBumpPrice = options.includeSeoBump ? 49 : 0;
  const bumpsTotal = reelsBumpPrice + seoBumpPrice;

  const normalizedCode = options.couponCode.trim().toUpperCase();
  let couponDiscount = 0;
  let appliedCoupon: string | null = null;

  if (normalizedCode === 'EXPERT20' || normalizedCode === 'CREATOR20') {
    couponDiscount = 20;
    appliedCoupon = normalizedCode;
  } else if (normalizedCode === 'VIP50' && bumpsTotal > 0) {
    couponDiscount = 50;
    appliedCoupon = 'VIP50';
  }

  const finalTotal = Math.max(99, baseOfferPrice + bumpsTotal - couponDiscount);
  const totalCompareOriginal =
    originalPrice +
    (options.includeReelsBump ? 999 : 0) +
    (options.includeSeoBump ? 499 : 0);
  const totalSavings = totalCompareOriginal - finalTotal;
  const discountPercentage = Math.round((totalSavings / totalCompareOriginal) * 100);

  return {
    originalPrice: totalCompareOriginal,
    baseOfferPrice,
    bumpsTotal,
    couponDiscount,
    appliedCoupon,
    finalTotal,
    totalSavings,
    discountPercentage,
  };
}

export function validateCheckoutForm(
  input: CheckoutFormInput
): CheckoutValidationResult {
  const errors: CheckoutValidationResult['errors'] = {};

  const trimmedName = input.fullName.trim();
  if (!trimmedName || trimmedName.length < 2) {
    errors.fullName = 'कृपया अपना पूरा नाम लिखें (Please enter your full name)';
  }

  const trimmedEmail = input.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    errors.email = 'सही ईमेल आईडी दर्ज करें जिस पर डाउनलोड लिंक भेजा जाएगा (Valid email required)';
  }

  const digitsOnly = input.whatsapp.replace(/\D/g, '');
  const normalizedPhone =
    digitsOnly.length === 12 && digitsOnly.startsWith('91')
      ? digitsOnly.slice(2)
      : digitsOnly;

  if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.whatsapp = '10 अंकों का सही WhatsApp नंबर दर्ज करें (Enter valid 10-digit WhatsApp number)';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

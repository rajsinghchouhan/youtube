import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateEarnings,
  filterCartoonVideos,
  calculateCheckoutSummary,
  validateCheckoutForm,
  type CartoonVideo,
} from './bundleLogic';

const sampleVideos: CartoonVideo[] = [
  {
    id: 'v1',
    wistiaId: '55ozvit0k0',
    mp4Url: 'https://embed-ssl.wistia.com/deliveries/3cf400bd365cd8d97a8a5084d6accf4b3d7438e0/file.mp4',
    posterUrl: 'https://embed-ssl.wistia.com/deliveries/e53f6109b59a7f7641f73b2efb560094.jpg',
    titleHi: 'जादुई बरगद का पेड़ और ईमानदार लकड़हारा',
    titleEn: 'Magical Banyan Tree & The Honest Woodcutter',
    category: 'moral',
    categoryLabelHi: 'नैतिक कहानियाँ',
    categoryLabelEn: 'Moral Stories',
    duration: '00:17',
    resolution: '4K UHD',
    aspectRatio: '16:9',
    estimatedCtr: '11.4%',
    sampleViews: '4.2M Views',
    sampleEarningsInr: '₹2,45,000',
    seoTitle: 'जादुई बरगद का पेड़ | Hindi Kahani | Moral Stories in Hindi',
    seoTags: ['hindi kahani', 'moral stories', 'jadui ped'],
    storySynopsisHi: 'एक गरीब लेकिन ईमानदार लकड़हारे की कहानी।',
    storySynopsisEn: 'Story of a poor yet honest woodcutter.',
    artVariant: 'banyan',
  },
  {
    id: 'v2',
    wistiaId: 'dk9kjumbe4',
    mp4Url: 'https://embed-ssl.wistia.com/deliveries/57e85fd9cd6c25169e4b4b139d83c0cdc01028f7/file.mp4',
    posterUrl: 'https://embed-ssl.wistia.com/deliveries/4c1e41cb44a06f52030e1c2da42ddb87.jpg',
    titleHi: 'चतुर खरगोश और घमंडी शेर',
    titleEn: 'Clever Rabbit & The Arrogant Lion',
    category: 'panchatantra',
    categoryLabelHi: 'पंचतंत्र',
    categoryLabelEn: 'Panchatantra',
    duration: '00:19',
    resolution: '4K UHD',
    aspectRatio: '16:9',
    estimatedCtr: '12.8%',
    sampleViews: '6.8M Views',
    sampleEarningsInr: '₹3,10,000',
    seoTitle: 'चतुर खरगोश और शेर | Panchatantra Ki Kahaniyan',
    seoTags: ['panchatantra', 'jungli kahani', 'lion rabbit'],
    storySynopsisHi: 'बुद्धि से बलवान को कैसे हराया जाए।',
    storySynopsisEn: 'How intelligence overcomes brute strength.',
    artVariant: 'lion_rabbit',
  },
];

test('calculateEarnings computes realistic monthly views, INR income, and hours saved', () => {
  const res = calculateEarnings({
    videosPerWeek: 5,
    avgViewsPerVideo: 50000,
    format: 'long',
  });

  assert.equal(res.monthlyVideos, 20);
  assert.equal(res.monthlyViews, 1000000);
  assert.equal(res.estimatedMonthlyInr, 68000);
  assert.equal(res.editingHoursSavedMonthly, 120);
  assert.ok(res.estimatedSubscribers90Days > 10000);
});

test('filterCartoonVideos filters by category and Hindi/English search terms', () => {
  const onlyPanchatantra = filterCartoonVideos(sampleVideos, 'panchatantra', '');
  assert.equal(onlyPanchatantra.length, 1);
  assert.equal(onlyPanchatantra[0].id, 'v2');

  const searchHindi = filterCartoonVideos(sampleVideos, 'all', 'लकड़हारा');
  assert.equal(searchHindi.length, 1);
  assert.equal(searchHindi[0].id, 'v1');

  const searchTag = filterCartoonVideos(sampleVideos, 'all', 'rabbit');
  assert.equal(searchTag.length, 1);
  assert.equal(searchTag[0].id, 'v2');
});

test('calculateCheckoutSummary computes base ₹199 offer, bumps, and coupon code discounts', () => {
  const base = calculateCheckoutSummary({
    includeReelsBump: false,
    includeSeoBump: false,
    couponCode: '',
  });
  assert.equal(base.finalTotal, 199);
  assert.equal(base.discountPercentage, 90);

  const withBumpsAndCoupon = calculateCheckoutSummary({
    includeReelsBump: true,
    includeSeoBump: true,
    couponCode: 'expert20',
  });
  // 199 + 99 + 49 - 20 = 327
  assert.equal(withBumpsAndCoupon.finalTotal, 327);
  assert.equal(withBumpsAndCoupon.appliedCoupon, 'EXPERT20');
});

test('validateCheckoutForm rejects empty fields and accepts valid Indian mobile & email', () => {
  const invalid = validateCheckoutForm({
    fullName: 'A',
    email: 'not-an-email',
    whatsapp: '12345',
    paymentMethod: 'upi',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.whatsapp);

  const valid = validateCheckoutForm({
    fullName: 'समीर खान',
    email: 'sameer@example.com',
    whatsapp: '+91 9876543210',
    paymentMethod: 'upi',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

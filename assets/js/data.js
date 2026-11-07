/* ============================================================
   Avora Brands — site content
   Images are served from the live site so nothing has to be re-uploaded.
   ============================================================ */
const IMG = 'https://www.avorabrands.in/images/';
const img = (f) => IMG + encodeURI(f);

window.SITE = {
  phone: '+91 90194 40645',
  phoneRaw: '919019440645',
  email: 'hello.avorabrands@gmail.com', // TODO: switch to hello@avorabrands.in once the domain inbox is live
  address: 'HSR Layout, Bengaluru, Karnataka 560102',
  hours: 'Mon – Sat · 9:30 AM – 7:00 PM',
  instagram: 'https://www.instagram.com/avorabrands',
  linkedin: 'https://www.linkedin.com/company/124923992/',
  diwali: '2026-11-08T18:00:00+05:30' // Lakshmi Puja evening
};

window.wa = (msg) => `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;

window.CLIENT_LOGOS = [
  ['logo-bhakti.png', 'Bhakti TV'], ['logo-cashalert.png', 'CashAlert'], ['logo-spacewire.png', 'Spacewire Tech'],
  ['logo-northbean.png', 'NorthBean Interiors'], ['logo-tiara.png', 'Tiara Hair & Skin Clinic'], ['logo-picxel.png', 'Picxel AI'],
  ['logo-localservice.png', 'Local Service Finder'], ['logo-swagat.png', 'Swagat Stay'], ['logo-innovision.png', 'Innovision'],
  ['logo-nijam.webp', 'Nijam Maa Naijam']
].map(([f, n]) => ({ src: img(f), name: n }));

window.CATS = {
  branding: 'Branding & Identity', website: 'Website Design', app: 'Mobile App Design', graphic: 'Graphic & Print', social: 'Social Media'
};

window.PROJECTS = [
  {
    id: 'tiara', client: 'Tiara Hair & Skin Clinic', title: 'Ad creatives that book consultations', cat: 'social',
    cover: img('tiara-social1.jpg'), gallery: ['tiara-social2.jpg', 'tiara-social3.jpg', 'tiara-social4.jpg'].map(img),
    summary: 'Instagram and display ad creatives for three treatment campaigns at an Indiranagar dermatology clinic.',
    outcome: '3 campaigns live in 2 weeks',
    industry: 'Healthcare & Wellness', services: 'Social Media Ads, Instagram Creatives, Display Banners', timeline: '2 weeks', year: '2026',
    overview: 'Tiara Hair & Skin Clinic in Indiranagar, Bengaluru treats hair fall, pigmentation and ageing skin. They needed a set of ad creatives that would turn Instagram scrollers into booked consultations.',
    challenge: 'Healthcare feeds are crowded and trust is everything. Each creative had to feel clinically credible and emotionally reassuring at the same time, while staying true to the clinic\'s calm, premium look.',
    solution: 'We built benefit-led creatives for each treatment: a clear headline, a clinical proof point and one consultation CTA. Every concept was cut for Instagram feed, stories, Facebook and display sizes.',
    results: [['Campaigns', '3 treatment campaigns'], ['Speed', 'Approved and live within 2 weeks'], ['Formats', 'Feed, story, Facebook & display'], ['Focus', 'One consultation CTA per creative']],
    deliverables: ['Instagram post creatives', 'Story creatives', 'Facebook & display banners', 'Hair-fall campaign', 'Anti-ageing & skin campaign', 'Pigmentation campaign']
  },
  {
    id: 'veluguvani', client: 'Sri Veluguvani', title: 'A Telugu monthly, redesigned every issue', cat: 'graphic',
    cover: img('veluguvani1.jpg'), gallery: [img('veluguvani2.jpg')],
    summary: 'Cover design and 64-page inner layouts for a Telugu political and social monthly from Annamayya District.',
    outcome: '64 pages, every month',
    industry: 'Media & Publishing', services: 'Magazine Covers, Editorial Layout, Print Production', timeline: 'Monthly, ongoing', year: '2026',
    overview: 'Sri Veluguvani is a PRGI-registered Telugu monthly (Rajakeeyam · Samajikam · Masapatrika) published from Annamayya District, Andhra Pradesh. We design every cover and every inner page.',
    challenge: 'Each edition needs a fresh, culturally rooted cover that reflects the month, from Sankranti to election features, while the magazine still looks like one brand on the stand.',
    solution: 'A strong typographic identity built on Telugu script, a fixed masthead system and modular inner grids that keep text-heavy editorial pages readable and visual.',
    results: [['Cadence', 'A new edition every month'], ['Scale', '64 pages laid out per issue'], ['Print', 'PRGI-registered, press-ready files'], ['Relationship', 'Ongoing monthly partnership']],
    deliverables: ['Cover design (per edition)', '64-page inner layouts', 'Table of contents', 'Advertisement pages', 'Press-ready PDFs']
  },
  {
    id: 'cashalert-brand', client: 'CashAlert', title: 'A FinTech brand merchants can trust', cat: 'branding',
    cover: img('cashalert1.1.jpg'), gallery: ['cashalert1.2.jpg', 'cashalert1.3.jpg', 'cashalert1.4.jpg'].map(img),
    summary: 'Brand identity for a payment voice-alert app, rolled out to QR stands, stationery and merchandise.',
    outcome: 'Approved in the first round',
    industry: 'FinTech & Payments', services: 'Logo, Brand Identity, Stationery, Merchandise', timeline: '3 weeks', year: '2026',
    overview: 'CashAlert is a real-time payment voice-alert app that helps merchants hear every payment the moment it lands. They needed an identity that feels trustworthy, fast and instantly recognisable at the counter.',
    challenge: 'FinTech brands often look generic or cold. CashAlert had to signal speed and security, and work equally well on a phone screen, a printed QR stand and a branded mug.',
    solution: 'A distinctive logo mark with a deep-purple palette, rolled out into a complete system: QR payment stands, business cards, stationery, bottles, mugs and ID cards.',
    results: [['Approval', 'Signed off in the first revision'], ['Reach', 'One look across screen, counter & merch'], ['System', 'Full guidelines for in-house use'], ['Print', 'Production-ready files delivered']],
    deliverables: ['Logo suite & guidelines', 'Colour & type system', 'QR payment stand', 'Business cards & stationery', 'Mug, bottle, notebook, ID card', 'Print & digital files']
  },
  {
    id: 'cashalert-app', client: 'CashAlert', title: 'Hear payments instantly, in your language', cat: 'app',
    cover: img('Cashalert1.jpg'), gallery: ['Cashalert2.jpg', 'Cashalert3.jpg', 'Cashalert4.jpg', 'Cashalert5.jpg', 'Cashalert6.jpg'].map(img),
    summary: 'Mobile app UI for the CashAlert payment voice-alert app, from onboarding to multilingual alerts.',
    outcome: 'Handoff-ready Figma in 3 weeks',
    industry: 'FinTech & Payments', services: 'Mobile App UI/UX, App Icon, Splash', timeline: '3 weeks', year: 'Nov 2025',
    overview: 'Alongside the brand, we designed the CashAlert app itself: the screens a shopkeeper sees every day to confirm payments and hear voice alerts in their own language.',
    challenge: 'Merchants are busy and not always tech-first. The app needed large, glanceable states, minimal steps and language choice up front.',
    solution: 'A high-contrast UI with big payment states, a one-tap language picker and a calm, trustworthy palette carried over from the brand.',
    results: [['Speed', 'Full UI in 3 weeks'], ['Access', 'Multi-language alerts up front'], ['Handoff', 'Developer-ready Figma'], ['Consistency', 'Matches the brand system']],
    deliverables: ['App UI (iOS + Android)', 'App icon & splash screen', 'Onboarding & language flow', 'Payment history screens', 'Social launch templates', 'Figma handoff']
  },
  {
    id: 'bhaktitv', client: 'Bhakti TV', title: 'A calm, devotional streaming app', cat: 'app',
    cover: img('img-bhaktitv.jpg'), gallery: ['img-bhaktitv-1.jpg', 'img-bhaktitv-2.jpg', 'img-bhaktitv-3.jpg', 'img-bhaktitv-4.jpg', 'img-bhaktitv-5.jpg', 'img-bhaktitv-6.jpg'].map(img),
    summary: 'Mobile app design for a devotional audio and video platform with bhajans, mantras, kathas and Bhakti Reels.',
    outcome: 'Usable from 18 to 80',
    industry: 'Media & Entertainment', services: 'Mobile App Design, UX Research', timeline: '6 weeks', year: 'Jun 2026',
    overview: 'Bhakti TV streams bhajans, mantras, aartis, kathas and short Bhakti Reels. They wanted an app that feels sacred and immersive, yet is simple enough for every age group.',
    challenge: 'Devotional apps often feel dated or cluttered. Our users ranged from young seekers to elderly devotees who use the app daily.',
    solution: 'A warm saffron-gold UI with clean content cards, an easy player, a short-video Reels feature and an onboarding flow that makes first-time users feel welcome.',
    results: [['Scope', 'Home, player, library, reels, profile'], ['Audience', 'Designed for all age groups'], ['System', 'Reusable component library'], ['Handoff', 'Developer-ready prototype']],
    deliverables: ['App UI (iOS + Android)', 'Home, player & library', 'Bhakti Reels short-video UI', 'Onboarding & profile', 'Component library', 'Figma prototype']
  },
  {
    id: 'bhaktilok', client: 'Bhaktilok', title: 'Mantras, aartis and alarms in one sacred space', cat: 'app',
    cover: img('img-bhaktilok-1.jpg'), gallery: ['img-bhaktilok-2.jpg', 'img-bhaktilok-3.jpg', 'img-bhaktilok-4.jpg', 'img-bhaktilok-6.jpg', 'img-bhaktilok-7.jpg'].map(img),
    summary: 'A saffron-and-cream app for mantras, bhajans, aartis, ringtones and spiritual alarms.',
    outcome: 'End-to-end UI in 8 weeks',
    industry: 'Spiritual & Devotional', services: 'Mobile App Design, UX Research', timeline: '8 weeks', year: 'Jun 2026',
    overview: 'Bhaktilok brings mantras, bhajans, aartis, ringtones and spiritual alarms into one app. We created a warm, sacred UI that is easy for every generation.',
    challenge: 'Many sections, one peaceful experience. Content had to be easy to find without the app feeling busy, and support Hindi typography.',
    solution: 'A saffron-and-cream visual language rooted in Indian spiritual aesthetics, with distinct sections for Mantras, Bhajans, Aarti and Alarms and clear iconography.',
    results: [['Scope', 'App designed end-to-end'], ['Language', 'Hindi typography support'], ['Experience', 'Calm, focused navigation'], ['Review', 'Positive user feedback in testing']],
    deliverables: ['App UI (iOS + Android)', 'Mantra & aarti player', 'Spiritual alarm flow', 'Component library', 'Figma prototype']
  },
  {
    id: 'localservice-brand', client: 'Local Service Finder', title: 'A brand the crew is proud to wear', cat: 'branding',
    cover: img('LSF1( branding& Identity).png'), gallery: ['LSF2( branding& Identity).png', 'LSF3( branding& Identity).png', 'LSF4( branding& Identity).png', 'LSF5( branding& Identity).png', 'LSF6( branding& Identity).png'].map(img),
    summary: 'Identity for a hyperlocal services platform, from logo to toolboxes and staff uniforms.',
    outcome: 'Approved on first presentation',
    industry: 'Local Services', services: 'Branding, Stationery, Merchandise', timeline: '4 weeks', year: 'Aug 2025',
    overview: 'Local Service Finder connects homeowners with trusted plumbers, electricians, cleaners and carpenters. The brand had to feel reliable to customers and something providers are proud to wear.',
    challenge: 'Local marketplaces often look generic and untrustworthy. This brand would live on phones, office stationery and on the field, on toolboxes and polo shirts.',
    solution: 'A complete system: logo and palette, business cards, letterhead, ID cards and lanyards, branded toolboxes and staff polos, consistent from office to doorstep.',
    results: [['Approval', 'Approved on first presentation'], ['Touchpoints', 'Office, field and digital'], ['Print', 'Production-ready stationery'], ['Merch', 'Toolbox & uniform designs']],
    deliverables: ['Logo & mark', 'Business cards', 'Letterhead & envelope', 'ID card & lanyard', 'Branded toolbox', 'Staff uniforms']
  },
  {
    id: 'localservice-web', client: 'Local Service Finder', title: 'Booking a plumber, made calm', cat: 'website',
    cover: img('Localservice finder1.jpg'), gallery: ['Localservice finder2.jpg', 'Localservice finder3.jpg', 'Localservice finder4.jpg', 'Localservice finder5.jpg', 'Localservice finder6.jpg'].map(img),
    summary: 'A multi-page website covering discovery, provider profiles, booking and payments.',
    outcome: '6+ pages, one design system',
    industry: 'Hyperlocal & On-demand', services: 'Website UI/UX, Prototyping, Design System', timeline: '5 weeks', year: 'Sep 2025',
    overview: 'For the same platform, we designed the full website: service discovery, provider profiles, booking, secure payment, booking management and account settings.',
    challenge: 'Finding someone trustworthy at short notice is stressful. The site needed to make discovery, comparison and booking feel safe for a first-time visitor.',
    solution: 'Clear category pages, provider profiles with trust signals, a short booking-to-payment flow and a responsive design system shared across every page.',
    results: [['Scope', '6+ pages designed'], ['Flow', 'Booking & payment completed'], ['Approval', 'Approved on first presentation'], ['System', 'Responsive design system']],
    deliverables: ['Homepage & landing pages', 'Category & provider pages', 'Booking & payment flow', 'Bookings management', 'Account & settings', 'Responsive design system']
  },
  {
    id: 'picxel-brand', client: 'Picxel AI', title: 'Bold branding for an AI image studio', cat: 'branding',
    cover: img('PicxelAI1.2.jpg'), gallery: ['PicxelAI1.3.jpg', 'PicxelAI1.4.jpg', 'PicxelAI1.5.jpg', 'PicxelAI1.6.jpg'].map(img),
    summary: 'Navy-and-amber identity for an AI creator platform, across stationery and merch.',
    outcome: 'Approved in the first round',
    industry: 'AI & Technology', services: 'Logo, Brand Identity, Stationery, Merchandise', timeline: '3 weeks', year: '2026',
    overview: 'Picxel AI is an AI-powered platform for creators and businesses. We built an identity that matches its technology: bold, modern and memorable, online and offline.',
    challenge: 'AI brands tend to look the same. Picxel needed a mark that stands out on a screen and still looks premium on a mug or folder.',
    solution: 'A distinctive mark with a navy-and-amber palette, rolled out across business cards, letterhead, notebooks, mugs, bottles and folders.',
    results: [['Approval', 'Signed off in the first revision'], ['System', 'Guidelines + colour & type'], ['Merch', 'Full stationery & merch kit'], ['Files', 'Print & digital ready']],
    deliverables: ['Logo suite & guidelines', 'Colour & type system', 'Business cards', 'Letterhead & stationery', 'Mug, bottle, notebook, folder', 'Print & digital files']
  },
  {
    id: 'picxel-app', client: 'Picxel AI', title: 'Making AI feel creative, not technical', cat: 'app',
    cover: img('PicxelAI1.jpg'), gallery: ['PicxelAI2.jpg', 'PicxelAI3.jpg', 'PicxelAI4.jpg', 'PicxelAI5.jpg', 'PicxelAI6.jpg'].map(img),
    summary: 'Product UI for an AI image-transformation app with 500+ premium templates.',
    outcome: '500+ template previews designed',
    industry: 'AI & Technology', services: 'Mobile App UI, Wireframing, Prototyping', timeline: '4 weeks', year: 'Feb 2026',
    overview: 'Picxel AI turns photos into polished visuals using 500+ templates. We designed the product UI to feel exciting and approachable for photographers and creators.',
    challenge: 'AI tools can feel intimidating. The interface had to show off the power of AI without losing the human, creative feel.',
    solution: 'An electric palette, generous before/after previews and a clean template browser that makes every transformation feel one tap away.',
    results: [['Scope', 'Product UI with 500+ previews'], ['Approval', 'Approved in the first revision'], ['Assets', 'App icon & social kit'], ['Handoff', 'Figma design system']],
    deliverables: ['Product UI screens', 'Template browser', 'App icon & assets', 'Social media kit', 'Figma design system']
  },
  {
    id: 'swagat', client: 'Swagat Stay', title: 'Finding a PG that feels like home', cat: 'app',
    cover: img('img-swagat-1.jpg'), gallery: ['img-swagat-2.jpg', 'img-swagat-3.jpg', 'img-swagat-4.jpg', 'img-swagat-5.jpg', 'img-swagat-6.jpg'].map(img),
    summary: 'Mobile app for a PG and rental-stay platform with smart search and simple booking.',
    outcome: 'Booking flow validated in testing',
    industry: 'Real Estate & Hospitality', services: 'Mobile App Design, UX Research', timeline: '6 weeks', year: 'Apr 2026',
    overview: 'Swagat Stay helps students and working professionals find PGs and rentals across India. The app had to feel warm, like finding a home, not just a room.',
    challenge: 'Searching for a stay is stressful and listings are overwhelming. Users needed fast filters and confidence before they book.',
    solution: 'Smart search with location filters, clear property cards with pricing up front, and a warm yellow-gold palette that feels familiar and trustworthy.',
    results: [['Testing', 'Booking flow validated with users'], ['Search', 'Clean search & filter UX'], ['Brand', 'Warm, trustworthy look'], ['Handoff', 'Ready for development']],
    deliverables: ['App UI (iOS + Android)', 'Search & filters', 'Booking & checkout', 'Component library', 'Figma prototype', 'App Store graphics']
  },
  {
    id: 'thumbnails', client: 'Food & travel creators', title: 'Thumbnails that earn the click', cat: 'graphic',
    cover: img('thumbnails1.jpg'), gallery: [img('thumbnails2.jpg')],
    summary: 'YouTube thumbnails and billboard creatives for food-content and travel-vlog creators.',
    outcome: 'Built to read in under a second',
    industry: 'Digital & Outdoor Media', services: 'YouTube Thumbnails, Billboard Creatives', timeline: 'Per project', year: '2026',
    overview: 'We design YouTube thumbnails and outdoor hoardings for food and travel creators, where a design has under a second to make someone stop.',
    challenge: 'Thumbnails compete in a crowded feed; billboards are read from a moving vehicle. Both need bold type, sharp composition and instant hierarchy.',
    solution: 'Cinematic photography, bold display type and high-contrast colour, tuned separately for a phone-sized feed and a highway-sized hoarding.',
    results: [['Formats', 'YouTube & billboard'], ['Readability', 'Designed for a one-second glance'], ['Files', 'Print & digital ready'], ['Approval', 'Approved in the first revision']],
    deliverables: ['YouTube thumbnail series', 'Billboard / hoarding creatives', 'Social cut-downs', 'Print-ready files']
  }
];

window.TEAM = {
  founder: { name: 'Reddy Pavan M', role: 'Founder & CEO', img: img('founder.jpg') },
  cofounders: [
    { name: 'Namratha E', role: 'Co-Founder & Creative Director', img: img('about-namratha.jpg') },
    { name: 'Praveen Devarakonda', role: 'Co-Founder & Technical Lead', img: img('about-praveen.jpg') }
  ],
  team: [
    { name: 'Geethika', role: 'Client Relationship Manager', img: img('about-geethika.jpg') },
    { name: 'Vignesh', role: 'Business Manager', img: img('about-vignesh.jpg') },
    { name: 'Sahithi', role: 'Designer', img: img('about-sahithi.jpg') },       // TODO: confirm exact role
    { name: 'Sai Srinivas', role: 'Designer', img: img('about-sai-srinivas.jpg') } // TODO: confirm exact role
  ]
};

window.REVIEWS = [
  { name: 'Janagam Hemu', text: 'Very satisfied with Avora Brands. Great communication, professional service, and outstanding quality. The entire process was smooth and hassle-free. Would definitely recommend them to others.', color: '#E2475B' },
  { name: 'Devarakonda Janardhan', text: 'Great experience with Avora Brands. Professional team and quality work. Highly recommended.', color: '#2F6FD6' },
  { name: 'Sanjay K', text: 'I really liked the website\'s design and smooth user experience. It reflects professionalism and creativity. Wishing the Avora Brands team great success in helping businesses build strong digital identities.', color: '#7A4DD8' }
];

window.POSTS = [
  { id: 'brand-identity', title: 'How to Build a Strong Brand Identity for Your Small Business', cat: 'Branding', excerpt: 'A consistent brand identity builds trust and recognition. A step-by-step guide to creating a brand that stands out in a crowded market.', author: 'Namratha E', date: '2026-07-28', bg: 'linear-gradient(135deg,#0A1029,#2F6FD6)', mark: 'Brand<br>101' },
  { id: 'ux-mistakes', title: '5 UX Mistakes That Are Hurting Your App\'s Retention', cat: 'UI/UX', excerpt: 'Retention starts at the first interaction. The most common UX mistakes in mobile apps, and how to fix them before they cost you users.', author: 'Reddy Pavan M', date: '2026-07-22', bg: 'linear-gradient(135deg,#1A1030,#7A4DD8)', mark: '5 UX<br>mistakes' },
  { id: 'social-media-sizes', title: 'What Size Should Your Social Media Graphics Be in 2026?', cat: 'Social Media', excerpt: 'Instagram, LinkedIn, Facebook: every platform wants different dimensions. The complete, updated guide for 2026.', author: 'Praveen Devarakonda', date: '2026-07-15', bg: 'linear-gradient(135deg,#E2475B,#FF8A1F)', mark: '1080 ×<br>1350' },
  { id: 'cmyk-vs-rgb', title: 'CMYK vs RGB: What Every Business Owner Must Know Before Printing', cat: 'Print', excerpt: 'Colours look different on screen and on paper. The difference, and why getting it wrong can ruin your printed materials.', author: 'Namratha E', date: '2026-07-10', bg: 'linear-gradient(135deg,#00A3C4,#E2007A 55%,#F5D400)', mark: 'CMYK<br>vs RGB' },
  { id: 'colour-psychology', title: 'The Psychology of Colour in Logo Design', cat: 'Graphic Design', excerpt: 'Colours trigger emotions and influence buying decisions. How to choose the right palette for your logo, and what each colour says.', author: 'Reddy Pavan M', date: '2026-07-05', bg: 'linear-gradient(135deg,#F5B942,#E2475B 50%,#2F6FD6)', mark: 'Colour<br>speaks' },
  { id: 'madanapalle-branding', title: 'Why Local Businesses in Madanapalle Need a Strong Brand', cat: 'Branding', excerpt: 'Tier-2 cities are growing fast. Why investing in professional branding now gives Madanapalle businesses a real competitive edge.', author: 'Praveen Devarakonda', date: '2026-06-28', bg: 'linear-gradient(135deg,#0F5132,#1FAF54)', mark: 'Made in<br>Madanapalle' }
];

window.JOBS = [
  { title: 'UI/UX Designer', exp: '1–3 years', tools: 'Figma, prototyping', where: 'Bengaluru · Hybrid' },
  { title: 'Graphic Designer', exp: '1–2 years', tools: 'Illustrator, Photoshop', where: 'Bengaluru · Hybrid' },
  { title: 'Brand Strategist', exp: '2–4 years', tools: 'Branding, marketing', where: 'Bengaluru · Hybrid' },
  { title: 'Social Media Designer', exp: '1+ year', tools: 'Canva, Illustrator', where: 'Bengaluru / Remote' },
  { title: 'Video Editor', exp: 'Freshers welcome', tools: 'Premiere Pro, After Effects', where: 'Bengaluru / Remote' },
  { title: 'Client Coordinator', exp: 'Freshers welcome', tools: 'Communication, PM', where: 'Bengaluru' }
];

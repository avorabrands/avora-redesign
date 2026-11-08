/* ============================================================
   Avora Brands — site content
   Images are served from the live site so nothing has to be re-uploaded.
   ============================================================ */
const IMG = 'images/';
const img = (f) => IMG + encodeURI(f);

window.SITE = {
  phone: '+91 90194 40645',
  phoneRaw: '919019440645',
  email: 'hello.avorabrands@gmail.com', // TODO: switch to hello@avorabrands.in once the domain inbox is live
  address: 'HSR Layout, Bengaluru, Karnataka 560102',
  hours: 'Mon – Sat · 9:00 AM – 6:00 PM',
  instagram: 'https://www.instagram.com/avorabrands',
  linkedin: 'https://www.linkedin.com/company/124923992/',
  diwali: '2026-11-08T18:00:00+05:30', // Lakshmi Puja evening
  // Newsletter: FormSubmit emails each new subscriber to this inbox and sends the subscriber a welcome email.
  // The first sign-up triggers a one-time activation email to this inbox; click it once to switch the form on.
  newsletterInbox: 'hello.avorabrands@gmail.com'
};

window.wa = (msg) => `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;

window.CLIENT_LOGOS = [
  ['logo-bhakti.png', 'Bhakti TV'], ['logo-cashalert.png', 'CashAlert'], ['logo-spacewire.png', 'Spacewire Tech'],
  ['logo-northbean.png', 'NorthBean Interiors'], ['logo-tiara.png', 'VTIARA Hair & Skin Clinic'], ['logo-picxel.png', 'Picxel AI'],
  ['logo-localservice.png', 'Local Service Finder'], ['logo-swagat.png', 'Swagat Stay'], ['logo-innovision.png', 'Innovision'],
  ['logo-nijam.png', 'Nijam Maa Naijam'], ['logo-vydehi.png', 'Vydehi Institute of Medical Sciences']
].map(([f, n]) => ({ src: img(f), name: n }));

window.CATS = {
  branding: 'Branding & Identity', website: 'Website Design', app: 'Mobile App Design', graphic: 'Graphic & Print', social: 'Social Media'
};

window.PROJECTS = [
  {
    id: 'tiara', client: 'VTIARA Hair & Skin Clinic', title: 'Clinical trust, in a thumb-stopping ad', cat: 'social',
    cover: img('tiara-social1.jpg'), gallery: ['tiara-social2.jpg', 'tiara-social3.jpg', 'tiara-social4.jpg'].map(img),
    summary: 'Instagram and display ad creatives for three treatment campaigns at an Indiranagar dermatology clinic.',
    outcome: 'Turning scrolls into skin consultations',
    industry: 'Healthcare & Wellness', services: 'Social Media Ads, Instagram Creatives, Display Banners', timeline: '2 weeks', year: '2026',
    overview: 'VTIARA Hair & Skin Clinic in Indiranagar, Bengaluru treats hair fall, pigmentation and ageing skin. They needed a set of ad creatives that would turn Instagram scrollers into booked consultations.',
    challenge: 'Healthcare feeds are crowded and trust is everything. Each creative had to feel clinically credible and emotionally reassuring at the same time, while staying true to the clinic\'s calm, premium look.',
    solution: 'We built benefit-led creatives for each treatment: a clear headline, a clinical proof point and one consultation CTA. Every concept was cut for Instagram feed, stories, Facebook and display sizes.',
    results: [['Campaigns', '3 treatment campaigns'], ['Speed', 'Approved and live within 2 weeks'], ['Formats', 'Feed, story, Facebook & display'], ['Focus', 'One consultation CTA per creative']],
    deliverables: ['Instagram post creatives', 'Story creatives', 'Facebook & display banners', 'Hair-fall campaign', 'Anti-ageing & skin campaign', 'Pigmentation campaign']
  },
  {
    id: 'wanderly', client: 'Wanderly Travels', title: 'Beautiful photos, finally one brand', cat: 'social',
    cover: img('img-social.jpg'), gallery: [],
    summary: 'A cohesive Instagram system for a travel brand: 12 post templates, stories, reel covers and a content guide.',
    outcome: 'One travel story across every post',
    industry: 'Travel & Tourism', services: 'Social Media Design, Templates', timeline: '2 weeks', year: '2026',
    overview: 'Wanderly Travels had stunning destination photography but no visual consistency across their social channels. The feed looked unpolished, and that was costing them followers and brand partnerships. They asked us to turn their social presence into one cohesive brand story.',
    challenge: 'Beautiful photos alone weren\'t enough. Without a shared look, the brand came across as amateur and missed the collaboration opportunities it deserved.',
    solution: 'We created a visual system with 12 reusable templates, a warm-golden colour palette and a content calendar structure, so every post, story and reel now looks like it comes from the same brand.',
    results: [['Identity', 'Adventure-driven brand look delivered'], ['Language', 'Travel visual language established'], ['Consistency', 'Same look across every touchpoint'], ['Approval', 'Approved on first presentation']],
    deliverables: ['Instagram post templates (12)', 'Story templates (6)', 'Reel cover templates (4)', 'Brand content guide', 'Highlight covers', 'Bio & profile optimisation']
  },
  {
    id: 'veluguvani', client: 'Sri Veluguvani', title: '64 pages of Telugu storytelling, every month', cat: 'graphic',
    cover: img('veluguvani1.jpg'), gallery: [img('veluguvani2.jpg')],
    summary: 'Cover design and 64-page inner layouts for a Telugu political and social monthly from Annamayya District.',
    outcome: 'Telugu news, beautifully told each month',
    industry: 'Media & Publishing', services: 'Magazine Covers, Editorial Layout, Print Production', timeline: 'Monthly, ongoing', year: '2026',
    overview: 'Sri Veluguvani is a PRGI-registered Telugu monthly (Rajakeeyam · Samajikam · Masapatrika) published from Annamayya District, Andhra Pradesh. We design every cover and every inner page.',
    challenge: 'Each edition needs a fresh, culturally rooted cover that reflects the month, from Sankranti to election features, while the magazine still looks like one brand on the stand.',
    solution: 'A strong typographic identity built on Telugu script, a fixed masthead system and modular inner grids that keep text-heavy editorial pages readable and visual.',
    results: [['Cadence', 'A new edition every month'], ['Scale', '64 pages laid out per issue'], ['Print', 'PRGI-registered, press-ready files'], ['Relationship', 'Ongoing monthly partnership']],
    deliverables: ['Cover design (per edition)', '64-page inner layouts', 'Table of contents', 'Advertisement pages', 'Press-ready PDFs']
  },
  {
    id: 'cashalert-brand', client: 'CashAlert', title: 'A purple mark merchants know at the counter', cat: 'branding',
    cover: img('cashalert1.1.jpg'), gallery: ['cashalert1.2.jpg', 'cashalert1.3.jpg', 'cashalert1.4.jpg'].map(img),
    summary: 'Brand identity for a payment voice-alert app, rolled out to QR stands, stationery and merchandise.',
    outcome: 'A brand merchants trust at the counter',
    industry: 'FinTech & Payments', services: 'Logo, Brand Identity, Stationery, Merchandise', timeline: '3 weeks', year: '2026',
    overview: 'CashAlert is a real-time payment voice-alert app that helps merchants hear every payment the moment it lands. They needed an identity that feels trustworthy, fast and instantly recognisable at the counter.',
    challenge: 'FinTech brands often look generic or cold. CashAlert had to signal speed and security, and work equally well on a phone screen, a printed QR stand and a branded mug.',
    solution: 'A distinctive logo mark with a deep-purple palette, rolled out into a complete system: QR payment stands, business cards, stationery, bottles, mugs and ID cards.',
    results: [['Approval', 'Signed off in the first revision'], ['Reach', 'One look across screen, counter & merch'], ['System', 'Full guidelines for in-house use'], ['Print', 'Production-ready files delivered']],
    deliverables: ['Logo suite & guidelines', 'Colour & type system', 'QR payment stand', 'Business cards & stationery', 'Mug, bottle, notebook, ID card', 'Print & digital files']
  },
  {
    id: 'cashalert-app', client: 'CashAlert', title: 'Every payment, spoken in your language', cat: 'app',
    cover: img('cashalert-app-thumb.jpg'), gallery: ['Cashalert1.jpg', 'Cashalert2.jpg', 'Cashalert3.jpg', 'Cashalert4.jpg', 'Cashalert5.jpg', 'Cashalert6.jpg'].map(img),
    summary: 'Mobile app UI for the CashAlert payment voice-alert app, from onboarding to multilingual alerts.',
    outcome: 'Every payment, heard instantly',
    industry: 'FinTech & Payments', services: 'Mobile App UI/UX, App Icon, Splash', timeline: '3 weeks', year: 'Nov 2025',
    overview: 'Alongside the brand, we designed the CashAlert app itself: the screens a shopkeeper sees every day to confirm payments and hear voice alerts in their own language.',
    challenge: 'Merchants are busy and not always tech-first. The app needed large, glanceable states, minimal steps and language choice up front.',
    solution: 'A high-contrast UI with big payment states, a one-tap language picker and a calm, trustworthy palette carried over from the brand.',
    results: [['Speed', 'Full UI in 3 weeks'], ['Access', 'Multi-language alerts up front'], ['Handoff', 'Developer-ready Figma'], ['Consistency', 'Matches the brand system']],
    deliverables: ['App UI (iOS + Android)', 'App icon & splash screen', 'Onboarding & language flow', 'Payment history screens', 'Social launch templates', 'Figma handoff']
  },
  {
    id: 'bhaktitv', client: 'Bhakti TV', title: 'Devotion, designed for every generation', cat: 'app',
    cover: img('img-bhaktitv.jpg'), gallery: ['img-bhaktitv-1.jpg', 'img-bhaktitv-2.jpg', 'img-bhaktitv-3.jpg', 'img-bhaktitv-4.jpg', 'img-bhaktitv-5.jpg', 'img-bhaktitv-6.jpg'].map(img),
    summary: 'Mobile app design for a devotional audio and video platform with bhajans, mantras, kathas and Bhakti Reels.',
    outcome: 'Bhajans, kathas & reels in one calm app',
    industry: 'Media & Entertainment', services: 'Mobile App Design, UX Research', timeline: '6 weeks', year: 'Jun 2026',
    overview: 'Bhakti TV streams bhajans, mantras, aartis, kathas and short Bhakti Reels. They wanted an app that feels sacred and immersive, yet is simple enough for every age group.',
    challenge: 'Devotional apps often feel dated or cluttered. Our users ranged from young seekers to elderly devotees who use the app daily.',
    solution: 'A warm saffron-gold UI with clean content cards, an easy player, a short-video Reels feature and an onboarding flow that makes first-time users feel welcome.',
    results: [['Scope', 'Home, player, library, reels, profile'], ['Audience', 'Designed for all age groups'], ['System', 'Reusable component library'], ['Handoff', 'Developer-ready prototype']],
    deliverables: ['App UI (iOS + Android)', 'Home, player & library', 'Bhakti Reels short-video UI', 'Onboarding & profile', 'Component library', 'Figma prototype']
  },
  {
    id: 'bhaktilok', client: 'Bhaktilok', title: 'A sacred space in your pocket', cat: 'app',
    cover: img('img-bhaktilok-1.jpg'), gallery: ['img-bhaktilok-2.jpg', 'img-bhaktilok-3.jpg', 'img-bhaktilok-4.jpg', 'img-bhaktilok-6.jpg', 'img-bhaktilok-7.jpg'].map(img),
    summary: 'A saffron-and-cream app for mantras, bhajans, aartis, ringtones and spiritual alarms.',
    outcome: 'Daily devotion, from mantra to aarti',
    industry: 'Spiritual & Devotional', services: 'Mobile App Design, UX Research', timeline: '8 weeks', year: 'Jun 2026',
    overview: 'Bhaktilok brings mantras, bhajans, aartis, ringtones and spiritual alarms into one app. We created a warm, sacred UI that is easy for every generation.',
    challenge: 'Many sections, one peaceful experience. Content had to be easy to find without the app feeling busy, and support Hindi typography.',
    solution: 'A saffron-and-cream visual language rooted in Indian spiritual aesthetics, with distinct sections for Mantras, Bhajans, Aarti and Alarms and clear iconography.',
    results: [['Scope', 'App designed end-to-end'], ['Language', 'Hindi typography support'], ['Experience', 'Calm, focused navigation'], ['Review', 'Positive user feedback in testing']],
    deliverables: ['App UI (iOS + Android)', 'Mantra & aarti player', 'Spiritual alarm flow', 'Component library', 'Figma prototype']
  },
  {
    id: 'localservice-brand', client: 'Local Service Finder', title: 'From logo to toolbox, one trusted crew', cat: 'branding',
    cover: img('lsf-brand-1.jpg'), gallery: ['lsf-brand-2.jpg', 'lsf-brand-3.jpg', 'lsf-brand-4.jpg', 'lsf-brand-5.jpg', 'lsf-brand-6.jpg'].map(img),
    summary: 'Identity for a hyperlocal services platform, from logo to toolboxes and staff uniforms.',
    outcome: 'Trust from the office to the doorstep',
    industry: 'Local Services', services: 'Branding, Stationery, Merchandise', timeline: '4 weeks', year: 'Aug 2025',
    overview: 'Local Service Finder connects homeowners with trusted plumbers, electricians, cleaners and carpenters. The brand had to feel reliable to customers and something providers are proud to wear.',
    challenge: 'Local marketplaces often look generic and untrustworthy. This brand would live on phones, office stationery and on the field, on toolboxes and polo shirts.',
    solution: 'A complete system: logo and palette, business cards, letterhead, ID cards and lanyards, branded toolboxes and staff polos, consistent from office to doorstep.',
    results: [['Approval', 'Approved on first presentation'], ['Touchpoints', 'Office, field and digital'], ['Print', 'Production-ready stationery'], ['Merch', 'Toolbox & uniform designs']],
    deliverables: ['Logo & mark', 'Business cards', 'Letterhead & envelope', 'ID card & lanyard', 'Branded toolbox', 'Staff uniforms']
  },
  {
    id: 'localservice-web', client: 'Local Service Finder', title: 'Finding local help, minus the stress', cat: 'website',
    cover: img('lsf-web-thumb.jpg'), gallery: ['lsf-web-1.jpg', 'lsf-web-2.jpg', 'lsf-web-3.jpg', 'lsf-web-4.jpg', 'lsf-web-5.jpg', 'lsf-web-6.jpg'].map(img),
    summary: 'A multi-page website covering discovery, provider profiles, booking and payments.',
    outcome: 'Trusted local help, booked in minutes',
    industry: 'Hyperlocal & On-demand', services: 'Website UI/UX, Prototyping, Design System', timeline: '5 weeks', year: 'Sep 2025',
    overview: 'For the same platform, we designed the full website: service discovery, provider profiles, booking, secure payment, booking management and account settings.',
    challenge: 'Finding someone trustworthy at short notice is stressful. The site needed to make discovery, comparison and booking feel safe for a first-time visitor.',
    solution: 'Clear category pages, provider profiles with trust signals, a short booking-to-payment flow and a responsive design system shared across every page.',
    results: [['Scope', '6+ pages designed'], ['Flow', 'Booking & payment completed'], ['Approval', 'Approved on first presentation'], ['System', 'Responsive design system']],
    deliverables: ['Homepage & landing pages', 'Category & provider pages', 'Booking & payment flow', 'Bookings management', 'Account & settings', 'Responsive design system']
  },
  {
    id: 'picxel-brand', client: 'Picxel AI', title: 'Navy, amber and a brand built for AI', cat: 'branding',
    cover: img('PicxelAI1.2.jpg'), gallery: ['PicxelAI1.3.jpg', 'PicxelAI1.4.jpg', 'PicxelAI1.5.jpg', 'PicxelAI1.6.jpg'].map(img),
    summary: 'Navy-and-amber identity for an AI creator platform, across stationery and merch.',
    outcome: 'A premium face for AI creativity',
    industry: 'AI & Technology', services: 'Logo, Brand Identity, Stationery, Merchandise', timeline: '3 weeks', year: '2026',
    overview: 'Picxel AI is an AI-powered platform for creators and businesses. We built an identity that matches its technology: bold, modern and memorable, online and offline.',
    challenge: 'AI brands tend to look the same. Picxel needed a mark that stands out on a screen and still looks premium on a mug or folder.',
    solution: 'A distinctive mark with a navy-and-amber palette, rolled out across business cards, letterhead, notebooks, mugs, bottles and folders.',
    results: [['Approval', 'Signed off in the first revision'], ['System', 'Guidelines + colour & type'], ['Merch', 'Full stationery & merch kit'], ['Files', 'Print & digital ready']],
    deliverables: ['Logo suite & guidelines', 'Colour & type system', 'Business cards', 'Letterhead & stationery', 'Mug, bottle, notebook, folder', 'Print & digital files']
  },
  {
    id: 'picxel-app', client: 'Picxel AI', title: 'Turning photos into possibilities', cat: 'app',
    cover: img('picxel-app-thumb.jpg'), gallery: ['PicxelAI1.jpg', 'PicxelAI2.jpg', 'PicxelAI3.jpg', 'PicxelAI4.jpg', 'PicxelAI5.jpg', 'PicxelAI6.jpg'].map(img),
    summary: 'Product UI for an AI image-transformation app with 500+ premium templates.',
    outcome: 'Turn any photo into stunning visuals',
    industry: 'AI & Technology', services: 'Mobile App UI, Wireframing, Prototyping', timeline: '4 weeks', year: 'Feb 2026',
    overview: 'Picxel AI turns photos into polished visuals using 500+ templates. We designed the product UI to feel exciting and approachable for photographers and creators.',
    challenge: 'AI tools can feel intimidating. The interface had to show off the power of AI without losing the human, creative feel.',
    solution: 'An electric palette, generous before/after previews and a clean template browser that makes every transformation feel one tap away.',
    results: [['Scope', 'Product UI with 500+ previews'], ['Approval', 'Approved in the first revision'], ['Assets', 'App icon & social kit'], ['Handoff', 'Figma design system']],
    deliverables: ['Product UI screens', 'Template browser', 'App icon & assets', 'Social media kit', 'Figma design system']
  },
  {
    id: 'swagat', client: 'Swagat Stay', title: 'A PG search that feels like coming home', cat: 'app',
    cover: img('swagat-thumb.jpg'), gallery: ['img-swagat-1.jpg', 'img-swagat-2.jpg', 'img-swagat-3.jpg', 'img-swagat-4.jpg', 'img-swagat-5.jpg', 'img-swagat-6.jpg'].map(img),
    summary: 'Mobile app for a PG and rental-stay platform with smart search and simple booking.',
    outcome: 'Finding a PG stay, made stress-free',
    industry: 'Real Estate & Hospitality', services: 'Mobile App Design, UX Research', timeline: '6 weeks', year: 'Apr 2026',
    overview: 'Swagat Stay helps students and working professionals find PGs and rentals across India. The app had to feel warm, like finding a home, not just a room.',
    challenge: 'Searching for a stay is stressful and listings are overwhelming. Users needed fast filters and confidence before they book.',
    solution: 'Smart search with location filters, clear property cards with pricing up front, and a warm yellow-gold palette that feels familiar and trustworthy.',
    results: [['Testing', 'Booking flow validated with users'], ['Search', 'Clean search & filter UX'], ['Brand', 'Warm, trustworthy look'], ['Handoff', 'Ready for development']],
    deliverables: ['App UI (iOS + Android)', 'Search & filters', 'Booking & checkout', 'Component library', 'Figma prototype', 'App Store graphics']
  },
  {
    id: 'vydehi', client: 'Vydehi Institute of Medical Sciences', title: '30+ course brochures, one recognisable look', cat: 'graphic',
    cover: img('vydehi-thumb.jpg'), gallery: ['vydehi-cover.jpg', 'vydehi-page-2.jpg', 'vydehi-page-3.jpg', 'vydehi-page-4.jpg', 'vydehi-page-5.jpg'].map(img),
    summary: 'Admission brochures for 30+ allied-health and medical courses at a leading Bengaluru teaching hospital.',
    outcome: 'Helping students choose their career',
    industry: 'Healthcare Education', services: 'Brochure Design, Course Collaterals, Print-ready Files', timeline: 'Ongoing', year: '2026',
    overview: 'Vydehi Institute of Medical Sciences & Research Centre in Whitefield, Bengaluru offers a wide range of allied-health and medical programmes. For the 2026–27 admissions we designed the course collaterals: 30+ brochures, one for every course, from B.Sc Neuroscience Technology onwards.',
    challenge: 'Every course has a lot to say: eligibility, duration, career paths, global mobility, salary ranges, facilities and higher-study options. Students and parents need to find the essentials fast, and 30+ brochures still had to feel like one institution.',
    solution: 'We built a single brochure system in Vydehi maroon, cream and navy: a bold cover with the course name and admission year, a duration and eligibility strip, then icon-led pages for careers, skills, salary tables and facilities. Each new course drops into the same template, so the whole set stays consistent and quick to produce.',
    results: [['Scale', '30+ course brochures in one system'], ['Format', '5-page A4, print & digital ready'], ['Clarity', 'Duration and eligibility up front'], ['Consistency', 'One look across every course']],
    deliverables: ['Course brochure template', '30+ course brochures', 'Cover & admission design', 'Career & salary infographics', 'Print-ready PDFs', 'Digital versions for WhatsApp & web']
  },
  {
    id: 'thumbnails', client: 'Food & travel creators', title: 'Designed to win the one-second scroll', cat: 'graphic',
    cover: img('thumbnails1.jpg'), gallery: [img('thumbnails2.jpg')],
    summary: 'YouTube thumbnails and billboard creatives for food-content and travel-vlog creators.',
    outcome: 'Thumbnails that earn the click',
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
    { name: 'Namratha E', role: 'Co-Founder & Creative Director', img: img('about-namratha.jpg') }
  ],
  team: [
    { name: 'Praveen Devarakonda', role: 'Design Lead', img: img('about-praveen.jpg') },
    { name: 'Vignesh', role: 'Business Manager', img: img('about-vignesh.jpg') }
  ]
};

window.REVIEWS = [
  { name: 'Janagam Hemu', text: 'Very satisfied with Avora Brands. Great communication, professional service, and outstanding quality. The entire process was smooth and hassle-free. Would definitely recommend them to others.', color: '#E2475B' },
  { name: 'Devarakonda Janardhan', text: 'Great experience with Avora Brands. Professional team and quality work. Highly recommended.', color: '#2F6FD6' },
  { name: 'Sanjay K', text: 'I really liked the website\'s design and smooth user experience. It reflects professionalism and creativity. Wishing the Avora Brands team great success in helping businesses build strong digital identities.', color: '#7A4DD8' }
];

window.POSTS = [
 {
  "id": "diwali-gifting-plan",
  "title": "Planning Diwali Gifts for Your Team and Clients: A 4-Week Checklist",
  "cat": "Gifting",
  "excerpt": "Corporate gifting goes wrong when it starts late. A simple week-by-week plan for quantities, approvals, printing and delivery, from the person who manages our orders.",
  "author": "Vignesh",
  "role": "Business Manager",
  "date": "2026-10-06",
  "img": "images/post-diwali-gifting.jpg",
  "read": "5 min read"
 },
 {
  "id": "brand-identity",
  "title": "How to Build a Strong Brand Identity for Your Small Business",
  "cat": "Branding",
  "excerpt": "A consistent brand identity builds trust and recognition. A step-by-step guide to creating a brand that stands out in a crowded market.",
  "author": "Namratha E",
  "role": "Co-Founder & Creative Director",
  "date": "2026-07-28",
  "img": "images/post-brand-identity.jpg",
  "read": "8 min read"
 },
 {
  "id": "ux-mistakes",
  "title": "5 UX Mistakes That Are Hurting Your App's Retention",
  "cat": "UI/UX",
  "excerpt": "Retention starts at the first interaction. The most common UX mistakes in mobile apps, and how to fix them before they cost you users.",
  "author": "Reddy Pavan M",
  "role": "Founder & CEO",
  "date": "2026-07-22",
  "img": "images/post-ux-mistakes.jpg",
  "read": "6 min read"
 },
 {
  "id": "cmyk-vs-rgb",
  "title": "CMYK vs RGB: What Every Business Owner Must Know Before Printing",
  "cat": "Print",
  "excerpt": "Colours look different on screen and on paper. The difference, and why getting it wrong can ruin your printed materials.",
  "author": "Namratha E",
  "role": "Co-Founder & Creative Director",
  "date": "2026-07-10",
  "img": "images/post-cmyk.jpg",
  "read": "6 min read"
 },
 {
  "id": "colour-psychology",
  "title": "The Psychology of Colour in Logo Design",
  "cat": "Graphic Design",
  "excerpt": "Colours trigger emotions and influence buying decisions. How to choose the right palette for your logo, and what each colour says.",
  "author": "Reddy Pavan M",
  "role": "Founder & CEO",
  "date": "2026-07-05",
  "img": "images/post-colour.jpg",
  "read": "7 min read"
 }
];

window.JOBS = [
  { title: 'Graphic Design Intern', dur: '2–3 months', exp: 'Students & freshers', tools: 'Illustrator, Photoshop', where: 'Remote · India' },
  { title: 'UI/UX Design Intern', dur: '2–3 months', exp: 'Students & freshers', tools: 'Figma, prototyping', where: 'Remote · India' },
  { title: 'Social Media Design Intern', dur: '2–3 months', exp: 'Students & freshers', tools: 'Canva, Illustrator', where: 'Remote · India' },
  { title: 'Video Editing Intern', dur: '2–3 months', exp: 'Students & freshers', tools: 'Premiere Pro, After Effects', where: 'Remote · India' },
  { title: 'Brand Identity Intern', dur: '2–3 months', exp: 'Students & freshers', tools: 'Illustrator, typography', where: 'Remote · India' }
];

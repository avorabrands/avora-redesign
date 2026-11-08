# Avora Brands — 2026 redesign (Diwali edition)

Static site: plain HTML + one CSS file + two JS files. No build step.

## Pages
| File | Page |
|---|---|
| `index.html` | Home — Diwali poster hero, gifting preview, services, work, process, reviews, founder, FAQ, quote form |
| `diwali.html` | Diwali gifting landing — 3 hampers, live hamper builder, personalised gifts, packaging, FAQ |
| `design.html` | Design Studio — 6 services, packages, work, process, FAQ |
| `print.html` | Print & Merch — best-seller prices, full catalogue (7 categories), process, FAQ |
| `work.html` / `case.html?p=<id>` | 12 case studies (one template, content in `assets/js/data.js`) |
| `about.html` | Story, values, founders, team, milestones, locations |
| `blog.html` / `post.html?p=<id>` | Insights page + 5 articles (Praveen's 2 removed, Vignesh's Diwali checklist added) (bodies in `assets/js/posts-content.js`) |
| `careers.html` | Culture, open roles, internship, application form |
| `kids.html` | Little Makers by Avora (kids store): playground (doodle → T-shirt/mug/frame/tote, name puzzle, storybook cover), age filters, 11 creative kits/personalised gifts (list in the page script), drawing-to-toy, folk art kits, parents section. Orders go as a WhatsApp list. |
| `contact.html` | Quote form, contact cards, map, FAQ |

All forms open WhatsApp (+91 90194 40645) with the details pre-filled, so there's no backend to run.

## Edit content
- Projects, team, reviews, posts, jobs, phone/email/Diwali date: `assets/js/data.js`
- Colours, fonts, spacing: tokens at the top of `assets/css/site.css`
- Header, footer, Diwali logo: `assets/js/site.js`

## Please confirm before going live
- [ ] Hamper names and contents (Deepam Box / Utsav Hamper / Lakshmi Treasure) match what you can actually supply
- [ ] Design package contents (Starter Brand / Business Launch / Growth Partner)
- [ ] Rewritten founder story on About matches Pavan's voice
- [ ] Milestone dates on About (taken from case-study years)
- [ ] Switch to a domain email (hello@avorabrands.in) in `data.js`
- [ ] After Diwali: change hero/announcement back (set `SITE.diwali` and swap the hero copy)

## Preview locally
```bash
python3 serve.py 5199
```
(run from the parent folder), then open http://localhost:5199

## Images
All 140 visuals from the live site are in `images/`, resized to max 1,600 px (about 33 MB instead of 105 MB), so the site no longer depends on avorabrands.in being online.
- Local Service Finder files were renamed (no spaces): `lsf-brand-1..6.jpg`, `lsf-web-1..6.jpg`; `desktop view.jpg` became `desktopview.jpg`.
- Every photo was checked against its section; a few mismatches carried over from the live site were corrected (e.g. Diwali "Photo mugs & bottles" now shows personalised mugs/bottles, "Canvas prints" shows the canvas photo).
- Wanderly Travels has only one real visual on the live site (`img-social.jpg`), so its case study shows that cover and no gallery. Add more Wanderly work to `gallery` in `assets/js/data.js` when you have it.
- No greeting-card photo exists yet; the Diwali "Greeting cards" tile uses an icon until you add one.

## Newsletter (footer "Email for monthly tips")
The form uses FormSubmit (free, no backend). On each sign-up:
- the subscriber gets a welcome email straight away, and
- you get a "New newsletter subscriber" email at `SITE.newsletterInbox` (`assets/js/data.js`).

**One-time setup:** the very first sign-up sends an activation email from FormSubmit to that inbox. Open it and click **Activate**; until then no emails go out. If you change the inbox address, activate again.

## Internship applications (Careers page)
The Careers form sends each application by email through the same FormSubmit inbox (`SITE.newsletterInbox`). The subject is "Internship application: <role> — <name>", Reply goes straight to the applicant, and the applicant gets a confirmation email. It needs the same one-time FormSubmit activation as the newsletter.

## Print catalogue prices
Every product in the Print page catalogue shows an indicative price, unit and minimum quantity (the `PRICE` list in `print.html`). Prices were set slightly below typical 2026 Indian online print rates; the live-site prices (₹3 card, ₹19 letterhead, ₹50 brochure, ₹1,850 standee) are kept as they were. **Please review every price before going live.** Format: `name: [price per unit in ₹, unit, minimum qty, step]`.

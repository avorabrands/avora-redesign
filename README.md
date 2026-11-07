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
| `blog.html` / `post.html?p=<id>` | Journal + all 6 existing articles (bodies in `assets/js/posts-content.js`) |
| `careers.html` | Culture, open roles, internship, application form |
| `contact.html` | Quote form, contact cards, map, FAQ |

All forms open WhatsApp (+91 90194 40645) with the details pre-filled, so there's no backend to run.

## Edit content
- Projects, team, reviews, posts, jobs, phone/email/Diwali date: `assets/js/data.js`
- Colours, fonts, spacing: tokens at the top of `assets/css/site.css`
- Header, footer, Diwali logo: `assets/js/site.js`

## Please confirm before going live
- [ ] Hamper names and contents (Deepam Box / Utsav Hamper / Lakshmi Chest) match what you can actually supply
- [ ] Design package contents (Starter Brand / Business Launch / Growth Partner)
- [ ] Sahithi's and Sai Srinivas's real job titles (currently "Designer")
- [ ] Rewritten founder story on About matches Pavan's voice
- [ ] Milestone dates on About (taken from case-study years)
- [ ] Switch to a domain email (hello@avorabrands.in) in `data.js`
- [ ] Compress images: several originals are 4,000–5,000 px wide; export ~1,600 px WebP for speed
- [ ] After Diwali: change hero/announcement back (set `SITE.diwali` and swap the hero copy)

## Preview locally
```bash
python3 serve.py 5199
```
(run from the parent folder), then open http://localhost:5199

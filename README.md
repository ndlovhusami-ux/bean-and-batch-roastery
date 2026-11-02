# Bean & Batch Roastery — Website Project

## Project Title
Bean & Batch Roastery Website (WEDE5020 Portfolio of Evidence)

## Student Information
- Name: THEO MAHLANGU
- Student Number: ST10480653
- Module: WEDE5020
- Group/Class: GROUP4

## Live Site and Repository
- Live website (GitHub Pages / Netlify): [paste your live URL here]
- GitHub Classroom repository: [paste your repository URL here]
- YouTube video: [paste your YouTube link here]

## Contents
1. [Project Overview](#project-overview)
2. [Website Goals and Objectives](#website-goals-and-objectives)
3. [Key Features and Functionality](#key-features-and-functionality)
4. [Timeline and Milestones](#timeline-and-milestones)
5. [File Structure](#file-structure)
6. [Sitemap](#sitemap)
7. [SEO Documentation](#seo-documentation)
8. [Changelog](#changelog)
9. [Responsive Testing Evidence](#responsive-testing-evidence)
10. [Deployment](#deployment)
11. [References](#references)

## Project Overview
A five-page marketing and lead-generation website for Bean & Batch Roastery, a
small-batch specialty coffee roaster and café. The site introduces the brand,
lists coffee and menu offerings, and gives customers, wholesale partners, and
event clients a way to get in touch.

## Website Goals and Objectives
- Provide a professional, always-on presence beyond social media.
- Communicate sourcing, roasting, and product information clearly.
- Generate wholesale, catering, and general product enquiries.
- Make store hours and locations easy to find.
- Be discoverable through search engines (Part 3: SEO).

## Key Features and Functionality
- Responsive 5-page site: Home, About Us, Menu & Beans, Enquiry, Contact.
- Sticky, accessible navigation with a mobile toggle menu.
- Custom "roast meter" component showing where each bean sits from light to
  dark roast.
- **Part 3 additions:**
  - Dynamic product listings loaded with JavaScript (`fetch` from a JSON file),
    with live search, roast-level filter, and sorting (price / name / roast).
  - Interactive elements: FAQ accordion (Enquiry), tabs (About), and a
    modal for product details (Menu & Beans).
  - Interactive Leaflet map on the Contact page showing both café locations.
  - Image gallery with a lightbox (keyboard accessible).
  - CSS and JavaScript animations and transitions (scroll reveal, hover states).
  - Validated Enquiry form (HTML5 + JavaScript) that returns an estimated cost
    and availability message.
  - Validated Contact form that compiles the message into an email addressed
    to the recipient defined in the code.
  - SEO: meta tags, structured data, `robots.txt`, `sitemap.xml`.

## Timeline and Milestones
See `Website_Project_Proposal_BeanAndBatchRoastery.docx`, Section 7, for the
full timeline. Milestones follow the module's Part 1–3 submission schedule.

## File Structure
```
bean-and-batch-roastery/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── content-research-and-sourcing.md
├── css/
│   └── style.css
├── js/
│   ├── main.js          (navigation, animations, accordion, tabs, modal)
│   ├── products.js      (dynamic products, search, filter, sort)
│   ├── gallery.js       (gallery and lightbox)
│   ├── map.js           (Leaflet map)
│   └── forms.js         (validation, AJAX, email compilation)
├── data/
│   ├── products.json
│   └── pricing.json
└── images/
    └── (hero, beans and gallery images with descriptive file names)
```

## Sitemap
```
Home (index.html)
├── About Us (about.html)
├── Menu & Beans (products.html)
├── Enquire (enquiry.html)
└── Contact (contact.html)
```

## SEO Documentation

### On-page SEO
| Area | What was done |
|------|---------------|
| Keyword research | Target keywords: *specialty coffee Johannesburg*, *coffee roastery Rosebank*, *small-batch roasted coffee*, *single-origin coffee beans*, *wholesale coffee supplier*, *coffee catering Johannesburg*. Mapped one primary keyword to each page (see table below) and used them naturally in headings and body text. |
| Title tags and meta descriptions | Unique, descriptive `<title>` and `<meta name="description">` on every page (under about 60 and 160 characters respectively). |
| Header tags | One `<h1>` per page, with `<h2>` and `<h3>` used in logical order. |
| Image optimisation | Descriptive file names (e.g. `ethiopia-yirgacheffe-light-roast.jpg`), meaningful `alt` text, `width`/`height` set, `loading="lazy"`, and responsive `srcset`. |
| URL structure | Short, lowercase, descriptive file names (`products.html`, `enquiry.html`). |
| Internal linking | Navigation, footer links, and contextual calls to action between pages (e.g. Menu & Beans to Enquiry). |
| Mobile-friendliness | Viewport meta tag, three responsive breakpoints, and tap-friendly controls. |

| Page | Primary keyword |
|------|-----------------|
| index.html | specialty coffee Johannesburg |
| about.html | small-batch coffee roastery |
| products.html | single-origin coffee beans |
| enquiry.html | wholesale coffee supplier |
| contact.html | coffee roastery Rosebank |

### Off-page SEO (strategy)
- **Backlinks:** Approach local food bloggers, Johannesburg café directories, and
  wholesale customers' websites to link to Bean & Batch; list the business in
  South African coffee and tourism directories.
- **Social media:** Link the website from Instagram and Facebook bios and share
  new roast releases with a link back to the Menu & Beans page.
- **Local SEO:** Claim and complete a Google Business Profile for each café
  (Rosebank and Melville), keep name, address, and phone consistent across the
  site and listings, and include `LocalBusiness` structured data on the Contact page.

### Additional SEO requests
| Item | What was done |
|------|---------------|
| robots.txt | Added to the site root; allows all crawlers and points to the sitemap. |
| sitemap.xml | Added to the site root; lists all five pages. |
| Page speed | Deferred JavaScript, lazy-loaded images, `preconnect` for fonts, and responsive image sizes. |
| Security | `rel="noopener"` on external links, no inline event handlers, user input validated and escaped before it is displayed, and external libraries loaded over HTTPS. |

## Changelog

> Format used throughout: **Date | Area | Change**. Part 3 dates below are
> placeholders — replace each with the real date the change was committed.

### Part 1
| Date | Area | Change |
|------|------|--------|
| [original date] | Structure | Initial project structure, sitemap, and wireframes created; file/folder structure set up (index, about, products, enquiry, contact pages plus css/js/images folders). |
| [original date] | HTML | Semantic HTML5 structure and content added for all 5 pages (header, nav, main, section, footer; forms on Enquiry and Contact). |
| [original date] | Repository | Repository committed and pushed to GitHub with initial README. |

### Part 2 — Feedback corrections from Part 1
| Date | Area | Change |
|------|------|--------|
| 2026-09-16 | Sitemap | Confirmed the Sitemap section is complete and kept up to date (flagged as missing in Part 1 feedback). |
| 2026-09-16 | References | Expanded the References section with full, correctly formatted entries for every external source used. |
| 2026-09-16 | Content research | Reviewed and tightened `content-research-and-sourcing.md` so each page's content sourcing is clearly explained. |
| 2026-09-16 | Commits | Began committing smaller, descriptive changes to address "few commits, lacking descriptions" feedback. |

### Part 2 — CSS styling and responsive design
| Date | Area | Change |
|------|------|--------|
| 2026-09-16 | CSS | Added `css/style.css` with custom properties for colour palette, spacing, and border-radius. |
| 2026-09-16 | Typography | Established font families (Fraunces/Inter), `clamp()` sizing, line-height, and a `box-sizing` reset. |
| 2026-09-16 | Layout | Built layouts with CSS Grid (`.grid`, `.grid-2`, `.grid-3`) and Flexbox. |
| 2026-09-16 | Styling | Applied colour, borders, shadows, and `:hover`, `:focus-visible`, `:active` states. |
| 2026-09-16 | Responsive | Implemented desktop (1025px+), tablet (761–1024px), and mobile (≤760px) breakpoints. |
| 2026-09-16 | Units | Used relative units (`rem`, `em`, `%`, `vw`, `clamp()`) throughout. |
| 2026-09-16 | Images | Added responsive images with `<picture>` and `srcset`/`sizes` on Home and Menu & Beans. |
| 2026-09-16 | Testing | Tested at desktop, tablet, and mobile widths using DevTools. |

### Part 3 — Feedback corrections from Part 2
Part 2 scored 90/100. The marks were lost on the four GitHub criteria below, so
each one was addressed directly.

| Date | Area | Feedback received | Change made |
|------|------|-------------------|-------------|
| [date] | Commits (2/5) | "Few commits made, lacking descriptions." | Committed each feature separately (more than 15 commits in Part 3) using descriptive messages in the form *"Add lightbox gallery to About page"* rather than generic messages such as "update". |
| [date] | README (4/5) | "Minor improvements in consistency, detail, or implementation." | Restructured the README with a contents list, added live-site and repository links, a SEO Documentation section, a Deployment section, and an updated file structure. |
| [date] | Changelog (4/5) | "Minor improvements in consistency, detail, or implementation." | Rewrote every changelog table in one consistent **Date / Area / Change** format and added an "Area" label to each entry so edits are easy to trace. |
| [date] | References (4/5) | "Minor improvements in consistency, detail, or implementation." | Replaced generic entries with page-specific sources, and made every entry follow the same Harvard format with a URL and access date. |

### Part 3 — JavaScript functionality
| Date | Area | Change |
|------|------|--------|
| [date] | Dynamic content | Moved product data into `data/products.json` and added `js/products.js`, which loads it with `fetch()` and builds the product cards using DOM methods. |
| [date] | Search, filter, sort | Added a search box, roast-level filter, and sort control (price, name, roast level) to the Menu & Beans page; results update as the user types. |
| [date] | Interactive elements | Added a FAQ accordion on the Enquiry page (using `aria-expanded`), tabs on the About page, and a native `<dialog>` modal for product details, all keyboard accessible. |
| [date] | Map | Added a Leaflet map with OpenStreetMap tiles and markers for the Rosebank and Melville cafés on the Contact page, replacing the Google Maps iframes. |
| [date] | Gallery | Added a responsive image gallery with a lightbox (open on click, close with Escape or the close button, previous/next with arrow keys). |
| [date] | Animations | Added CSS transitions on cards and buttons and an `IntersectionObserver` scroll-reveal animation. |
| [date] | DOM manipulation | Used `createElement`, `classList`, and event delegation to build and update page content dynamically. |

### Part 3 — Forms and validation
| Date | Area | Change |
|------|------|--------|
| [date] | Enquiry form | Added HTML5 validation attributes (`required`, `pattern`, `minlength`, `maxlength`) and JavaScript validation for name, email, South African phone number, and message length. |
| [date] | Enquiry response | After validation, form data is processed asynchronously with `fetch()` (AJAX; rates are loaded from `data/pricing.json`, with an optional POST to a form endpoint) and the page displays an estimated cost and availability message based on the enquiry type, without reloading the page. |
| [date] | Contact form | Added phone number and message-type fields; validated input is compiled into an email (`mailto:`) addressed to the recipient set in `forms.js`. |
| [date] | Error handling | Added inline error messages beside each invalid field, linked with `aria-describedby`, and focus moved to the first invalid field. |

### Part 3 — SEO
| Date | Area | Change |
|------|------|--------|
| [date] | Titles and meta | Rewrote the title and meta description on every page around its primary keyword. |
| [date] | Headings | Checked that each page has one `<h1>` and a logical heading order. |
| [date] | Images | Renamed images with descriptive file names and improved `alt` text. |
| [date] | Structured data | Added `LocalBusiness` JSON-LD to the Contact page and Open Graph tags to all pages. |
| [date] | robots.txt | Created `robots.txt` in the site root. |
| [date] | sitemap.xml | Created `sitemap.xml` listing all five pages. |
| [date] | Performance and security | Deferred scripts, lazy-loaded images, and reviewed external links and form handling for security. |

### Part 3 — Deployment
| Date | Area | Change |
|------|------|--------|
| [date] | Repository | Pushed the final code to the remote GitHub repository. |
| [date] | Hosting | Deployed the site to [GitHub Pages / Netlify] and tested all pages on the live URL. |

## Responsive Testing Evidence
Tested using browser DevTools' device toolbar (Chrome/Edge) at the following
widths, representing the three breakpoints defined in `css/style.css`:
- Desktop — 1280px and 1440px
- Tablet — 820px (iPad) and 1024px
- Mobile — 375px (iPhone) and 360px (Android)

[Add your screenshots here, e.g. `![Home page at 375px](images/screenshots/home-375.png)`]

## Deployment
- **Platform:** [GitHub Pages / Netlify]
- **Live URL:** [paste your live URL here]
- **Steps:** [e.g. Repository Settings → Pages → Deploy from branch `main`, folder `/ (root)`]
- **Post-deployment checks:** All five pages load, navigation works, the map and
  gallery display, the forms validate, and `robots.txt` and `sitemap.xml` are reachable.

## References
Page-specific references (images, fonts, icons) are also noted in the HTML
comments where they are used.

- Agafonkin, V. (2026) *Leaflet: an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: [31 October 2026]).
- Google Fonts (2026) *Fraunces and Inter*. Available at: https://fonts.google.com/ (Accessed: [date accessed]).
- Google Search Central (2026) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: [31 October 2026]).
- Google Search Central (2026) *Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: [31 October 2026]).
- Google Search Central (2026) *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: [31 October 2026]).
- Google Search Central (2026) *Local business structured data*. Available at: https://developers.google.com/search/docs/appearance/structured-data/local-business (Accessed: [31 October 2026]).
- GitHub Pages Documentation (2026) *GitHub Pages*. Available at: https://pages.github.com/ (Accessed: [31 October 2026]).
- MDN Web Docs (2026) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: [31 October 2026]).
- MDN Web Docs (2026) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images (Accessed: [31 October 2026]).
- MDN Web Docs (2026) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: [31 October 2026]).
- MDN Web Docs (2026) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: [date accessed]).
- MDN Web Docs (2026) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: [31 October 2026]).
- MDN Web Docs (2026) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: [31 October 2026]).
- OpenStreetMap contributors (2026) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed: [31 October 2026]).
- Sitemaps.org (2026) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: [31 Octobr 2026]).
- Unsplash (2026) *[Photo title]* by [Photographer name]. Available at: [exact photo URL] (Accessed: [31 October 2026]). *(Add one entry per image used.)*

# Ragulbabu & Lydiya — standalone wedding invitation

The finished single file is `../output/site/Ragulbabu-Lydiya-Wedding.html` (about 22.0 MB). It contains the styles, JavaScript, fonts, artwork, couple illustration, and all three invitation PDFs. No installation or build is needed to view that file in a modern browser. The directions link opens Google Maps and needs an internet connection.

The design follows the final English and Tamil printed invitations: 7 January 2027, 4:00 PM onwards, Wedding & Reception, New Life Celebration Center (NLCC), Pallavaram, Chennai. Qualifications, employers, family names, and respectful Tamil titles are included. The live Vercel website has not been changed.

The latest content revision removes “Late” from Kesavan, keeps “(Late)” after Vasugi in both languages, and uses “Mr. & Mrs. Lordson Joshua and family” with matching Tamil titles. The Tamil Rakeshbabu line uses the English title “Vice President”. The Tamil parents fit on one line, the invitation sentence uses two wider lines, and the couple names have adjusted vertical spacing. “Neurealm Pvt Ltd” remains the bride’s employer. The family welcome text uses regular weight. The printed invitation’s top cross and the site’s vector crosses are red.

The PDF names match the website: Great Vibes for English, Noto Sans Tamil for Tamil, and Cormorant Garamond Italic for the gold ampersand. These fonts are embedded directly as vector text from `dist/assets/fonts/font-8.ttf`, `font-9.ttf`, and `font-0.ttf`, with native kerning. All three PDF downloads and both invitation previews in the standalone HTML contain this latest font revision.

## Experience

- Miniature anime characters and a miniature floral ribbon are confined to the church pathway; the building remains the dominant image. The background reserves the full navigation height plus breathing room, keeps the whole building visible while bringing the entrance slightly closer to the foreground, and uses separate portrait artwork for phones. On wide laptops, the illustration sits to the right and fades into the paper background at its left edge. The illuminated cross anchor is recalculated for each artwork, and the miniature vignette follows the projected pathway center. The character pair is about 25% larger at the marked 593 × 763 size, with fixed feet on the pathway. Its upper silhouette can overlap the entrance slightly, while the church remains dominant. The church artwork is enlarged subtly to shorten the visual gap to the couple without hiding its roof. Both the ribbon width and its position are projected from the same walkway geometry. Scrolling closes illustrated scissors and dissolves the intact ribbon into cut ends resting beside the side bouquets. The couple crossfades to a joyful smile and thumbs-up without changing position or scale. Only after the characters have faded out does the camera move toward the cross and reveal the matching anime flowers. Phone text uses a readable scale: most labels are 11–12 pixels, event details and employers 14 pixels, and body text 16 pixels. The opening reserves extra space below the miniature couple for its larger scroll hint. The scissors are also a keyboard-accessible tap target for a guided entrance. English/Tamil labels, touch-specific wording and reduced motion are supported.
- Fresh ivory, teal, magenta, gold, lime, yellow, and white from the printed invitation and bouquet reference.
- English/Tamil language switch, mobile menu, and a reduced-animation option that also respects the device setting.
- The mobile opening stays pinned to the viewport while guests scroll, then releases into the rest of the invitation. Its height follows the visible browser area, while the animation's scroll distance stays independent of the address bar opening or closing. Artwork measurements use the rendered stage rather than a separate window height, and resize updates are batched into animation frames.
- The couple section and its enlarged preview use the previous watercolor/gouache bouquet illustration. The miniature opening scene keeps its anime characters and happy reaction keyframe.
- Wedding countdown, calendar download, venue directions, and the latest English, Tamil, and bilingual PDF downloads.
- Native sharing includes the public website link and invitation details; otherwise both are copied. No RSVP backend or guest data collection is included.
- A tiny anime panda peeks from behind the footer flowers and waves hello. The greeting links to `https://vijay.devquery.in/` in a new tab. Its speech bubble stays above the foliage, supports English/Tamil, and remains clickable across mobile and desktop layouts. Its paw rotates continuously with eased timing while its head and body remain still. The wave plays three gentle cycles on reveal and repeats on hover or keyboard focus; reduced motion shows a still panda. The greeting and panda are smaller than the original author cameo.

## Editable source

`dist/index.html`, `dist/styles.css`, `dist/app.js`, and `dist/fonts.css` are the editable version. Run `python3 build-standalone.py` from this directory to rebuild the single file. The same bundle is also written to `dist/standalone.html` for local preview. `dist/qa.html` is a local responsive testing harness, not part of the standalone deliverable.

For a local preview, serve `dist/` using a static HTTP server and open `standalone.html`. The app preview was tested through localhost; direct `file://` navigation is blocked by the app browser’s protocol policy. The packaged HTML contains no external scripts, stylesheets, font requests, or local asset references.

## Deploy to Vercel

Deploy this `wedding-site` directory. Its `vercel.json` selects the Other framework preset, skips the build step, and serves the existing `dist/` directory. The home page is `dist/index.html`; artwork, fonts and the latest invitation PDFs are included in `dist/assets/`. No dependency installation or environment variables are required.

If importing the `wedding-site` repository, leave Vercel's Root Directory as `.`. If importing its parent `Invitation` directory instead, set Root Directory to `wedding-site`. See [Vercel's static-site build settings](https://vercel.com/docs/builds/configure-a-build#skip-build-step).

## Sharing preview

The page delivers its title, description, canonical URL, Open Graph tags, and large-image Twitter Card tags directly in the initial HTML, without JavaScript. The 1200 × 630 JPEG in `dist/assets/wedding-social-preview-v1.jpg` matches the invitation and uses the existing couple illustration, church, flowers, red cross, names, date, time, and venue. Editable artwork is in `design/share-card.html` (serve the project directory to view it). Metadata follows the [Open Graph protocol](https://ogp.me/).

The configured public URL is `https://wedding-invitation-sigma-roan.vercel.app/`. If the domain changes, update the absolute URLs in `dist/index.html` and rebuild the standalone file. The Share button reads this canonical URL. The share image deliberately stays a public HTTPS URL in both versions; social crawlers cannot use an offline HTML file or an embedded data URI as a link preview.

Redeploy the `wedding-site` folder before checking shares from the public URL. Individual apps control how much of the card they show and may retain an earlier cached preview; the metadata does not force an image card in every Instagram surface. The deployed image endpoint must remain publicly readable without sign-in. For later artwork revisions, change the versioned JPEG filename and its metadata URLs to avoid reusing a cached image.

## Artwork and sources

The anime church, couple, floral ribbon, bouquet, and venue illustration were made with the built-in ImageGen tool. The opening now uses a coherent cel-shaded anime art direction for every illustrated layer; originals and the prompt set are saved in `design/anime-*.png` and `design/anime-scene-prompts.txt`. The church and arena are artistic renderings based on the supplied references. The anime couple is based on the new user-supplied bouquet photo, with recognizable facial features, matching clothing and a welcoming hand gesture. The character art has actual transparency and complete feet. The transparent illustration is fitted inside the portrait card and enlarged preview; there is no photograph option.

- `dist/assets/anime-church-narrow-wide.webp` — landscape church with narrower pedestrian path; original in `design/anime-church-narrow-wide.png`.
- `dist/assets/anime-church-narrow-phone.webp` — portrait framing showing the whole church and narrow pathway on phones; original in `design/anime-church-narrow-phone.png`.
- `dist/assets/anime-church.webp` — previous anime church background, retained as a reference.
- `dist/assets/anime-couple.webp` — new full-body anime characters preserving the supplied faces and outfits; original in `design/anime-couple.png`.
- `dist/assets/anime-floral-ribbon.webp` — intact anime floral ribbon; original in `design/anime-floral-ribbon.png`.
- `dist/assets/anime-ribbon-cut.webp` — cut ribbon ends resting at the side bouquets; original in `design/anime-ribbon-cut.png`.
- `dist/assets/anime-couple-happy.webp` — aligned happy expression and thumbs-up keyframe; original in `design/anime-couple-happy.png`.
- `dist/assets/anime-bouquet.webp` — matching anime flowers for the welcome reveal; original in `design/anime-bouquet.png`.
- `dist/assets/church-front.webp` — previous church rendering retained as a reference.
- `dist/assets/bouquet.webp` — transparent floral arrangement using the supplied white lilies, yellow and magenta chrysanthemums, lime buttons, and green leaves; original in `design/bouquet-original.png`.
- `dist/assets/venue-illustration.webp` — arena and tower on green lawn with a pathway; original in `design/venue-original.png`.
- `dist/assets/couple-bouquet-illustration.webp` — the default watercolor/gouache portrait based on the new bouquet photo; full-resolution transparent PNG in `design/couple-bouquet-illustration.png`, made with the built-in ImageGen tool.
- `dist/assets/couple-bouquet-cutout.webp` — intermediate photographic cutout used to create the illustration; full-resolution transparent PNG in `design/couple-bouquet-cutout.png`, made with the built-in ImageGen tool.
- `dist/assets/couple-original.webp` — previous invitation photograph, retained as a reference.
- `dist/assets/footer-panda.webp` — transparent anime panda created with built-in ImageGen. Original artwork and prompt are in `design/footer-panda.png` and `design/footer-panda-prompt.txt`. Two CSS masks separate the static body and smoothly rotating paw; the original pixels are preserved. The previous author sprite and portrait references are retained in `design/` but are no longer used or embedded in the page.

The complete image prompt set is in `design/image-prompts.txt` and `design/couple-cutout-prompt.txt`, `design/couple-bouquet-cutout-prompt.txt`, and `design/couple-bouquet-illustration-prompt.txt`. Original references remain in `../output/assets/` and `../website-references/`.

Fonts are Cormorant Garamond, Great Vibes, DM Sans, and Noto Sans Tamil. Their SIL Open Font Licenses are saved in `design/*-OFL.txt` and included inside the standalone HTML.

## Verification

- JavaScript syntax checked with Node.
- Panda footer reviewed at 390 × 844 and 1366 × 768; larger event text reviewed at 390 × 844, and larger Tamil welcome text fits 320 × 667 without horizontal overflow. The static panda body and eased paw animation were checked separately. The final standalone embeds the panda and no longer embeds the author portrait sprite. The call-to-action points to the same portfolio; reduced motion disables the wave.
- Mobile scrolling reviewed at 390 × 744 and 390 × 820: the stage stays at the top during the first ribbon-cut scroll, characters change expression without moving, the scene releases at its end, and reverse scrolling pins it again. Reduced motion still opens directly to the floral welcome. A focused check of the actual positioning and painting functions also confirmed unchanged animation progress when only the browser toolbar height changes. Physical Android/iOS toolbar behavior requires checking the redeployed page on a phone.
- Laptop pathway placement visually reviewed at 1366 × 768. The actual positioning function was also checked at 1280 × 720, 1440 × 900, 1536 × 864, 1920 × 1080, 2560 × 1440, 1024 × 893, 390 × 844, and 320 × 667: both feet remain on the visible walkway. The later couple-size adjustment was checked at 320 × 667, 390 × 844, 593 × 763, 760 × 900, 1024 × 768, 1366 × 768, 1440 × 900, and 1920 × 1080; any overlap above the entrance is limited to 18 pixels.
- Ribbon interaction, cross zoom, floral reveal, English/Tamil switch, motion toggle, mobile menu, and dialog open/Escape-close checked in the browser.
- Latest bilingual PDF downloaded from the standalone bundle and matched byte for byte against the current combined PDF. All three embedded PDFs and both previews match their latest printed sources.
- Calendar downloaded and verified for 7 January 2027 at 16:00 IST; calendar line folding checked.
- No horizontal overflow or broken loaded images in the packaged app preview. Embedded asset decoding checked.
- Native share destinations and external Google Maps navigation were not submitted during QA.

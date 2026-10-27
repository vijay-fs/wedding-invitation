# Ragulbabu & Lydiya — standalone wedding invitation

The finished single file is `../output/site/Ragulbabu-Lydiya-Wedding.html` (about 19.7 MB). It contains the styles, JavaScript, fonts, artwork, couple illustration, and all three invitation PDFs. No installation or build is needed to view that file in a modern browser. The directions link opens Google Maps and needs an internet connection.

The design follows the final English and Tamil printed invitations: 7 January 2027, 4:00 PM onwards, Wedding & Reception, New Life Celebration Center (NLCC), Pallavaram, Chennai. Qualifications, employers, family names, and respectful Tamil titles are included. The live Vercel website has not been changed.

The latest content revision removes “Late” from Kesavan, keeps “(Late)” after Vasugi in both languages, and uses “Mr. & Mrs. Lordson Joshua and family” with matching Tamil titles. The Tamil Rakeshbabu line uses the English title “Vice President”. The Tamil parents fit on one line, the invitation sentence uses two wider lines, and the couple names have adjusted vertical spacing. “Neurealm Pvt Ltd” remains the bride’s employer. The family welcome text uses regular weight. The printed invitation’s top cross and the site’s vector crosses are red.

The PDF names match the website: Great Vibes for English, Noto Sans Tamil for Tamil, and Cormorant Garamond Italic for the gold ampersand. These fonts are embedded directly as vector text from `dist/assets/fonts/font-8.ttf`, `font-9.ttf`, and `font-0.ttf`, with native kerning. All three PDF downloads and both invitation previews in the standalone HTML contain this latest font revision.

## Experience

- Scroll toward the illuminated church cross, then through a growing cross into a floral welcome.
- Fresh ivory, teal, magenta, gold, lime, yellow, and white from the printed invitation and bouquet reference.
- English/Tamil language switch, mobile menu, and a reduced-animation option that also respects the device setting.
- The new watercolor illustration from the bouquet photo is the only couple portrait, with a larger preview.
- Wedding countdown, calendar download, venue directions, and the latest English, Tamil, and bilingual PDF downloads.
- Native sharing when supported; otherwise the invitation text is copied. No RSVP backend or guest data collection is included.

## Editable source

`dist/index.html`, `dist/styles.css`, `dist/app.js`, and `dist/fonts.css` are the editable version. Run `python3 build-standalone.py` from this directory to rebuild the single file. The same bundle is also written to `dist/standalone.html` for local preview. `dist/qa.html` is a local responsive testing harness, not part of the standalone deliverable.

For a local preview, serve `dist/` using a static HTTP server and open `standalone.html`. The app preview was tested through localhost; direct `file://` navigation is blocked by the app browser’s protocol policy. The packaged HTML contains no external scripts, stylesheets, font requests, or local asset references.

## Artwork and sources

The church, bouquet, venue illustration, and couple illustration cutout were made with the built-in ImageGen tool. The church and arena are artistic renderings based on the supplied references. The displayed illustration is based on the new user-supplied bouquet photo, with the room and other people removed. The transparent illustration is fitted inside the portrait card and enlarged preview; there is no photograph option.

- `dist/assets/church-front.webp` — front-facing church rendering; original in `design/church-front-original.png`.
- `dist/assets/bouquet.webp` — transparent floral arrangement using the supplied white lilies, yellow and magenta chrysanthemums, lime buttons, and green leaves; original in `design/bouquet-original.png`.
- `dist/assets/venue-illustration.webp` — arena and tower on green lawn with a pathway; original in `design/venue-original.png`.
- `dist/assets/couple-bouquet-illustration.webp` — the default watercolor/gouache portrait based on the new bouquet photo; full-resolution transparent PNG in `design/couple-bouquet-illustration.png`, made with the built-in ImageGen tool.
- `dist/assets/couple-bouquet-cutout.webp` — intermediate photographic cutout used to create the illustration; full-resolution transparent PNG in `design/couple-bouquet-cutout.png`, made with the built-in ImageGen tool.
- `dist/assets/couple-original.webp` — previous invitation photograph, retained as a reference.

The complete image prompt set is in `design/image-prompts.txt` and `design/couple-cutout-prompt.txt`, `design/couple-bouquet-cutout-prompt.txt`, and `design/couple-bouquet-illustration-prompt.txt`. Original references remain in `../output/assets/` and `../website-references/`.

Fonts are Cormorant Garamond, Great Vibes, DM Sans, and Noto Sans Tamil. Their SIL Open Font Licenses are saved in `design/*-OFL.txt` and included inside the standalone HTML.

## Verification

- JavaScript syntax checked with Node.
- Desktop layout reviewed at 1440 × 960, phone layout at 390 × 844, and the app’s 689 × 763 preview size.
- Cross zoom, floral reveal, English/Tamil switch, motion toggle, mobile menu, portrait switch, and dialog open/Escape-close checked in the browser.
- Latest bilingual PDF downloaded from the standalone bundle and matched byte for byte against the current combined PDF. All three embedded PDFs and both previews match their latest printed sources.
- Calendar downloaded and verified for 7 January 2027 at 16:00 IST; calendar line folding checked.
- No horizontal overflow or broken loaded images in the packaged app preview. Embedded asset decoding checked.
- Native share destinations and external Google Maps navigation were not submitted during QA.

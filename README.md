# Ragulbabu & Lydiya — wedding invitation

Public URL: https://ragul-weds-lydiya.devquery.in/

A bilingual wedding invitation for 7 January 2027, 4:00 PM onwards, at New Life Celebration Center (NLCC), Pallavaram, Chennai. The site includes the cinematic church opening, illustrated couple, English/Tamil switch, calendar, venue directions, separate PDF downloads, sharing preview, and panda footer.

## Project files

- `dist/index.html`, `dist/app.js`, `dist/styles.css`, and `dist/fonts.css` — editable website source.
- `dist/assets/` — artwork, invitation previews, English and Tamil PDFs, favicon, sharing image, and fonts used by the site.
- `dist/assets/fonts/licenses/` — the four SIL Open Font Licenses, also embedded in the standalone HTML.
- `build-standalone.py` — packages the website into a single offline HTML file.
- `dist/standalone.html` — the generated standalone invitation, also copied to `../output/site/Ragulbabu-Lydiya-Wedding.html`.
- `vercel.json` — static Vercel deployment settings.
- `.openai/hosting.json` — retained Site identity and hosting metadata.

The standalone file is about 16.5 MiB and contains all current artwork, fonts, and both PDF downloads. External directions, sharing, and portfolio links require an internet connection. Unused artwork, photographic intermediates, duplicate original images, old prompts, the combined PDF asset, and the development preview harness have been removed.

## Rebuild the standalone file

Run from this directory:

```sh
python3 build-standalone.py
```

The script updates both standalone copies. No dependencies are required. To edit the site, change the source files rather than the generated standalone HTML, then rebuild.

## Deploy to Vercel

Deploy this `wedding-site` directory. `vercel.json` skips the build step and serves `dist/`. No dependency installation or environment variables are required.

If importing this repository directly, use `.` as the Root Directory. If importing the parent `Invitation` repository, use `wedding-site`.

The home page is `dist/index.html`. The standalone version remains available at `/standalone.html`.

## Sharing preview

Title, description, canonical URL, Open Graph, and Twitter Card metadata are included in the initial HTML. The public sharing image is `dist/assets/wedding-social-preview-v1.jpg` (1200 × 630).

If the domain changes, update the absolute metadata URLs in `dist/index.html` and rebuild. The Share button uses the canonical URL. Keep sharing images at a publicly accessible HTTPS URL; social crawlers cannot use embedded images from the offline file. When replacing the sharing artwork, use a new versioned filename to avoid cached previews.

## Artwork and fonts

The church, couple, ribbon, flowers, venue, and panda use the approved illustrations. Phones and wider screens use separate church artwork. The cinematic opening is always enabled, while the device’s reduced-motion setting suppresses decorative CSS animations. On screens up to 760 pixels wide, the opening couple and ribbon use a larger scale with fixed feet on the pathway. A 54-pixel circular tap target and 36-pixel scissors icon make the ribbon interaction easier to find; both fade out together after cutting.

Fonts are Cormorant Garamond, Great Vibes, DM Sans, and Noto Sans Tamil. Their licenses remain in the deployed assets and standalone file.

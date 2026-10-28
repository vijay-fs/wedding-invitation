"""Package the invitation as one offline HTML file; no network dependencies."""
from pathlib import Path
import base64
import json
import mimetypes
import re

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
OUTPUT = ROOT.parent / "output" / "site"

def data_uri(path):
    mime = mimetypes.guess_type(str(path))[0] or "application/octet-stream"
    return "data:" + mime + ";base64," + base64.b64encode(path.read_bytes()).decode("ascii")

def build():
    html = (DIST / "index.html").read_text()
    css = (DIST / "styles.css").read_text()
    fonts = (DIST / "fonts.css").read_text()
    script = (DIST / "app.js").read_text()
    fonts = re.sub(r"url\((assets/[^)]+)\)", lambda m: "url(" + data_uri(DIST / m[1]) + ")", fonts)
    html = html.replace('<link rel="stylesheet" href="fonts.css">', '<style>' + fonts + '</style>')
    html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>' + css + '</style>')
    html = re.sub(r'\s*<link rel="preload"[^>]+>', '', html)
    music = DIST / "assets" / "wedding-music.mp3"
    if music.exists():
        html = html.replace('<audio id="wedding-audio"', '<audio data-available="true" id="wedding-audio"')
    else:
        html = html.replace('<source src="assets/wedding-music.mp3" type="audio/mpeg">', '')
    paths = set(re.findall(r'(?:src|href)="(assets/[^"]+)"', html))
    paths.update(re.findall(r"['\"](assets/[^'\"]+\.(?:webp|png|pdf|mp3))['\"]", script))
    assets = {}
    for relative in sorted(paths):
        path = DIST / relative
        if not path.exists():
            raise FileNotFoundError(path)
        assets[relative] = data_uri(path)
    html = re.sub(r'(src|href)="(assets/[^"]+)"', lambda m: 'data-embedded-' + m[1] + '="' + m[2] + '"', html)
    # Parse the map once, retaining each asset only once in the document.
    bootstrap = "{const embeddedAssets=JSON.parse(document.getElementById('embedded-assets').textContent);document.querySelectorAll('[data-embedded-src],[data-embedded-href]').forEach(el=>{for(const key of ['src','href']){const name=el.getAttribute('data-embedded-'+key);if(name)el.setAttribute(key,embeddedAssets[name]);}});}"
    replacement = '<script id="embedded-assets" type="application/json">' + json.dumps(assets, separators=(',', ':')) + '</script>\n<script>' + bootstrap + '\n' + script + '</script>'
    html = html.replace('<script src="app.js"></script>', replacement)
    html = html.replace('<body>', '<body>\n<noscript><p style="padding:24px;text-align:center">Please enable JavaScript to view the embedded artwork and invitation downloads.</p></noscript>')
    licenses = '\n\n'.join(p.stem + '\n' + p.read_text() for p in sorted((DIST / 'assets' / 'fonts' / 'licenses').glob('*-OFL.txt')))
    html = html.replace('</html>', '<!-- Embedded font licenses\n' + licenses.replace('--', '—') + '\n-->\n</html>')
    OUTPUT.mkdir(parents=True, exist_ok=True)
    target = OUTPUT / "Ragulbabu-Lydiya-Wedding.html"
    target.write_text(html)
    print(json.dumps({"file": str(target), "size_mb": round(target.stat().st_size / 1024**2, 2), "embedded_assets": len(assets)}))
    # The same packaged file is used for browser QA.
    (DIST / "standalone.html").write_text(html)
    return target

if __name__ == "__main__":
    build()

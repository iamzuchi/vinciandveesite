import os
import re
import urllib.request
import urllib.parse
from pathlib import Path

source_dir = r"c:\Users\Izuchukwu\Development\vinciandveesite\stitch_vinci_and_vee_group_website"
target_img_dir = r"c:\Users\Izuchukwu\Development\vinciandveesite\images"

os.makedirs(target_img_dir, exist_ok=True)

# Regex to match image URLs in img src, background-image: url(), srcset, etc.
url_pattern = re.compile(r'https?://[^\s"\'\)\>]+?(?:\.png|\.jpg|\.jpeg|\.svg|\.webp|\.gif|[?&]w=\d+|[?&]auto=format|[?&]q=\d+)?', re.IGNORECASE)

found_urls = set()

for root, dirs, files in os.walk(source_dir):
    for file in files:
        if file.endswith(('.html', '.md', '.css', '.json')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                matches = url_pattern.findall(content)
                for m in matches:
                    # Filter for actual image URLs (unsplash, googleusercontent, images, static assets, etc.)
                    if any(img_kw in m.lower() for img_kw in ['unsplash', 'googleusercontent', 'image', 'photo', 'picture', 'cdn', '.png', '.jpg', '.jpeg', '.svg', '.webp']):
                        # Clean trailing quotes/brackets if any
                        clean_url = m.rstrip('"\';:)>')
                        found_urls.add(clean_url)

print(f"Found {len(found_urls)} unique image URLs.")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

downloaded_images = []

for idx, url in enumerate(sorted(found_urls), 1):
    try:
        # Determine file extension
        parsed = urllib.parse.urlparse(url)
        ext = os.path.splitext(parsed.path)[1].lower()
        if not ext or len(ext) > 5 or ext not in ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']:
            ext = '.jpg'
            if 'svg' in url.lower(): ext = '.svg'
            elif 'png' in url.lower(): ext = '.png'
            elif 'webp' in url.lower(): ext = '.webp'
        
        filename = f"stitch_img_{idx:03d}{ext}"
        filepath = os.path.join(target_img_dir, filename)
        
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
            
        print(f"[{idx}/{len(found_urls)}] Saved {filename} from {url[:60]}...")
        downloaded_images.append({
            "index": idx,
            "filename": filename,
            "local_path": filepath,
            "original_url": url
        })
    except Exception as e:
        print(f"[{idx}/{len(found_urls)}] Failed to download {url[:60]}: {e}")

print(f"\nFinished downloading {len(downloaded_images)} images to {target_img_dir}.")

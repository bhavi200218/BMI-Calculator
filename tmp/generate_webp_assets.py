from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
bg_dir = root / 'public' / 'images' / 'bg'
bg_dir.mkdir(parents=True, exist_ok=True)

for jpg in bg_dir.glob('*.jpg'):
    webp_path = jpg.with_suffix('.webp')
    with Image.open(jpg) as im:
        im.save(webp_path, format='WEBP', quality=80, method=6)
        print(f'Created {webp_path}')

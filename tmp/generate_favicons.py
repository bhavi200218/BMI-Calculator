from pathlib import Path
from PIL import Image, ImageDraw

output = Path(__file__).resolve().parent.parent / 'public'
output.mkdir(parents=True, exist_ok=True)

background = '#E8674A'
foreground = 'white'
sizes = [16, 32, 180, 192, 512]

for size in sizes:
    image = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    radius = size * 0.25
    draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=background)

    circle_radius = size * 0.3125
    center = (size / 2, size / 2)
    draw.ellipse([
        center[0] - circle_radius,
        center[1] - circle_radius,
        center[0] + circle_radius,
        center[1] + circle_radius,
    ], fill=foreground)

    triangle_scale = size / 32
    triangle = [
        (10 * triangle_scale + 4 * triangle_scale, 14.5 * triangle_scale + 4 * triangle_scale),
        (10 * triangle_scale + 4 * triangle_scale, 5.5 * triangle_scale + 4 * triangle_scale),
        (16 * triangle_scale + 4 * triangle_scale, 10 * triangle_scale + 4 * triangle_scale),
    ]
    draw.polygon(triangle, fill=background)

    filename = output / (f'favicon-{size}x{size}.png')
    image.save(filename, format='PNG')
    print(f'Written {filename}')

# Save apple-touch-icon and additional icon sizes
apple = output / 'apple-touch-icon.png'
Image.open(output / 'favicon-180x180.png').save(apple)

# Create favicon.ico from 16x16 and 32x32
ico_path = output / 'favicon.ico'
icons = [Image.open(output / 'favicon-16x16.png'), Image.open(output / 'favicon-32x32.png')]
icons[0].save(ico_path, format='ICO', sizes=[(16, 16), (32, 32)])
print(f'Written {ico_path}')

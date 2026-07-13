import re
import os

langs = ['en', 'es', 'fr', 'de', 'ko', 'hi']
base_dir = r"c:\Users\admin\OneDrive\Desktop\bmi-calculator-premium\src\pages"

for lang in langs:
    filepath = os.path.join(base_dir, lang, "index.astro")
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Compact Layout adjustments
    content = content.replace('section class="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-6"', 'section class="pt-26 md:pt-30 pb-8 md:pb-10 px-4 md:px-6"')
    content = content.replace('div class="flex justify-center mb-8 animate-in"', 'div class="flex justify-center mb-6 animate-in"')
    content = content.replace('gap-2.5 px-6 py-2.5', 'gap-2 px-5 py-2')
    content = content.replace('w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse', 'w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse')
    content = content.replace('space-y-6 mb-10 animate-in"', 'space-y-4 mb-8 animate-in"')
    content = content.replace('text-base md:text-lg lg:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto font-sans font-medium px-4', 'text-sm md:text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto font-sans font-medium px-4')
    content = content.replace('gap-10 md:gap-20 mb-16 md:mb-20 animate-in"', 'gap-8 md:gap-14 mb-10 md:mb-12 animate-in"')

    # Replace class and remove <br/> inside <h1> tags
    def adjust_h1(match):
        h1_opening = match.group(1)
        inner_content = match.group(2)
        
        h1_opening = h1_opening.replace(
            'text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold uppercase tracking-tight leading-[0.9] text-[var(--foreground)]',
            'text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[1.1] text-[var(--foreground)]'
        )
        h1_opening = h1_opening.replace('leading-[0.95]', 'leading-[1.1]')
        
        # Replace br tags with spaces
        inner_text = re.sub(r'<br\s*/?>', ' ', inner_content)
        # Simplify whitespaces to make it look inline
        inner_text = re.sub(r'\s+', ' ', inner_text).strip()
        # Retain standard tab padding format
        return f'<h1 {h1_opening}>\n\t\t\t\t\t\t{inner_text}\n\t\t\t\t\t</h1>'

    content = re.sub(r'<h1\s+([^>]*?)>(.*?)</h1>', adjust_h1, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Polish script executed successfully for all languages.")

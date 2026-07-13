const fs = require('fs');
const path = require('path');

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];
const baseDir = "c:\\Users\\admin\\OneDrive\\Desktop\\bmi-calculator-premium\\src\\pages";

langs.forEach(lang => {
  const filepath = path.join(baseDir, lang, "index.astro");
  if (!fs.existsSync(filepath)) {
    console.log("File not found: " + filepath);
    return;
  }
  let content = fs.readFileSync(filepath, 'utf8');

  // Compact Layout adjustments
  content = content.replace(/section class="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-6"/g, 'section class="pt-26 md:pt-30 pb-8 md:pb-10 px-4 md:px-6"');
  content = content.replace(/div class="flex justify-center mb-8 animate-in"/g, 'div class="flex justify-center mb-6 animate-in"');
  content = content.replace(/gap-2.5 px-6 py-2.5/g, 'gap-2 px-5 py-2');
  content = content.replace(/w-2 h-2 rounded-full bg-\[var\(--accent\)\] animate-pulse/g, 'w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse');
  content = content.replace(/space-y-6 mb-10 animate-in"/g, 'space-y-4 mb-8 animate-in"');
  content = content.replace(/text-base md:text-lg lg:text-xl text-\[var\(--muted-foreground\)\] leading-relaxed max-w-3xl mx-auto font-sans font-medium px-4/g, 'text-sm md:text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto font-sans font-medium px-4');
  content = content.replace(/gap-10 md:gap-20 mb-16 md:mb-20 animate-in"/g, 'gap-8 md:gap-14 mb-10 md:mb-12 animate-in"');

  // Replace h1 class and remove <br/> inside <h1> tags
  content = content.replace(/<h1([\s\S]*?)>([\s\S]*?)<\/h1>/g, (match, h1Attrs, innerHtml) => {
    let cleanAttrs = h1Attrs;
    // Replace text-5xl ... leading-[0.9] -> text-4xl ... leading-[1.1]
    cleanAttrs = cleanAttrs.replace(
      /text-5xl sm:text-6xl md:text-7xl lg:text-\[5\.5rem\] font-display font-bold uppercase tracking-tight leading-\[0\.9\] text-\[var\(--foreground\)\]/g,
      'text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[1.1] text-[var(--foreground)]'
    );
    // Replace leading-[0.95] -> leading-[1.1]
    cleanAttrs = cleanAttrs.replace(/leading-\[0\.95\]/g, 'leading-[1.1]');

    let cleanText = innerHtml.replace(/<br\s*\/?>/gi, ' ');
    cleanText = cleanText.replace(/\s+/g, ' ').trim();

    return `<h1${cleanAttrs}>\n\t\t\t\t\t\t${cleanText}\n\t\t\t\t\t</h1>`;
  });

  fs.writeFileSync(filepath, content, 'utf8');
  console.log("Polished: " + lang);
});

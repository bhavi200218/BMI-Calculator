with open('src/data/seoDatabase.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    # check if line has an odd number of quotes
    quote_count = line.count('"')
    # ignore lines with escaped quotes
    unescaped_quotes = line.replace('\\"', '').count('"')
    if unescaped_quotes % 2 != 0:
        print(f"Line {i}: unescaped quote count ({unescaped_quotes}): {repr(line)}")

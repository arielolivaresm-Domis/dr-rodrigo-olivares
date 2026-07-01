import re

with open('src/pages/HomePage.tsx', 'r') as f:
    content = f.read()

# Background colors
content = re.sub(r'\bbg-brand-900\b', 'bg-brand', content)
content = re.sub(r'\bbg-brand-800\b', 'bg-brand', content)
content = re.sub(r'\bbg-brand-600\b', 'bg-accent', content) # CTAs and buttons to gold
content = re.sub(r'\bbg-brand-700\b', 'bg-accent/90', content) # CTA hovers
content = re.sub(r'\bbg-slate-50\b', 'bg-bg-main', content)
content = re.sub(r'\bbg-slate-100\b', 'bg-bg-main', content)
content = re.sub(r'\bbg-slate-200\b', 'bg-secondary/20', content)
content = re.sub(r'\bbg-slate-900\b', 'bg-text-main', content) # Dark backgrounds
content = re.sub(r'\bbg-white\b', 'bg-bg-alt', content)

# Text colors
content = re.sub(r'\btext-brand-900\b', 'text-brand', content)
content = re.sub(r'\btext-brand-800\b', 'text-brand', content)
content = re.sub(r'\btext-brand-700\b', 'text-brand', content)
content = re.sub(r'\btext-brand-600\b', 'text-brand', content)
content = re.sub(r'\btext-brand-500\b', 'text-brand', content)
content = re.sub(r'\btext-brand-400\b', 'text-brand/80', content)
content = re.sub(r'\btext-brand-300\b', 'text-bg-main', content)
content = re.sub(r'\btext-brand-100\b', 'text-bg-main', content)
content = re.sub(r'\btext-brand-50\b', 'text-bg-main', content)

content = re.sub(r'\btext-slate-900\b', 'text-text-main', content)
content = re.sub(r'\btext-slate-800\b', 'text-text-main', content)
content = re.sub(r'\btext-slate-700\b', 'text-text-main', content)
content = re.sub(r'\btext-slate-600\b', 'text-text-muted', content)
content = re.sub(r'\btext-slate-500\b', 'text-text-muted', content)
content = re.sub(r'\btext-slate-400\b', 'text-text-muted', content)

# Borders
content = re.sub(r'\bborder-brand-[0-9]+\b', 'border-brand', content)
content = re.sub(r'\bborder-slate-[0-9]+\b', 'border-secondary/20', content)

# Empathy in copy
content = content.replace(
    'Mi trabajo consiste en brindarte el mejor tratamiento para tus problemas de cadera,',
    'Comprendemos sus temores ante el dolor y la cirugía. Mi trabajo consiste en brindarte el mejor tratamiento para tus problemas de cadera,'
)

content = content.replace(
    'Recupera tu movilidad, transforma tu vida.',
    'Recupera tu movilidad sin temor. Estamos contigo en cada paso.'
)

content = content.replace(
    'Menos dolor, más pronta autonomía para el paciente.',
    'Menos dolor, más pronta autonomía y la tranquilidad de estar acompañado paso a paso.'
)

with open('src/pages/HomePage.tsx', 'w') as f:
    f.write(content)

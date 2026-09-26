const fs = require('fs');
const path = require('path');

const sections = [
  'section-01-hero',
  'section-02-career-progression-challenges',
  'section-03-skills-you-can-build',
  'section-04-learn-practise-improve',
  'section-05-start-learning-for-free',
  'section-06-career-fastrack',
  'section-07-career-outcomes',
  'section-08-registration'
];

const basePath = path.join(process.cwd(), 'src/FARE for Employees');

sections.forEach((sec, idx) => {
  const compName = 'Section' + String(idx + 1).padStart(2, '0');
  
  // index.tsx
  fs.writeFileSync(path.join(basePath, sec, 'index', 'index.tsx'), 
    `import Desktop from '../desktop/desktop';\nimport Mobile from '../mobile/mobile';\n\nexport default function ${compName}({ isMobile }: { isMobile: boolean }) {\n  return isMobile ? <Mobile /> : <Desktop />;\n}`
  );

  // desktop.tsx
  fs.writeFileSync(path.join(basePath, sec, 'desktop', 'desktop.tsx'), 
    `export default function Desktop() {\n  return <div>Desktop ${compName}</div>;\n}`
  );

  // mobile.tsx
  fs.writeFileSync(path.join(basePath, sec, 'mobile', 'mobile.tsx'), 
    `export default function Mobile() {\n  return <div>Mobile ${compName}</div>;\n}`
  );

  // data.tsx
  fs.writeFileSync(path.join(basePath, sec, 'data', 'data.tsx'), 
    `export const data = {};`
  );
});

// main index.tsx
const imports = sections.map((sec, idx) => `import Section${String(idx + 1).padStart(2, '0')} from './${sec}/index';`).join('\n');
const renders = sections.map((sec, idx) => `      <Section${String(idx + 1).padStart(2, '0')} isMobile={isMobile} />`).join('\n');

fs.writeFileSync(path.join(basePath, 'index.tsx'), 
  `${imports}\n\nexport default function FAREForEmployees({ isMobile }: { isMobile: boolean }) {\n  return (\n    <div className="w-full flex flex-col font-['Outfit']">\n${renders}\n    </div>\n  );\n}`
);

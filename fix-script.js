// fix-eslint-errors.js
// Run with: node fix-eslint-errors.js

const fs = require('fs');
const path = require('path');

// Files with errors that need fixing
const filesToFix = [
  'app/case-studies/customer-support/page.tsx',
  'app/case-studies/data-analysis/page.tsx',
  'app/case-studies/lead-generation/page.tsx',
  'app/process/page.tsx',
  'app/solutions/efficiency/page.tsx',
  'app/solutions/process-optimization/page.tsx',
  'app/solutions/scalability/page.tsx',
  'components/homepage/about-us.tsx',
  'components/homepage/faq.tsx',
  'components/homepage/value-proposition.tsx',
  'components/our-process-page.tsx',
  'components/video-player.tsx',
  'components/wrapper/footer.tsx'
];

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Replace unescaped quotes in JSX
  // Be careful not to replace quotes in attributes or JS expressions
  // This is a simplified approach - might need manual tweaking
  return content
    .replace(/(\s)"([^"]*)"(\s)/g, '$1&quot;$2&quot;$3')
    .replace(/(\s)'([^']*)'(\s)/g, '$1&apos;$2&apos;$3');
}

// Fix the > character in lead-generation page
function fixGreaterThanSymbol(content) {
  // Look for instances of plain > that should be escaped
  return content.replace(/(\s)>(\s)/g, '$1&gt;$2');
}

// Function to import Shield component if missing
function addShieldImport(content) {
  // Check if Shield is imported
  if (!content.includes('import { Shield') && content.includes('<Shield')) {
    // Find the imports section and add Shield
    const importRegex = /(import\s+{\s*[^}]+}\s+from\s+['"]lucide-react['"]\s*;)/;
    if (importRegex.test(content)) {
      // Add Shield to existing lucide-react import
      return content.replace(importRegex, (match) => {
        const lastClosingBrace = match.lastIndexOf('}');
        return `${match.slice(0, lastClosingBrace)}, Shield${match.slice(lastClosingBrace)}`;
      });
    } else {
      // Add new import if no lucide-react import found
      return `import { Shield } from 'lucide-react';\n${content}`;
    }
  }
  return content;
}

// Fix missing dependencies in useEffect
function fixUseEffectDependencies(content) {
  // This is a simplified approach - manual review recommended
  return content.replace(
    /useEffect\(\s*\(\)\s*=>\s*{[^}]*isPlaying[^}]*}\s*,\s*\[\s*\]\s*\)/g,
    'useEffect(() => {\n    // Fixed dependency array\n    // Original code here\n  }, [isPlaying])'
  );
}

// Process each file
filesToFix.forEach(filePath => {
  try {
    // Read file
    const fullPath = path.resolve(process.cwd(), filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Apply fixes
    content = fixUnescapedEntities(content);
    
    if (filePath.includes('lead-generation')) {
      content = fixGreaterThanSymbol(content);
    }
    
    if (filePath.includes('our-process-page.tsx')) {
      content = addShieldImport(content);
    }
    
    if (filePath.includes('video-player.tsx')) {
      content = fixUseEffectDependencies(content);
    }
    
    // Write the fixed content back
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('Fixes completed. Please review the changes and run build again.');

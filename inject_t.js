const fs = require('fs');
const files = ['store.html', 'product.html', 'checkout.html'];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    if (!content.includes('legacy_t.js')) {
        content = content.replace('<script src="./js/products.js"></script>', '<script src="./js/legacy_t.js"></script>\n    <script src="./js/products.js"></script>');
        fs.writeFileSync(file, content, 'utf8');
    }
}
console.log("legacy_t.js injected.");

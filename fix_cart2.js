const fs = require('fs');
const files = ['index.html', 'store.html', 'product.html', 'checkout.html'];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace ${translations[lang].cart_empty} with ${window.translations[lang].cart_empty}
    content = content.replace(/\$\{translations\[lang\]\.cart_empty\}/g, '${window.translations[lang].cart_empty}');
    
    fs.writeFileSync(file, content, 'utf8');
}
console.log("Replaced translations with window.translations.");

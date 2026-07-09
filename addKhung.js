const fs = require('fs');
let content = fs.readFileSync('svgData.js', 'utf8');
if (!content.includes("svgData['KHUNG.svg']")) {
    const svg = fs.readFileSync('KHUNG.svg');
    const base64 = svg.toString('base64');
    content += `\nsvgData['KHUNG.svg'] = '${base64}';\n`;
    fs.writeFileSync('svgData.js', content);
    console.log('Added KHUNG.svg to svgData.js');
} else {
    console.log('KHUNG.svg is already in svgData.js');
}

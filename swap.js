const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const appSessao = `  <!-- SESSÃO 19.5: O APLICATIVO -->`;
const ofertaSessao = `  <!-- SESSÃO 20: OFERTA FINAL -->`;
const bodyEnd = `</body>`;

const part1 = html.split(appSessao)[0];
const rest1 = html.split(appSessao)[1];

const appContent = rest1.split(ofertaSessao)[0];
const rest2 = rest1.split(ofertaSessao)[1];

const ofertaContent = rest2.split(bodyEnd)[0];
const finalPart = bodyEnd + rest2.split(bodyEnd)[1];

const newHtml = part1 + ofertaSessao + ofertaContent + appSessao + appContent + finalPart;

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Swapped successfully');

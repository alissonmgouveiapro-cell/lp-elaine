const fs = require('fs');

const rawText = `1	Desprezo, Abandono e Abuso
2	Rancor em Relação aos Pais
3	Não Merecimento, Baixa Autoestima e Falta de Amor-próprio
4	Bloqueios de Energia Sexual
5	Insegurança, Raiva e Rancor de Relacionamentos Antigos e Atuais
6	Irritação, Reclamação e Julgamento
7	Frustração, Medo e Pessimismo
8	Ódio, Injustiça e Falta de Perdão
9	Raiva, Escassez e Não Merecimento
10	Preguiça e Procrastinação
11	Ansiedade, Resistência e Controle
12	Vingança e Revolta
13	Vitimização e Irresponsabilidade
14	Resistência a Mudanças e Instinto de Controle
15	Ciúme, Culpa e Inveja
16	Malícia, Desconfiança e Julgamento
17	Malevolência, Maleficência e Malignidade
18	Desconfiança, Desamor e Violência
19	Sofrimento, Fracasso e Negatividade
20	Tristeza, Mau Humor e Apatia
21	Autossabotagem, Indisposição e Comodismo
22	Egoísmo, Avareza e Mesquinhez
23	Preocupação, Angústia e Nervosismo
24	Incapacidade, Insegurança e Paralisação
25	Medo, Inibição e Acovardamento
26	Escassez, Vaidade e Azar
27	Programações Negativas
28	Mal-estar, Aperto no Peito e Sensações Negativas
29	Ira, Inquietude e Indignação
30	Hostilidade, Irritação e Mágoa
31	Nojo, Aversão e Pobreza
32	Vergonha, Rejeição e Dor Emocional
33	Ressentimento, Amargura e Esgotamento
34	Confusão, Constrangimento e Desorientação
35	Desespero, Pânico e Frieza
36	Solidão, Melancolia e Vazio
37	Carência, Falta e Dó
38	Miséria, Pobreza e Penúria
39	Falência, Dívidas e Doenças
40	Falta de Iniciativa, Ação e Memórias Limitantes`;

let tracksHtml = '';
rawText.split('\n').forEach(line => {
    if (!line.trim()) return;
    const parts = line.split('\t');
    let num = parts[0];
    let title = parts[1];
    if (num.length === 1) num = '0' + num;

    tracksHtml += `
            <div class="flex items-center gap-4 py-3 px-4 glass rounded-xl border border-white/5 hover:border-c-accent/30 transition-all hover:bg-white/5 group cursor-default">
                <div class="text-c-accent font-title font-bold text-lg min-w-[2rem] opacity-70 group-hover:opacity-100 transition-opacity">${num}</div>
                <div class="text-white/80 font-body text-sm leading-tight flex-1 group-hover:text-white transition-colors">${title}</div>
                <i class="ph-fill ph-play-circle text-c-accent/30 group-hover:text-c-accent transition-colors text-xl hidden sm:block"></i>
            </div>`;
});

const full_html = `  <!-- SESSÃO 18: INVENTÁRIO EMOCIONAL -->
  <section class="relative py-24 md:py-32 w-full bg-c-primary-dark border-t border-white/5 z-20 sec-reveal-container overflow-hidden" id="inventario-emocional">
    <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div class="absolute w-[80vw] h-[80vh] bottom-[-20%] left-[-20%] bg-c-accent/5 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 reveal">
        
        <div class="flex flex-col items-center text-center mb-16">
            <h4 class="flex items-center justify-center gap-3 text-c-accent font-body uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4">
                BÔNUS ESPECIAL
            </h4>
            <h2 class="font-title text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight uppercase max-w-4xl">
                INVENTÁRIO EMOCIONAL <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-c-accent-light to-c-accent text-glow-accent italic">40 ÁUDIOS INVESTIGATÓRIOS</span>
            </h2>
            <p class="font-body text-base md:text-lg text-white/80 font-light leading-relaxed max-w-3xl">
                Uma biblioteca complementar para localizar emoções, crenças, reações e padrões específicos. Cada áudio abre uma investigação própria.
            </p>
        </div>

        <div class="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-8 opacity-10">
                <i class="ph-fill ph-playlist text-9xl text-white"></i>
            </div>
            
            <h3 class="text-c-accent uppercase tracking-widest text-xs md:text-sm font-bold mb-8 relative z-10 flex items-center gap-2">
                <i class="ph-bold ph-headphones"></i> BIBLIOTECA DE INVESTIGAÇÃO
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
${tracksHtml}
            </div>
        </div>

    </div>
  </section>

</body>
</html>`;

const filePath = 'f:/2026/Elaine/LPs/Psicanalise/public/index.html';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace('</body>\n</html>', full_html);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Node script done!');

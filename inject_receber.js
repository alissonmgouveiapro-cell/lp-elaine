const fs = require('fs');

const items = [
    { title: "21 sessões investigativas", text: "Uma investigação guiada por dia, cada uma dedicada a uma camada específica do inconsciente.", icon: "ph-headphones" },
    { title: "21 ebooks/apostilas de apoio", text: "Um material diário para aprofundar a investigação e registrar o processo.", icon: "ph-book-open" },
    { title: "Dossiê científico das 21 investigações", text: "Contextualização dos mecanismos emocionais trabalhados em cada sessão.", icon: "ph-flask" },
    { title: "Técnica SleepMind", text: "Áudio noturno utilizado durante os 21 dias para continuar a investigação enquanto você dorme.", icon: "ph-moon-stars" },
    { title: "Áudio complementar diário", text: "Condução de Elainne para acompanhar cada etapa e orientar os comandos do dia.", icon: "ph-microphone-stage" },
    { title: "Decreto Alquímico — Áudio Extra", text: "Prática guiada de merecimento, prosperidade, visualização e afirmações.", icon: "ph-sparkle" },
    { title: "Anamnese, aula e protocolo de uso", text: "Preparação completa para começar a jornada com clareza.", icon: "ph-file-text" },
    { title: "Investigador de Sabotadores Ocultos", text: "Leitura complementar dividida em 12 partes.", icon: "ph-detective" },
    { title: "3 Meditações Hertz do Despertar", text: "Práticas aplicadas nos dias 7, 14 e 21.", icon: "ph-flower-lotus" },
    { title: "Holofractometria Sagrada", text: "Etapa de reparação liberada após os 21 dias e utilizada por mais 7 dias.", icon: "ph-atom" },
    { title: "Música-tema em 7 versões", text: "Sete versões da música Detetive Mental para acompanhar a experiência.", icon: "ph-music-notes" },
    { title: "Aplicativo e comunidade", text: "Acesso pelo aplicativo durante 1 ano, comunidade e canal de suporte.", icon: "ph-users" }
];

let cardsHtml = '';
items.forEach(item => {
    cardsHtml += `
            <div class="glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-c-accent/40 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-c-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div class="flex items-start gap-4 relative z-10">
                    <div class="w-12 h-12 flex-shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-c-accent/20 group-hover:border-c-accent/50 transition-all duration-300 shadow-inner">
                        <i class="ph-fill ${item.icon} text-2xl text-c-accent"></i>
                    </div>
                    <div>
                        <h4 class="text-white font-title text-lg md:text-xl font-bold mb-2 tracking-wide">${item.title}</h4>
                        <p class="text-white/70 font-body text-sm md:text-base font-light leading-relaxed">${item.text}</p>
                    </div>
                </div>
            </div>`;
});

const full_html = `  <!-- SESSÃO 17: O QUE VOCÊ VAI RECEBER -->
  <section class="relative py-24 md:py-32 w-full bg-c-black border-t border-white/5 z-20 sec-reveal-container overflow-hidden" id="o-que-vai-receber">
    <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div class="absolute w-[80vw] h-[80vh] top-[20%] left-[-10%] bg-c-accent/5 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 reveal">
        
        <div class="flex flex-col items-center text-center mb-16">
            <h4 class="flex items-center justify-center gap-3 text-c-accent font-body uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4">
                TUDO INCLUSO
            </h4>
            <h2 class="font-title text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight uppercase max-w-4xl">
                AQUI ESTÁ TUDO QUE <span class="text-transparent bg-clip-text bg-gradient-to-r from-c-accent-light to-c-accent text-glow-accent italic">VOCÊ VAI RECEBER</span>
            </h2>
            <h3 class="font-title text-xl md:text-2xl text-c-accent-light mb-6 uppercase tracking-wider">
                O Arsenal Completo da Sua Investigação
            </h3>
            <p class="font-body text-base md:text-lg text-white/80 font-light leading-relaxed max-w-3xl">
                Além das 21 investigações centrais, você recebe a estrutura de preparação, aprofundamento, reparação e continuidade que sustenta todo o percurso.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
${cardsHtml}
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

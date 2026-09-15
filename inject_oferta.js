const fs = require('fs');

const sonsHTML = `
        <!-- Sons da Natureza -->
        <div class="mb-24">
            <div class="flex flex-col items-center text-center mb-12">
                <h4 class="flex items-center justify-center gap-3 text-c-accent font-body uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4">
                    BÔNUS ESPECIAL
                </h4>
                <h2 class="font-title text-3xl md:text-4xl text-white mb-6 uppercase">
                    SONS DA NATUREZA <span class="text-transparent bg-clip-text bg-gradient-to-r from-c-accent-light to-c-accent text-glow-accent italic">— 12 ÁUDIOS</span>
                </h2>
                <p class="font-body text-base md:text-lg text-white/80 font-light max-w-2xl">
                    Ambientações sonoras para relaxamento, foco, respiração, meditação, descanso e preparação para o sono.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-cloud-rain text-c-accent"></i> Chuva Torrencial</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Relaxamento, concentração, meditação, estudo e preparação para o sono.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-moon text-c-accent"></i> Crepúsculo no Oásis</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Visualizações, mindfulness, respiração e reconexão consigo.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-sun text-c-accent"></i> Dia Ocioso de Verão</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Pausas conscientes, autocuidado, leveza e recuperação do foco.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-tree text-c-accent"></i> Dia Quente na Floresta</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Grounding, criatividade, organização de ideias e introspecção.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-campfire text-c-accent"></i> Fogueira na Cabana</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Acolhimento, journaling, gratidão e relaxamento noturno.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-waves text-c-accent"></i> Ondas Tropicais</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Redução do estresse, descanso mental, visualizações e auxílio ao sono.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-leaf text-c-accent"></i> Outono na Floresta</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Contemplação, escrita, leitura, meditação e desaceleração.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-path text-c-accent"></i> Passeio no Bosque</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Mindfulness, respiração consciente, estudos e equilíbrio emocional.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-sun-horizon text-c-accent"></i> Praia ao Pôr do Sol</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Encerramento do dia, gratidão, meditação e preparação para dormir.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-drop text-c-accent"></i> Queda D'Água</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Renovação mental, foco, meditação e reconexão interior.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-waves text-c-accent"></i> Riacho Murmurante</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Relaxamento profundo, exercícios respiratórios, leitura e descanso.</p>
                </div>
                <div class="glass p-5 rounded-2xl border border-white/5 hover:border-c-accent/30 flex flex-col gap-2 transition-all">
                    <h5 class="text-white font-title font-bold text-lg flex items-center gap-2"><i class="ph-fill ph-cloud-lightning text-c-accent"></i> Tempestade Tropical</h5>
                    <p class="text-white/70 font-body text-sm font-light leading-relaxed">Isolamento de ruídos externos, foco prolongado, introspecção e sono.</p>
                </div>
            </div>
        </div>
`;

const presentesHTML = `
        <!-- Presentes Especiais -->
        <div class="mb-24 pt-16 border-t border-white/10">
            <div class="flex flex-col items-center text-center mb-12">
                <h4 class="flex items-center justify-center gap-3 text-c-accent font-body uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4">
                    KITS E FERRAMENTAS
                </h4>
                <h2 class="font-title text-3xl md:text-4xl text-white mb-6 uppercase">
                    PRESENTES <span class="text-transparent bg-clip-text bg-gradient-to-r from-c-accent-light to-c-accent text-glow-accent italic">ESPECIAIS</span>
                </h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">Crença Fortalecedora x Limitante</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Workbook para identificar crenças fortalecedoras e limitantes, questionar distorções e construir a polaridade contrária.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">A Árvore Genealógica da Crença</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Material complementar para investigar a origem e a transmissão de crenças na história familiar.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">Ebook 6 Frequências Sagradas</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Leitura complementar entregue dentro do protocolo.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">Os 4 Tesouros da Humanidade</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Conteúdo complementar da jornada Detetive Mental.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">Ebook Jornada da Cocriação</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Material para apoiar a continuidade do processo de cocriação.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">Guia de Livros e Filmes</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Curadoria de referências indicadas por Elainne para aprofundar os estudos.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">Ebook Por que comigo não funciona</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Leitura para investigar resistências e bloqueios percebidos no processo de mudança.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5">
                    <i class="ph-fill ph-gift text-3xl text-c-accent mt-1"></i>
                    <div>
                        <h5 class="text-white font-title font-bold text-xl mb-1">Rejuvenescimento Facial</h5>
                        <p class="text-white/70 font-body text-sm font-light leading-relaxed">Prática guiada com visualização, afirmações e códigos apresentada como apoio à autoestima (15 dias).</p>
                    </div>
                </div>
            </div>
        </div>
`;

const ancoragemHTML = `
        <!-- Ancoragem de Valor -->
        <div class="glass p-8 md:p-14 rounded-3xl border-2 border-c-accent/30 shadow-[0_0_50px_rgba(210,164,92,0.1)] relative max-w-4xl mx-auto overflow-hidden">
            <div class="absolute -top-32 -right-32 w-64 h-64 bg-c-accent/20 blur-[100px] rounded-full z-0"></div>
            
            <div class="relative z-10 text-center mb-10">
                <h3 class="font-title text-2xl md:text-3xl text-white uppercase mb-2">E O QUANTO VOCÊ TERIA QUE INVESTIR...</h3>
                <p class="text-white/70 font-body text-lg italic">Se fosse comprar tudo isso separado?</p>
            </div>
            
            <div class="relative z-10 flex flex-col gap-4 mb-10 font-body">
                
                <div class="flex justify-between items-end border-b border-white/10 pb-3">
                    <p class="text-white/90 text-sm md:text-base font-medium max-w-[70%] leading-snug">21 Áudios exclusivos do Protocolo, entregues por mim, diretamente no seu celular</p>
                    <p class="text-white font-bold tracking-wide">R$ 4.999,00</p>
                </div>
                
                <div class="flex justify-between items-end border-b border-white/10 pb-3">
                    <p class="text-white/90 text-sm md:text-base font-medium max-w-[70%] leading-snug">Ebook de Ativação para Cocriar a Vida dos Sonhos</p>
                    <p class="text-white font-bold tracking-wide">R$ 299,00</p>
                </div>
                
                <div class="flex justify-between items-end border-b border-white/10 pb-3">
                    <p class="text-white/90 text-sm md:text-base font-medium max-w-[70%] leading-snug">Inventário completo: 21 apostilas + dossiê científico de cada investigação</p>
                    <p class="text-white font-bold tracking-wide">R$ 399,00</p>
                </div>
                
                <div class="flex justify-between items-end border-b border-white/10 pb-3">
                    <p class="text-white/90 text-sm md:text-base font-medium max-w-[70%] leading-snug">Meditações Hertz: 3 Holofractometrias para despertar quem você realmente é</p>
                    <p class="text-white font-bold tracking-wide">R$ 699,00</p>
                </div>
                
                <div class="flex justify-between items-end border-b border-white/10 pb-3">
                    <p class="text-white/90 text-sm md:text-base font-medium max-w-[70%] leading-snug">Holofractometria Sagrada de Reparação do Inconsciente</p>
                    <p class="text-white font-bold tracking-wide">R$ 699,00</p>
                </div>

            </div>
            
            <div class="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                <div>
                    <p class="text-c-accent uppercase tracking-widest text-xs font-bold mb-1">VALOR TOTAL DOS MATERIAIS</p>
                    <p class="text-white/60 font-body text-sm font-light">Se comprados separadamente hoje</p>
                </div>
                <div class="mt-4 md:mt-0">
                    <p class="font-title text-4xl md:text-5xl text-red-500 font-bold line-through decoration-red-500/50">R$ 7.095,00</p>
                </div>
            </div>
            
        </div>
`;

const full_html = `  <!-- SESSÃO 19: BÔNUS FINAIS E ANCORAGEM -->
  <section class="relative py-24 md:py-32 w-full bg-c-black border-t border-white/5 z-20 sec-reveal-container overflow-hidden" id="bonus-finais">
    <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div class="absolute w-[80vw] h-[80vh] top-[30%] left-[-20%] bg-c-primary-light/5 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 reveal">
        ${sonsHTML}
        ${presentesHTML}
        ${ancoragemHTML}
    </div>
  </section>

</body>
</html>`;

const filePath = 'f:/2026/Elaine/LPs/Psicanalise/public/index.html';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace('</body>\n</html>', full_html);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Node script done!');

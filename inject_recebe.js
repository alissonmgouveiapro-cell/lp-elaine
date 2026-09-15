const fs = require('fs');

const full_html = `  <!-- SESSÃO 15: COMO RECEBE E UTILIZA -->
  <section class="relative py-24 md:py-32 w-full bg-c-black border-t border-white/5 z-20 sec-reveal-container overflow-hidden" id="como-utilizar">
    <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div class="absolute w-[60vw] h-[60vh] top-[20%] right-[-10%] bg-c-primary-light/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 reveal">
        
        <div class="flex flex-col items-center text-center mb-16">
            <h4 class="flex items-center justify-center gap-3 text-c-accent font-body uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4">
                GUIA DE USO
            </h4>
            <h2 class="font-title text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight uppercase max-w-4xl">
                COMO VOCÊ RECEBE E UTILIZA O <span class="text-transparent bg-clip-text bg-gradient-to-r from-c-accent-light to-c-accent text-glow-accent italic">DETETIVE MENTAL</span>
            </h2>
            <p class="font-body text-base md:text-lg text-white/80 font-light leading-relaxed max-w-3xl">
                O Detetive Mental é organizado como uma investigação progressiva: você prepara o terreno, investiga uma camada por dia, utiliza o SleepMind todas as noites e, somente depois de concluir os 21 dias, entra na etapa de reparação por mais 7 dias.
            </p>
        </div>

        <!-- Tabela Fases -->
        <div class="glass rounded-3xl p-4 md:p-8 border border-white/10 mb-20 overflow-x-auto shadow-2xl">
            <table class="w-full text-left min-w-[700px] border-collapse">
                <thead>
                    <tr class="border-b border-c-accent/30 text-c-accent uppercase tracking-widest text-xs md:text-sm font-bold bg-white/5">
                        <th class="py-5 px-6 font-title rounded-tl-xl">Fase</th>
                        <th class="py-5 px-6 font-title">Período</th>
                        <th class="py-5 px-6 font-title rounded-tr-xl">O Que Acontece</th>
                    </tr>
                </thead>
                <tbody class="text-white/80 font-body text-sm md:text-base font-light divide-y divide-white/10">
                    <tr class="hover:bg-white/5 transition-colors">
                        <td class="py-5 px-6 text-white font-medium">Preparação</td>
                        <td class="py-5 px-6 text-c-accent-light">Antes do Dia 1</td>
                        <td class="py-5 px-6">Comece por aqui, Anamnese Detetive Mental, Aula Detetive Mental e Protocolo de Uso.</td>
                    </tr>
                    <tr class="hover:bg-white/5 transition-colors">
                        <td class="py-5 px-6 text-white font-medium">Investigação diária</td>
                        <td class="py-5 px-6 text-c-accent-light">Dias 1 a 21</td>
                        <td class="py-5 px-6">Um áudio conduzido por Elainne e um ebook de apoio por dia. Todas as noites, a Técnica Detetive do Inconsciente SleepMind.</td>
                    </tr>
                    <tr class="hover:bg-white/5 transition-colors">
                        <td class="py-5 px-6 text-white font-medium">Marcos Hertz</td>
                        <td class="py-5 px-6 text-c-accent-light">Dias 7, 14 e 21</td>
                        <td class="py-5 px-6">Meditações Hertz do Despertar intercaladas à investigação para trabalhar criança ferida, memórias, energia do dia, clareza e renovação.</td>
                    </tr>
                    <tr class="hover:bg-white/5 transition-colors">
                        <td class="py-5 px-6 text-white font-medium">Reparação</td>
                        <td class="py-5 px-6 text-c-accent-light">Dias 22 a 28</td>
                        <td class="py-5 px-6">Holofractometria Sagrada de Reparação do Inconsciente, utilizada conscientemente por 7 dias e liberada somente após os 21 dias.</td>
                    </tr>
                    <tr class="hover:bg-white/5 transition-colors">
                        <td class="py-5 px-6 text-white font-medium">Continuidade</td>
                        <td class="py-5 px-6 text-c-accent-light">Durante 1 ano</td>
                        <td class="py-5 px-6">Acesso pelo aplicativo, possibilidade de repetir o ciclo, comunidade e canal de suporte.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Passo a Passo -->
        <h3 class="font-title text-3xl md:text-4xl text-white mb-10 uppercase text-center">O Passo a Passo, <span class="text-c-accent italic">Sem Confusão</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-5xl mx-auto">
            <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5 hover:border-c-accent/30 transition-all">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-c-accent text-c-black font-title font-bold flex items-center justify-center text-xl">1</div>
                <p class="text-white/80 font-body text-sm md:text-base leading-relaxed mt-1">Durante 21 dias, ouça o áudio diário conduzido por Elainne no horário que preferir.</p>
            </div>
            <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5 hover:border-c-accent/30 transition-all">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-c-accent text-c-black font-title font-bold flex items-center justify-center text-xl">2</div>
                <p class="text-white/80 font-body text-sm md:text-base leading-relaxed mt-1">Utilize o ebook de apoio do dia para aprofundar a investigação e potencializar o processo.</p>
            </div>
            <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5 hover:border-c-accent/30 transition-all">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-c-accent text-c-black font-title font-bold flex items-center justify-center text-xl">3</div>
                <p class="text-white/80 font-body text-sm md:text-base leading-relaxed mt-1">Todas as noites, ouça a Técnica Detetive do Inconsciente SleepMind para investigar a mente durante o sono.</p>
            </div>
            <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5 hover:border-c-accent/30 transition-all">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-c-accent text-c-black font-title font-bold flex items-center justify-center text-xl">4</div>
                <p class="text-white/80 font-body text-sm md:text-base leading-relaxed mt-1">Nos dias 7, 14 e 21, execute pela manhã as Meditações Hertz do Despertar indicadas para cada marco.</p>
            </div>
            <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5 hover:border-c-accent/30 transition-all">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-c-accent text-c-black font-title font-bold flex items-center justify-center text-xl">5</div>
                <p class="text-white/80 font-body text-sm md:text-base leading-relaxed mt-1">Ao concluir a investigação, acesse a Holofractometria Sagrada e utilize-a conscientemente durante 7 dias.</p>
            </div>
            <div class="flex items-start gap-4 glass p-6 rounded-2xl border border-white/5 hover:border-c-accent/30 transition-all">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-c-accent text-c-black font-title font-bold flex items-center justify-center text-xl">6</div>
                <p class="text-white/80 font-body text-sm md:text-base leading-relaxed mt-1">Repita o ciclo quantas vezes considerar necessário durante o período de acesso ao aplicativo.</p>
            </div>
        </div>
        
        <div class="bg-red-900/10 border border-red-500/20 text-white/80 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto text-center mb-20 flex flex-col items-center gap-3">
            <i class="ph-fill ph-warning-circle text-3xl text-red-400"></i>
            <p class="font-body font-light text-sm md:text-base leading-relaxed">
                <strong class="text-red-400 font-medium tracking-wide uppercase text-xs">Importante:</strong><br> As técnicas conscientes e inconscientes deste protocolo não devem ser utilizadas por crianças. A idade mínima recomendada no material é 15 anos.
            </p>
        </div>

        <!-- Meditações Hertz -->
        <h3 class="font-title text-3xl md:text-4xl text-white mb-10 uppercase text-center">As Três Meditações <span class="text-c-accent italic">Hertz do Despertar</span></h3>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            <!-- 7o Dia -->
            <div class="glass p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden group hover:border-c-accent/40 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-b from-c-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div class="w-16 h-16 rounded-full border border-c-accent/30 flex items-center justify-center mx-auto mb-6 text-c-accent bg-black/30">
                    <span class="font-title font-bold text-xl">7º</span>
                </div>
                <p class="text-c-accent uppercase tracking-widest text-xs font-bold mb-3">Marco 1</p>
                <p class="text-white/90 font-body font-light leading-relaxed text-sm md:text-base relative z-10">
                    Reativando e Positivando sua Consciência — O Eu Interior — Cura da Criança Ferida.
                </p>
            </div>
            <!-- 14o Dia -->
            <div class="glass p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden group hover:border-c-accent/40 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-b from-c-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div class="w-16 h-16 rounded-full border border-c-accent/30 flex items-center justify-center mx-auto mb-6 text-c-accent bg-black/30">
                    <span class="font-title font-bold text-xl">14º</span>
                </div>
                <p class="text-c-accent uppercase tracking-widest text-xs font-bold mb-3">Marco 2</p>
                <p class="text-white/90 font-body font-light leading-relaxed text-sm md:text-base relative z-10">
                    Limpeza de Memórias do Passado — Limpeza da Energia do Nosso Dia — A Escola do Coração.
                </p>
            </div>
            <!-- 21o Dia -->
            <div class="glass p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden group hover:border-c-accent/40 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-b from-c-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div class="w-16 h-16 rounded-full border border-c-accent/30 flex items-center justify-center mx-auto mb-6 text-c-accent bg-black/30">
                    <span class="font-title font-bold text-xl">21º</span>
                </div>
                <p class="text-c-accent uppercase tracking-widest text-xs font-bold mb-3">Marco 3</p>
                <p class="text-white/90 font-body font-light leading-relaxed text-sm md:text-base relative z-10">
                    Limpeza Emocional e Renovação Espiritual — Cura e Clareza Emocional — União com Deus ou seu Guia.
                </p>
            </div>
        </div>

        <!-- A Jornada no App -->
        <div class="border-t border-white/10 pt-16">
            <h3 class="font-title text-3xl md:text-4xl text-white mb-10 uppercase text-center">A Jornada Dentro <span class="text-c-accent italic">do Aplicativo</span></h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">1. Comece por aqui</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">2. Anamnese Detetive Mental</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">3. Aula Detetive Mental</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">4. Protocolo de uso</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">5. Investigador de Sabotadores Ocultos</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">6. Técnica Detetive do Inconsciente SleepMind</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">7. Áudio do dia acompanhado do ebook do dia</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">8. Meditações Hertz do Despertar</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">9. Investigador de Sabotadores Ocultos (12 partes)</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">10. Música-tema Detetive Mental em 7 versões</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">11. Holofractometria Sagrada de Reparação</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">12. Presentes especiais</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">13. Inventário Emocional com 40 áudios</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <i class="ph-bold ph-check text-c-accent text-lg"></i>
                    <span class="text-white/80 font-body text-sm md:text-base font-light">14. Bônus Sons da Natureza com 12 áudios</span>
                </div>
            </div>
        </div>

    </div>
  </section>
</body>
</html>

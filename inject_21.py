import re

text = """ÁUDIO 1  —  A Ausência que Vira Dependência
Descubra por que a ausência do passado ainda faz você implorar, no presente, por um amor que deveria nascer dentro de você.
O QUE INVESTIGA: a raiz da dependência emocional instalada pela ausência de presença, afeto ou atenção dos pais.
O QUE TRAZ À TONA: a cena exata da infância em que essa carência foi registrada como verdade absoluta.
A CURA: reescreve essa memória com presença e acolhimento, dissolvendo a dependência emocional que hoje comanda relacionamentos, amizades e vínculos afetivos.
A CIÊNCIA: a Teoria do Apego (Bowlby) mostra que o vínculo formado nos primeiros anos de vida molda o estilo de apego adulto.
PROMESSA: Você para de precisar da aprovação e da presença constante do outro para se sentir completo.

ÁUDIO 2  —  O Registro do Fracasso
Encontre o momento em que você aprendeu que não era capaz — e pare de repetir o fracasso como se ele fosse o seu destino.
O QUE INVESTIGA: a crença de fracasso instalada por uma experiência de derrota ou reprovação.
O QUE TRAZ À TONA: o episódio que gravou o registro "eu não sou capaz".
A CURA: substitui esse registro por uma nova experiência interna de sucesso e capacidade.
A CIÊNCIA: a reconsolidação de memória mostra que, ao ser reativada, uma lembrança fica temporariamente maleável, podendo ser regravada com novo desfecho.
PROMESSA: Você deixa de recriar, sem perceber, os mesmos resultados de fracasso do passado.

ÁUDIO 3  —  O Sabotador do Topo
Revele o sabotador que aparece quando você está prestes a vencer — e permita-se chegar ao topo sem medo, culpa ou recuo.
O QUE INVESTIGA: o mecanismo oculto que trava você exatamente quando o sucesso está por perto.
O QUE TRAZ À TONA: o momento em que vencer, no passado, trouxe punição, inveja ou solidão.
A CURA: desliga o mecanismo de autossabotagem, permitindo vencer sem culpa.
A CIÊNCIA: o cérebro tende à homeostase psicológica, resistindo até a mudanças positivas que rompem um padrão conhecido.
PROMESSA: Você para de recuar sempre que está a um passo da conquista.

ÁUDIO 4  —  A Sentença do Não Merecimento
Descubra quem ensinou você a não merecer — e pare de expulsar da sua vida justamente aquilo que mais deseja.
O QUE INVESTIGA: a crença de não merecimento instalada bem antes de você poder escolher no que acreditar.
O QUE TRAZ À TONA: a origem exata da sensação de "isso não é pra mim".
A CURA: reprograma o sistema de merecimento, para que prosperidade e sucesso deixem de parecer distantes.
A CIÊNCIA: crenças nucleares formadas na infância moldam o autoconceito adulto e se mantêm por viés de confirmação.
PROMESSA: Você para de sabotar o que mais deseja por achar, no fundo, que não merece.

ÁUDIO 5  —  O Primeiro Registro de Amor
Volte ao primeiro registro de amor da sua história — e ensine seu corpo a sentir que você foi esperado, amado e escolhido.
O QUE INVESTIGA: os primeiros registros de amor, ou de falta dele, formados ainda na gestação.
O QUE TRAZ À TONA: a experiência energética da concepção, da gravidez e dos primeiros meses de vida.
A CURA: reescreve, na raiz mais antiga possível, a certeza de ter sido amado e esperado.
A CIÊNCIA: a memória implícita pré-verbal registra emoção antes mesmo da linguagem.
PROMESSA: Você passa a se sentir amado de verdade, não apenas racionalmente, mas no corpo.

ÁUDIO 6  —  A Cena que Ainda Comanda Você
Reabra a cena que transformou uma derrota em identidade — e pare de carregar um único momento como sentença para a vida inteira.
O QUE INVESTIGA: o pior momento de derrota da sua vida e o que ele ainda dita hoje sobre sua autoimagem.
O QUE TRAZ À TONA: a cena exata que ainda comanda sua insegurança.
A CURA: substitui o desfecho daquela cena, plantando uma nova convicção interna de capacidade.
A CIÊNCIA: a amígdala e o hipocampo consolidam memórias de alta carga emocional com mais força que memórias neutras.
PROMESSA: Você deixa de carregar a insegurança de um único momento como se fosse sua identidade inteira.

ÁUDIO 7  —  A Raiz da Não Aceitação
Encontre a rejeição que ensinou você a não se aceitar — e liberte-se da aprovação externa para finalmente pertencer a si.
O QUE INVESTIGA: qual experiência de rejeição ensinou você a não se aceitar.
O QUE TRAZ À TONA: a cena mais marcante de negação e desprezo que ainda ecoa no seu corpo.
A CURA: substitui a rejeição por reconhecimento, ativando o sentimento genuíno de bem-estar.
A CIÊNCIA: a necessidade de validação social está ligada aos circuitos de recompensa (dopamina e oxitocina).
PROMESSA: Você para de precisar da validação externa para se sentir bem consigo mesmo.

ÁUDIO 8  —  A Casa Abandonada do Desânimo
Entre na casa onde sua tristeza foi abandonada — e desligue o piloto automático que continua puxando sua energia para baixo.
O QUE INVESTIGA: os registros acumulados de tristeza e abandono que sustentam o desânimo persistente.
O QUE TRAZ À TONA: onde, na sua mente inconsciente, essas memórias moram sem tratamento.
A CURA: uma nova frequência une consciente e inconsciente, dissolvendo o peso acumulado.
A CIÊNCIA: o desânimo persistente está associado à ruminação e ao viés negativo de memória.
PROMESSA: Você desativa o piloto automático que te leva, sem motivo aparente, para baixo.

ÁUDIO 9  —  A Prisão que Você Mesmo Construiu
Descubra como você construiu a prisão que hoje limita sua vida — e recupere a sensação de estar inteiro, não remendado.
O QUE INVESTIGA: a prisão mental construída por anos de derrota, mágoa e desprezo acumulados.
O QUE TRAZ À TONA: a versão mais ferida de você mesmo, presa nessa cela emocional.
A CURA: reconecta corpo, mente e emoção ao estado original de plenitude.
A CIÊNCIA: estados de estresse crônico mantêm o sistema nervoso em ativação simpática constante.
PROMESSA: Você recupera a sensação de estar inteiro, não remendado.

ÁUDIO 10  —  A Dívida do Perdão
Encontre o abandono escondido por trás da mágoa — e pare de pagar todos os dias a dívida emocional de quem não cuidou de você.
O QUE INVESTIGA: o momento em que você se sentiu abandonado por quem deveria cuidar de você.
O QUE TRAZ À TONA: a criança que ainda espera, sozinha, por esse acolhimento.
A CURA: promove o reencontro e o perdão entre você e sua história familiar.
A CIÊNCIA: o ato de perdoar reduz níveis de cortisol e ativa regiões do córtex pré-frontal ligadas à regulação emocional.
PROMESSA: Você solta o peso emocional de mágoas que nem sempre sabia que ainda carregava.

ÁUDIO 11  —  O Talento Sob Tampa
Revele a cena que colocou uma tampa nos seus talentos — e volte a ocupar o tamanho real do seu potencial.
O QUE INVESTIGA: qual cena de constrangimento colocou uma tampa nos seus dons naturais.
O QUE TRAZ À TONA: o instante em que você aprendeu a se esconder em vez de brilhar.
A CURA: libera essa trava e grava, no lugar, uma cena nítida do seu propósito de vida.
A CIÊNCIA: a neuroplasticidade permite reorganizar circuitos associados à autoconfiança.
PROMESSA: Você para de se sentir "menor" do que o seu potencial real.

ÁUDIO 12  —  O Vazio Por Trás do Vício
Investigue o vazio que o vício tenta anestesiar — e descubra por que a força de vontade nunca conseguiu libertar você.
O QUE INVESTIGA: qual vazio emocional da infância o seu vício atual tenta preencher.
O QUE TRAZ À TONA: a primeira vez que aquele comportamento surgiu como compensação.
A CURA: dissolve a necessidade de preenchimento externo na raiz, não apenas no sintoma.
A CIÊNCIA: o circuito de recompensa dopaminérgico reforça comportamentos que aliviam desconforto emocional.
PROMESSA: Você entende por que nunca conseguiu largar aquele hábito só na força de vontade.

ÁUDIO 13  —  Os Sete Primeiros Anos
Revisite os sete anos que programaram suas crenças — e descubra de onde nasceu a voz que ainda diz: “isso é impossível”.
O QUE INVESTIGA: ano a ano, dos zero aos sete anos, os registros que formaram sua polaridade emocional.
O QUE TRAZ À TONA: os padrões familiares absorvidos antes de você poder questioná-los.
A CURA: reprograma essas impressões, revertendo a polaridade negativa para positiva.
A CIÊNCIA: até por volta dos sete anos a mente opera em ondas cerebrais mais lentas, absorvendo tudo sem filtro crítico.
PROMESSA: Você entende de onde vêm exatamente as suas crenças de impossibilidade.

ÁUDIO 14  —  A Solidão Mais Antiga
Volte à solidão mais antiga da sua história — e preencha o vazio que nem a presença de outras pessoas consegue alcançar.
O QUE INVESTIGA: o vazio mais antigo, instalado nos primeiros anos de vida.
O QUE TRAZ À TONA: a criança interior isolada, que ainda espera companhia.
A CURA: reconecta você a essa criança, encerrando o ciclo de solidão crônica.
A CIÊNCIA: a solidão crônica ativa regiões cerebrais associadas à dor física.
PROMESSA: Você para de se sentir só mesmo quando está cercado de gente.

ÁUDIO 15  —  O Padrão da Escassez
Descubra onde a escassez se tornou familiar — e pare de recriar a falta mesmo quando você trabalha, luta e faz tudo certo.
O QUE INVESTIGA: os registros de escassez gravados no campo emocional e até no DNA.
O QUE TRAZ À TONA: a referência interna de que nunca há o suficiente.
A CURA: transmuta essa referência de escassez em uma nova referência de abundância.
A CIÊNCIA: a mentalidade de escassez altera a forma como o cérebro avalia risco e oportunidade.
PROMESSA: Você para de recriar, financeiramente, o mesmo padrão de falta, mesmo trabalhando duro.

ÁUDIO 16  —  O Que Está Submerso
Mergulhe no que ficou submerso — e pare de reagir ao presente com a dor de memórias que você pensou ter superado.
O QUE INVESTIGA: as memórias represadas que ainda pesam, mesmo as que você acha que já superou.
O QUE TRAZ À TONA: tudo que está submerso e sufoca sem você entender exatamente por quê.
A CURA: eleva essas memórias à superfície e as dissolve, em vez de deixá-las no fundo.
A CIÊNCIA: memórias emocionais não processadas permanecem ativas no sistema límbico até serem revisitadas.
PROMESSA: Você para de reagir de forma desproporcional a coisas do presente que são, na real, mágoas do passado.

ÁUDIO 17  —  A Conta Que Nunca Fecha
Encerre a conta emocional que nunca fecha — e retire de quem feriu você o poder de continuar cobrando a sua paz.
O QUE INVESTIGA: os episódios de julgamento e injustiça que ainda pedem satisfação.
O QUE TRAZ À TONA: a vontade de reagir que ficou presa na garganta, nunca expressada.
A CURA: transforma o impulso de vingança em liberdade emocional real.
A CIÊNCIA: o ressentimento crônico mantém o sistema de luta ou fuga cronicamente ativado.
PROMESSA: Você deixa de dar poder, todos os dias, para quem te machucou no passado.

ÁUDIO 18  —  O Peso Que Não é Seu
Descubra a culpa que você carrega sem saber de onde veio — e devolva o peso que nunca deveria ter sido seu.
O QUE INVESTIGA: quando a culpa começou a comandar suas decisões, mesmo antes de nascer.
O QUE TRAZ À TONA: a imagem que você criou de si, curvada sob o peso de julgamentos alheios.
A CURA: substitui a culpa por autorresponsabilidade, sem carregar peso que não é seu.
A CIÊNCIA: a culpa crônica está associada a um circuito de autocrítica hiperativo.
PROMESSA: Você para de andar de cabeça baixa esperando ser julgado.

ÁUDIO 19  —  O Gelo na Relação Familiar
Descongele as mágoas que paralisaram sua família — e abra espaço para vínculos mais leves, mesmo quando a distância continua.
O QUE INVESTIGA: as relações familiares "congeladas" por mágoas antigas nunca resolvidas.
O QUE TRAZ À TONA: cada episódio que esfriou o vínculo com pais e parentes.
A CURA: descongela essas memórias com uma nova experiência de acolhimento e perdão mútuo.
A CIÊNCIA: vínculos familiares não resolvidos mantêm o sistema nervoso em estado de alerta relacional.
PROMESSA: Você recupera a possibilidade de uma relação mais leve com sua família, mesmo à distância.

ÁUDIO 20  —  A Sensação de Ser Descartável
Encontre a origem da sensação de ser invisível e descartável — e pare de se anular antes que alguém possa rejeitar você outra vez.
O QUE INVESTIGA: a sensação de invisibilidade que você carrega na família, no trabalho e na sociedade.
O QUE TRAZ À TONA: os episódios que ensinaram você a se sentir descartável.
A CURA: purifica esse campo, restaurando a sensação de ser visto e reconhecido.
A CIÊNCIA: a disforia sensível à rejeição mantém o sistema nervoso em hipervigilância social.
PROMESSA: Você para de se anular preventivamente por medo de ser rejeitado outra vez.

ÁUDIO 21  —  O Fim do Papel de Vítima
Identifique o julgamento que prendeu você no papel de vítima — e assuma, de uma vez por todas, a autoria da própria vida.
O QUE INVESTIGA: o papel de vítima instalado por anos de julgamento e rejeição sofridos.
O QUE TRAZ À TONA: tudo o que esse papel já custou a você em oportunidades perdidas.
A CURA: reconecta você à sua versão protagonista, a que constrói a própria história.
A CIÊNCIA: pessoas com locus de controle interno se percebem como agentes da própria vida; essa mudança de crença é treinável.
PROMESSA: Você assume, de vez, a autoria da sua vida."""

blocks = text.strip().split("\n\n")

html_cards = ""
for i, block in enumerate(blocks):
    lines = block.split('\n')
    if len(lines) < 6: continue
    
    num_match = re.search(r'ÁUDIO (\d+)', lines[0])
    num_str = f"0{num_match.group(1)}" if num_match and len(num_match.group(1)) == 1 else (num_match.group(1) if num_match else str(i+1))
    title = lines[0].split('—')[-1].strip()
    subtitle = lines[1].strip()
    
    investiga = lines[2].replace('O QUE INVESTIGA:', '').strip()
    traz = lines[3].replace('O QUE TRAZ À TONA:', '').strip()
    cura = lines[4].replace('A CURA:', '').strip()
    ciencia = lines[5].replace('A CIÊNCIA:', '').strip()
    promessa = lines[6].replace('PROMESSA:', '').strip() if len(lines) > 6 else ""

    card = f'''
            <!-- Áudio {num_str} -->
            <div class="relative w-full glass rounded-3xl p-6 md:p-10 border border-white/10 hover:border-c-accent/30 transition-all duration-500 group overflow-hidden">
                <div class="absolute top-0 right-0 bg-c-accent text-c-black font-title font-bold text-sm md:text-base px-6 py-2 rounded-bl-3xl z-10 shadow-lg">
                    ÁUDIO {num_str}
                </div>
                <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <h3 class="relative z-10 font-title text-2xl md:text-3xl text-white mb-3 mt-4 md:mt-0 pr-16 md:pr-24">
                    {title}
                </h3>
                <p class="relative z-10 font-body text-base md:text-lg text-white/70 italic mb-8 border-l-2 border-c-accent/50 pl-4">
                    "{subtitle}"
                </p>
                
                <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <p class="text-xs text-c-accent uppercase tracking-widest font-bold mb-1"><i class="ph-bold ph-magnifying-glass mr-1"></i> O Que Investiga</p>
                        <p class="text-white/80 font-light text-sm md:text-base">{investiga}</p>
                    </div>
                    <div>
                        <p class="text-xs text-c-accent uppercase tracking-widest font-bold mb-1"><i class="ph-bold ph-folder-open mr-1"></i> O Que Traz à Tona</p>
                        <p class="text-white/80 font-light text-sm md:text-base">{traz}</p>
                    </div>
                    <div>
                        <p class="text-xs text-c-accent uppercase tracking-widest font-bold mb-1"><i class="ph-bold ph-bandaids mr-1"></i> A Cura</p>
                        <p class="text-white/80 font-light text-sm md:text-base">{cura}</p>
                    </div>
                    <div>
                        <p class="text-xs text-c-accent uppercase tracking-widest font-bold mb-1"><i class="ph-bold ph-atom mr-1"></i> A Ciência</p>
                        <p class="text-white/80 font-light text-sm md:text-base">{ciencia}</p>
                    </div>
                </div>
                
                <div class="relative z-10 mt-8 pt-6 border-t border-white/10 bg-gradient-to-r from-c-accent/5 to-transparent -mx-6 md:-mx-10 px-6 md:px-10 pb-2">
                    <p class="text-xs text-c-accent uppercase tracking-widest font-bold mb-2 flex items-center gap-2"><i class="ph-fill ph-target"></i> Promessa</p>
                    <p class="text-white font-medium text-base md:text-lg">{promessa}</p>
                </div>
            </div>
'''
    html_cards += card

full_html = f'''  <!-- SESSÃO 14: O DOSSIÊ COMPLETO -->
  <section class="relative py-24 md:py-32 w-full bg-c-primary-dark border-t border-white/5 z-20 sec-reveal-container overflow-hidden" id="dossie-completo">
    <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div class="absolute w-[80vw] h-[80vh] top-[10%] left-[-20%] bg-c-accent/5 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
    </div>

    <div class="relative z-10 w-full max-w-5xl mx-auto px-6 reveal flex flex-col items-center text-center">
        
        <h4 class="flex items-center justify-center gap-3 text-c-accent font-body uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-6">
            <div class="w-8 h-[1px] bg-c-accent/50 hidden md:block"></div>
            O MAPA DA INVESTIGAÇÃO
            <div class="w-8 h-[1px] bg-c-accent/50 hidden md:block"></div>
        </h4>
        
        <h2 class="font-title text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.1] max-w-4xl mx-auto uppercase">
            O DOSSIÊ COMPLETO: <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-c-accent-light to-c-accent text-glow-accent italic">AS 21 INVESTIGAÇÕES</span>
        </h2>
        
        <div class="max-w-3xl mx-auto space-y-6 mb-16 text-center">
            <p class="font-body text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                21 investigações. 21 bloqueios específicos. Cada áudio abre um processo diferente dentro do seu inconsciente.
            </p>
            <p class="font-body text-base md:text-lg text-white/80 font-light leading-relaxed">
                Com o meu protocolo pessoal DETETIVE MENTAL® - INVESTIGADOR DE SABOTADORES OCULTOS, você vai encontrar as respostas para desvendar quais feridas emocionais da criança interior magoada estão comprometendo seu sucesso, encontrando assim a verdadeira saída para o sucesso e a felicidade no Labirinto Escuro da Mente Inconsciente.
            </p>
        </div>

        <div class="w-full flex flex-col gap-8 text-left">
{html_cards}
        </div>
        
    </div>
  </section>

</body>
</html>'''

import os
file_path = 'f:/2026/Elaine/LPs/Psicanalise/public/index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content.replace('</body>\n</html>', full_html)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done!')

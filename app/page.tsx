import HeroProcessVisual from './hero-process-visual';

const capabilities = [
  { title: 'Máquinas laser', detail: 'Corte de alta precisão em até 6 kW', tag: 'Corte térmico · 3 máquinas', image: '/equipment-laser.png', specsLabel: 'Materiais / espessura máx.', specs: [['Mesa', '1.500 × 3.000 mm'], ['Inox', '25,40 mm'], ['Carbono', '25,40 mm'], ['Galvanizado', '2,70 mm'], ['Alumínio', '5 mm']] },
  { title: 'Plasma HD', detail: 'Performance para chapas e estruturas robustas', tag: 'Alta definição · 1 máquina', image: '/equipment-plasma.png', specsLabel: 'Materiais / espessura máx.', specs: [['Mesa', '2.500 × 6.000 mm'], ['Inox', '38,10 mm'], ['Carbono', '38,10 mm']] },
  { title: 'Oxicorte', detail: 'Potência para grandes espessuras e formatos', tag: 'Força industrial · 1 máquina', image: '/equipment-oxicorte.png', specsLabel: 'Materiais / espessura máx.', specs: [['Mesa', '2.500 × 6.000 mm'], ['Carbono', '101,60 mm']] },
  { title: 'Dobradeiras', detail: 'Conformação precisa para cada projeto', tag: 'Conformação · 4 máquinas', image: '/equipment-dobra.png', specsLabel: 'Capacidade', specs: [['Tamanho', '4 metros'], ['Espessura', '15,80 mm']] },
  { title: 'Calandras', detail: 'Curvas e cilindros com repetibilidade', tag: 'Conformação · 6 máquinas', image: '/equipment-calandra.png', specsLabel: 'Capacidade', specs: [['Tamanho', '3 metros'], ['Espessura', '15,80 mm']] },
  { title: 'Solda', detail: 'Uniões resistentes e acabamento técnico para cada conjunto', tag: 'Uniões metálicas · 10 máquinas', image: '/process-solda.png', specsLabel: 'Processos / quantidade', specs: [['MIG', '6 máquinas'], ['TIG', '2 máquinas'], ['Laser', '2 máquinas']] },
  { title: 'Baias de montagem', detail: 'Espaço e organização para entregar conjuntos completos', tag: 'Montagem · 8 baias', image: '/equipment-montagem.png', specsLabel: 'Capacidade', specs: [['Baias', '8 unidades']] },
  { title: 'Pintura', detail: 'Proteção e acabamento para aumentar a durabilidade das estruturas', tag: 'Acabamento', image: '/process-pintura.png', specsLabel: 'Processos', specs: [['Métodos', 'Eletrostática · Líquida']] },
];

const proofPoints = [
  { value: '20', label: 'anos de empresa' },
  { value: '500', label: 'clientes atendidos' },
  { value: '1.000', label: 'projetos concluídos' },
];

const valueProcesses = [
  { number: '01', title: 'Engenharia', detail: 'Projetos e soluções pensados para cada necessidade.', image: '/process-engenharia.png' },
  { number: '02', title: 'Programação CNC', detail: 'Precisão digital para transformar desenho em produção.', image: '/process-cnc.png' },
  { number: '03', title: 'Corte', detail: 'Laser, plasma HD e oxicorte para diferentes materiais.', image: '/process-corte.png' },
  { number: '04', title: 'Dobra', detail: 'Conformação controlada para encaixes e acabamentos precisos.', image: '/process-dobra.png' },
  { number: '05', title: 'Caldeiraria', detail: 'Montagem de estruturas robustas, funcionais e duráveis.', image: '/process-caldeiraria.png' },
  { number: '06', title: 'Solda', detail: 'Uniões resistentes e acabamento técnico para cada conjunto.', image: '/process-solda.png' },
  { number: '07', title: 'Pintura', detail: 'Proteção e acabamento para aumentar a durabilidade das estruturas.', image: '/process-pintura.png' },
  { number: '08', title: 'Qualidade', detail: 'Inspeção cuidadosa para garantir conformidade em cada entrega.', image: '/process-qualidade.png' },
];

const industries = [
  { number: '01', title: 'Petróleo e gás', detail: 'Estruturas e componentes para operações de alta exigência.', image: '/industry-petroleo-gas.png' },
  { number: '02', title: 'Mineração', detail: 'Soluções robustas para ambientes de trabalho intensos.', image: '/industry-mineracao.png' },
  { number: '03', title: 'Rodoviário', detail: 'Estruturas e componentes para implementos e aplicações rodoviárias.', image: '/industry-rodoviario.png' },
  { number: '04', title: 'Agrícola', detail: 'Peças e conjuntos para máquinas e operações no campo.', image: '/industry-agricola.png' },
  { number: '05', title: 'Moveleira', detail: 'Precisão para máquinas, linhas produtivas e equipamentos.', image: '/industry-moveleira.png' },
  { number: '06', title: 'Refrigeração', detail: 'Componentes metálicos para sistemas térmicos e industriais.', image: '/industry-refrigeracao.png' },
  { number: '07', title: 'Climatização', detail: 'Estruturas e dutos para soluções de controle ambiental.', image: '/industry-climatizacao.png' },
  { number: '08', title: 'Indústrias segmentadas', detail: 'Projetos metal-mecânicos adaptados a cada operação.', image: '/industry-segmentadas.png' },
  { number: '09', title: 'Energia', detail: 'Fabricação para sistemas industriais e aplicações energéticas.', image: '/industry-energia.png' },
  { number: '10', title: 'Construção e infraestrutura', detail: 'Soluções metálicas para obras, instalações e projetos especiais.', image: '/industry-construcao.png' },
];

function Brand() {
  return <span className="brand"><img className="brand__mark" src="/logo-mark.png" alt="" /><span className="brand__name"><strong>BONA<span>FER</span></strong><small>SOLUÇÕES METAL-MECÂNICAS</small></span></span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <HeroProcessVisual />
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />
        <span className="hero__laser-beam" aria-hidden="true" />

        <nav className="nav shell" aria-label="Navegação principal">
          <a href="#inicio" aria-label="Bonafer - início"><Brand /></a>
          <div className="nav__links"><a href="#sobre">Sobre</a><a href="#valores">Objetivo</a><a href="#estrutura">Estrutura</a><a href="#processo">Processos</a><a href="#segmentos">Segmentos</a><a href="#contato">Contato</a></div>
          <a className="nav__cta" href="#contato">Solicitar orçamento</a>
        </nav>

        <div className="hero__content shell">
          <div className="hero__copy">
            <p className="eyebrow"><span /> Excelência em cada detalhe.</p>
            <h1>Estruturas metálicas<br /><em>com inteligência, rapidez<br />e exatidão.</em></h1>
            <p className="hero__lead">Soluções metal-mecânicas completas para transformar especificação em resultado — do corte à montagem final.</p>
            <div className="hero__actions"><a className="button button--primary" href="#contato">Começar um projeto</a><a className="button button--ghost" href="#estrutura">Conheça nossa estrutura</a></div>
          </div>
          <div className="hero__signal" aria-label="Destaque Bonafer"><span className="hero__signal-line" /><div><strong>20<span>+</span></strong><p>anos criando<br />soluções que duram</p></div></div>
        </div>

        <div className="hero__bottom shell"><span className="scroll-note"><span className="scroll-note__dot" /> Role para explorar</span><span className="hero__index">01 <i /> 04</span></div>
      </section>

      <section className="proof-bar" aria-label="Números da Bonafer"><div className="shell proof-bar__inner"><p className="proof-bar__intro">Uma estrutura<br /><strong>à altura do desafio.</strong></p>{proofPoints.map((point) => <div className="proof" key={point.label}><strong>{point.value}<span>+</span></strong><span>{point.label}</span></div>)}</div></section>

      <section className="about" id="sobre"><div className="shell about__grid"><div className="about__copy"><p className="eyebrow"><span /> Quem somos</p><h2>Uma estrutura que transforma desafio em <em>resultado.</em></h2><p>Há 20 anos, a Bonafer desenvolve soluções metal-mecânicas para empresas que precisam de precisão, ritmo e confiança em cada etapa.</p><p>Unimos engenharia, tecnologia e experiência de chão de fábrica para tirar projetos do papel e entregar conjuntos prontos para o próximo movimento.</p><a className="text-link" href="#contato">Falar com a Bonafer</a></div><div className="company-image-slot"><img className="company-image-slot__photo" src="/company-front.jpeg" alt="Fachada da Bonafer em Sapucaia do Sul" /><div className="company-image-stats" aria-label="Estrutura da Bonafer"><div><strong>2.400</strong><span>m² de estrutura</span></div><div><strong>40+</strong><span>funcionários</span></div></div></div></div></section>

      <section className="section values" id="valores"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span /> Objetivo</p><h2>Experiência que<br /><em>olha para frente.</em></h2></div><p className="section-heading__text">Mais do que fabricar peças, construímos relações duradouras e soluções que acompanham a evolução de cada cliente.</p></div><div className="values-grid"><article className="value-card"><span className="value-card__number">01</span><h3>Missão</h3><p>Entregar soluções metal-mecânicas completas, precisas e confiáveis, combinando tecnologia, conhecimento técnico e proximidade para transformar as necessidades dos nossos clientes em resultados concretos.</p><span className="value-card__mark">M</span></article><article className="value-card value-card--accent"><span className="value-card__number">02</span><h3>Visão</h3><p>Ser reconhecida como uma das principais referências em soluções metal-mecânicas no Sul do Brasil, evoluindo continuamente em processos, pessoas e tecnologia para atender desafios cada vez maiores.</p><span className="value-card__mark">V</span></article></div></div></section>

      <section className="section structure" id="estrutura"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow"><span /> Nossa capacidade</p><h2>Do primeiro corte<br />ao <em>último detalhe.</em></h2></div><p className="section-heading__text">Tecnologia, escala e precisão reunidas em um só lugar para fazer o seu projeto avançar sem ruído.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <article className="capability" key={item.title}><div className="capability__visual" aria-hidden="true"><img src={item.image} alt="" /></div><div className="capability__top"><span className="capability__tag">{item.tag}</span></div><h3>{item.title}</h3><p>{item.detail}</p><div className="capability__specs"><span className="capability__specs-label">{item.specsLabel}</span>{item.specs.map(([label, value]) => <div className="capability__spec" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><span className="capability__line" /></article>)}</div>
      </div></section>

      <section className="section process-values" id="processo"><div className="shell"><div className="section-heading section-heading--process"><div><p className="eyebrow"><span /> Soluções</p><h2>Processos que<br /><em>geram valor.</em></h2></div><p className="section-heading__text">Da engenharia à qualidade, cada etapa combina conhecimento técnico e tecnologia para transformar necessidade em resultado.</p></div><div className="process-value-grid">{valueProcesses.map((item) => <article className="process-value" key={item.title}><div className="process-value__visual"><img src={item.image} alt={`Processo de ${item.title.toLowerCase()}`} /><span className="process-value__number">{item.number}</span><span className="process-value__beam" /></div><div className="process-value__body"><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div><p className="process-scroll-note"><span /> Deslize lateralmente para explorar todos os processos</p></div></section>

      <section className="section industries" id="segmentos"><div className="shell"><div className="section-heading section-heading--industries"><div><p className="eyebrow"><span /> Segmentos atendidos</p><h2>Metal para cada<br /><em>desafio industrial.</em></h2></div><p className="section-heading__text">A mesma precisão se adapta a diferentes setores, materiais e necessidades de produção.</p></div><div className="industry-grid">{industries.map((item) => <article className="industry" key={item.title}><div className="industry__media"><img src={item.image} alt={`Aplicação da Bonafer no setor ${item.title.toLowerCase()}`} /><span className="industry__number">{item.number}</span></div><div className="industry__body"><span className="industry__rule" /><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></div></section>

      <section className="contact" id="contato"><div className="contact__orb" aria-hidden="true" /><div className="shell contact__inner"><div><p className="eyebrow"><span /> Próximo passo</p><h2>Seu próximo grande<br /><em>projeto começa aqui.</em></h2></div><div className="contact__action"><p>Conte para a gente o que você precisa construir. Nossa equipe está pronta para encontrar o melhor caminho.</p><div className="contact__details"><a href="tel:+555136374300">(51) 3637-4300</a><a href="mailto:contato@bonafer.com.br">contato@bonafer.com.br</a><span>Av. Lúcio Bittencourt, 1771 · Centro<br />Sapucaia do Sul / RS · 93214-290</span></div><a className="button button--primary" href="mailto:contato@bonafer.com.br?subject=Solicitação%20de%20orçamento">Falar com a equipe</a></div><div className="contact__map"><div className="contact__map-label">Onde estamos</div><iframe src="https://www.google.com/maps?q=Av.%20L%C3%BAcio%20Bittencourt%2C%201771%2C%20Centro%2C%20Sapucaia%20do%20Sul%20-%20RS%2C%2093214-290&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Localização da Bonafer em Sapucaia do Sul" /></div></div></section>

      <footer className="footer"><div className="shell footer__inner"><a href="#inicio" aria-label="Bonafer - início"><Brand /></a><p>Excelência em cada detalhe.</p><span>© {new Date().getFullYear()} Bonafer</span></div></footer>
    </main>
  );
}

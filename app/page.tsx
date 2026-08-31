const capabilities = [
  { number: '03', title: 'Máquinas laser', detail: 'Corte de alta precisão em até 6 kW', tag: 'Corte térmico', visual: 'laser', image: '/equipment-laser.png' },
  { number: '01', title: 'Plasma HD', detail: 'Performance para chapas e estruturas robustas', tag: 'Alta definição', visual: 'plasma', image: '/equipment-plasma.png' },
  { number: '01', title: 'Oxicorte', detail: 'Potência para grandes espessuras e formatos', tag: 'Força industrial', visual: 'oxicorte', image: '/equipment-oxicorte.png' },
  { number: '04', title: 'Dobradeiras', detail: 'Conformação precisa para cada projeto', tag: 'Conformação', visual: 'dobra', image: '/equipment-dobra.png' },
  { number: '06', title: 'Calandras', detail: 'Curvas e cilindros com repetibilidade', tag: 'Caldeiraria', visual: 'calandra', image: '/equipment-calandra.png' },
  { number: '08', title: 'Baias de montagem', detail: 'Espaço e organização para entregar conjuntos completos', tag: 'Montagem', visual: 'montagem', image: '/equipment-montagem.png' },
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
];

const industries = [
  { number: '01', title: 'Máquinas e equipamentos', detail: 'Componentes, estruturas e conjuntos desenvolvidos sob medida.', icon: 'machine' },
  { number: '02', title: 'Construção e infraestrutura', detail: 'Soluções metálicas para obras, instalações e projetos especiais.', icon: 'construction' },
  { number: '03', title: 'Agronegócio', detail: 'Peças e estruturas para equipamentos e operações no campo.', icon: 'agro' },
  { number: '04', title: 'Rodoviário', detail: 'Estruturas e componentes para implementos e aplicações rodoviárias.', icon: 'road' },
  { number: '05', title: 'Energia', detail: 'Fabricação para sistemas industriais e aplicações energéticas.', icon: 'energy' },
  { number: '06', title: 'Indústrias', detail: 'Projetos metal-mecânicos adaptados à necessidade de cada operação.', icon: 'industry' },
];

function Brand() {
  return <span className="brand"><img className="brand__mark" src="/logo-mark.png" alt="" /><span className="brand__name"><strong>BONA<span>FER</span></strong><small>SOLUÇÕES METAL-MECÂNICAS</small></span></span>;
}

function SegmentIcon({ kind }: { kind: string }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  if (kind === 'machine') return <svg {...common}><path d="M3 20h18" /><path d="M5 20v-7l5 3V9l5 3V6h4v14" /><path d="M16 6V3h3v3" /><path d="M7 12h2" /></svg>;
  if (kind === 'construction') return <svg {...common}><path d="M3 21h18" /><path d="M5 21V9l6 3V7l5 2v12" /><path d="M16 9V4h3v5" /><path d="M8 15h1M12 15h1M8 18h1M12 18h1" /></svg>;
  if (kind === 'agro') return <svg {...common}><path d="M12 21V9" /><path d="M12 12c-4 0-6-2-6-5 4 0 6 2 6 5Z" /><path d="M12 16c4 0 6-2 6-5-4 0-6 2-6 5Z" /><path d="M5 21h14" /><path d="M8 21c0-2 1-3 4-3s4 1 4 3" /></svg>;
  if (kind === 'road') return <svg {...common}><path d="M3 17h18" /><path d="M5 17l2-5h8l3 5" /><path d="M15 12V8h3l3 4" /><circle cx="8" cy="18" r="1.5" /><circle cx="18" cy="18" r="1.5" /><path d="M3 21h3M10 21h4M18 21h3" /></svg>;
  if (kind === 'energy') return <svg {...common}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>;
  return <svg {...common}><path d="M3 21V8l6 3V7l6 3V4h6v17" /><path d="M3 21h18" /><path d="M6 16h2M11 16h2M6 19h2M11 19h2M18 8h1M18 12h1M18 16h1" /></svg>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero__backdrop" aria-hidden="true" />
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

      <section className="about" id="sobre"><div className="shell about__grid"><div className="about__copy"><p className="eyebrow"><span /> Quem somos</p><h2>Uma estrutura que transforma desafio em <em>resultado.</em></h2><p>Há 20 anos, a Bonafer desenvolve soluções metal-mecânicas para empresas que precisam de precisão, ritmo e confiança em cada etapa.</p><p>Unimos engenharia, tecnologia e experiência de chão de fábrica para tirar projetos do papel e entregar conjuntos prontos para o próximo movimento.</p><a className="text-link" href="#contato">Falar com a Bonafer</a></div><div className="company-image-slot"><img className="company-image-slot__photo" src="/company-front.jpeg" alt="Fachada da Bonafer em São Leopoldo" /></div></div></section>

      <section className="section values" id="valores"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span /> Objetivo</p><h2>Experiência que<br /><em>olha para frente.</em></h2></div><p className="section-heading__text">Mais do que fabricar peças, construímos relações duradouras e soluções que acompanham a evolução de cada cliente.</p></div><div className="values-grid"><article className="value-card"><span className="value-card__number">01</span><h3>Missão</h3><p>Entregar soluções metal-mecânicas completas, precisas e confiáveis, combinando tecnologia, conhecimento técnico e proximidade para transformar as necessidades dos nossos clientes em resultados concretos.</p><span className="value-card__mark">M</span></article><article className="value-card value-card--accent"><span className="value-card__number">02</span><h3>Visão</h3><p>Ser reconhecida como uma das principais referências em soluções metal-mecânicas no Sul do Brasil, evoluindo continuamente em processos, pessoas e tecnologia para atender desafios cada vez maiores.</p><span className="value-card__mark">V</span></article></div></div></section>

      <section className="section structure" id="estrutura"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow"><span /> Nossa capacidade</p><h2>Do primeiro corte<br />ao <em>último detalhe.</em></h2></div><p className="section-heading__text">Tecnologia, escala e precisão reunidas em um só lugar para fazer o seu projeto avançar sem ruído.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <article className="capability" key={item.title}><div className="capability__visual" aria-hidden="true"><img src={item.image} alt="" /><span>{item.tag}</span></div><div className="capability__top"><span className="capability__number">{item.number}</span><span className="capability__tag">{item.tag}</span></div><h3>{item.title}</h3><p>{item.detail}</p><span className="capability__line" /></article>)}</div>
      </div></section>

      <section className="section process-values" id="processo"><div className="shell"><div className="section-heading section-heading--process"><div><p className="eyebrow"><span /> Soluções</p><h2>Processos que<br /><em>geram valor.</em></h2></div><p className="section-heading__text">Da engenharia à caldeiraria, cada etapa combina conhecimento técnico e tecnologia para transformar necessidade em resultado.</p></div><div className="process-value-grid">{valueProcesses.map((item) => <article className="process-value" key={item.title}><div className="process-value__visual"><img src={item.image} alt="" /><span className="process-value__number">{item.number}</span><span className="process-value__beam" /></div><div className="process-value__body"><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></div></section>

      <section className="section industries" id="segmentos"><div className="shell"><div className="section-heading section-heading--industries"><div><p className="eyebrow"><span /> Segmentos atendidos</p><h2>Metal para cada<br /><em>desafio industrial.</em></h2></div><p className="section-heading__text">A mesma precisão se adapta a diferentes setores, materiais e necessidades de produção.</p></div><div className="industry-grid">{industries.map((item) => <article className="industry" key={item.title}><div className="industry__topline"><span className="industry__number">{item.number}</span><span className="industry__icon" aria-hidden="true"><SegmentIcon kind={item.icon} /></span></div><span className="industry__rule" /><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></div></section>

      <section className="contact" id="contato"><div className="contact__orb" aria-hidden="true" /><div className="shell contact__inner"><div><p className="eyebrow"><span /> Próximo passo</p><h2>Seu próximo grande<br /><em>projeto começa aqui.</em></h2></div><div className="contact__action"><p>Conte para a gente o que você precisa construir. Nossa equipe está pronta para encontrar o melhor caminho.</p><div className="contact__details"><a href="tel:+555136374300">(51) 3637-4300</a><a href="mailto:contato@bonafer.com.br">contato@bonafer.com.br</a><span>São Leopoldo / RS</span></div><a className="button button--primary" href="mailto:contato@bonafer.com.br?subject=Solicitação%20de%20orçamento">Falar com a equipe</a></div></div></section>

      <footer className="footer"><div className="shell footer__inner"><a href="#inicio" aria-label="Bonafer - início"><Brand /></a><p>Excelência em cada detalhe.</p><span>© {new Date().getFullYear()} Bonafer</span></div></footer>
    </main>
  );
}

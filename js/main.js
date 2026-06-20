const i18n = {
  pt: {
    hero_eyebrow: "$ whoami",
    hero_role: "Desenvolvedor Web — a construir sistemas que resolvem problemas reais de Angola",
    hero_mission: "De identidade digital a acesso a medicamentos: uso código para atacar problemas do dia a dia angolano.",
    hero_cta1: "Ver projetos",
    hero_cta2: "Falar comigo",
    eyebrow_about: "$ cat sobre.md",
    about_title: "Sobre",
    about_p1: "Estou a fazer a transição do 1º para o 2º ano do Curso Técnico de Informática no Instituto Médio Privado de Tecnologia (IMPTEL). Construo plataformas full-stack — front-end em HTML, CSS e JavaScript, back-end em PHP e MySQL — e estou a dar os primeiros passos em segurança ofensiva (pentest), porque construir sistemas seguros começa por perceber como eles falham.",
    about_mission: "&gt; missão: usar tecnologia para resolver problemas reais — do meu país e do mundo.",
    status_edu: "Técnico de Informática — IMPTEL (2º ano)",
    eyebrow_projects: "$ ls sistemas/",
    projects_title: "Projetos",
    domain_edu: "EDUCAÇÃO",
    domain_identity: "IDENTIDADE",
    domain_health: "SAÚDE",
    domain_community: "COMUNIDADE",
    proj_zenit: "Plataforma de apoio inteligente ao estudante angolano: XP, níveis e streaks para gamificar o estudo, quizzes, chatbot ligado à Wikipédia, feed da comunidade e sistema de feedback.",
    proj_aris: "Plataforma pensada para digitalizar e simplificar o registo de identidade em Angola — menos filas, mais acesso.",
    proj_codefarma: "Sistema de encomenda de medicamentos que aproxima quem precisa de tratamento de quem o fornece.",
    proj_cis: "Espaço digital do IMPTEL para interação, partilha de conhecimento e exposição dos projetos da comunidade do instituto.",
    proj_codestark: "Plataforma de apoio a pequenas empresas: gestão de vendas, despesas e créditos, tudo num só lugar.",
    domain_finance: "FINANÇAS",
    note_unhosted_aris: "Projeto submetido ao Governo / MINJUSDH — ainda não hospedado publicamente.",
    note_unhosted_codefarma: "Projeto submetido a farmácias / MINSA — ainda não hospedado publicamente.",
    note_unhosted_codestark: "Projeto submetido ao Governo / BNA — ainda não hospedado publicamente.",
    view_project: "Ver projeto",
    eyebrow_skills: "$ cat skills.json",
    skills_title: "Competências",
    skill_frontend: "FRONTEND",
    note_frontend: "Prática sólida",
    skill_backend: "BACKEND",
    note_backend: "Conhecimento de base, aplicado em projetos reais",
    skill_tools: "FERRAMENTAS",
    tool_vibe: "Vibe coding / IA aplicada",
    note_vibe: "Desenvolvimento assistido por IA",
    tool_maint: "Manutenção de PCs &middot; Office",
    note_maint: "Suporte técnico do dia a dia",
    skill_security: "SEGURANÇA",
    tool_pentest: "Pentest",
    note_pentest: "Em exploração inicial",
    eyebrow_contact: "$ cat contact.json",
    contact_title: "Contacto",
    contact_cta: "Enviar email"
  },
  en: {
    hero_eyebrow: "$ whoami",
    hero_role: "Web Developer — building systems that solve real problems for Angola",
    hero_mission: "From digital identity to access to medicine: I use code to take on everyday problems in Angola.",
    hero_cta1: "View projects",
    hero_cta2: "Get in touch",
    eyebrow_about: "$ cat about.md",
    about_title: "About",
    about_p1: "I'm transitioning from 1st to 2nd year of the Technical Course in Computer Science at Instituto Médio Privado de Tecnologia (IMPTEL). I build full-stack platforms — front-end in HTML, CSS and JavaScript, back-end in PHP and MySQL — and I'm taking my first steps in offensive security (pentest), because building secure systems starts with understanding how they break.",
    about_mission: "&gt; mission: use technology to solve real problems — for my country and the world.",
    status_edu: "Computer Science (Technical) — IMPTEL (2nd year)",
    eyebrow_projects: "$ ls systems/",
    projects_title: "Projects",
    domain_edu: "EDUCATION",
    domain_identity: "IDENTITY",
    domain_health: "HEALTH",
    domain_community: "COMMUNITY",
    proj_zenit: "Intelligent support platform for Angolan students: XP, levels and streaks to gamify studying, quizzes, a Wikipedia-connected chatbot, a community feed, and a feedback system.",
    proj_aris: "Platform designed to digitize and simplify identity registration in Angola — fewer queues, more access.",
    proj_codefarma: "Medicine ordering system that connects people who need treatment with those who supply it.",
    proj_cis: "IMPTEL's digital space for interaction, knowledge-sharing, and showcasing the institute community's projects.",
    proj_codestark: "Support platform for small businesses: sales, expense and credit management, all in one place.",
    domain_finance: "FINANCE",
    note_unhosted_aris: "Project submitted to the Government / MINJUSDH — not publicly hosted yet.",
    note_unhosted_codefarma: "Project submitted to pharmacies / MINSA — not publicly hosted yet.",
    note_unhosted_codestark: "Project submitted to the Government / BNA — not publicly hosted yet.",
    view_project: "View project",
    eyebrow_skills: "$ cat skills.json",
    skills_title: "Skills",
    skill_frontend: "FRONTEND",
    note_frontend: "Solid hands-on practice",
    skill_backend: "BACKEND",
    note_backend: "Foundational, applied in real projects",
    skill_tools: "TOOLS",
    tool_vibe: "Vibe coding / applied AI",
    note_vibe: "AI-assisted development",
    tool_maint: "PC maintenance &middot; Office",
    note_maint: "Everyday tech support",
    skill_security: "SECURITY",
    tool_pentest: "Pentest",
    note_pentest: "Early-stage exploration",
    eyebrow_contact: "$ cat contact.json",
    contact_title: "Contact",
    contact_cta: "Send email"
  }
};

function applyLang(lang){
  document.documentElement.lang = lang === 'pt' ? 'pt' : 'en';
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.getElementById('btn-pt').classList.toggle('active', lang==='pt');
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
}

function setLang(lang){
  applyLang(lang);
  try{ window.__lang = lang; }catch(e){}
}

// Boot terminal typing sequence
const bootLines = {
  pt: [
    {p:'whoami', o:'Arnaldo André Domingos'},
    {p:'role', o:'Desenvolvedor Web'},
    {p:'status', o:'A construir sistemas que resolvem problemas reais.'}
  ],
  en: [
    {p:'whoami', o:'Arnaldo André Domingos'},
    {p:'role', o:'Web Developer'},
    {p:'status', o:'Building systems that solve real problems.'}
  ]
};

function renderBootStatic(lang){
  const body = document.getElementById('terminalBody');
  const lines = bootLines[lang];
  body.innerHTML = lines.map(l =>
    `<div class="line"><span class="prompt">&gt;</span>${l.p}<br></div><div class="line out">${l.o}</div>`
  ).join('') + '<span class="cursor"></span>';
}

function typeBoot(lang){
  const body = document.getElementById('terminalBody');
  body.innerHTML = '';
  const lines = bootLines[lang];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){ renderBootStatic(lang); return; }

  let li = 0;
  function nextLine(){
    if(li >= lines.length){
      body.insertAdjacentHTML('beforeend', '<span class="cursor"></span>');
      return;
    }
    const lineWrap = document.createElement('div');
    lineWrap.className = 'line';
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = '>';
    lineWrap.appendChild(prompt);
    const textSpan = document.createElement('span');
    lineWrap.appendChild(textSpan);
    body.appendChild(lineWrap);

    const promptText = lines[li].p;
    let ci = 0;
    const typeInterval = setInterval(() => {
      textSpan.textContent += promptText[ci];
      ci++;
      if(ci >= promptText.length){
        clearInterval(typeInterval);
        const outDiv = document.createElement('div');
        outDiv.className = 'line out';
        outDiv.textContent = lines[li].o;
        body.appendChild(outDiv);
        li++;
        setTimeout(nextLine, 220);
      }
    }, 35);
  }
  nextLine();
}

function scrollToSection(id){
  const target = document.getElementById(id);
  if(target){ target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang('pt');
  typeBoot('pt');
});
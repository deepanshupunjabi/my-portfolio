import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Code2, Database, BrainCircuit, Terminal, Menu, X, ExternalLink,
  Sparkles, CloudSun, BarChart3, Download
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "DataMind AI",
    category: "DATA ANALYTICS · AI",
    description: "A data analysis studio focused on cleaning datasets, building clear dashboards, and turning raw information into useful insights.",
    tags: ["Python", "Data Cleaning", "Dashboards", "Insights"],
    live: "https://data-analysis-studio.onrender.com/",
    github: "https://github.com/deepanshupunjabi/DataAnalysisStudio",
    icon: BarChart3,
    accent: "violet"
  },
  {
    number: "02",
    name: "Weatherly",
    category: "WEATHER · WEB APP",
    description: "A city-wise weather application that presents useful conditions at a glance, including temperature and wind speed.",
    tags: ["React.js", "FastAPI", "Weather API", "JavaScript"],
    live: "https://weatherly-production-7a8d6157.up.railway.app/",
    github: "https://github.com/deepanshupunjabi/Weatherly",
    icon: CloudSun,
    accent: "blue"
  }
];

const skillGroups = [
  { title: "Programming", icon: Code2, skills: ["Python"] },
  { title: "Data & Database", icon: Database, skills: [ "MySQL", "Excel", "R Programming"] },
  { title: "Development", icon: Terminal, skills: [ "FastAPI", "Git", "GitHub"] },
  { title: "AI & Emerging Tech", icon: BrainCircuit, skills: ["Generative AI"] }
];

function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <div className="grain" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">DP.</span><span>DEEPANSHU<br/><small>PORTFOLIO / 2026</small></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Hire Me <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
              <span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/>
            </motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>HELLO, I'M</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
              Deepanshu<br/><span>Punjabi.</span>
            </motion.h1>
            <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
              <span className="role-bar"/> PYTHON DEVELOPER <i>×</i> AI ENTHUSIAST
            </motion.div>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
              Turning ideas into <em>intelligent</em><br className="desktop-break"/> digital experiences.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#contact">Get in touch <ArrowDownRight size={16}/></a>
            </motion.div>
            <motion.div className="hero-location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85 }}><MapPin size={14}/> KOTA, RAJASTHAN, INDIA <span>·</span> B.SC. STUDENT</motion.div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .25, ease: "easeOut" }}>
            <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
            <div className="portrait-frame">
              <div className="portrait-topline"><span>FIG. 001</span><span>CREATIVE MINDSET</span></div>
              <img src="/assets/profile-anime.jfif" alt="Anime-inspired white-haired character portrait" />
              <div className="portrait-caption"><span>FOCUS ON WHAT'S NEXT</span><span>01 / 04</span></div>
            </div>
            <div className="floating-note note-top"><Sparkles size={15}/> CREATIVE THINKER</div>
            <div className="floating-note note-bottom"><span className="mini-pulse"/> BUILDING THE FUTURE</div>
            <div className="visual-index">DP — 26</div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE</a>
          <div className="hero-side-label">DEVELOP · ANALYZE · CREATE</div>
        </section>

        <section className="intro-strip">
          <div className="strip-inner"><span>CURIOUS BY NATURE</span><b>✳</b><span>BUILDER BY CHOICE</span><b>✳</b><span>ALWAYS LEARNING</span><b>✳</b><span>FUTURE FOCUSED</span></div>
        </section>

        <section className="section-wrap about-section" id="about">
          <Reveal><div className="section-label"><span>01 / ABOUT</span><i/></div></Reveal>
          <div className="about-grid">
            <Reveal><h2>Not just writing code.<br/><span>Creating possibilities.</span></h2></Reveal>
            <Reveal delay={.12}><div className="about-copy"><p className="large-copy">I'm Deepanshu — a Python Developer and AI enthusiast who enjoys turning problems into practical digital solutions.</p><p>I'm currently pursuing my B.Sc. (PCB) at the University of Kota while developing my skills in programming, data analytics, and modern web technologies. I believe every project is a chance to learn, experiment, and build something meaningful.</p><div className="about-meta"><div><small>BASED IN</small><strong>Kota, India</strong></div><div><small>EXPERIENCE</small><strong>Fresher · Open to learn</strong></div></div></div></Reveal>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <Reveal><div className="section-label"><span>02 / TOOLKIT</span><i/></div><div className="section-heading-row"><h2>Tools of my <span>trade.</span></h2><p>A growing toolkit for building, analyzing<br/>and exploring ideas.</p></div></Reveal>
          <div className="skill-grid">
            {skillGroups.map((group, i) => <Reveal key={group.title} delay={i * .08}><div className="skill-card"><div className="skill-card-head"><group.icon size={21}/><span>0{i + 1}</span></div><h3>{group.title}</h3><div className="skill-pills">{group.skills.map(s => <span key={s}>{s}</span>)}</div></div></Reveal>)}
          </div>
          <Reveal><div className="learning-row"><div><span className="learning-dot"/> CURRENTLY LEARNING</div><span>TABLEAU</span><span>POWER BI</span></div></Reveal>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <Reveal><div className="section-label"><span>03 / SELECTED WORK</span><i/></div><div className="section-heading-row"><h2>Things I've <span>built.</span></h2><p>Ideas brought to life through code,<br/>curiosity, and continuous iteration.</p></div></Reveal>
          <div className="project-list">
            {projects.map((p, i) => <Reveal key={p.name} delay={i * .12}><article className={`project-card ${p.accent}`}>
              <div className="project-number">{p.number} <span>— PROJECT</span></div>
              <div className="project-main"><div className="project-icon"><p.icon size={27}/></div><div><div className="project-category">{p.category}</div><h3>{p.name}</h3><p className="project-description">{p.description}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div></div>
              <div className="project-links"><a href={p.live} target="_blank" rel="noreferrer">LIVE DEMO <ExternalLink size={15}/></a><a href={p.github} target="_blank" rel="noreferrer">SOURCE CODE <Github size={15}/></a></div>
            </article></Reveal>)}
          </div>
        </section>

        <section className="section-wrap journey-section" id="journey">
          <Reveal><div className="section-label"><span>04 / JOURNEY</span><i/></div><h2>Learning is a <span>lifelong process.</span></h2></Reveal>
          <div className="timeline">
            <Reveal><div className="timeline-item"><div className="timeline-date">CURRENT <span>ONGOING</span></div><div className="timeline-content"><h3>Bachelor of Science (PCB)</h3><p>University of Kota</p><small>Currently pursuing · Expected completion 2029</small></div></div></Reveal>
            <Reveal delay={.1}><div className="timeline-item"><div className="timeline-date">1 YEAR <span>ONGOING</span></div><div className="timeline-content"><h3>Advanced Diploma in Data Analysis</h3><p>Samyak Computer Classes</p><small>Currently pursuing</small></div></div></Reveal>
            <Reveal delay={.2}><div className="timeline-item"><div className="timeline-date">2026 <span>NOW</span></div><div className="timeline-content"><h3>Building & exploring</h3><p>Python · Data Analytics · AI · Web Development</p><small>Learning through hands-on projects</small></div></div></Reveal>
          </div>
        </section>

       
<section className="contact-section" id="contact">
  <div className="section-wrap contact-inner">
    <Reveal>
      <div className="section-label">
        <span>05 / CONTACT</span>
        <i />
      </div>

      <p className="contact-kicker">
        HAVE A PROJECT OR AN IDEA?
      </p>

      <h2>
        Let's make<br />
        <span>it happen.</span>
      </h2>

      <a
        className="button button-primary contact-button"
        href="mailto:ektapunjabi1999@gmail.com"
      >
        Say Hello
        <ArrowUpRight size={17} />
      </a>

      <p className="contact-note">
        Open to learning, collaboration, and new opportunities.
      </p>
    </Reveal>

    <Reveal delay={0.15}>
      <div className="contact-details">

        <a href="mailto:ektapunjabi1999@gmail.com">
          <Mail size={17} />
          ektapunjabi1999@gmail.com
          <ArrowUpRight size={15} />
        </a>

        <a
          href="https://github.com/deepanshupunjabi"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} />
          github.com/deepanshupunjabi
          <ArrowUpRight size={15} />
        </a>

      </div>
    </Reveal>
  </div>
</section>

      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">DP.</span><span>DEEPANSHU<br/><small>PORTFOLIO / 2026</small></span></a><p>DESIGNED WITH INTENT. BUILT WITH CURIOSITY.</p><a href="#home" className="back-top">BACK TO TOP ↑</a><small className="copyright">© 2026 DEEPANSHU PUNJABI</small></footer>
    </div>
  );
}

export default App;
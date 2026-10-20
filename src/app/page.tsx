import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, ArrowUp, MoveRight } from "lucide-react";
import { education, experience, projects } from "@/data/portfolio";
import PortfolioExperience from "@/components/PortfolioExperience";
import StackGrid from "@/components/StackGrid";
import SignalField from "@/components/SignalField";
import ProjectVisual from "@/components/ProjectVisual";

export default function Home() {
  return (
    <>
      <PortfolioExperience />
      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="Amey Pandit, home">AP<span>/</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#stack">Stack</a><a href="#path">Path</a>
        </nav>
        <a className="nav-contact" href="#contact"><span className="live-dot" />LET’S TALK <ArrowUpRight size={13} /></a>
      </header>

      <main id="top" className="min-h-screen">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-meta mono"><span>INFORMATION TECHNOLOGY · B.E. ’27</span><span>RATNAGIRI, INDIA <span className="red">↗</span></span></div>
          <div className="hero-scene">
            <h1 className="hero-wordmark" id="hero-title"><span>AMEY</span><span>PANDIT</span></h1>
            <div className="hero-portrait"><Image src="/images/amey-portrait.webp" alt="Amey Pandit in a city street" fill priority sizes="(max-width: 700px) 78vw, 42vw" className="portrait-img" /><span className="photo-index mono">FIELD NOTES / 01<br />DATA × AI × SOFTWARE</span></div>
            <p className="script hero-greeting">Hello, I’m</p>
            <p className="hero-coordinate mono">16°59′ N<br />73°18′ E</p>
            <div className="hero-intro"><span className="mono eyebrow">STUDENT · BUILDER · ALWAYS LEARNING</span><p>Curious about the signal in data.<br /><em>Building ideas across AI & software.</em></p><div className="hero-links"><a className="pill-link" href="#work">Explore the work <ArrowDownRight size={15} /></a><a className="under-link" href="mailto:ameypandit36@gmail.com">Say hello <ArrowUpRight size={14} /></a></div></div>
            <div className="hero-signal" aria-hidden="true"><SignalField /></div>
          </div>
          <div className="hero-baseline mono"><span>FIG. 001 — AMEY RAVINDRA PANDIT</span><a href="#about">SCROLL TO FOLLOW <span>↓</span></a><span>DATA / AI / SOFTWARE</span></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-label mono"><span>01 / THE THROUGHLINE</span><span>ABOUT</span></div>
          <div className="about-layout"><div><p className="script red-script">A question is a good place to start.</p><h2 className="display-title">WHAT DOES<br />THE <span>SIGNAL</span><br />TELL US?</h2></div><div className="about-copy"><p className="about-lead">Data gives me a way to ask sharper questions. Software gives me a way to make the answers useful.</p><p>I’m a final-year Information Technology student at Finolex Academy of Management and Technology, University of Mumbai. My projects move between analysis, dashboards and AI-assisted workflows—usually following the same instinct: understand the data before deciding what it means.</p><p>That curiosity has taken me from credit-risk analysis to materials research and ocean data. I’m learning by building, checking my assumptions, and making the result clear enough for someone else to use.</p><a className="inline-arrow" href="#path">A little more context <MoveRight size={16} /></a></div></div>
          <div className="three-words mono"><span>NOTICE THE PATTERN</span><span className="wave-mark">∿ ∿ ∿</span><span>QUESTION THE ASSUMPTION</span><span className="wave-mark">∿ ∿ ∿</span><span>MAKE IT USEFUL</span></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-label mono"><span>02 / SELECTED INVESTIGATIONS</span><span>WORK</span></div>
          <div className="work-intro"><h2 className="display-title">IDEAS,<br /><span>IN MOTION.</span></h2><p>Four projects. Four different kinds of signal. Each one is work in progress, documented with its limits as well as its ambitions.</p></div>
          <div className="projects">
            {projects.map((project) => (
              <article className={`project-card project-${project.visual}`} key={project.index}>
                <div className={`project-art art-${project.visual}`}><div className="art-head mono"><span>STUDY / {project.index}</span><span>{project.category.toUpperCase()}</span></div><ProjectVisual type={project.visual} /><span className="art-caption mono">AM / {project.index} — VISUAL STUDY</span></div>
                <div className="project-info"><div className="project-meta mono"><span>{project.index} / {project.category.toUpperCase()}</span><span>CASE NOTES</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><div className="project-approach"><span className="mono">THE APPROACH</span><p>{project.approach}</p></div><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-actions">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={14} /></a>}{!project.demo && <span className="muted-action">No verified demo</span>}</div>{project.status && <p className="project-status mono">{project.status}</p>}</div>
              </article>
            ))}
          </div>
          <div className="work-note mono"><span>NOT EVERY QUESTION HAS A CLEAN ANSWER.</span><span>THAT’S PART OF THE WORK.</span></div>
        </section>

        <StackGrid />

        <section className="process section-pad" id="process">
          <div className="section-label mono"><span>04 / A WAY OF WORKING</span><span>PROCESS</span></div>
          <div className="process-layout"><div><p className="script red-script">Stay close to the evidence.</p><h2 className="display-title">FROM<br /><span>QUESTION</span><br />TO CLARITY.</h2><p className="process-note">A simple loop I return to—from data exploration to a dashboard or an AI-assisted workflow.</p></div><ol className="process-list"><li><span className="mono">01</span><div><h3>Understand the question</h3><p>What are we trying to learn? What would a useful answer change?</p></div><b>⌕</b></li><li><span className="mono">02</span><div><h3>Prepare & validate</h3><p>Inspect the source, make the data usable and surface the gaps.</p></div><b>⌘</b></li><li><span className="mono">03</span><div><h3>Explore the signal</h3><p>Look for patterns, test explanations and keep assumptions visible.</p></div><b>∿</b></li><li><span className="mono">04</span><div><h3>Build the useful part</h3><p>Shape an analysis into a report, dashboard, workflow or application.</p></div><b>⌬</b></li><li><span className="mono">05</span><div><h3>Check & communicate</h3><p>Test the result. Explain what it can—and cannot—tell us.</p></div><b>↗</b></li></ol></div>
        </section>

        <section className="path section-pad" id="path">
          <div className="section-label mono"><span>05 / THE LEARNING CURVE</span><span>PATH</span></div>
          <div className="path-layout"><div><h2 className="display-title">STILL<br />BECOMING.</h2><p className="path-lede">Formal study, hands-on roles and research—building a foundation one project at a time.</p><p className="script red-script">One step, then another.</p></div><div className="timeline">
            <article className="timeline-item"><span className="mono">{education.date}</span><div><h3>{education.title}</h3><p>{education.org}</p><p className="timeline-detail">{education.detail}</p></div><span className="timeline-marker" /></article>
            {experience.map((item) => <article className="timeline-item" key={item.title}><span className="mono">{item.date}</span><div><h3>{item.title}</h3><p>{item.org}</p><p className="timeline-detail">{item.detail}</p></div><span className="timeline-marker" /></article>)}
            <article className="timeline-item"><span className="mono">OCT 2026</span><div><h3>Research publication</h3><p>IJARSCT · Vol. 6 · Issue 1</p><p className="timeline-detail">“Conversational AI for Oceanographic Data Analytics: A Review of Data Retrieval, Scientific Analysis, and Anomaly Detection.”</p></div><span className="timeline-marker" /></article>
          </div></div>
          <div className="credentials"><div className="credential-heading mono">CREDENTIALS / FROM RESUME <span className="script">Learning, layer by layer.</span></div><div className="credential-row"><span>SQL Associate</span><span>DataCamp</span><span className="mono">SEP 2026</span></div><div className="credential-row"><span>Associate Data Analyst</span><span>DataCamp</span><span className="mono">AUG 2026</span></div><div className="credential-row"><span>Data Analysis using Python</span><span>IBM / Cisco</span><span className="mono">DATE NOT LISTED</span></div></div>
        </section>

        <section className="contact section-pad" id="contact"><div className="section-label mono"><span>06 / KEEP THE CONVERSATION GOING</span><span>CONTACT</span></div><p className="script">Have a question, a thought, or an interesting dataset?</p><h2 className="display-title">LET’S<br /><span>CONNECT.</span></h2><div className="contact-row"><a className="contact-email" href="mailto:ameypandit36@gmail.com">ameypandit36@gmail.com <ArrowUpRight size={19} /></a><div className="contact-links mono"><a href="https://github.com/AmeyPandit36" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/amey-pandit-202906261/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12} /></a><a href="/amey-pandit-resume.pdf" target="_blank" rel="noreferrer">RÉSUMÉ <ArrowUpRight size={12} /></a></div></div><footer className="footer mono"><span>AMEY RAVINDRA PANDIT · © 2026</span><span>MADE WITH CURIOSITY / RATNAGIRI</span><a href="#top">BACK TO TOP <ArrowUp size={12} /></a></footer></section>
      </main>
    </>
  );
}

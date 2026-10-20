"use client";

import { motion, useReducedMotion } from "motion/react";
import { skillGroups, technologies } from "@/data/portfolio";

export default function StackGrid() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="stack section-pad" id="stack" aria-labelledby="stack-title">
      <div className="stack-inner">
        <div className="section-label mono"><span>03 / THE CREATIVE TOOLKIT</span><span>USED · LEARNING · EXPLORING</span></div>
        <div className="stack-title-line"><h2 id="stack-title">THE STACK<span className="stack-title-period">.</span></h2><p>A portfolio’s toolkit—and a map of what I’m still learning.</p></div>
        <div className="stack-grid grid grid-cols-2 md:grid-cols-3">
          {technologies.map((technology, index) => (
            <motion.article
              className="stack-tile"
              key={technology.name}
              tabIndex={0}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.035 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileFocus={reduceMotion ? undefined : { y: -3 }}
            >
              <span className={`tech-mark tech-${index}`} aria-hidden="true">{technology.mark}</span>
              <h3>{technology.name}</h3>
              <span className="tile-state">{technology.state}</span>
              <p>{technology.note}</p>
            </motion.article>
          ))}
        </div>
        <p className="stack-caption mono">TOOLS IN THIS WEBSITE ARE LABELED “USED HERE.” THE REST ARE PART OF MY EXPLORATION—NOT A CLAIM OF EXPERTISE.</p>
        <div className="work-skills" aria-label="Technologies used across Amey's projects">
          <p className="mono">ALSO IN MY PROJECTS / EXPERIENCE VARIES</p>
          <div>{skillGroups.map((group) => <span key={group.title}><b>{group.title}</b>{group.items.slice(0, 4).join(" · ")}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

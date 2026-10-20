"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PortfolioExperience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const context = gsap.context(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".hero-wordmark span", { yPercent: 24, clipPath: "inset(0 0 100% 0)" }, {
          yPercent: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.25,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.15,
        });
        gsap.fromTo(".hero-portrait", { y: 28, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.34,
        });
        gsap.to(".hero-wordmark", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.7 },
        });
        gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
          gsap.fromTo(card.querySelector(".project-art"), { clipPath: "inset(0 0 14% 0)" }, {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: { trigger: card, start: "top 82%", end: "top 34%", scrub: 0.6 },
          });
        });
      });
    });
    return () => {
      mm.revert();
      context.revert();
    };
  }, []);

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>(".scroll-progress span");
    if (!progress) return;
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${range > 0 ? window.scrollY / range : 0})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span /></div>;
}

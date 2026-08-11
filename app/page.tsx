"use client";

import { useState, useEffect, useRef } from "react";

// ============================================================
//  DONNÉES DU PORTFOLIO — modifie librement le contenu ici.
//  Tout ce qui s'affiche à l'écran vient de cette section.
// ============================================================

const LINKS = {
  github: "https://github.com/Mohamed-Darrazi",
  linkedin: "https://www.linkedin.com/in/mohamed-darrazi-20b901333/",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myegwejb";

const SKILLS = [
  { group: "Langages", items: ["C#", "PHP", "Java", "Python", "JavaScript", "TypeScript"] },
  { group: "Bases de données", items: ["SQL Server", "HFSQL", "MySQL"] },
  { group: "Frameworks & outils", items: ["ASP.NET Core", "Flask", "WinDev", "Next.js", "Git"] },
];

const PROJECTS = [
  {
    name: "Facturation B2B API",
    blurb:
      "API REST de facturation entre entreprises, conforme à la norme Factur-X / EN 16931 : génération de factures électroniques structurées et validées.",
    stack: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
    link: null,
  },
];

// ============================================================
//  PAGE
// ============================================================

export default function Home() {
  return (
    <main className="page">
      <Atmosphere />
      <Nav />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <StyleTag />
    </main>
  );
}

function Atmosphere() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    let tx = 50;
    let ty = 30;
    let cx = 50;
    let cy = 30;

    function onMove(e: MouseEvent) {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
    }

    function loop() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${cx}vw, ${cy}vh)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="breathe" />
      <div className="halo" ref={haloRef} />
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${shown ? "reveal-in" : ""}`}>
      {children}
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-mark">Mohamed Darrazi</span>
      <div className="nav-links">
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  const name = "Mohamed Darrazi";
  return (
    <header className="hero">
      <p className="hero-eyebrow">Portfolio</p>
      <h1 className="hero-name" aria-label={name}>
        {name.split("").map((ch, i) => (
          <span
            key={i}
            className="hero-char"
            style={{ animationDelay: `${0.3 + i * 0.04}s` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>
      <p className="hero-role">Étudiant BTS SIO SLAM · Alternant en développement</p>
      <p className="hero-tag">Développement &amp; cybersécurité</p>
      <div className="hero-cta">
        <a className="btn btn-primary" href="#projects">
          Voir mes projets
        </a>
        <a
          className="btn btn-ghost"
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="section-head">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle index="01" title="À propos" />
      <div className="about-body">
        <p>
          Je suis étudiant en deuxième année de BTS SIO, option SLAM, en
          alternance. Au quotidien, je développe et maintiens des applications
          de gestion pour le secteur de la santé.
        </p>
        <p>
          J&apos;aime comprendre un problème dans le détail avant d&apos;écrire
          la moindre ligne, puis construire une solution simple et fiable qui
          rend vraiment service à ceux qui l&apos;utilisent. Chaque projet est
          une occasion d&apos;apprendre une technologie de plus et d&apos;affiner
          ma façon de coder.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle index="02" title="Compétences" />
      <div className="skills-grid">
        {SKILLS.map((col) => (
          <div key={col.group} className="skill-col">
            <h3 className="skill-group">{col.group}</h3>
            <ul className="skill-list">
              {col.items.map((item) => (
                <li key={item} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle index="03" title="Projets" />
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article key={p.name} className="project-card">
            <div className="project-glow" aria-hidden="true" />
            <div className="project-inner">
              <div className="project-top">
                <h3 className="project-name">{p.name}</h3>
                {p.link ? (
                  <a
                    className="project-link"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="project-private">Privé</span>
                )}
              </div>
              <p className="project-blurb">{p.blurb}</p>
              <ul className="project-stack">
                {p.stack.map((t) => (
                  <li key={t} className="stack-tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <SectionTitle index="04" title="Me contacter" />
      <div className="contact-wrap">
        <div className="contact-form-col">
          {status === "sent" ? (
            <p className="form-success">
              Message envoyé. Je vous réponds au plus vite.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field">
                <span className="field-label">Nom</span>
                <input
                  className="field-input"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                />
              </label>
              <label className="field">
                <span className="field-label">Email</span>
                <input
                  className="field-input"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label className="field">
                <span className="field-label">Message</span>
                <textarea
                  className="field-input field-textarea"
                  name="message"
                  rows={5}
                  required
                />
              </label>
              <button
                className="btn btn-primary btn-submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Envoi…" : "Envoyer"}
              </button>
              {status === "error" && (
                <p className="form-error">
                  L&apos;envoi a échoué. Réessayez, ou écrivez-moi via LinkedIn.
                </p>
              )}
            </form>
          )}
        </div>
        <div className="contact-links-col">
          <p className="contact-aside">Vous préférez un autre canal&nbsp;?</p>
          <a
            className="contact-link"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>
          <a
            className="contact-link"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Mohamed Darrazi</span>
      <span className="footer-note">Construit avec Next.js</span>
    </footer>
  );
}

// ============================================================
//  STYLES
// ============================================================

function StyleTag() {
  return (
    <style jsx global>{`
      :root {
        --bg: #0a0712;
        --bg-soft: #130d21;
        --line: #241a3a;
        --text: #ece9f5;
        --text-dim: #9b93b5;
        --lav: #b9a6ff;
        --lav-soft: #7b6bb0;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background: var(--bg);
        color: var(--text);
        font-family: var(--font-inter), system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      .page {
        position: relative;
        max-width: 940px;
        margin: 0 auto;
        padding: 0 24px;
      }

      .atmosphere {
        position: fixed;
        inset: 0;
        z-index: -1;
        overflow: hidden;
        pointer-events: none;
      }
      .breathe {
        position: absolute;
        inset: -20%;
        background: radial-gradient(
            40% 40% at 30% 25%,
            rgba(123, 107, 176, 0.28),
            transparent 70%
          ),
          radial-gradient(
            45% 45% at 75% 70%,
            rgba(90, 70, 150, 0.22),
            transparent 70%
          );
        animation: breathe 14s ease-in-out infinite;
        will-change: transform, opacity;
      }
      @keyframes breathe {
        0%,
        100% {
          transform: scale(1);
          opacity: 0.75;
        }
        50% {
          transform: scale(1.15);
          opacity: 1;
        }
      }
      .halo {
        position: absolute;
        top: -300px;
        left: -300px;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(185, 166, 255, 0.16),
          transparent 65%
        );
        will-change: transform;
      }
      .shape {
        position: absolute;
        border: 1px solid rgba(185, 166, 255, 0.14);
        will-change: transform;
      }
      .shape-1 {
        width: 260px;
        height: 260px;
        top: 12%;
        right: -60px;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        animation: drift1 26s ease-in-out infinite;
      }
      .shape-2 {
        width: 180px;
        height: 180px;
        bottom: 18%;
        left: -50px;
        transform: rotate(20deg);
        animation: drift2 32s ease-in-out infinite;
      }
      .shape-3 {
        width: 120px;
        height: 120px;
        top: 55%;
        right: 15%;
        border-radius: 50%;
        animation: drift3 22s ease-in-out infinite;
      }
      @keyframes drift1 {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-40px) rotate(180deg);
        }
      }
      @keyframes drift2 {
        0%,
        100% {
          transform: translate(0, 0) rotate(20deg);
        }
        50% {
          transform: translate(30px, -30px) rotate(-20deg);
        }
      }
      @keyframes drift3 {
        0%,
        100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(-25px, 35px);
        }
      }

      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 0;
        position: sticky;
        top: 0;
        background: linear-gradient(to bottom, var(--bg) 55%, transparent);
        z-index: 10;
      }
      .nav-mark {
        font-family: var(--font-space-grotesk), sans-serif;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: -0.01em;
      }
      .nav-links {
        display: flex;
        gap: 26px;
      }
      .nav-links a {
        color: var(--text-dim);
        text-decoration: none;
        font-size: 14px;
        transition: color 0.25s;
      }
      .nav-links a:hover {
        color: var(--lav);
      }

      .hero {
        padding: 120px 0 90px;
      }
      .hero-eyebrow {
        font-family: var(--font-space-grotesk), sans-serif;
        color: var(--lav);
        font-size: 14px;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        margin-bottom: 26px;
        opacity: 0;
        animation: fadeUp 0.7s ease forwards 0.1s;
      }
      .hero-name {
        font-family: var(--font-space-grotesk), sans-serif;
        font-weight: 700;
        font-size: clamp(48px, 10vw, 104px);
        line-height: 1;
        letter-spacing: -0.03em;
        display: flex;
        flex-wrap: wrap;
      }
      .hero-char {
        display: inline-block;
        opacity: 0;
        transform: translateY(30px);
        animation: charIn 0.6s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
      }
      @keyframes charIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .hero-role {
        margin-top: 28px;
        font-size: clamp(17px, 2.6vw, 21px);
        color: var(--text);
        opacity: 0;
        animation: fadeUp 0.7s ease forwards 0.9s;
      }
      .hero-tag {
        margin-top: 8px;
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 14px;
        color: var(--text-dim);
        letter-spacing: 0.04em;
        opacity: 0;
        animation: fadeUp 0.7s ease forwards 1s;
      }
      .hero-cta {
        margin-top: 42px;
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        opacity: 0;
        animation: fadeUp 0.7s ease forwards 1.1s;
      }
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .btn {
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 14px;
        font-weight: 500;
        padding: 13px 26px;
        border-radius: 100px;
        text-decoration: none;
        cursor: pointer;
        border: 1px solid transparent;
        transition: all 0.25s;
        display: inline-block;
      }
      .btn-primary {
        background: var(--lav);
        color: var(--bg);
        font-weight: 600;
      }
      .btn-primary:hover {
        box-shadow: 0 0 30px -6px var(--lav);
        transform: translateY(-2px);
      }
      .btn-ghost {
        border-color: var(--line);
        color: var(--text);
      }
      .btn-ghost:hover {
        border-color: var(--lav-soft);
        color: var(--lav);
      }

      .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease,
          transform 0.8s cubic-bezier(0.2, 0.7, 0.3, 1);
      }
      .reveal-in {
        opacity: 1;
        transform: translateY(0);
      }

      .section {
        padding: 70px 0;
        border-top: 1px solid var(--line);
      }
      .section-head {
        display: flex;
        align-items: baseline;
        gap: 16px;
        margin-bottom: 40px;
      }
      .section-index {
        font-family: var(--font-space-grotesk), sans-serif;
        color: var(--lav);
        font-size: 15px;
        font-weight: 500;
      }
      .section-title {
        font-family: var(--font-space-grotesk), sans-serif;
        font-weight: 600;
        font-size: clamp(30px, 5vw, 46px);
        letter-spacing: -0.02em;
      }

      .about-body {
        max-width: 660px;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .about-body p {
        color: var(--text-dim);
        font-size: 17px;
        line-height: 1.75;
      }

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
      .skill-group {
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: var(--lav);
        margin-bottom: 18px;
      }
      .skill-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 11px;
      }
      .skill-item {
        color: var(--text);
        font-size: 15px;
      }

      .projects-grid {
        display: grid;
        gap: 22px;
      }
      .project-card {
        position: relative;
        border: 1px solid var(--line);
        border-radius: 16px;
        background: var(--bg-soft);
        overflow: hidden;
        transition: border-color 0.3s, transform 0.3s;
      }
      .project-card:hover {
        border-color: var(--lav-soft);
        transform: translateY(-4px);
      }
      .project-glow {
        position: absolute;
        top: -50%;
        left: -20%;
        width: 240px;
        height: 240px;
        background: radial-gradient(
          circle,
          rgba(185, 166, 255, 0.12),
          transparent 65%
        );
        opacity: 0;
        transition: opacity 0.4s;
      }
      .project-card:hover .project-glow {
        opacity: 1;
      }
      .project-inner {
        position: relative;
        padding: 30px;
      }
      .project-top {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 14px;
      }
      .project-name {
        font-family: var(--font-space-grotesk), sans-serif;
        font-weight: 600;
        font-size: 22px;
        letter-spacing: -0.01em;
      }
      .project-link {
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 14px;
        color: var(--lav);
        text-decoration: none;
        white-space: nowrap;
      }
      .project-link:hover {
        text-decoration: underline;
      }
      .project-private {
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 12px;
        color: var(--text-dim);
        border: 1px solid var(--line);
        padding: 3px 11px;
        border-radius: 100px;
        white-space: nowrap;
      }
      .project-blurb {
        color: var(--text-dim);
        font-size: 16px;
        line-height: 1.7;
        margin-bottom: 20px;
        max-width: 620px;
      }
      .project-stack {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
      }
      .stack-tag {
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 12px;
        color: var(--lav);
        background: rgba(185, 166, 255, 0.07);
        border: 1px solid var(--lav-soft);
        padding: 5px 12px;
        border-radius: 100px;
      }

      .contact-wrap {
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 44px;
      }
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .field-label {
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 13px;
        color: var(--text-dim);
      }
      .field-input {
        background: var(--bg-soft);
        border: 1px solid var(--line);
        border-radius: 10px;
        padding: 12px 14px;
        color: var(--text);
        font-family: var(--font-inter), sans-serif;
        font-size: 15px;
        transition: border-color 0.25s;
      }
      .field-input:focus {
        outline: none;
        border-color: var(--lav);
      }
      .field-textarea {
        resize: vertical;
      }
      .btn-submit {
        align-self: flex-start;
        border: none;
      }
      .form-success {
        font-family: var(--font-space-grotesk), sans-serif;
        color: var(--lav);
        font-size: 16px;
        padding: 20px 0;
      }
      .form-error {
        color: #ff9a9a;
        font-size: 14px;
      }
      .contact-aside {
        color: var(--text-dim);
        font-size: 15px;
        margin-bottom: 20px;
      }
      .contact-link {
        display: block;
        font-family: var(--font-space-grotesk), sans-serif;
        color: var(--text);
        text-decoration: none;
        font-size: 17px;
        padding: 12px 0;
        border-bottom: 1px solid var(--line);
        transition: color 0.25s, padding-left 0.25s;
      }
      .contact-link:hover {
        color: var(--lav);
        padding-left: 8px;
      }

      .footer {
        display: flex;
        justify-content: space-between;
        padding: 44px 0;
        border-top: 1px solid var(--line);
        color: var(--text-dim);
        font-size: 13px;
        font-family: var(--font-space-grotesk), sans-serif;
      }

      @media (max-width: 680px) {
        .nav-links {
          display: none;
        }
        .skills-grid {
          grid-template-columns: 1fr;
          gap: 34px;
        }
        .contact-wrap {
          grid-template-columns: 1fr;
        }
        .hero {
          padding: 80px 0 70px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
          scroll-behavior: auto !important;
        }
        .hero-char,
        .hero-eyebrow,
        .hero-role,
        .hero-tag,
        .hero-cta,
        .reveal {
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `}</style>
  );
}
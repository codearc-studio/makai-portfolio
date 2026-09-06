"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "Vane",
    label: "Personal product",
    description:
      "Personalized weather that learns what the forecast feels like to you, then turns it into guidance that is actually useful.",
    tags: ["iOS", "SwiftUI", "WeatherKit", "Product Design"],
    image:
      "https://raw.githubusercontent.com/codearc-studio/vane-website/main/assets/glass-vane-hero.jpg",
    imageAlt: "Vane weather app glass vane brand artwork",
    imageClass: "object-cover object-center",
    href: "https://vane.codearc.studio",
    hrefLabel: "Visit Vane",
    source: "https://github.com/codearc-studio/Vane",
  },
  {
    number: "02",
    name: "RooMate",
    label: "Student product",
    description:
      "A school-day companion that brings schedules, events, sports, planning, and the details of campus life into one native experience.",
    tags: ["macOS", "SwiftUI", "Product Design", "Student Tools"],
    image:
      "https://raw.githubusercontent.com/codearc-studio/RooMate/main/Assets/Screenshots/dashboard.png",
    imageAlt: "RooMate dashboard showing the native macOS student planning app",
    imageClass: "object-cover object-top",
    href: "https://roomateafs.app",
    hrefLabel: "Visit RooMate",
    source: "https://github.com/codearc-studio/RooMate",
  },
  {
    number: "03",
    name: "The Irish Center",
    label: "Client work",
    description:
      "A website redesign for Philadelphia's Commodore Barry Arts & Cultural Center, built to make a busy community organization easier to explore and maintain.",
    tags: ["Wix Studio", "Web Design", "Client Work", "Accessibility"],
    image:
      "https://theirishcenter.org/wp-content/uploads/2026/02/irish-and-american-flags-connection-banner.png?crop=1&h=500&w=885",
    imageAlt: "Philadelphia Irish Center banner artwork",
    imageClass: "object-cover object-center",
    href: "https://codearc.wixstudio.com/theirishcenter",
    hrefLabel: "View redesign",
    source: null,
  },
  {
    number: "04",
    name: "DevShed",
    label: "Developer tool",
    description:
      "A native Mac utility for finding and clearing Xcode storage, with enough visibility and control to make cleanup feel safe instead of destructive.",
    tags: ["macOS", "Developer Tools", "Swift", "Utility"],
    image:
      "https://raw.githubusercontent.com/codearc-studio/DevShed/main/banner.png",
    imageAlt: "DevShed macOS utility banner",
    imageClass: "object-cover object-center",
    href: "https://devshed.codearc.studio",
    hrefLabel: "Visit DevShed",
    source: "https://github.com/codearc-studio/DevShed",
  },
] as const;

const capabilities = [
  {
    title: "Apple",
    items: ["Swift", "SwiftUI", "Xcode", "WeatherKit", "CloudKit"],
  },
  {
    title: "Web",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Wix Studio"],
  },
  {
    title: "Design + product",
    items: ["Figma", "Product Design", "Accessibility", "Analytics", "Testing"],
  },
] as const;

const certifications = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    badge: "/certifications/gabadge.png",
    certificate: "/certifications/gacert.jpg",
  },
  {
    name: "Wix Accessibility Certificate",
    issuer: "Wix",
    badge: "/certifications/Accessibility_badge_1.PNG",
    certificate: "/certifications/WixAccesibility.png",
  },
  {
    name: "Canva Graphic Design Certificate",
    issuer: "Canva",
    badge: "/certifications/canvadesignbadge.png",
    certificate: "/certifications/canvadesigncert.png",
  },
] as const;

export default function Home() {
  const [activeCert, setActiveCert] = useState<
    (typeof certifications)[number] | null
  >(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeCert) {
        setIsClosing(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCert]);

  useEffect(() => {
    if (!activeCert) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCert]);

  useEffect(() => {
    if (!isClosing) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveCert(null);
      setIsClosing(false);
    }, 180);

    return () => window.clearTimeout(timeout);
  }, [isClosing]);

  useEffect(() => {
    const motionSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-motion-section]"),
    );

    if (!motionSections.length) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      motionSections.forEach((section) => section.classList.add("motion-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    motionSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <div className="ambient-grid" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-40 -mx-5 border-b border-[color:var(--border)] bg-[color:var(--nav)] px-5 backdrop-blur-2xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-5">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-[color:var(--foreground)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-[0.67rem] font-bold tracking-[-0.04em] shadow-sm transition-transform group-hover:-rotate-3">
                MO
              </span>
              <span>Makai O&apos;Neill</span>
            </a>

            <nav
              aria-label="Primary navigation"
              className="flex items-center gap-4 text-xs font-medium text-[color:var(--muted)] sm:gap-6 sm:text-sm"
            >
              <a className="nav-link" href="#work">
                Work
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
              <a
                className="nav-link hidden sm:inline-flex"
                href="https://codearc.studio"
                target="_blank"
                rel="noreferrer"
              >
                CodeArc <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
        </header>

        <div className="flex flex-col gap-24 py-12 sm:gap-28 sm:py-16 lg:gap-32 lg:py-20">
          <section
            data-motion-section
            className="motion-group grid min-h-[calc(100svh-10rem)] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
          >
            <div className="motion-fade-up space-y-8">
              <div className="space-y-5">
                <p className="eyebrow">Designer + Developer</p>
                <h1 className="max-w-4xl text-[clamp(3.35rem,8vw,6.9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[color:var(--foreground)]">
                  I build thoughtful digital products.
                </h1>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl sm:leading-9">
                Apps, websites, and tools designed to feel simple, useful, and genuinely finished.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="motion-button inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,24,32,0.14)]"
                >
                  View my work <span aria-hidden="true">↓</span>
                </a>
                <a
                  href="mailto:makai@codearc.studio"
                  className="motion-button inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white/70 px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] backdrop-blur-xl"
                >
                  Work with me <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="motion-fade-up motion-d2 relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="hero-orb" aria-hidden="true" />
              <div className="relative flex min-h-[28rem] flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  <span className="status-dot" aria-hidden="true" />
                  Available for selected freelance work
                </div>

                <div className="py-12">
                  <div className="hero-monogram" aria-hidden="true">
                    M
                  </div>
                </div>

                <div className="grid gap-4 border-t border-[color:var(--border)] pt-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted-soft)]">
                      I build
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--foreground)]">
                      Native apps, web products, and focused tools.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted-soft)]">
                      Studio
                    </p>
                    <a
                      className="mt-2 inline-flex text-sm font-semibold text-[color:var(--accent)] hover:underline"
                      href="https://codearc.studio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CodeArc.studio ↗
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section id="work" className="scroll-mt-28">
            <div
              data-motion-section
              className="motion-group grid gap-6 border-t border-[color:var(--border)] pt-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12"
            >
              <p className="motion-fade-up eyebrow">Selected work</p>
              <div className="motion-fade-up motion-d2 space-y-4">
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[color:var(--foreground)] sm:text-5xl">
                  The work matters more than the tool list.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                  A mix of products I&apos;m building myself and client work I&apos;ve shipped through CodeArc.studio.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-7 sm:mt-12">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  data-motion-section
                  className="motion-group motion-fade-up project-card grid overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[0_16px_50px_rgba(15,23,42,0.055)] lg:grid-cols-[1.18fr_0.82fr]"
                >
                  <div
                    className={`relative min-h-[20rem] overflow-hidden bg-[color:var(--media-bg)] sm:min-h-[26rem] lg:min-h-[31rem] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className={`${project.imageClass} project-image transition-transform duration-700`}
                      unoptimized
                    />
                    <div className="project-image-scrim" aria-hidden="true" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      {project.label}
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-between gap-10 p-7 sm:p-9 lg:p-10 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-7">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)]">
                            {project.number}
                          </p>
                          <h3 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[color:var(--foreground)] sm:text-5xl">
                            {project.name}
                          </h3>
                        </div>
                        <span className="mt-1 text-2xl text-[color:var(--muted-soft)]" aria-hidden="true">
                          ↗
                        </span>
                      </div>

                      <p className="text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 border-t border-[color:var(--border)] pt-5">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="motion-button inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-4 py-2.5 text-sm font-semibold text-white"
                      >
                        {project.hrefLabel} <span aria-hidden="true">↗</span>
                      </a>
                      {project.source ? (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                          className="motion-button inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white/70 px-4 py-2.5 text-sm font-semibold text-[color:var(--foreground)]"
                        >
                          Source <span aria-hidden="true">↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex justify-end">
              <a
                href="https://github.com/codearc-studio"
                target="_blank"
                rel="noreferrer"
                className="nav-link inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--foreground)]"
              >
                More projects on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <section
            id="about"
            data-motion-section
            className="motion-group scroll-mt-28 border-t border-[color:var(--border)] pt-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
              <p className="motion-fade-up eyebrow">About</p>
              <div className="motion-fade-up motion-d2 space-y-6">
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[color:var(--foreground)] sm:text-5xl">
                  I care about the part between “it works” and “it feels finished.”
                </h2>
                <div className="max-w-3xl space-y-5 text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                  <p>
                    I&apos;m Makai, a designer and developer who likes turning ideas into products that feel considered all the way down to the details.
                  </p>
                  <p>
                    I build native Apple apps, websites, and small tools, both independently and through CodeArc.studio. I like clear interfaces, useful motion, accessible defaults, and shipping things people can actually use.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section data-motion-section className="motion-group grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div className="motion-fade-up space-y-3">
              <p className="eyebrow">Capabilities</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
                What I reach for.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map((group, index) => (
                <div
                  key={group.title}
                  className={`motion-fade-up motion-d${index + 2} rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-5`}
                >
                  <h3 className="text-sm font-semibold text-[color:var(--foreground)]">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            data-motion-section
            className="motion-group grid gap-8 border-t border-[color:var(--border)] pt-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12"
          >
            <div className="motion-fade-up space-y-3">
              <p className="eyebrow">Selected credentials</p>
              <p className="max-w-sm text-sm leading-7 text-[color:var(--muted)]">
                Supporting proof, not the headline. Click any credential to view it full size.
              </p>
            </div>

            <div className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
              {certifications.map((certification, index) => (
                <button
                  key={certification.name}
                  type="button"
                  onClick={() => {
                    setActiveCert(certification);
                    setIsClosing(false);
                  }}
                  className={`motion-fade-up motion-d${index + 2} group flex w-full items-center gap-4 py-5 text-left transition-colors hover:text-[color:var(--accent)]`}
                >
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[color:var(--border)] bg-white">
                    <Image
                      src={certification.badge}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-contain p-1.5"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[color:var(--foreground)] group-hover:text-[color:var(--accent)] sm:text-base">
                      {certification.name}
                    </span>
                    <span className="mt-1 block text-xs text-[color:var(--muted)]">
                      {certification.issuer}
                    </span>
                  </span>
                  <span className="text-lg text-[color:var(--muted-soft)] transition-transform group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section
            id="contact"
            data-motion-section
            className="motion-group scroll-mt-28 overflow-hidden rounded-[2.25rem] bg-[color:var(--foreground)] text-white shadow-[0_28px_80px_rgba(15,23,42,0.16)]"
          >
            <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-12">
              <div className="contact-orb" aria-hidden="true" />
              <div className="motion-fade-up relative space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/[0.55]">
                  Contact
                </p>
                <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  Have something worth building?
                </h2>
                <p className="max-w-xl text-base leading-8 text-white/[0.68] sm:text-lg">
                  I take on selected freelance work through CodeArc.studio. Tell me what you&apos;re trying to make and I&apos;ll tell you if I&apos;m a good fit.
                </p>
              </div>

              <div className="motion-fade-up motion-d2 relative grid gap-3">
                <a
                  href="mailto:makai@codearc.studio"
                  className="motion-button flex items-center justify-between gap-4 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[color:var(--foreground)]"
                >
                  makai@codearc.studio <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://codearc.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button flex items-center justify-between gap-4 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  CodeArc.studio <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/codearc-studio"
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button flex items-center justify-between gap-4 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://g.dev/makai"
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button flex items-center justify-between gap-4 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Google Developer Profile <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <footer
          data-motion-section
          className="motion-group motion-fade flex flex-col gap-3 border-t border-[color:var(--border)] py-7 text-xs text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:text-sm"
        >
          <p>© 2026 Makai O&apos;Neill.</p>
          <p>Designed and built by Makai.</p>
        </footer>
      </div>

      {activeCert ? (
        <div
          role="presentation"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md transition-all duration-200 ease-out ${
            isClosing ? "bg-black/0 opacity-0" : "bg-black/70 opacity-100"
          }`}
          onClick={() => setIsClosing(true)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeCert.name}
            className={`relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out ${
              isClosing
                ? "translate-y-4 scale-[0.98] opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsClosing(true)}
              className="absolute right-4 top-4 z-10 rounded-full border border-black/10 bg-white/[0.92] px-3 py-2 text-xs font-semibold text-black shadow-sm backdrop-blur-md"
            >
              Close
            </button>
            <div className="relative aspect-[16/10] max-h-[92vh] w-full">
              <Image
                src={activeCert.certificate}
                alt={activeCert.name}
                fill
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="object-contain p-4 sm:p-8"
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

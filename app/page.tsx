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
    image: "/projects/vane-banner.png",
    imageAlt: "Official Vane banner artwork",
    imageWidth: 1200,
    imageHeight: 630,
    mediaClass: "project-media--vane",
    href: "https://vane.codearc.studio",
    hrefLabel: "Visit Vane",
    source: "https://github.com/codearc-studio/Vane",
  },
  {
    number: "02",
    name: "dunno.",
    label: "Shipped iPhone app",
    description:
      "A boredom app built around one simple question: what actually sounds good right now? More than 1,000 curated ideas adapt to your time, energy, situation, and vibe.",
    tags: ["iPhone", "SwiftUI", "Product Design", "App Store"],
    image: "/projects/dunno-banner.png",
    imageAlt: "Official dunno launch banner artwork",
    imageWidth: 1200,
    imageHeight: 630,
    mediaClass: "project-media--dunno",
    href: "https://apps.apple.com/app/id6804533655",
    hrefLabel: "View on App Store",
    source: "https://github.com/codearc-studio/dunno",
  },
  {
    number: "03",
    name: "Saved",
    label: "Product concept",
    description:
      "A quiet memory app built around resurfacing the photos and moments you care about, with a rotating memory widget and a simple feed for revisiting your life.",
    tags: ["iOS", "WidgetKit", "Product Design", "Memories"],
    image: "/projects/saved-banner.png",
    imageAlt: "Saved product banner artwork",
    imageWidth: 1731,
    imageHeight: 909,
    mediaClass: "project-media--saved",
    href: null,
    hrefLabel: null,
    source: null,
  },
  {
    number: "04",
    name: "Travel Tracker",
    label: "Shipped iOS app",
    description:
      "A personal travel companion for tracking countries and states, organizing trips, attaching memories, and turning travel history into a visual passport.",
    tags: ["iOS", "SwiftUI", "Travel", "App Store"],
    image: "/projects/travel-tracker-banner.png",
    imageAlt: "Travel Tracker website preview showing the Explore, track, and remember your travels hero and iPhone app preview",
    imageWidth: 2047,
    imageHeight: 1214,
    mediaClass: "project-media--travel",
    href: "https://apps.apple.com/app/id6758226844",
    hrefLabel: "View on App Store",
    source: "https://github.com/codearc-studio/traveltracker",
  },
  {
    number: "05",
    name: "BrandBook",
    label: "macOS product",
    description:
      "A native home for brand systems: logos, colors, typography, assets, guidelines, and portable brand packages organized in one visual workspace.",
    tags: ["macOS", "SwiftUI", "SwiftData", "Product Design"],
    image: "/projects/brandbook-banner.png",
    imageAlt: "BrandBook product banner artwork",
    imageWidth: 1200,
    imageHeight: 630,
    mediaClass: "project-media--brandbook",
    href: "https://brandbook.codearc.studio/",
    hrefLabel: "Visit BrandBook",
    source: null,
  },
  {
    number: "06",
    name: "The Irish Center",
    label: "Client work",
    description:
      "A website redesign for Philadelphia's Commodore Barry Arts & Cultural Center, built to make a busy community organization easier to explore and maintain.",
    tags: ["Wix Studio", "Web Design", "Client Work", "Accessibility"],
    image: "/projects/irish-center-banner.png",
    imageAlt: "The Irish Center official banner artwork",
    imageWidth: 1734,
    imageHeight: 907,
    mediaClass: "project-media--irish",
    href: "https://codearc.wixstudio.com/theirishcenter",
    hrefLabel: "View redesign",
    source: null,
  },
  {
    number: "07",
    name: "DevShed",
    label: "Developer tool",
    description:
      "A native Mac utility for finding and clearing Xcode storage, with enough visibility and control to make cleanup feel safe instead of destructive.",
    tags: ["macOS", "Developer Tools", "Swift", "Utility"],
    image: "/projects/devshed-banner.png",
    imageAlt: "DevShed product banner artwork",
    imageWidth: 1200,
    imageHeight: 630,
    mediaClass: "project-media--devshed",
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateScrollProgress = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      });
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

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



  return (
    <main id="top" className="relative min-h-screen overflow-x-clip">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
      <div className="pointer-glow" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-40 -mx-5 border-b border-[color:var(--border)] bg-[color:var(--nav)] px-5 backdrop-blur-2xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-5">
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
            className="hero-section motion-group grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
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
                  className="button-primary motion-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                >
                  View my work <span aria-hidden="true">↓</span>
                </a>
                <a
                  href="mailto:makai@codearc.studio"
                  className="button-secondary motion-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                >
                  Work with me <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="availability-card motion-fade-up motion-d2 relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.09)] sm:p-8">
              <div className="availability-glow" aria-hidden="true" />
              <div className="relative flex min-h-[28rem] flex-col justify-between gap-10">
                <div className="space-y-5">
                  <p className="eyebrow">Freelance</p>
                  <h2 className="max-w-lg text-[clamp(2.35rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[color:var(--foreground)]">
                    Open to projects.
                  </h2>
                  <p className="max-w-md text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
                    I take on app, product design, and web work through CodeArc.studio, especially projects where design and implementation need to work together.
                  </p>
                </div>

                <div className="space-y-5 border-t border-[color:var(--border)] pt-5">
                  <div className="flex flex-wrap gap-2">
                    {['Native apps', 'Product design', 'Web builds'].map((item) => (
                      <span key={item} className="availability-tag rounded-full px-3 py-1.5 text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href="mailto:makai@codearc.studio"
                    className="availability-link group flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold"
                  >
                    Tell me what you&apos;re building
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </a>
                  <p className="text-xs font-medium text-[color:var(--muted)]">Philadelphia · Remote</p>
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
                  Things I&apos;ve designed, built, and shipped.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                  Shipped apps, products in progress, developer tools, and client work from CodeArc.studio.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-7 sm:mt-12">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  data-motion-section
                  className="motion-group motion-fade-up project-card grid overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[0_16px_50px_rgba(15,23,42,0.055)] xl:grid-cols-[1.33fr_0.67fr]"
                >
                  <div
                    className={`project-media relative overflow-hidden ${project.mediaClass} ${
                      index % 2 === 1 ? "xl:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="project-image"
                      unoptimized
                    />
                  </div>

                  <div
                    className={`project-copy flex flex-col justify-between gap-7 p-7 sm:p-8 xl:p-8 ${
                      index % 2 === 1 ? "xl:order-1" : ""
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)]">
                              {project.number}
                            </p>
                            <span className="project-label rounded-full px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em]">
                              {project.label}
                            </span>
                          </div>
                          <h3 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[color:var(--foreground)] sm:text-[2.75rem]">
                            {project.name}
                          </h3>
                        </div>
                        <span className="mt-1 text-2xl text-[color:var(--muted-soft)]" aria-hidden="true">
                          ↗
                        </span>
                      </div>

                      <p className="text-base leading-7 text-[color:var(--muted)] sm:text-[1.05rem] sm:leading-7">
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
                      {project.href && project.hrefLabel ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="button-primary motion-button inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
                        >
                          {project.hrefLabel} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="project-status inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold">
                          In development
                        </span>
                      )}
                      {project.source ? (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                          className="button-secondary motion-button inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
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
                  I take on freelance projects through CodeArc.studio. Tell me what you&apos;re trying to make and I&apos;ll tell you if I&apos;m a good fit.
                </p>
              </div>

              <div className="motion-fade-up motion-d2 relative grid gap-3">
                <a
                  href="mailto:makai@codearc.studio"
                  className="button-on-dark motion-button flex items-center justify-between gap-4 rounded-full px-5 py-3.5 text-sm font-semibold"
                >
                  makai@codearc.studio <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://codearc.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost-dark motion-button flex items-center justify-between gap-4 rounded-full px-5 py-3.5 text-sm font-semibold"
                >
                  CodeArc.studio <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/codearc-studio"
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost-dark motion-button flex items-center justify-between gap-4 rounded-full px-5 py-3.5 text-sm font-semibold"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://g.dev/makai"
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost-dark motion-button flex items-center justify-between gap-4 rounded-full px-5 py-3.5 text-sm font-semibold"
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

      <button
        type="button"
        onClick={() => document.getElementById("top")?.scrollIntoView()}
        className={`back-to-top ${scrollProgress > 0.16 ? "is-visible" : ""}`}
        aria-label="Back to top"
      >
        <span aria-hidden="true">↑</span>
      </button>

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

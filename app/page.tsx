"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const skills = [
  { name: "HTML", icon: "/logos/html.svg" },
  { name: "CSS", icon: "/logos/css.svg" },
  { name: "JavaScript", icon: "/logos/js.svg" },
  { name: "React", icon: "/logos/react.svg" },
  { name: "Next.js", icon: "/logos/nextjs.svg" },
  { name: "Tailwind", icon: "/logos/tailwind.svg" },
  { name: "Accessibility", icon: "/logos/accessibility.svg" },
  { name: "Wix", icon: "/logos/wix.svg" },
];

const certifications = [
  {
    name: "Google Analytics Certification",
    badge: "/certifications/gabadge.png",
    certificate: "/certifications/gacert.jpg",
    note: "Analytics foundations and measurement.",
  },
  {
    name: "Wix Accessibility Certificate",
    badge: "/certifications/Accessibility_badge_1.PNG",
    certificate: "/certifications/WixAccesibility.png",
    note: "Accessibility-first site building.",
  },
  {
    name: "Canva Graphic Design Certificate",
    badge: "/certifications/canvadesignbadge.png",
    certificate: "/certifications/canvadesigncert.png",
    note: "Visual layout and design basics.",
  },
];

const tools = [
  { name: "Xcode", href: "https://developer.apple.com/xcode/", icon: "/logos/xcode.svg" },
  { name: "Figma", href: "https://figma.com", icon: "/logos/figma.svg" },
  { name: "Notion", href: "https://notion.so", icon: "/logos/notion.svg" },
  { name: "Canva", href: "https://canva.com", icon: "/logos/canva.svg" },
];

export default function Home() {
  const [activeCert, setActiveCert] = useState<
    (typeof certifications)[number] | null
  >(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsClosing(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
        threshold: 0.24,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    motionSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
      <header
        data-motion-section
        className="motion-group motion-fade-up motion-d1 flex items-center justify-between gap-4 border-b border-[color:var(--border)] pb-5"
      >
        <a
          href="#top"
          className="text-sm font-medium tracking-[0.16em] text-[color:var(--foreground)] transition-opacity hover:opacity-70"
        >
          CodeArc.studio
        </a>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
          <a
            className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
            href="#about"
          >
            About
          </a>
          <a
            className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </header>

      <div className="flex flex-1 flex-col gap-20 py-12 sm:py-16" id="top">
        <section
          data-motion-section
          className="motion-group motion-fade-up motion-d2 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
        >
          <div className="space-y-7">
            <p className="text-sm font-medium tracking-[0.24em] text-[color:var(--accent)] uppercase">
              Independent Web Developer
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl lg:text-[4.8rem]">
                Makai O&apos;Neill
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                Clean websites. Thoughtful builds. Shipped with care.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <aside className="motion-card rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.03)]">
              <p className="text-xs font-medium tracking-[0.22em] text-[color:var(--accent)] uppercase">
                Available for freelance
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                I take on projects through CodeArc Studio — direct process, clear scope, careful work.
              </p>
            </aside>
            <div className="motion-card rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--background)] px-6 py-5">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                Minimal, fast, and built to last — the kind of site that gets out of the way and lets the work speak.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          data-motion-section
          className="motion-group motion-fade-up motion-d3 grid gap-10 border-t border-[color:var(--border)] pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-[0.22em] text-[color:var(--accent)] uppercase">
              About
            </p>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
            I build websites and web products through CodeArc Studio, my independent dev practice. Clean interfaces, careful execution, and work that&apos;s easy to trust — whether it&apos;s a freelance project or something I&apos;m shipping on my own.
          </p>
        </section>

        <section
          data-motion-section
          className="motion-group motion-fade-up motion-d4 grid gap-8 border-t border-[color:var(--border)] pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-3">
            <p className="text-sm font-medium tracking-[0.22em] text-[color:var(--accent)] uppercase">
              Skills
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Core skills I use daily.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`motion-fade-up motion-card motion-d${(index % 6) + 1} flex items-center gap-3 rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-3 text-sm text-[color:var(--foreground)]`}
              >
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    fill
                    sizes="36px"
                    className="object-contain p-1.5"
                  />
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          data-motion-section
          className="motion-group motion-fade-up motion-d5 grid gap-8 border-t border-[color:var(--border)] pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-3">
            <p className="text-sm font-medium tracking-[0.22em] text-[color:var(--accent)] uppercase">
              Certifications
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Selected certificates.
            </h2>
          </div>

          <div className="grid gap-5">
            {certifications.map((certification, index) => (
              <button
                key={certification.name}
                type="button"
                onClick={() => {
                  setActiveCert(certification);
                  setIsClosing(false);
                }}
                className={`motion-fade-up motion-card motion-d${(index % 6) + 1} text-left rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-5 shadow-[0_10px_28px_rgba(15,23,42,0.03)]`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
                      <Image
                        src={certification.badge}
                        alt={`${certification.name} badge`}
                        fill
                        sizes="56px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
                        {certification.name}
                      </h3>
                      <p className="text-sm text-[color:var(--muted)]">
                        {certification.note}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium tracking-[0.18em] text-[color:var(--accent)] uppercase">
                    View full size
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <p className="text-xs font-medium tracking-[0.18em] text-[color:var(--muted)] uppercase">
                    Certificate
                  </p>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-[color:var(--border)] bg-white">
                    <Image
                      src={certification.certificate}
                      alt={`${certification.name} certificate`}
                      fill
                      sizes="(min-width: 1024px) 42rem, (min-width: 640px) 80vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section
          data-motion-section
          className="motion-group motion-fade-up motion-d6 grid gap-8 border-t border-[color:var(--border)] pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-3">
            <p className="text-sm font-medium tracking-[0.22em] text-[color:var(--accent)] uppercase">
              Uses / Setup
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              My current setup and toolkit.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <a
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className={`motion-fade-up motion-card motion-d${(index % 6) + 1} flex items-center gap-3 rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--panel)] px-5 py-4 text-sm text-[color:var(--foreground)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]`}
              >
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    fill
                    sizes="32px"
                    className="object-contain p-1.5"
                  />
                </span>
                <span>{tool.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section
          id="contact"
          data-motion-section
          className="motion-group motion-fade-up motion-d7 overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--foreground)] text-[color:var(--background)]"
        >
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-[0.22em] text-white/60 uppercase">
                Contact
              </p>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Want to work together?
              </h2>
              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                I take on freelance projects through CodeArc Studio — direct communication, clear scope, no fluff.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href="https://codearc.studio"
                target="_blank"
                rel="noreferrer"
                className="motion-button rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(26,143,147,0.28)] hover:bg-[#177b7f]"
              >
                codearc.studio
              </a>
              <a
                href="mailto:makai@codearc.studio"
                className="motion-button rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                makai@codearc.studio
              </a>
              <a
                href="https://github.com/codearc-studio"
                target="_blank"
                rel="noreferrer"
                className="motion-button rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer
        data-motion-section
        className="motion-group motion-fade motion-d8 mt-4 pb-2 text-sm text-[color:var(--muted)]"
      >
        <p>© 2026 Makai O&apos;Neill. All rights reserved.</p>
      </footer>

      {activeCert ? (
        <div
          role="presentation"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-200 ease-out ${
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
              className="absolute right-4 top-4 z-10 rounded-full border border-black/10 bg-white/90 px-3 py-2 text-xs font-medium text-black shadow-sm"
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
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

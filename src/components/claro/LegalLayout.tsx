import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronRight,
  Printer,
  ShieldCheck,
  List,
  Mail,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  tocItems: TocItem[];
  children: React.ReactNode;
  contactEmailPlaceholder?: string;
}

export function LegalLayout({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  tocItems,
  children,
  contactEmailPlaceholder = "[Privacy Contact Email]",
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  // IntersectionObserver to highlight active section in TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0.1 }
    );

    const headings = document.querySelectorAll("section[id]");
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [tocItems]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      {/* Ambient background glow matching Claro aesthetic */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_275/0.12),transparent_70%)] blur-3xl animate-pulse-glow" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.15_240/0.08),transparent_70%)] blur-3xl" />
        <div className="absolute left-1/3 bottom-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.5_0.18_290/0.06),transparent_70%)] blur-3xl" />
      </div>

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-white/15 hover:bg-white/[0.08] hover:text-foreground active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Claro</span>
            </Link>
            <span className="hidden h-4 w-px bg-white/10 sm:inline" />
            <div className="hidden items-center gap-2 text-xs text-muted-foreground/70 sm:flex">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              <span>Official Legal Documentation</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-white/10 hover:bg-white/[0.05] hover:text-foreground"
              title="Print document"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <Link
              to="/"
              className="flex items-center gap-2 pl-2 transition-opacity hover:opacity-90"
            >
              <span className="relative inline-flex h-5 w-5 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.78_0.14_240)] to-[oklch(0.7_0.18_290)] blur-sm opacity-70" />
                <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-[oklch(0.85_0.12_240)] to-[oklch(0.7_0.18_290)]" />
              </span>
              <span className="text-sm font-semibold tracking-tight">Claro</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Document Header Banner */}
        <div className="mb-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 backdrop-blur-xl sm:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-gradient">
            <span>Claro / ThoughtClear</span>
            <ChevronRight className="h-3 w-3 text-muted-foreground/40" />
            <span>Legal Notice</span>
          </div>

          <h1 className="mt-3 font-display text-3xl text-foreground sm:text-4xl lg:text-5xl font-medium tracking-tight">
            {title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground/90 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground/80 border-t border-white/5 pt-5">
            <div className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>Effective Date: <strong className="font-medium text-foreground">{effectiveDate}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1">
              <FileText className="h-3.5 w-3.5 text-foreground/70" />
              <span>Last Updated: <strong className="font-medium text-foreground">{lastUpdated}</strong></span>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Table of Contents */}
        <div className="mb-8 lg:hidden">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-2">
              <List className="h-4 w-4 text-accent" />
              <span>On this page ({tocItems.length} sections)</span>
            </div>
            <ChevronRight
              className={`h-4 w-4 transform transition-transform ${
                mobileTocOpen ? "rotate-90" : ""
              }`}
            />
          </button>

          {mobileTocOpen && (
            <nav className="mt-2 rounded-2xl border border-white/10 bg-background/95 p-4 backdrop-blur-xl space-y-1 shadow-2xl">
              {tocItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileTocOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-xs transition-colors ${
                    activeId === item.id
                      ? "bg-accent/10 font-semibold text-accent"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  <span className="mr-2 text-muted-foreground/40">{index + 1}.</span>
                  {item.title}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Desktop 3-Column / Grid Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
                <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <List className="h-3.5 w-3.5 text-accent" />
                  Table of Contents
                </h2>
                <nav className="mt-4 space-y-1 text-xs max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                  {tocItems.map((item, idx) => {
                    const isActive = activeId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`group flex items-start gap-2 rounded-lg px-2.5 py-2 transition-all leading-snug ${
                          isActive
                            ? "bg-white/[0.08] font-medium text-foreground shadow-sm"
                            : "text-muted-foreground/80 hover:bg-white/[0.03] hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 text-[10px] font-mono ${
                            isActive ? "text-accent font-bold" : "text-muted-foreground/40"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-4 text-xs text-muted-foreground">
                <p className="font-medium text-foreground flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-accent" />
                  Questions?
                </p>
                <p className="mt-1 leading-relaxed text-muted-foreground/70">
                  Reach our legal team directly at:
                </p>
                <code className="mt-2 block rounded border border-white/5 bg-black/40 px-2 py-1 text-[11px] font-mono text-accent">
                  {contactEmailPlaceholder}
                </code>
              </div>
            </div>
          </aside>

          {/* Center Column: Main Legal Content */}
          <main className="lg:col-span-9">
            <article className="prose prose-invert max-w-none space-y-12">
              {children}
            </article>

            {/* Document Footer Note */}
            <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/70">
              <p>© {new Date().getFullYear()} Claro (ThoughtClear). All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <span className="h-3 w-px bg-white/10" />
                <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string | number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl border border-white/5 bg-white/[0.015] p-6 sm:p-8 md:p-10 transition-all hover:border-white/10"
    >
      <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] font-mono text-xs font-semibold text-accent">
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function LegalCallout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "medical";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-accent/30 bg-accent/5 text-foreground",
    warning: "border-amber-500/30 bg-amber-500/5 text-amber-200",
    medical: "border-purple-500/40 bg-purple-500/10 text-purple-100 shadow-[0_0_30px_rgba(168,85,247,0.1)]",
  };

  const badgeStyles = {
    info: "bg-accent/20 text-accent",
    warning: "bg-amber-500/20 text-amber-300",
    medical: "bg-purple-500/30 text-purple-300 font-semibold tracking-wide",
  };

  return (
    <div className={`my-6 rounded-2xl border p-5 sm:p-6 backdrop-blur-md ${styles[type]}`}>
      {title && (
        <div className="mb-3 flex items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] uppercase ${badgeStyles[type]}`}>
            {type === "medical" ? "CRITICAL ADVICE DISCLAIMER" : type.toUpperCase()}
          </span>
          <span className="text-sm font-semibold text-foreground">{title}</span>
        </div>
      )}
      <div className="text-xs sm:text-sm leading-relaxed opacity-95 space-y-2">{children}</div>
    </div>
  );
}

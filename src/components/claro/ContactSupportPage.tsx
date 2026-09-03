import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  ShieldAlert,
  HelpCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export function ContactSupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "technical",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      {/* Ambient background glow matching Claro aesthetic */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_275/0.12),transparent_70%)] blur-3xl animate-pulse-glow" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.15_240/0.08),transparent_70%)] blur-3xl" />
        <div className="absolute left-1/3 bottom-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.5_0.18_290/0.06),transparent_70%)] blur-3xl" />
      </div>

      {/* Top Header */}
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
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <span className="relative inline-flex h-5 w-5 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.78_0.14_240)] to-[oklch(0.7_0.18_290)] blur-sm opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-[oklch(0.85_0.12_240)] to-[oklch(0.7_0.18_290)]" />
            </span>
            <span className="text-sm font-semibold tracking-tight">Claro Support</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Banner */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-accent">
            <MessageSquare className="h-3.5 w-3.5 text-accent" />
            Help & Support Center
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl text-foreground font-medium tracking-tight">
            How can we help you?
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Have a question about your account, technical performance, or data privacy? Send us a message and our support team will get back to you.
          </p>
        </div>

        {/* Emergency Disclaimer Banner */}
        <div className="mb-10 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 sm:p-5 backdrop-blur-md">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-purple-300 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-purple-100 leading-relaxed">
              <strong className="font-semibold text-purple-200 block mb-1">Important Notice Regarding Support & Crises</strong>
              Claro support is for technical software assistance, billing, and account management only. We do not provide crisis intervention, therapy, or medical advice. If you are experiencing distress or self-harm thoughts, please call <strong>988</strong> (US/Canada), <strong>111</strong> (UK), or your local emergency services immediately.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Support Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Message Received</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your inquiry and will respond to <strong className="text-foreground">{formData.email}</strong> within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", category: "technical", subject: "", message: "" });
                    }}
                    className="mt-4 rounded-full border border-white/10 bg-white/[0.05] px-6 py-2.5 text-xs font-medium text-foreground hover:bg-white/10 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-semibold text-foreground border-b border-white/5 pb-3">
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Your Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Alex"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
                    >
                      <option value="technical">Technical Support & App Issues</option>
                      <option value="account">Account & Data Deletion Request</option>
                      <option value="privacy">Privacy & Security Questions</option>
                      <option value="feedback">Product Feedback & Feature Request</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Brief summary of your question"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Message Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:bg-foreground/90 active:scale-98 shadow-[0_0_25px_oklch(0.7_0.18_280/0.3)]"
                  >
                    <Send className="h-4 w-4" />
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md space-y-4">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                Direct Email Support
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Prefer to email us directly from your email client? Reach our support desk anytime at:
              </p>
              <a
                href="mailto:support@thoughtclear.app"
                className="inline-block rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 font-mono text-xs font-medium text-accent hover:border-accent/40 transition-colors"
              >
                support@thoughtclear.app
              </a>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md space-y-3">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Support Operating Hours
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Our support team monitors requests Monday through Friday. We strive to answer all technical and account inquiries within <strong>24–48 business hours</strong>.
              </p>
            </div>

            {/* Quick Document Links */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md space-y-3">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-accent" />
                Legal & Policy Quick Links
              </h3>
              <div className="flex flex-col gap-2 pt-1 text-xs">
                <Link
                  to="/privacy-policy"
                  className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  🔒 Privacy Policy & Data Deletion
                </Link>
                <Link
                  to="/terms-of-service"
                  className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  📜 Terms of Service & Disclaimers
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Claro (ThoughtClear). Self-reflection in silence. All rights reserved.
        </div>
      </div>
    </div>
  );
}

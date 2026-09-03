import React from "react";
import { LegalLayout, LegalSection, LegalCallout, TocItem } from "./LegalLayout";
import { AlertTriangle, ShieldCheck, HeartHandshake, FileCheck, Scale, Sparkles, PhoneCall } from "lucide-react";

const tocItems: TocItem[] = [
  { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
  { id: "description-of-claro", title: "2. Description of Claro" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "account-registration", title: "4. Account Registration" },
  { id: "using-claro", title: "5. Permitted Use of Claro" },
  { id: "user-content", title: "6. User Content & Rights" },
  { id: "ai-generated-content", title: "7. AI-Generated Responses" },
  { id: "not-medical-advice", title: "8. NOT MEDICAL/HEALTHCARE ADVICE" },
  { id: "prohibited-uses", title: "9. Prohibited Activities" },
  { id: "intellectual-property", title: "10. Intellectual Property" },
  { id: "feedback", title: "11. User Feedback" },
  { id: "third-party-services", title: "12. Third-Party Services" },
  { id: "availability-changes", title: "13. Availability & Service Changes" },
  { id: "termination", title: "14. Suspension & Termination" },
  { id: "disclaimers", title: "15. Warranty Disclaimers" },
  { id: "limitation-of-liability", title: "16. Limitation of Liability" },
  { id: "indemnification", title: "17. Indemnification" },
  { id: "governing-law", title: "18. Governing Law & Disputes" },
  { id: "changes-to-terms", title: "19. Modifications to Terms" },
  { id: "contact-information", title: "20. Legal Contact Information" },
];

export function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="These Terms of Service govern your access to and use of the Claro application, website, and conversational introspection platform operated by [Company Legal Name]."
      effectiveDate="September 3, 2026"
      lastUpdated="September 3, 2026"
      tocItems={tocItems}
      contactEmailPlaceholder="legal@thoughtclear.app"
    >
      {/* Section 8 Special Early Alert */}
      <LegalCallout type="medical" title="IMPORTANT SAFETY NOTICE — NOT MEDICAL OR PSYCHOLOGICAL THERAPY">
        <div className="space-y-2">
          <p className="font-semibold text-purple-200">
            Claro is a private self-reflection and mental clarity tool. It is NOT medical therapy, psychological diagnosis, clinical treatment, or a psychiatric healthcare service.
          </p>
          <p>
            If you are experiencing a mental health crisis, severe distress, thoughts of self-harm, or a medical emergency, please do NOT rely on Claro. Immediately contact emergency services or a crisis helpline:
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/60 px-3 py-1 text-xs font-mono font-bold text-purple-200">
              <PhoneCall className="h-3.5 w-3.5 text-purple-300" />
              US/Canada: Dial 988 (Suicide & Crisis Lifeline)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/60 px-3 py-1 text-xs font-mono font-bold text-purple-200">
              UK: Dial 111 or 999
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/60 px-3 py-1 text-xs font-mono font-bold text-purple-200">
              International: Contact local emergency medical services
            </span>
          </div>
        </div>
      </LegalCallout>

      {/* 1. Acceptance */}
      <LegalSection id="acceptance-of-terms" number="1" title="Acceptance of Terms">
        <p>
          By creating an account, accessing, downloading, or using the Claro application ("Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.
        </p>
        <p>
          If you are entering into these Terms on behalf of a legal entity, you represent that you have the legal authority to bind that entity to these Terms. If you do not agree to these Terms, you must immediately cease accessing and using the Service.
        </p>
      </LegalSection>

      {/* 2. Description of Claro */}
      <LegalSection id="description-of-claro" number="2" title="Description of Claro">
        <p>
          Claro is an AI-assisted self-reflection and thought-untangling workspace. The Service provides structured, question-based conversational flows designed to assist users in examining their own assumptions, identifying thought patterns, and gaining personal clarity.
        </p>
        <p>
          Claro operates on a reflective model—asking questions rather than giving direct advice, prescribing actions, or rendering professional decisions.
        </p>
      </LegalSection>

      {/* 3. Eligibility */}
      <LegalSection id="eligibility" number="3" title="Eligibility">
        <p>
          To access or use Claro, you must be at least <strong className="text-foreground">[Specify minimum user age, e.g., 13 or 18]</strong> years of age or the legal age of majority in your jurisdiction, whichever is older.
        </p>
        <p>
          By accessing the Service, you represent and warrant that you possess full legal capacity to enter into a binding agreement under applicable law and are not barred from receiving the Service under the laws of any applicable jurisdiction.
        </p>
      </LegalSection>

      {/* 4. Account Registration */}
      <LegalSection id="account-registration" number="4" title="Account Registration & Security">
        <p>
          Some features of the Service may require you to register an account. When creating an account, you agree to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide accurate, current, and complete registration information.</li>
          <li>Maintain the security of your authentication credentials and account password.</li>
          <li>Promptly notify Claro of any unauthorized access or security breach involving your account.</li>
          <li>Accept responsibility for all activities and transactions executed under your account credentials.</li>
        </ul>
      </LegalSection>

      {/* 5. Permitted Use */}
      <LegalSection id="using-claro" number="5" title="Permitted Use of Claro">
        <p>
          Subject to your compliance with these Terms, Claro grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service for personal, non-commercial self-reflection purposes.
        </p>
      </LegalSection>

      {/* 6. User Content */}
      <LegalSection id="user-content" number="6" title="User Content & Intellectual Rights">
        <p>
          "User Content" refers to all text, journal entries, thoughts, feedback, and session inputs submitted by you to the Service.
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h4 className="font-semibold text-foreground">Ownership Retention</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              You retain all ownership rights and intellectual property in your User Content. Claro does not claim ownership over the thoughts or personal writing you enter into the application.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h4 className="font-semibold text-foreground">Operational License Grant</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              By submitting User Content to Claro, you grant Claro a limited, worldwide, royalty-free license to host, process, store, format, transmit, and display such content solely to the extent required to operate, maintain, and provide the Service to you.
            </p>
          </div>
        </div>
      </LegalSection>

      {/* 7. AI-Generated Content */}
      <LegalSection id="ai-generated-content" number="7" title="AI-Generated Responses & Limitations">
        <p>
          Claro leverages modern artificial intelligence algorithms to evaluate submitted text and generate automated, reflective responses.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Algorithmic Nature:</strong> AI outputs are produced probabilistically and may occasionally generate inaccurate, incomplete, redundant, or unexpected responses.
          </li>
          <li>
            <strong className="text-foreground">No Guarantee of Uniqueness:</strong> Due to the machine learning architecture, AI-generated prompts may be similar or identical across different user interactions.
          </li>
          <li>
            <strong className="text-foreground">User Evaluation Responsibility:</strong> You are solely responsible for evaluating any AI output before acting upon or drawing conclusions from it.
          </li>
        </ul>
      </LegalSection>

      {/* 8. NOT MEDICAL ADVICE */}
      <LegalSection id="not-medical-advice" number="8" title="CRITICAL: NOT MEDICAL OR PROFESSIONAL ADVICE">
        <LegalCallout type="warning" title="Explicit Disclaimer of Health Services">
          <div className="space-y-3 font-sans">
            <p className="text-sm font-medium text-foreground">
              CLARO IS NOT A MEDICAL PROVIDER, PSYCHOTHERAPIST, PSYCHIATRIST, CLINICAL PSYCHOLOGIST, OR CRISIS INTERVENTION AGENCY. THE SERVICE IS DESIGNED EXCLUSIVELY AS A SELF-AWARENESS AND THOUGHT-REFLECTION SOFTWARE TOOL.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
              <li>Claro does NOT provide medical diagnosis, clinical treatment, therapy, or formal psychological advice.</li>
              <li>No doctor-patient, therapist-client, or clinical relationship is formed by using Claro.</li>
              <li>Never delay, disregard, or avoid seeking qualified medical or mental health advice because of something experienced within Claro.</li>
              <li>Claro makes no medical claims, therapy guarantees, or therapeutic outcome promises.</li>
            </ul>
          </div>
        </LegalCallout>
      </LegalSection>

      {/* 9. Prohibited Activities */}
      <LegalSection id="prohibited-uses" number="9" title="Prohibited Activities">
        <p>
          When using Claro, you agree that you will NOT:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use the Service for any illegal, unauthorized, or fraudulent purpose.</li>
          <li>Attempt to reverse engineer, decompile, disassemble, or extract source code from the Service except as expressly permitted by law.</li>
          <li>Scrape, crawl, or systematically extract data or outputs from the Service using automated bots.</li>
          <li>Interfere with, disrupt, or place unreasonable load on our servers, networks, or infrastructure.</li>
          <li>Bypass or attempt to circumvent authentication mechanisms, security controls, or API rate limits.</li>
          <li>Upload viruses, malware, trojans, or harmful code.</li>
          <li>Impersonate any person, legal entity, or Claro representative.</li>
        </ul>
      </LegalSection>

      {/* 10. Intellectual Property */}
      <LegalSection id="intellectual-property" number="10" title="Intellectual Property Rights">
        <p>
          The Service, including its original software, user interface design, logos, brand elements, visual aesthetics, sound design, animations, and documentation, are the exclusive property of <strong className="text-foreground">[Company Legal Name]</strong> and its licensors, protected by copyright, trademark, trade secret, and intellectual property laws.
        </p>
        <p>
          You may not reproduce, modify, distribute, create derivative works from, or publicly display any portion of our intellectual property without prior written consent.
        </p>
      </LegalSection>

      {/* 11. Feedback */}
      <LegalSection id="feedback" number="11" title="User Feedback">
        <p>
          If you choose to provide feedback, suggestions, bug reports, or feature ideas to Claro, you grant us an irrevocable, perpetual, royalty-free, worldwide license to use, modify, implement, and commercialize such feedback without restriction or obligation to compensate you.
        </p>
      </LegalSection>

      {/* 12. Third-Party Services */}
      <LegalSection id="third-party-services" number="12" title="Third-Party Integrations & Services">
        <p>
          Claro may integrate with or rely upon external service providers for hosting, authentication, payment processing, or AI model inference. Your access to third-party services is subject to their respective terms and policies, and Claro is not responsible for third-party performance or reliability.
        </p>
      </LegalSection>

      {/* 13. Availability */}
      <LegalSection id="availability-changes" number="13" title="Availability & Modifications to Service">
        <p>
          We continuously improve Claro and may update, modify, suspend, or discontinue any feature, session model, or aspect of the Service at any time without prior notice.
        </p>
        <p>
          We do not guarantee uninterrupted, error-free, or 100% continuous operational availability of the Service.
        </p>
      </LegalSection>

      {/* 14. Termination */}
      <LegalSection id="termination" number="14" title="Suspension & Termination">
        <p>
          We reserve the right, in our sole discretion, to suspend, disable, or terminate your access to the Service at any time, with or without cause or notice, including if we reasonably believe you have violated these Terms.
        </p>
        <p>
          You may terminate your agreement to these Terms at any time by ceasing all use of the Service and deleting your account.
        </p>
      </LegalSection>

      {/* 15. Disclaimers */}
      <LegalSection id="disclaimers" number="15" title="Warranty Disclaimers">
        <p className="uppercase text-xs tracking-wider text-muted-foreground font-mono">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
        </p>
        <p className="mt-2 font-medium text-foreground">
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, OR STATUTORY.
        </p>
        <p>
          CLARO DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, AND QUIET ENJOYMENT. WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR EXPECTATIONS, OPERATE UNINTERRUPTED, OR BE FREE OF VIRUSES OR ERRORS.
        </p>
      </LegalSection>

      {/* 16. Limitation of Liability */}
      <LegalSection id="limitation-of-liability" number="16" title="Limitation of Liability">
        <p className="uppercase text-xs tracking-wider text-muted-foreground font-mono">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
        </p>
        <p>
          IN NO EVENT SHALL <strong className="text-foreground">[Company Legal Name]</strong>, ITS DIRECTORS, EMPLOYEES, AGENTS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, OR MENTAL ANGUISH ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
        </p>
        <p>
          OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED <strong className="text-foreground">[Specify maximum liability limits, e.g., $100 USD or total amounts paid by you in the preceding 6 months]</strong>.
        </p>
      </LegalSection>

      {/* 17. Indemnification */}
      <LegalSection id="indemnification" number="17" title="Indemnification">
        <p>
          You agree to defend, indemnify, and hold harmless <strong className="text-foreground">[Company Legal Name]</strong>, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Service, your User Content, or your violation of these Terms.
        </p>
      </LegalSection>

      {/* 18. Governing Law */}
      <LegalSection id="governing-law" number="18" title="Governing Law & Dispute Resolution">
        <p>
          These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong className="text-foreground">[Governing Law / Jurisdiction]</strong>, without regard to its conflict of law principles.
        </p>
        <p>
          Any legal suit, action, or proceeding arising out of or related to these Terms or the Service shall be instituted exclusively in the courts located in <strong className="text-foreground">[Specified Court Location]</strong>.
        </p>
      </LegalSection>

      {/* 19. Changes to Terms */}
      <LegalSection id="changes-to-terms" number="19" title="Modifications to Terms">
        <p>
          We reserve the right to revise these Terms at any time. When we make material changes, we will update the "Last Updated" date at the top of these Terms and notify users via in-app banner or registered email.
        </p>
        <p>
          Continued use of the Service following the effective date of revised Terms constitutes your acceptance of the changes.
        </p>
      </LegalSection>

      {/* 20. Contact */}
      <LegalSection id="contact-information" number="20" title="Legal Contact Information">
        <p>
          If you have any questions, legal notices, or inquiries concerning these Terms, please contact our legal counsel team at:
        </p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 max-w-md">
          <p className="font-semibold text-foreground">[Company Legal Name]</p>
          <p className="text-xs text-muted-foreground mt-1">Attn: Legal Affairs Department</p>
          <p className="text-sm font-mono text-accent mt-3">[Legal Contact Email]</p>
          <p className="text-xs text-muted-foreground mt-1">[Company Registered Address Placeholder]</p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

import React from "react";
import { LegalLayout, LegalSection, LegalCallout, TocItem } from "./LegalLayout";
import { Lock, ShieldAlert, Cpu, Eye, Database, FileText } from "lucide-react";

const tocItems: TocItem[] = [
  { id: "scope", title: "1. Scope of This Privacy Policy" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "how-we-use-information", title: "3. How We Use Information" },
  { id: "ai-conversational-data", title: "4. AI & Conversational Data" },
  { id: "sensitive-information", title: "5. Sensitive / Reflection Data" },
  { id: "information-sharing", title: "6. How We Share Information" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "account-deletion", title: "8. Account and Data Deletion" },
  { id: "security", title: "9. Security & Safeguards" },
  { id: "cookies", title: "10. Cookies & Technologies" },
  { id: "third-party-links", title: "11. Third-Party Services" },
  { id: "international-transfers", title: "12. International Data Transfers" },
  { id: "childrens-privacy", title: "13. Children's Privacy" },
  { id: "privacy-rights", title: "14. Your Privacy Rights" },
  { id: "regional-information", title: "15. Regional Privacy Notices" },
  { id: "policy-changes", title: "16. Changes to This Policy" },
  { id: "contact-us", title: "17. Contact Us" },
];

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy outlines how Claro ('we', 'our', or 'us') collects, uses, processes, stores, and protects your information when you interact with the Claro application, website, and conversational introspection services."
      effectiveDate="September 3, 2026"
      lastUpdated="September 3, 2026"
      tocItems={tocItems}
      contactEmailPlaceholder="privacy@thoughtclear.app"
    >
      {/* 1. Scope */}
      <LegalSection id="scope" number="1" title="Scope of This Privacy Policy">
        <p>
          This Privacy Policy applies to the Claro web application, mobile clients, APIs, and associated services operated by <strong className="text-foreground">[Company Legal Name]</strong> ("Claro", "we", "us", or "our").
        </p>
        <p>
          It governs all data processed when visitors, registered users, and session participants access our website, initiate interactive clearing sessions, or communicate with our support team.
        </p>
        <p>
          This policy does not apply to third-party applications, websites, or services that you may access through external links, nor does it apply to software integrations operating independently outside of Claro's direct control.
        </p>
      </LegalSection>

      {/* 2. Information We Collect */}
      <LegalSection id="information-collected" number="2" title="Information We Collect">
        <p>
          We categorize the information collected through Claro into three main streams: information you voluntarily provide, information collected automatically during application runtime, and information received from operational infrastructure partners.
        </p>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <FileText className="h-4 w-4 text-accent" />
              2.1 Information You Provide
            </h3>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground/90">
              <li>
                <strong className="text-foreground">Account Information:</strong> If account creation is enabled or requested, we collect your display name, email address, password hash, or authentication tokens.
              </li>
              <li>
                <strong className="text-foreground">Reflection & Introspection Content:</strong> Written thoughts, mental loops, emotional categories, journal entries, self-reflections, and prompt inputs entered during active clearing sessions.
              </li>
              <li>
                <strong className="text-foreground">Communications & Feedback:</strong> Support requests, feedback submissions, bug reports, or direct inquiries submitted to our team.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Cpu className="h-4 w-4 text-accent" />
              2.2 Information Collected Automatically
            </h3>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground/90">
              <li>
                <strong className="text-foreground">Device & Technical Identifiers:</strong> Operating system, browser type, device identifier, screen resolution, and language preferences.
              </li>
              <li>
                <strong className="text-foreground">Usage & Diagnostic Metrics:</strong> Session duration, feature interaction, timestamps, error logs, and performance telemetry.
              </li>
              <li>
                <strong className="text-foreground">Network Data:</strong> IP address used to connect your device, approximate general location derived from IP (city/country level).
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Database className="h-4 w-4 text-accent" />
              2.3 Information From Third Parties
            </h3>
            <p className="mt-2 text-sm text-muted-foreground/90">
              Where applicable, we receive data from third-party services such as federated identity providers (e.g., Google or Apple OAuth), hosting providers, and cloud infrastructure monitoring systems necessary for application uptime.
            </p>
          </div>
        </div>
      </LegalSection>

      {/* 3. How We Use Information */}
      <LegalSection id="how-we-use-information" number="3" title="How We Use Information">
        <p>
          Claro processes collected information strictly for specified, explicit, and legitimate purposes connected directly to providing our core self-reflection service.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Core Service Delivery:</strong> To generate guided, reflective questions and maintain active clearing session states.
          </li>
          <li>
            <strong className="text-foreground">Account Management:</strong> To verify identity, manage session security, and save user-configured preferences.
          </li>
          <li>
            <strong className="text-foreground">System Stability & Security:</strong> To detect, prevent, and mitigate software bugs, abuse, denial-of-service attacks, and security vulnerabilities.
          </li>
          <li>
            <strong className="text-foreground">Customer Support:</strong> To troubleshoot reported issues and respond to technical inquiries.
          </li>
          <li>
            <strong className="text-foreground">Legal & Regulatory Compliance:</strong> To comply with applicable laws, legal processes, or enforceable governmental requests.
          </li>
        </ul>
      </LegalSection>

      {/* 4. AI & Conversational Data */}
      <LegalSection id="ai-conversational-data" number="4" title="4. AI & Conversational Data Handling">
        <LegalCallout type="info" title="How AI Processing Works in Claro">
          Claro utilizes artificial intelligence models to assist in asking clarifying, reflective questions. When you write a thought during a session, that text is sent over encrypted protocols to our server infrastructure and upstream AI model providers.
        </LegalCallout>

        <p className="mt-4">
          Key principles governing your conversational interactions with Claro:
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong className="text-foreground">Processing Purpose:</strong> Reflection text submitted in sessions is processed solely to generate real-time conversational responses tailored to your input.
          </li>
          <li>
            <strong className="text-foreground">Model Training Policy:</strong> <span className="text-foreground font-medium">[Confirm with technical/product team]</span> By default, session contents sent to our AI providers are not utilized to train public foundation models without explicit user opt-in or administrative agreement.
          </li>
          <li>
            <strong className="text-foreground">Third-Party Model Retention:</strong> Upstream AI infrastructure partners retain ephemeral API payloads for brief periods (e.g., zero to 30 days) solely for abuse detection and safety monitoring, after which payloads are purged.
          </li>
          <li>
            <strong className="text-foreground">AI Response Disclaimer:</strong> AI-generated responses are computed algorithmically and may occasionally be incomplete, inaccurate, or improperly contextualized. Users should not rely on AI outputs as definitive factual statements.
          </li>
        </ul>
      </LegalSection>

      {/* 5. Sensitive / Reflection Information */}
      <LegalSection id="sensitive-information" number="5" title="5. Sensitive & Personal Reflection Data">
        <p>
          Because Claro is designed as a private space for introspection, you may choose to input sensitive personal thoughts, emotional states, or personal challenges.
        </p>

        <LegalCallout type="warning" title="User Advisory regarding Personal Submissions">
          You retain complete control over what you type into Claro. We strongly advise users to refrain from submitting unencrypted credentials, financial payment card numbers, social security identifiers, or sensitive health records that are unnecessary for self-reflection.
        </LegalCallout>

        <p>
          Claro handles all submitted reflection data with heightened technical safeguards, but Claro is a self-awareness tool and is not a HIPAA-covered entity, medical provider, or clinical healthcare database.
        </p>
      </LegalSection>

      {/* 6. How We Share Information */}
      <LegalSection id="information-sharing" number="6" title="6. How We Share Information">
        <p>
          We do not sell, rent, or trade your personal information or session logs to data brokers, advertisers, or third-party marketing networks.
        </p>
        <p>
          We share information only under the following limited circumstances:
        </p>

        <div className="mt-4 space-y-3 text-sm">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <h4 className="font-semibold text-foreground">A. Operational Service Providers</h4>
            <p className="mt-1 text-muted-foreground">
              Trusted vendors who assist in hosting cloud databases, executing backend serverless code, delivering network security, and processing AI API requests under strict confidentiality obligations.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <h4 className="font-semibold text-foreground">B. Legal Requirements & Protection</h4>
            <p className="mt-1 text-muted-foreground">
              When mandated by valid legal process (such as a court order or subpoena), or when necessary to protect the safety, rights, or property of users, the public, or Claro.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <h4 className="font-semibold text-foreground">C. Business Transfers</h4>
            <p className="mt-1 text-muted-foreground">
              In connection with or during negotiations of any merger, acquisition, financing, or sale of company assets, subject to customary non-disclosure agreements.
            </p>
          </div>
        </div>
      </LegalSection>

      {/* 7. Data Retention */}
      <LegalSection id="data-retention" number="7" title="7. Data Retention">
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Active Session Logs:</strong> Local session states created on your device persist until cleared or deleted via your browser/app settings.
          </li>
          <li>
            <strong className="text-foreground">Server Backups:</strong> System backups are maintained on a rolling retention schedule <strong className="text-foreground">[Specify retention period, e.g., 30 to 90 days]</strong> after which backup snapshots are overwritten.
          </li>
          <li>
            <strong className="text-foreground">Diagnostic Logs:</strong> System error logs and network telemetry are retained for up to <strong className="text-foreground">[Specify retention period, e.g., 180 days]</strong> for technical troubleshooting.
          </li>
        </ul>
      </LegalSection>

      {/* 8. Account and Data Deletion */}
      <LegalSection id="account-deletion" number="8" title="8. Account & Data Deletion">
        <p>
          You have the right to request the deletion of your account and any associated personal reflection history.
        </p>
        <p>
          To initiate a deletion request:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Send an email to <code className="rounded border border-white/5 bg-black/40 px-2 py-0.5 font-mono text-accent">[Privacy Contact Email]</code> with the subject line <strong>"Account Deletion Request"</strong>.
          </li>
          <li>
            Include your registered account email address or account identifier for verification purposes.
          </li>
        </ol>
        <p className="mt-3">
          Upon verification, we will permanently delete or anonymize your data from active production databases within <strong className="text-foreground">[Specify verification timeline, e.g., 30 days]</strong>, subject to legitimate legal exceptions.
        </p>
      </LegalSection>

      {/* 9. Security */}
      <LegalSection id="security" number="9" title="9. Security & Safeguards">
        <p>
          We implement technical, administrative, and physical safeguards designed to protect personal data against unauthorized access, destruction, loss, alteration, or disclosure.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Encryption in Transit:</strong> All web traffic to and from Claro is encrypted using TLS 1.3/TLS 1.2 protocols.
          </li>
          <li>
            <strong className="text-foreground">Access Controls:</strong> Administrative access to production databases is restricted to authorized personnel using multi-factor authentication.
          </li>
          <li>
            <strong className="text-foreground">Infrastructure Isolation:</strong> Production databases are hosted in isolated cloud environments with active threat monitoring.
          </li>
        </ul>
        <LegalCallout type="warning" title="Security Disclaimer">
          While we maintain robust security controls, no internet transmission or electronic storage architecture can be guaranteed as 100% secure. Users remain responsible for maintaining the security of their local device access.
        </LegalCallout>
      </LegalSection>

      {/* 10. Cookies */}
      <LegalSection id="cookies" number="10" title="10. Cookies & Local Storage">
        <p>
          Claro uses essential local storage mechanisms and cookies required for standard application operation:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Essential Storage:</strong> Used to store local session tokens, UI state, theme preferences, and authentication cookies.
          </li>
          <li>
            <strong className="text-foreground">Performance & Security:</strong> Used to prevent cross-site request forgery (CSRF) and measure application response speeds.
          </li>
        </ul>
        <p className="mt-3">
          We do not use invasive third-party cross-site advertising tracking pixels or commercial ad network cookies.
        </p>
      </LegalSection>

      {/* 11. Third-Party Links */}
      <LegalSection id="third-party-links" number="11" title="11. Third-Party Services & Links">
        <p>
          The website or app may contain links to external sites, documentation, or social platforms. We do not control, inspect, or endorse the privacy practices of external third-party sites. We encourage you to review their respective privacy notices.
        </p>
      </LegalSection>

      {/* 12. International Transfers */}
      <LegalSection id="international-transfers" number="12" title="12. International Data Transfers">
        <p>
          Claro's server infrastructure is operated in primary cloud hosting regions situated in <strong className="text-foreground">[Specify primary hosting region, e.g., United States / European Union]</strong>.
        </p>
        <p>
          If you access Claro from outside these jurisdictions, your information will be transferred across international borders in accordance with standard legal mechanisms such as Standard Contractual Clauses (SCCs) where required.
        </p>
      </LegalSection>

      {/* 13. Children's Privacy */}
      <LegalSection id="childrens-privacy" number="13" title="13. Children's Privacy">
        <p>
          Claro is not intended for use by children under <strong className="text-foreground">[Specify minimum user age, e.g., 13 or 16]</strong> years of age.
        </p>
        <p>
          We do not knowingly collect personal information from individuals below this age threshold. If we learn that we have inadvertently collected data from a minor without parental consent, we will promptly delete such information.
        </p>
      </LegalSection>

      {/* 14. Your Privacy Rights */}
      <LegalSection id="privacy-rights" number="14" title="14. Your Privacy Rights">
        <p>
          Depending on your geographic location, you may possess specific rights regarding your personal information:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <strong className="text-foreground block font-semibold">Right to Access / Know</strong>
            <span className="text-muted-foreground text-xs mt-1 block">Request copies of personal information held about you.</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <strong className="text-foreground block font-semibold">Right to Rectification</strong>
            <span className="text-muted-foreground text-xs mt-1 block">Request correction of inaccurate or incomplete records.</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <strong className="text-foreground block font-semibold">Right to Erasure (Forgetfulness)</strong>
            <span className="text-muted-foreground text-xs mt-1 block">Request permanent deletion of your personal data.</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <strong className="text-foreground block font-semibold">Right to Data Portability</strong>
            <span className="text-muted-foreground text-xs mt-1 block">Request structured export of your content history.</span>
          </div>
        </div>
      </LegalSection>

      {/* 15. Regional Information */}
      <LegalSection id="regional-information" number="15" title="15. Regional Privacy Notices">
        <h3 className="font-semibold text-foreground text-base">15.1 European Economic Area (EEA) & UK Users (GDPR)</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Under the General Data Protection Regulation (GDPR), our legal bases for processing personal data include: performance of contract (to provide Claro services), legitimate interests (security and product stability), and compliance with legal obligations.
        </p>

        <h3 className="font-semibold text-foreground text-base mt-6">15.2 California Residents (CCPA / CPRA)</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          California consumers have the right to opt out of the sale or sharing of personal information. As stated, Claro does not sell personal information as defined under the CCPA/CPRA.
        </p>
      </LegalSection>

      {/* 16. Policy Changes */}
      <LegalSection id="policy-changes" number="16" title="16. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy periodically to reflect technological changes, product updates, or legal compliance mandates.
        </p>
        <p>
          When material updates are made, we will revise the "Last Updated" date at the top of this document and provide prominent notification within the application or via registered email.
        </p>
      </LegalSection>

      {/* 17. Contact Us */}
      <LegalSection id="contact-us" number="17" title="17. Contact Us">
        <p>
          If you have questions, concerns, or privacy rights requests regarding this policy, please reach out to our privacy officer at:
        </p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 max-w-md">
          <p className="font-semibold text-foreground">[Company Legal Name]</p>
          <p className="text-xs text-muted-foreground mt-1">Attn: Privacy & Data Protection Team</p>
          <p className="text-sm font-mono text-accent mt-3">[Privacy Contact Email]</p>
          <p className="text-xs text-muted-foreground mt-1">[Company Legal Address Placeholder]</p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

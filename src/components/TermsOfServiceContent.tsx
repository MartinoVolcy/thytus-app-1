import { SUPPORT_EMAIL } from "@/lib/contact";

export default function TermsOfServiceContent() {
  return (
    <article className="max-w-none space-y-4 text-slate-600 dark:text-slate-400">
      <p className="text-sm text-slate-500">
        Last updated: October 25, 2026 &nbsp;|&nbsp; Applies to: https://www.thytus.com/
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Acceptance of Terms
      </h2>
      <p>
        By accessing or using https://www.thytus.com/ (the &quot;Service&quot;) operated by Thytus
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of
        Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not
        access the Service.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Description of Service
      </h2>
      <p>
        Thytus provides Mobile App services through our platform. The Service is provided on a
        Subscription basis. We reserve the right to modify, suspend, or discontinue the Service at
        any time with or without notice.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        User Accounts
      </h2>
      <p>
        When you create an account with us, you must provide accurate, complete, and current
        information. You are responsible for:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Notifying us immediately of any unauthorized use of your account</li>
      </ul>
      <p>We reserve the right to terminate accounts that violate these Terms.</p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Age Requirements
      </h2>
      <p>
        You must be at least 13 years to use this Service. By using the Service, you represent that
        you meet this age requirement. If we become aware that a user does not meet this
        requirement, we will terminate their account.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Intellectual Property
      </h2>
      <p>
        The Service and its original content, features, and functionality are and will remain the
        exclusive property of Thytus and its licensors. Our trademarks and trade dress may not be
        used in connection with any product or service without the prior written consent of Thytus.
      </p>
      <p>
        User-generated content remains the property of the user, but you grant Thytus a
        non-exclusive, royalty-free license to use, display, and distribute such content in
        connection with the Service.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Prohibited Uses
      </h2>
      <p>You agree not to use the Service:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>In any way that violates applicable laws or regulations</li>
        <li>To transmit unsolicited commercial communications (spam)</li>
        <li>To impersonate any person or entity</li>
        <li>To engage in any conduct that restricts or inhibits others&apos; use of the Service</li>
        <li>To attempt to gain unauthorized access to any part of the Service</li>
        <li>To use automated scripts to collect information from or interact with the Service</li>
        <li>To upload or transmit viruses or other malicious code</li>
      </ul>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Payment Terms
      </h2>
      <p>Our Service operates on a Subscription basis. If you subscribe to a paid plan:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Fees are billed in advance on a recurring basis</li>
        <li>All fees are non-refundable unless otherwise stated in our Refund Policy</li>
        <li>We reserve the right to change our pricing with 30 days&apos; notice</li>
        <li>Failure to pay may result in suspension or termination of your account</li>
      </ul>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Disclaimer of Warranties
      </h2>
      <p>
        The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        any warranties of any kind, whether express or implied. Thytus expressly disclaims all
        warranties, including but not limited to implied warranties of merchantability, fitness for
        a particular purpose, and non-infringement.
      </p>
      <p>
        We do not warrant that: (a) the Service will function uninterrupted or error-free; (b)
        defects will be corrected; (c) the Service is free of viruses or other harmful components.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Limitation of Liability
      </h2>
      <p>
        To the maximum extent permitted by applicable law, Thytus shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, including but not limited
        to loss of profits, data, goodwill, or other intangible losses, resulting from your use of
        or inability to use the Service.
      </p>
      <p>
        In no event shall Thytus&apos;s total liability to you exceed the greater of one hundred
        dollars ($100) or the amounts paid by you to Thytus in the past twelve months.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Governing Law
      </h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of United States/NJ,
        without regard to its conflict of law provisions.
      </p>
      <p>
        Any disputes arising under these Terms will be resolved through binding arbitration in
        United States/NJ, except that either party may seek injunctive relief in any court of
        competent jurisdiction.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Changes to Terms
      </h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify users of material
        changes by posting the updated Terms on this page with a new effective date. Your continued
        use of the Service after changes are posted constitutes acceptance of the revised Terms.
      </p>

      <h2 className="!mt-10 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Contact Us
      </h2>
      <p>
        If you have questions about these Terms, please contact us at{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-medium text-slate-900 underline underline-offset-2 dark:text-white"
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        or visit{" "}
        <a
          href="https://www.thytus.com/"
          className="font-medium text-slate-900 underline underline-offset-2 dark:text-white"
        >
          https://www.thytus.com/
        </a>
        .
      </p>
    </article>
  );
}

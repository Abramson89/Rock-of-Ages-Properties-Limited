"use client"

import Link from "next/link"
import { LegalPageLayout } from "@/components/legal-page-layout"

export default function CookiesPage() {
  return (
    <LegalPageLayout
      activePage="cookies"
      title="Cookie Policy"
      lastUpdated="October 24, 2023"
      version="v1.0"
    >
      <article className="prose-legal">
        <p className="text-lg font-medium leading-relaxed text-slate-custom dark:text-gray-400 mb-6">
          Rock of Ages Properties Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website and applications. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to the site owners. Cookies can be &quot;first-party&quot; (set by us) or &quot;third-party&quot; (set by other services we use, such as analytics or payment providers).
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <p>We use the following types of cookies:</p>
        <ul>
          <li><strong>Strictly necessary cookies:</strong> Required for the website to function. They enable basic features such as page navigation, secure login, and access to your account. These cannot be disabled.</li>
          <li><strong>Functional cookies:</strong> Allow us to remember choices you make (e.g. language, region) and to provide enhanced, more personal features.</li>
          <li><strong>Performance and analytics cookies:</strong> Help us understand how visitors use our site (e.g. which pages are viewed most). This helps us improve our website and services. Data is typically aggregated and anonymized.</li>
          <li><strong>Marketing cookies:</strong> May be used to deliver relevant advertisements and to track the effectiveness of our campaigns. These may be set by us or by our advertising partners.</li>
        </ul>

        <h2>3. Specific Cookies We Use</h2>
        <p>Examples of cookies and similar technologies we may use include:</p>
        <ul>
          <li><strong>Session and authentication:</strong> To keep you logged in and to secure your session.</li>
          <li><strong>Preferences:</strong> To store your theme (e.g. light/dark mode), language, or other settings.</li>
          <li><strong>Analytics:</strong> To count visits, traffic sources, and usage patterns (e.g. via tools that respect privacy settings).</li>
          <li><strong>Security:</strong> To help detect and prevent abuse, fraud, and unauthorized access.</li>
        </ul>
        <p>We may update this list as our technology or partners change. The purposes and retention periods for each type of cookie will align with the categories above and our Privacy Policy.</p>

        <h2>4. How Long Do Cookies Last?</h2>
        <p>Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period (e.g. months or years) or until you delete them. The exact duration depends on the type of cookie and its purpose, and may be specified in your browser or in our cookie preference tool if we offer one.</p>

        <h2>5. Your Choices and Managing Cookies</h2>
        <p>You can control and manage cookies in several ways:</p>
        <ul>
          <li><strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies. You can usually find these options under &quot;Settings&quot;, &quot;Privacy&quot;, or &quot;Cookies&quot;. Blocking all cookies may affect the functionality of our website.</li>
          <li><strong>Our cookie banner or preference center:</strong> If we provide a cookie consent or preference tool on our site, you can use it to adjust your preferences for non-essential cookies.</li>
          <li><strong>Third-party opt-outs:</strong> For analytics or advertising cookies, you may be able to opt out via the relevant provider&apos;s website or industry tools (e.g. youronlinechoices.eu).</li>
        </ul>
        <p>If you disable certain cookies, some features of our website or services may not work as intended.</p>

        <h2>6. Other Similar Technologies</h2>
        <p>We may also use technologies similar to cookies, such as:</p>
        <ul>
          <li><strong>Local storage:</strong> Data stored in your browser (e.g. for preferences or caching) that persists after you close the browser.</li>
          <li><strong>Pixels and beacons:</strong> Small graphics or scripts used to understand how our pages or emails are used.</li>
        </ul>
        <p>Where these are used for the same purposes as cookies, the same principles in this policy apply. We will use them in line with our Privacy Policy and applicable law.</p>

        <h2>7. Updates to This Policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will post the updated policy on this page and update the &quot;Last Updated&quot; date. We encourage you to review this policy periodically.</p>

        <div className="mt-12 rounded-xl bg-gray-50 dark:bg-white/5 p-8 border border-gray-100 dark:border-white/10">
          <h3 className="!mt-0 mb-4 text-lg font-bold text-background-dark dark:text-white">Questions?</h3>
          <p className="!mb-0 text-slate-custom dark:text-gray-400">
            If you have questions about our use of cookies or this Cookie Policy, please contact us at{" "}
            <a href="mailto:enquiries@roapropertiesltd.com" className="text-primary underline hover:no-underline">enquiries@roapropertiesltd.com</a>
            {" "}or via our <Link href="/contact" className="text-primary underline hover:no-underline">contact form</Link>.
          </p>
        </div>
      </article>
    </LegalPageLayout>
  )
}

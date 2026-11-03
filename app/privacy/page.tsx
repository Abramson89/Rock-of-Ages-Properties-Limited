"use client"

import Link from "next/link"
import { LegalPageLayout } from "@/components/legal-page-layout"

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      activePage="privacy"
      title="Privacy Policy"
      lastUpdated="October 24, 2023"
      version="v2.4"
    >
      <article className="prose-legal">
        <p className="text-lg font-medium leading-relaxed text-slate-custom dark:text-gray-400 mb-6">
          Rock of Ages Properties Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Rock of Ages Properties Limited.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us when you use our website, mobile application, or services. This may include:</p>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
          <li><strong>Property Preferences:</strong> Types of properties you are interested in, budget ranges, and preferred locations.</li>
          <li><strong>Financial Information:</strong> Payment details, credit references, and financing preferences when applying for properties.</li>
          <li><strong>Identification:</strong> Government-issued ID numbers where required for legal compliance in real estate transactions.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>The information we collect is used to provide, maintain, and improve our services, including:</p>
        <ul>
          <li>Processing your property inquiries and transactions.</li>
          <li>Sending you property updates, newsletters, and marketing materials.</li>
          <li>Personalizing your experience on our platform.</li>
          <li>Detecting and preventing fraudulent transactions and other illegal activities.</li>
          <li>Complying with legal and regulatory requirements specific to the real estate industry.</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>We do not share your personal information with third parties except in the following circumstances:</p>
        <ul>
          <li>With your explicit consent.</li>
          <li>With service providers who perform services for us (e.g., payment processors, CRM providers).</li>
          <li>To comply with laws or respond to lawful requests and legal processes.</li>
          <li>To protect the rights and property of Rock of Ages Properties Limited, our agents, customers, and others.</li>
        </ul>

        <h2>4. Your Rights and Choices</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul>
          <li>The right to access the personal information we hold about you.</li>
          <li>The right to request that we rectify or erase your personal information.</li>
          <li>The right to object to or restrict certain processing of your data.</li>
          <li>The right to data portability.</li>
        </ul>

        <h2>5. Security</h2>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no physical or electronic security system is entirely secure.</p>

        <div className="mt-12 rounded-xl bg-gray-50 dark:bg-white/5 p-8 border border-gray-100 dark:border-white/10">
          <h3 className="!mt-0 mb-4 text-lg font-bold text-background-dark dark:text-white">Questions or Concerns?</h3>
          <p className="!mb-0 text-slate-custom dark:text-gray-400">
            If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at{" "}
            <a href="mailto:enquiries@roapropertiesltd.com" className="text-primary underline hover:no-underline">
              enquiries@roapropertiesltd.com
            </a>{" "}
            or via our <Link href="/contact" className="text-primary underline hover:no-underline">contact form</Link>.
          </p>
        </div>
      </article>
    </LegalPageLayout>
  )
}

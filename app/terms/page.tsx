"use client"

import Link from "next/link"
import { LegalPageLayout } from "@/components/legal-page-layout"

export default function TermsPage() {
  return (
    <LegalPageLayout
      activePage="terms"
      title="Terms of Service"
      lastUpdated="October 24, 2023"
      version="v1.2"
    >
      <article className="prose-legal">
        <p className="text-lg font-medium leading-relaxed text-slate-custom dark:text-gray-400 mb-6">
          Welcome to Rock of Ages Properties Limited. By accessing or using our website, mobile application, or services, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account, browsing our platform, or using any of our property management, listing, or real estate services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our services.
        </p>

        <h2>2. Description of Services</h2>
        <p>Rock of Ages Properties Limited provides:</p>
        <ul>
          <li><strong>Property management</strong> for residential and commercial assets.</li>
          <li><strong>Listing and marketing</strong> of properties for sale or rent.</li>
          <li><strong>Tenant and lease management</strong>, including applications, agreements, and renewals.</li>
          <li><strong>Maintenance coordination</strong> and facility support.</li>
          <li><strong>Financial services</strong> related to rent collection, payments, and reporting.</li>
        </ul>
        <p>We reserve the right to modify, suspend, or discontinue any part of our services with reasonable notice where practicable.</p>

        <h2>3. User Accounts and Eligibility</h2>
        <p>To use certain features, you must register for an account and provide accurate, current information. You are responsible for maintaining the confidentiality of your login details and for all activity under your account. You must be at least 18 years of age and have the legal capacity to enter into binding contracts to use our services. We may refuse service or terminate accounts at our discretion for breach of these terms or for any other lawful reason.</p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services for any illegal purpose or in violation of any applicable laws or regulations.</li>
          <li>Misrepresent your identity, affiliation, or the nature of any property or transaction.</li>
          <li>Harass, abuse, or harm other users, our staff, or third parties.</li>
          <li>Attempt to gain unauthorized access to our systems, other accounts, or any data not intended for you.</li>
          <li>Transmit viruses, malware, or other harmful code, or interfere with the proper operation of our platform.</li>
          <li>Scrape, copy, or resell our content or data without our prior written consent.</li>
        </ul>
        <p>We may suspend or terminate your access if we reasonably believe you have violated these terms.</p>

        <h2>5. Properties, Listings, and Transactions</h2>
        <p>Listings and property information are provided for general informational purposes. We do not guarantee the accuracy, completeness, or availability of any listing. All transactions (sales, leases, payments) are subject to separate agreements and applicable law. Rock of Ages Properties Limited may act as agent for property owners or as a platform connecting parties; the specific role will be set out in the relevant contract. You are responsible for conducting your own due diligence before entering into any transaction.</p>

        <h2>6. Fees and Payments</h2>
        <p>Fees for management, listing, or other services will be disclosed before you commit to a service. You agree to pay all applicable fees and charges in accordance with the payment terms provided. Late payments may incur interest or other charges as specified in your agreement. We may use third-party payment processors; your use of those services is also subject to their terms.</p>

        <h2>7. Intellectual Property</h2>
        <p>All content on our platform (including text, graphics, logos, and software) is owned by Rock of Ages Properties Limited or our licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written permission, except for limited personal, non-commercial use.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Rock of Ages Properties Limited and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, or goodwill, arising from your use of our services or your inability to use them. Our total liability for any claim arising from these terms or the services shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or one hundred Nigerian Naira (₦100), whichever is greater. Some jurisdictions do not allow certain limitations; in such cases, our liability will be limited to the maximum extent permitted by law.</p>

        <h2>9. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless Rock of Ages Properties Limited and its officers, directors, employees, and agents from and against any claims, damages, losses, costs, or expenses (including reasonable legal fees) arising from your use of our services, your violation of these terms, or your violation of any third-party rights.</p>

        <h2>10. Changes to Terms</h2>
        <p>We may update these Terms of Service from time to time. We will post the revised terms on this page and update the &quot;Last Updated&quot; date. Your continued use of our services after the changes take effect constitutes acceptance of the new terms. If you do not agree, you must stop using our services.</p>

        <h2>11. Governing Law and Disputes</h2>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute arising from or relating to these terms or our services shall be subject to the exclusive jurisdiction of the courts of Nigeria, unless otherwise required by mandatory law.</p>

        <div className="mt-12 rounded-xl bg-gray-50 dark:bg-white/5 p-8 border border-gray-100 dark:border-white/10">
          <h3 className="!mt-0 mb-4 text-lg font-bold text-background-dark dark:text-white">Questions?</h3>
          <p className="!mb-0 text-slate-custom dark:text-gray-400">
            For questions about these Terms of Service, contact us at{" "}
            <a href="mailto:enquiries@roapropertiesltd.com" className="text-primary underline hover:no-underline">enquiries@roapropertiesltd.com</a>
            {" "}or via our <Link href="/contact" className="text-primary underline hover:no-underline">contact form</Link>.
          </p>
        </div>
      </article>
    </LegalPageLayout>
  )
}

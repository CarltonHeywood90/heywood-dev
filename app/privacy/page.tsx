export default function PrivacyPolicy() {
  const lastUpdated = "March 24, 2026";

  return (
    <div className="py-12 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold text-dark-slate mb-4">Privacy Policy</h1>
      <p className="text-slate-500 mb-10 italic text-sm">Last Updated: {lastUpdated}</p>

      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">1. Overview</h2>
          <p>
            Heywood Dev (we, us, or our) operates the website located at heywood.dev. 
            Your privacy is important to us. This policy explains how we collect, use, and protect 
            your personal information when you visit our site or book a consultation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Contact Information:</strong> When you book a session via Calendly or email us, we collect your name, email address, and any project details you provide.</li>
            <li><strong>Usage Data:</strong> We use privacy-focused analytics (via Cloudflare) to collect non-identifying information such as browser type, device type, and pages visited to improve our service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">3. How We Use Your Information</h2>
          <p>
            We only use your information to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Communicate with you regarding project inquiries or scheduled bookings.</li>
            <li>Provide the IT and web development services you request.</li>
            <li>Maintain the security and performance of our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">4. Third-Party Services</h2>
          <p>
            We use trusted third-party providers to help run our business. These include:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Calendly:</strong> For scheduling consultations.</li>
            <li><strong>Cloudflare:</strong> For hosting, security, and web analytics.</li>
          </ul>
          <p className="mt-4 text-sm">
            Please note that these services have their own privacy policies which govern how they handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">5. Data Retention</h2>
          <p>
            We retain your contact information only as long as necessary to fulfill the purposes 
            for which it was collected or to comply with legal obligations.
          </p>
        </section>

        <section className="pt-8 border-t border-slate-100">
          <h2 className="text-xl font-bold text-dark-slate mb-2">Contact Us</h2>
          <p>If you have questions about this policy, please reach out at:</p>
          <p className="font-medium text-baby-blue mt-2">carlton@heywooddev.com</p>
        </section>
      </div>
    </div>
  );
}
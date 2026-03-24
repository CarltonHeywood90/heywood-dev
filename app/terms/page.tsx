export default function TermsOfService() {
  const lastUpdated = "March 24, 2026";

  return (
    <div className="py-12 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold text-dark-slate mb-4">Terms of Service</h1>
      <p className="text-slate-500 mb-10 italic text-sm">Last Updated: {lastUpdated}</p>

      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing heywood.dev or engaging in our services, you agree to be bound by these 
            Terms of Service. If you do not agree, please do not use this website or our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">2. Services Provided</h2>
          <p>
            Heywood Dev provides professional web development, software engineering, and IT 
            management consulting. While we strive for excellence and technical accuracy, all 
            services are provided on an as-is and as-available basis unless otherwise 
            specified in a signed project contract.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">3. Professional Disclaimer</h2>
          <p>
            The technical advice and information provided on this website are for general 
            informational purposes. Engaging with our content does not create a formal 
            fiduciary or professional-client relationship until a specific service agreement 
            is executed and signed by both parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Heywood Dev shall not be liable for any 
            indirect, incidental, or consequential damages (including loss of data or profits) 
            arising out of your use of this website or the implementation of technical 
            suggestions found herein.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-slate mb-3">5. Intellectual Property</h2>
          <p>
            Unless otherwise noted, all code snippets, designs, and content on this website are 
            the property of Heywood Dev. You may not reproduce or redistribute this content 
            without express written permission.
          </p>
        </section>

        <section className="pt-8 border-t border-slate-100">
          <h2 className="text-xl font-bold text-dark-slate mb-2">Governing Law</h2>
          <p>
            These terms are governed by the laws of the **State of Utah**. Any disputes 
            arising from these terms shall be resolved in the courts of Utah County.
          </p>
        </section>
      </div>
    </div>
  );
}
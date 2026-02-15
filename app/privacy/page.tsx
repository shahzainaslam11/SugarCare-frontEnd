export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-12 md:mb-16 pb-12 border-b border-slate-200/60 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-50 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-indigo-100 rounded-full border border-indigo-200">
              <span className="text-indigo-600 font-bold text-sm md:text-base tracking-wide">Legal Document</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
              Privacy Policy
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                for SugarCare
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                ✓ UK GDPR Compliant
              </span>
              <p className="text-muted-foreground text-base md:text-lg">
                Last Updated: February 15, 2026
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Introduction
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed">
                Welcome to SugarCare — a digital health platform available via mobile app and web, designed to help individuals with diabetes monitor, track, and manage their blood sugar levels through data analytics and AI-powered insights.
              </p>
              <p className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed">
                SugarCare is operated by <span className="font-semibold text-gray-900">SugarCare Technologies Ltd.</span> ("we", "our", or "us").
              </p>
              <p className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed">
                This Privacy Policy explains how we collect, use, store, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed font-semibold text-gray-900 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                By using SugarCare, you agree to this Privacy Policy. If you do not agree, please discontinue use of the app and web platform.
              </p>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Data Controller
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              The data controller responsible for your personal data is:
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-900 font-extrabold mb-4 text-xl md:text-2xl">
                SugarCare Technologies Ltd.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📍</span> 
                  <span><span className="font-semibold">Registered Office:</span> London, United Kingdom</span>
                </p>
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📧</span> 
                  <span><span className="font-semibold">Email:</span> <a href="mailto:support@sugarcare.cloud" className="text-indigo-600 hover:text-indigo-700 hover:underline ml-1 font-semibold">support@sugarcare.cloud</a></span>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                What Data We Collect
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              We may collect and process the following categories of personal data:
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-indigo-50/50 rounded-xl border border-indigo-100 hover:border-indigo-200 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">a</span>
                  Account Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-base md:text-lg">
                  <li>Name, email address, and password</li>
                  <li>Demographic data (e.g., age, gender, region)</li>
                </ul>
              </div>

              <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">b</span>
                  Health and Lifestyle Data
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-base md:text-lg">
                  <li>Blood glucose readings (manual or device-synced)</li>
                  <li>Meal details and nutritional logs</li>
                  <li>Exercise, medication, and sleep patterns</li>
                  <li>HbA1C levels and related health data</li>
                  <li>Fasting and daily habits</li>
                </ul>
              </div>

              <div className="p-6 bg-purple-50/50 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">c</span>
                  AI/ML Data
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-base md:text-lg">
                  <li>Uploaded food images (for nutrition estimation)</li>
                  <li>Chat interactions with the AI assistant</li>
                  <li>Predictive glucose alerts and insight data</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gray-700 text-white rounded-lg flex items-center justify-center text-sm font-bold">d</span>
                  Device & Technical Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-base md:text-lg">
                  <li>Device model, operating system, and IP address</li>
                  <li>Usage analytics, app activity, and crash reports</li>
                  <li>Location data (if enabled by user)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Lawful Basis for Processing
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              Under UK GDPR, we process your personal data based on the following legal grounds:
            </p>
            <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full border-collapse rounded-xl overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-blue-600">
                      <th className="px-5 py-4 text-left text-white font-bold text-base md:text-lg">
                        Purpose
                      </th>
                      <th className="px-5 py-4 text-left text-white font-bold text-base md:text-lg">
                        Legal Basis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-indigo-50/50 transition-colors duration-200">
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg font-medium">
                        To provide app services and account access
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg">
                        Performance of a contract
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-indigo-50/50 transition-colors duration-200">
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg font-medium">
                        To deliver AI-driven recommendations
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg">
                        Legitimate interest
                      </td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50 transition-colors duration-200">
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg font-medium">
                        To process health data and analytics
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg">
                        Explicit consent
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-indigo-50/50 transition-colors duration-200">
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg font-medium">
                        To improve features, UI, and AI models
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg">
                        Legitimate interest
                      </td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50 transition-colors duration-200">
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg font-medium">
                        To send updates or notifications
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg">
                        Consent
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-indigo-50/50 transition-colors duration-200">
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg font-medium">
                        To comply with legal obligations
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-base md:text-lg">
                        Legal requirement
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              You may withdraw your consent at any time via your account settings or by contacting us at <a href="mailto:support@sugarcare.cloud" className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold">support@sugarcare.cloud</a>.
            </p>
          </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            5. How We Use Your Data
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
            <li>Track and display your glucose readings and health progress</li>
            <li>Generate AI insights and recommendations based on your patterns</li>
            <li>Forecast possible sugar spikes or drops</li>
            <li>Suggest meals and fasting plans tailored to your lifestyle</li>
            <li>Predict long-term risks (e.g., neuropathy, retinopathy)</li>
            <li>Conduct anonymised analytics to improve the platform</li>
            <li>Ensure compliance and maintain system security</li>
          </ul>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            6. AI and Machine Learning Use
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            SugarCare integrates Artificial Intelligence (AI) and Machine Learning (ML) models to personalize your experience responsibly.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
            <li><strong className="text-gray-900">Predictive Models:</strong> Use historical glucose and lifestyle data to predict trends.</li>
            <li><strong className="text-gray-900">Food Image Recognition:</strong> Automatically estimate nutritional values from uploaded food photos.</li>
            <li><strong className="text-gray-900">Explainable AI:</strong> We employ Explainable AI techniques (e.g., SHAP, IG) to make our predictions transparent.</li>
            <li><strong className="text-gray-900">Personalised Risk Forecasting:</strong> Identifies potential long-term health risks based on trends.</li>
            <li><strong className="text-gray-900">Community Insights:</strong> Aggregated and anonymised data may be used to identify broader lifestyle trends without identifying individual users.</li>
          </ul>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            All AI processing involving sensitive health data is done securely and only with explicit user consent.
          </p>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            7. Data Sharing and Transfers
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            We do not sell or rent your personal data.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            We may share limited data only under these circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
            <li><strong className="text-gray-900">Service Providers:</strong> With trusted partners who assist in cloud hosting, analytics, or communication — all bound by data protection agreements.</li>
            <li><strong className="text-gray-900">Medical Professionals:</strong> Only with your explicit consent.</li>
            <li><strong className="text-gray-900">Legal Authorities:</strong> When required by law or government request.</li>
            <li><strong className="text-gray-900">Aggregated Research:</strong> Non-identifiable data may be used for public health research or product improvement.</li>
          </ul>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            If we transfer your data outside the UK (e.g., to secure cloud servers), we ensure appropriate safeguards such as UK International Data Transfer Agreements (IDTA) or adequacy decisions approved by the UK ICO.
          </p>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            8. Data Security
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            We implement strong encryption (SSL/TLS) and industry-standard measures to protect your personal and health data from unauthorized access, loss, or alteration.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            Access to data is strictly limited to authorized personnel bound by confidentiality agreements.
          </p>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            9. Data Retention
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            We retain your data only for as long as necessary to provide our services or comply with legal obligations.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            You can request account deletion at any time by contacting <a href="mailto:support@sugarcare.cloud" className="text-[#4252FF] hover:underline">support@sugarcare.cloud</a>.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            Upon deletion, your data will be securely erased within 30 days unless retention is required by law.
          </p>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            10. Your Rights (Under UK GDPR)
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            As a UK user, you have the following rights:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
            <li><strong className="text-gray-900">Right to Access</strong> – Request a copy of your personal data.</li>
            <li><strong className="text-gray-900">Right to Rectification</strong> – Correct inaccurate or incomplete data.</li>
            <li><strong className="text-gray-900">Right to Erasure ("Right to be Forgotten")</strong> – Request deletion of your data.</li>
            <li><strong className="text-gray-900">Right to Restrict Processing</strong> – Limit how your data is used.</li>
            <li><strong className="text-gray-900">Right to Data Portability</strong> – Receive your data in a machine-readable format.</li>
            <li><strong className="text-gray-900">Right to Object</strong> – Object to data processing under legitimate interests.</li>
            <li><strong className="text-gray-900">Right to Withdraw Consent</strong> – Withdraw consent for any processing at any time.</li>
          </ul>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            To exercise these rights, please contact us at <a href="mailto:support@sugarcare.cloud" className="text-[#4252FF] hover:underline">support@sugarcare.cloud</a>.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            If you are not satisfied with our response, you may file a complaint with the Information Commissioner's Office (ICO) at{" "}
            <a 
              href="https://ico.org.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4252FF] hover:underline"
            >
              https://ico.org.uk/
            </a>.
          </p>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            11. Cookies and Tracking
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            Our website uses cookies and similar technologies to enhance functionality and analyze traffic.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            You can manage or disable cookies through your browser settings.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            For more details, see our Cookie Policy.
          </p>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            12. Children's Privacy
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            SugarCare is not designed for children under 13 years old.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            We do not knowingly collect personal data from minors.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            If we discover such data, it will be promptly deleted.
          </p>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            13. Policy Updates
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            All updates will be posted on our website and within the app, indicating the "Last Updated" date above.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
            Significant changes will be communicated to users via email or in-app notifications.
          </p>
        </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">14</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Contact Us
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              If you have questions, concerns, or requests related to your personal data, please contact:
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-900 font-extrabold mb-4 text-xl md:text-2xl">
                Data Protection Officer (DPO)
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📧</span> 
                  <span><a href="mailto:support@sugarcare.cloud" className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold">support@sugarcare.cloud</a></span>
                </p>
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📍</span> 
                  <span>SugarCare Technologies Ltd., London, United Kingdom</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

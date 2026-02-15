export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16 pb-12 border-b-2 border-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-50 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-indigo-100 rounded-full border border-indigo-200">
              <span className="text-indigo-600 font-bold text-sm md:text-base tracking-wide">
                Legal Document
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
              Terms and Conditions
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                for SugarCare
              </span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg font-medium">
              Last Updated: November 13, 2025
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Introduction
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Welcome to SugarCare, a digital health platform operated by
                <span className="font-semibold text-gray-900">
                  {" "}
                  SugarCare Technologies Ltd.
                </span>{" "}
                ("we", "our", "us").
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                These Terms and Conditions ("Terms") govern your access to and
                use of our mobile and web application ("SugarCare" or "the
                App").
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold text-gray-900 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                By downloading, accessing, or using SugarCare, you agree to
                these Terms. If you do not agree, please do not use the App or
                website.
              </p>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Company Information
              </h2>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-900 font-extrabold mb-4 text-xl md:text-2xl">
                SugarCare Technologies Ltd.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📍</span>
                  <span>London, United Kingdom</span>
                </p>
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📧</span>{" "}
                  <span>
                    <a
                      href="mailto:support@sugarcare.cloud"
                      className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold"
                    >
                      support@sugarcare.cloud
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Purpose of the Service
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                SugarCare is designed to assist users in tracking, monitoring,
                and managing blood glucose levels through data insights,
                artificial intelligence (AI), and machine learning (ML).
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The app provides educational information and recommendations to
                help users manage their health more effectively.
              </p>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 md:p-8 rounded-r-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-900 font-extrabold mb-4 text-xl md:text-2xl flex items-center gap-2">
                  <span className="text-3xl">⚠️</span> Important:
                </p>
                <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed font-semibold">
                  SugarCare does not provide medical advice, diagnosis, or
                  treatment.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Always consult a qualified healthcare professional before
                  making health decisions or changing medication or diet.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              4. Eligibility
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              To use SugarCare, you must:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>
                Be at least 18 years old, or have parental/guardian consent if
                younger.
              </li>
              <li>
                Provide accurate and complete information during registration.
              </li>
              <li>
                Agree to comply with all applicable UK laws and these Terms.
              </li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              5. Account Registration and Security
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              You must create an account using a valid email address and secure
              password.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              login details.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              You agree to notify us immediately of any unauthorized access or
              suspected security breach.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              We are not liable for any loss resulting from unauthorized use of
              your account.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              6. Acceptable Use
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>
                Use the App for unlawful, fraudulent, or harmful purposes.
              </li>
              <li>
                Attempt to reverse-engineer, hack, or disrupt the Apps
                functionality.
              </li>
              <li>Upload malicious code or content.</li>
              <li>
                Misuse AI/ML-generated insights for medical self-diagnosis.
              </li>
              <li>Share or distribute other users data.</li>
            </ul>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              Violation of these rules may result in account suspension or
              termination.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              7. Health Disclaimer
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              SugarCare provides AI-generated insights, predictions, and
              recommendations based on your inputs and historical data.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              However:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>The App is not a substitute for medical advice.</li>
              <li>
                Information is provided for educational and self-management
                support only.
              </li>
              <li>
                Predictions or suggestions may not always be accurate due to
                variations in individual health and data quality.
              </li>
              <li>
                Always consult your doctor or certified health professional
                before relying on SugarCares recommendations.
              </li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              8. AI and Machine Learning Features
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              SugarCare uses AI and ML models to deliver personalized
              experiences, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>Predictive blood sugar alerts</li>
              <li>Meal recommendations and fasting insights</li>
              <li>Food image recognition</li>
              <li>Community and lifestyle insights</li>
            </ul>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              AI features are continuously improved through anonymized data.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              By using the app, you consent to the responsible use of AI/ML as
              described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              9. Subscription and Payment (If Applicable)
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              Some features of SugarCare may be available through paid
              subscriptions or premium plans.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>Prices will be clearly displayed before purchase.</li>
              <li>
                Payments are processed through secure third-party providers
                (e.g., App Store, Google Play, Stripe).
              </li>
              <li>
                Subscriptions automatically renew unless canceled at least 24
                hours before renewal.
              </li>
              <li>
                Refunds follow the policies of the respective platform (App
                Store / Google Play).
              </li>
              <li>
                We reserve the right to modify or discontinue pricing, features,
                or subscription plans.
              </li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              10. Data Protection and Privacy
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              Your privacy is extremely important to us.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              All data collected through SugarCare is processed in accordance
              with the UK GDPR and Data Protection Act 2018.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              Please review our full{" "}
              <a href="/privacy" className="text-[#4252FF] hover:underline">
                Privacy Policy
              </a>{" "}
              to understand how we handle your data.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              11. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              All content, design, trademarks, and technology within SugarCare —
              including but not limited to software, AI models, and logos — are
              the intellectual property of SugarCare Technologies Ltd.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              You may not reproduce, distribute, or create derivative works
              without prior written permission.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              12. Third-Party Services
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              SugarCare may integrate with third-party tools such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>Wearable devices or continuous glucose monitors (CGMs)</li>
              <li>Cloud or AI service providers</li>
              <li>Analytics and communication tools</li>
            </ul>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              We are not responsible for the practices or reliability of
              third-party services.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              Their own terms and privacy policies apply when you use them.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              13. Limitation of Liability
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>
                SugarCare Technologies Ltd. is not liable for any indirect,
                incidental, or consequential damages arising from your use of
                the App.
              </li>
              <li>
                We do not guarantee medical accuracy or uninterrupted access.
              </li>
              <li>You use SugarCare at your own risk and responsibility.</li>
              <li>
                Our total liability, if any, shall not exceed the total amount
                paid by you for using the App in the 12 months preceding the
                claim.
              </li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              14. Termination of Use
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>
                Suspend or terminate your account if you violate these Terms.
              </li>
              <li>
                Restrict access to certain features for misuse or security
                reasons.
              </li>
              <li>
                Delete inactive accounts after prolonged inactivity (with prior
                notice).
              </li>
            </ul>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              You may terminate your account at any time through the app or by
              contacting{" "}
              <a
                href="mailto:support@sugarcare.cloud"
                className="text-[#4252FF] hover:underline"
              >
                support@sugarcare.cloud
              </a>
              .
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              15. Updates and Modifications
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              We may update these Terms periodically to reflect new features or
              regulatory changes.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              The updated version will be posted within the app and on our
              website, with the revised date shown at the top.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              Continued use after updates constitutes your acceptance of the
              revised Terms.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              16. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of England and Wales.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
              Any disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">17</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Contact Us
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              For any questions or concerns about these Terms, please contact:
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-900 font-extrabold mb-4 text-xl md:text-2xl">
                SugarCare Technologies Ltd.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📧</span>{" "}
                  <span>
                    <a
                      href="mailto:support@sugarcare.cloud"
                      className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold"
                    >
                      support@sugarcare.cloud
                    </a>
                  </span>
                </p>
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📍</span>
                  <span>London, United Kingdom</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

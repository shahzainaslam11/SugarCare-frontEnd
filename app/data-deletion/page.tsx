import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Policy - SugarCare",
  description: "Learn how to request account and data deletion from SugarCare. We respect your privacy and right to be forgotten.",
};

export default function DataDeletionPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16 pb-12 border-b-2 border-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-50 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-indigo-100 rounded-full border border-indigo-200">
              <span className="text-indigo-600 font-bold text-sm md:text-base tracking-wide">
                User Rights
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
              Data Deletion Policy
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                for SugarCare
              </span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg font-medium">
              Your Right to Delete Your Data
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
                Account Deletion
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                At SugarCare, we respect your privacy and your right to control your personal data. You can request to delete your account and all associated data at any time, for any reason.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Once you submit a deletion request, we will permanently remove your account and personal information from our systems in accordance with this policy and applicable data protection laws.
              </p>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                How to Request Deletion
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                You have two convenient ways to request account and data deletion:
              </p>
              
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Option 1: In-App Deletion
                </h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4 text-base md:text-lg">
                  <li>Open the SugarCare app</li>
                  <li>Go to <span className="font-semibold text-gray-900">Settings</span></li>
                  <li>Scroll down and tap <span className="font-semibold text-gray-900">Delete Account</span></li>
                  <li>Confirm your decision when prompted</li>
                </ol>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📧</span> Option 2: Email Request
                </h3>
                <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
                  Send an email to our support team with your deletion request:
                </p>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-gray-700 text-base md:text-lg">
                    <span className="font-semibold text-gray-900">Email:</span>{" "}
                    <a
                      href="mailto:info@helixaai.com"
                      className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold"
                    >
                      info@helixaai.com
                    </a>
                  </p>
                  <p className="text-gray-700 text-base md:text-lg mt-2">
                    <span className="font-semibold text-gray-900">Subject:</span> Account Deletion Request
                  </p>
                </div>
                <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                  Please include your registered email address and any additional information that can help us verify your identity.
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
                Data Removed
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                When you request account deletion, the following personal data will be permanently removed from our systems:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-gray-700 text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">🗑️</span>
                    <span className="font-semibold">Name</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-gray-700 text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">🗑️</span>
                    <span className="font-semibold">Email address</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-gray-700 text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">🗑️</span>
                    <span className="font-semibold">Phone number</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-gray-700 text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">🗑️</span>
                    <span className="font-semibold">Health data</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-gray-700 text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">🗑️</span>
                    <span className="font-semibold">App activity data</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-gray-700 text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">🗑️</span>
                    <span className="font-semibold">All user-generated content</span>
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Note:</span> Some anonymized, aggregated data may be retained for analytics and research purposes, but this data cannot be used to identify you personally.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Time Frame
              </h2>
            </div>
            <div className="space-y-5">
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 shadow-md">
                <p className="text-gray-900 text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">⏱️</span> Deletion Timeline
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Your personal data will be <span className="font-semibold text-gray-900">permanently deleted within 7 to 30 days</span> after we receive and verify your deletion request.
                </p>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                During this period, we will:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-base md:text-lg">
                <li>Verify your identity to ensure account security</li>
                <li>Process the deletion request across all our systems</li>
                <li>Remove your data from active databases and backups</li>
                <li>Send you a confirmation email once deletion is complete</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Important:</span> Once your data is deleted, it cannot be recovered. Please ensure you have backed up any information you wish to keep before requesting deletion.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-12 p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Contact
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              If you have any questions about our data deletion policy or need assistance with your deletion request, please contact us:
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-900 font-extrabold mb-4 text-xl md:text-2xl">
                SugarCare Technologies Ltd.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">📧</span>
                  <span>
                    <a
                      href="mailto:info@helixaai.com"
                      className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold"
                    >
                      info@helixaai.com
                    </a>
                  </span>
                </p>
                <p className="text-gray-700 text-base md:text-lg flex items-start">
                  <span className="mr-3 text-2xl">🌐</span>
                  <span>
                    <a
                      href="https://sugarcare.cloud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold"
                    >
                      https://sugarcare.cloud
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

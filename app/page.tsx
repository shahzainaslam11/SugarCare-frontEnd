import {
  ChartIcon,
  PillIcon,
  AnalyticsIcon,
  CheckIcon,
} from "./components/icons";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="relative overflow-hidden pt-20 md:pt-32 lg:pt-40 pb-24 md:pb-36 lg:pb-48">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-80"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400 opacity-5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 opacity-5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300 opacity-3 rounded-full blur-[120px]"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/80 backdrop-blur-md rounded-full border border-indigo-200/50 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-indigo-600 font-semibold text-sm md:text-base tracking-wide">
              ✨ AI-Powered Diabetes Management
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 md:mb-10 leading-[1.1] tracking-tight">
            Take Control of Your
            <span className="block mt-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Diabetes Journey
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Your trusted companion for managing diabetes. Track your blood sugar
            levels, medications, and health data all in one convenient place
            with <span className="text-indigo-600 font-semibold">AI-powered insights</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
            <button className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:scale-105 transition-all duration-300 transform overflow-hidden">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative border-2 border-indigo-600 text-indigo-600 px-12 py-5 rounded-full font-bold text-lg md:text-xl bg-white hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-20 md:mt-24 max-w-3xl mx-auto border-t border-gray-200/50 pt-10">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-semibold">
                Active Users
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99%
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-semibold">
                Prediction Accuracy
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-semibold">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <div className="text-center mb-20 md:mb-24 px-4">
            <span className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold uppercase text-indigo-600 tracking-wider">
              Core Features
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 mt-4">
              Powerful Tools for Daily Control
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to manage your diabetes effectively, designed
              for simplicity and accuracy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 sm:px-6 lg:px-8">
            <div className="group relative bg-white p-10 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/50 group-hover:to-blue-50/50 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110">
                  <ChartIcon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Blood Sugar Tracking
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Easily log and monitor your blood sugar levels throughout the day
                  with intelligent reminders and pattern recognition.
                </p>
              </div>
            </div>
            <div className="group relative bg-white p-10 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/50 group-hover:to-blue-50/50 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110">
                  <PillIcon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Smart Medication
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Never miss a dose with timely medication reminders and smart
                  scheduling that adapts to your daily routine.
                </p>
              </div>
            </div>
            <div className="group relative bg-white p-10 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/50 group-hover:to-blue-50/50 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110">
                  <AnalyticsIcon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Personalized Insights
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Get valuable insights into your health trends and patterns with
                  AI-powered analytics and personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 md:mb-24">
            <span className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold uppercase text-indigo-600 tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 mt-4">
              Why SugarCare is Your Best Choice
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by patients and recommended by healthcare professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            <div className="space-y-10">
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    AI-Powered Predictions
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Get personalized insights and predictive warnings about your
                    blood sugar levels using advanced machine learning.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Secure & HIPAA Compliant
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Your health data is encrypted and stored securely. We adhere
                    to top global standards to prioritize your privacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Multi-Device Ecosystem
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Access your data from any device. Your information syncs
                    seamlessly across mobile and web platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2"></div>
            <div className="space-y-10 md:col-start-2">
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Intuitive Data Entry
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Quick and intuitive interface for logging your health data.
                    Takes just seconds to record your readings accurately.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Shareable Reports
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Generate detailed, clean reports and share them with your
                    healthcare provider for better care coordination.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Get help when you need it with our expert support team
                    available 24/7 to assist you on your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 lg:p-20 text-center text-white shadow-2xl shadow-indigo-600/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-tight">
                Ready to Take Control Today?
              </h2>
              <p className="text-xl md:text-2xl mb-12 md:mb-14 max-w-3xl mx-auto opacity-95 leading-relaxed">
                Join thousands of users who are already managing their diabetes more
                effectively with <span className="font-bold">SugarCare's AI-powered platform</span>.
              </p>
              <button className="group relative bg-white text-indigo-600 px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10">Start Your Free Trial Now</span>
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold uppercase text-indigo-600 tracking-wider">
            Our Story
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 mt-4">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            SugarCare is designed to make diabetes management <span className="text-indigo-600 font-semibold">simple, effective, and predictive</span>. Our mission is to empower individuals
            to take control of their health through easy-to-use tools and
            comprehensive, clinically-relevant tracking capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}

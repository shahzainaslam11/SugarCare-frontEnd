export const metadata = {
  title: "Medical Citations | SugarCare",
  description: "Authoritative medical sources and references for diabetes information used in SugarCare.",
};

export default function MedicalCitations() {
  const citations = [
    {
      category: "Blood Glucose & Monitoring",
      sources: [
        { name: "American Diabetes Association - Understanding A1C", url: "https://diabetes.org/about-diabetes/diagnosis/a1c", description: "Blood glucose targets and A1C interpretation" },
        { name: "NICE Guidelines - Type 1 Diabetes", url: "https://www.nice.org.uk/guidance/ng17", description: "UK clinical guidelines for diabetes management" },
        { name: "NICE Guidelines - Type 2 Diabetes", url: "https://www.nice.org.uk/guidance/ng28", description: "UK clinical guidelines for type 2 diabetes" },
        { name: "NIH - Blood Glucose Monitoring", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes", description: "Managing diabetes and monitoring blood sugar" },
      ],
    },
    {
      category: "Nutrition & Diet",
      sources: [
        { name: "American Diabetes Association - Food & Nutrition", url: "https://diabetes.org/food-nutrition", description: "Dietary guidelines for people with diabetes" },
        { name: "Diabetes UK - Food and Diabetes", url: "https://www.diabetes.org.uk/guide-to-diabetes/enjoy-food/eating-with-diabetes", description: "Evidence-based nutrition advice" },
        { name: "CDC - Diabetes and Nutrition", url: "https://www.cdc.gov/diabetes/managing/eat-well.html", description: "Healthy eating for diabetes management" },
        { name: "Mayo Clinic - Diabetes Diet", url: "https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-diet/art-20044295", description: "Meal planning and carbohydrate counting" },
      ],
    },
    {
      category: "Medication & Treatment",
      sources: [
        { name: "NHS - Diabetes Medicines", url: "https://www.nhs.uk/conditions/type-2-diabetes/medicines/", description: "Medication options for type 2 diabetes" },
        { name: "NIH - Diabetes Medicines", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes", description: "Diabetes overview and treatment information" },
        { name: "FDA - Diabetes Drug Information", url: "https://www.fda.gov/drugs/drug-safety-and-availability", description: "Drug safety and approved medications" },
      ],
    },
    {
      category: "Physical Activity & Exercise",
      sources: [
        { name: "American Diabetes Association - Fitness", url: "https://diabetes.org/health-wellness/fitness", description: "Exercise recommendations for diabetes" },
        { name: "NHS - Exercise and Diabetes", url: "https://www.nhs.uk/conditions/type-2-diabetes/food-and-keeping-active/", description: "Physical activity guidelines" },
        { name: "WHO - Physical Activity", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity", description: "Global physical activity guidelines" },
      ],
    },
    {
      category: "Complications & Risk Factors",
      sources: [
        { name: "ADA - Diabetes Complications", url: "https://diabetes.org/about-diabetes/complications", description: "Understanding diabetes complications" },
        { name: "NIH - Diabetic Neuropathy", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies", description: "Nerve damage and prevention" },
        { name: "NIH - Diabetic Retinopathy", url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/diabetic-retinopathy", description: "Eye complications from diabetes" },
        { name: "British Heart Foundation - Diabetes and Heart", url: "https://www.bhf.org.uk/informationsupport/risk-factors/diabetes", description: "Cardiovascular risk in diabetes" },
      ],
    },
    {
      category: "General Diabetes Information",
      sources: [
        { name: "World Health Organization - Diabetes", url: "https://www.who.int/news-room/fact-sheets/detail/diabetes", description: "Global diabetes facts and statistics" },
        { name: "International Diabetes Federation", url: "https://idf.org/about-diabetes/", description: "International diabetes resources" },
        { name: "JAMA - Diabetes", url: "https://jamanetwork.com/collections/44068/diabetes", description: "Peer-reviewed medical research" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafbfc] via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-12 md:mb-16 pb-12 border-b border-slate-200/60 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-50 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full glass-card border border-indigo-200/60">
              <span className="text-indigo-600 font-bold text-sm md:text-base tracking-wide">Medical References</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 md:mb-8 leading-tight">
              Medical Citations & Sources
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                for SugarCare
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              All health information, recommendations, and calculations in SugarCare are informed by these authoritative medical sources. We encourage you to verify information with your healthcare provider.
            </p>
          </div>
        </div>

        <div className="space-y-10 md:space-y-12">
          {citations.map((section, idx) => (
            <section key={idx} className="p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">{idx + 1}</span>
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.sources.map((source, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded-xl bg-gray-50/50 hover:bg-indigo-50/30 transition-colors duration-200 border border-gray-100">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 font-semibold text-base md:text-lg hover:underline flex-shrink-0"
                    >
                      {source.name}
                    </a>
                    <span className="text-gray-600 text-sm md:text-base sm:before:content-['–'] sm:before:mr-2">
                      {source.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-amber-50 border-2 border-amber-200 rounded-2xl">
          <p className="text-amber-900 font-bold text-lg md:text-xl mb-2">Important Disclaimer</p>
          <p className="text-amber-800 text-base md:text-lg leading-relaxed">
            SugarCare does not provide medical advice, diagnosis, or treatment. The information and recommendations in our app are for educational and self-management support only. Always consult a qualified healthcare professional before making health decisions or changing your medication or diet. The cited sources are provided for your reference; we are not affiliated with these organizations.
          </p>
        </div>
      </div>
    </div>
  );
}

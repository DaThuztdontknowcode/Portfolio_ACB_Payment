import { Link } from "react-router-dom";
export default function ACBInternationalPaymentPortfolio() {
  const businessAnalysis = [
    "Owned the most complex business domain of the project — International Payment operations — covering a business workflow consisting of 40+ activities, 4 BPMN pools, and 10+ sub-flows, approximately twice the complexity of standard banking modules.",
    "Led end-to-end business analysis from BRD to SRS/FRD for the entire Payment domain.",
    "Designed and documented 14 major functions/screens and 22 sub-functions.",
    "Documented hundreds of UI components, validations, accounting actions, and exception-handling scenarios.",
    "Designed near fully-complete BPMN flows with both positive and negative paths fully traceable to final outcomes, eliminating dead-end processing scenarios during execution.",
    "Built operational support functions and sub-tools that significantly reduced manual processing effort on Core Banking systems while improving transaction accuracy and reducing operational risks.",
    "Facilitated workshops and requirement clarification sessions with Business Users, Core Banking teams, QA, and Developers to align business intent with technical implementation."
  ];

  const businessRules = [
    "Proposed, analyzed, and documented 60+ critical business rules related to transaction validation, account integrity, accounting control, and payment processing accuracy, extending far beyond the legacy system’s basic required-field validations.",
    "Reviewed and re-analyzed complex accounting specifications provided by the bank including GL mapping logic, re-accounting/reversal scenarios, accounting data retention for reporting/statistics, LCN accounting processing flows, and more than 16 GL account determination methods.",
    "Collaborated closely with Core Banking teams to refine accounting processes and ensure compliance with banking operational principles and double-entry accounting standards.",
    "Identified critical data integrity gaps in original specifications involving missing active_status and delflag conditions, preventing invalid account synchronization with Core Banking systems and reducing accounting failure scenarios during UAT and production processing.",
    "Enhanced Nostro account registration specifications by proposing detailed SQL-based retrieval logic covering 18+ business cases across multiple DTB tables, ensuring accurate account selection for different transaction scenarios.",
    "Contributed to ERD review activities and validated data relationships to improve consistency between Payment Hub and Core Banking integrations.",
    "Gathered requirements, analyzed, and documented 37 integration APIs connecting internal banking systems and Payment Hub services.",
    "Reviewed and validated 50+ internal APIs, including entity structures, field-level mappings, validation logic, error-handling scenarios, and integration constraints.",
    "Ensured API specifications accurately reflected business and accounting requirements, helping prevent redundant data structures, integration conflicts, and risk-control issues during development and compliance reviews.",
    "Worked closely with Solution Architects and technical teams to bridge business flows with technical implementation details across distributed banking systems."
  ];

  const testingDelivery = [
    "Authored and maintained 1,000+ business test cases out of a total 2,156 test cases for the Payment domain — the largest and most complex module in the project.",
    "Provided detailed business clarification and defect analysis throughout SIT/UAT cycles, enabling QA and Development teams to deeply understand transaction intent, accounting behavior, and processing logic.",
    "Reduced UAT failure rate to 3% despite an initial internal testing failure rate of 26%, achieving one of the highest stabilization outcomes among all project modules.",
    "Managed and analyzed 57 change requests (CRs) using priority-based impact assessment.",
    "Consolidated critical CRs into 10 high-priority implementation items.",
    "Deferred lower-priority UI enhancements into future releases.",
    "Minimized project timeline impact while maintaining delivery quality.",
    "Participated in a 1-month project war room, resolving 60+ critical issues through requirement re-analysis, business/technical debate sessions, and cross-team solution optimization with Business Units and technical stakeholders.",
    "Successfully improved SRS/FRD completeness to production-ready quality for final delivery and bank governance review.",
    "Prepared go-live checklist, cutover plan, and post-launch operational support documentation; provided on-site hypercare support during production deployment."
  ];

  const stats = [
    { value: "1,000+", label: "Business Test Cases" },
    { value: "60+", label: "Critical Business Rules" },
    { value: "57", label: "Change Requests" },
    { value: "37", label: "Integration APIs" },
    { value: "50+", label: "Internal APIs Reviewed" },
    { value: "3%", label: "Final UAT Failure Rate" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-2xl transition mb-4"
        >
          ← Back Home
        </Link>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-400 mb-3">
                Key Project Experience
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                ACB — International Payment System
              </h1>
              <p className="text-slate-300 mt-3 text-lg">
                Business Analyst / Tester • FPT Information System (FPT IS)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Timeline</p>
                <p className="font-semibold mt-1">Aug 2024 – Apr 2026</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Methodology</p>
                <p className="font-semibold mt-1">Agile / Scrum</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Team Size</p>
                <p className="font-semibold mt-1">~50 Members</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Platform</p>
                <p className="font-semibold mt-1">
                  Core Banking + Payment Hub
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center"
            >
              <div className="text-3xl font-bold text-sky-400">
                {item.value}
              </div>
              <div className="text-sm text-slate-400 mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-5 text-sky-400">
            Project Context & Objectives
          </h2>

          <p className="text-slate-300 leading-8 text-lg">
            Implemented a centralised international payment system for Asia
            Commercial Bank (ACB) covering Letter of Credit (LC) processing,
            fee management, and domestic/cross-border payment transactions.
            The project aimed to modernise ACB's payment infrastructure by
            integrating Core Banking with a new Payment Hub platform,
            replacing legacy manual workflows with automated, rules-based
            processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-sky-400">
              Business Analysis & Requirements
            </h2>

            <div className="space-y-4">
              {businessAnalysis.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-slate-800/50 rounded-2xl p-4"
                >
                  <div className="w-3 h-3 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-sky-400">
              Business Rules, Accounting Logic & Integration
            </h2>

            <div className="space-y-4 max-h-[1000px] overflow-auto pr-2">
              {businessRules.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-slate-800/50 rounded-2xl p-4"
                >
                  <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-sky-400">
            Testing & Delivery
          </h2>

          <div className="grid lg:grid-cols-2 gap-4">
            {testingDelivery.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-slate-800/50 rounded-2xl p-4"
              >
                <div className="w-3 h-3 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <p className="text-slate-300 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl p-8 text-slate-950">
          <h2 className="text-3xl font-bold mb-4">
            Core Contributions & Impact
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white/80 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                International Payment Domain Owner
              </h3>
              <p className="text-sm leading-6">
                Led the project’s most complex banking domain from business
                analysis to production delivery.
              </p>
            </div>

            <div className="bg-white/80 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                Core Banking Integration
              </h3>
              <p className="text-sm leading-6">
                Bridged business logic, accounting rules, APIs, and distributed
                banking system integrations.
              </p>
            </div>

            <div className="bg-white/80 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                Process Optimisation
              </h3>
              <p className="text-sm leading-6">
                Improved transaction accuracy, operational efficiency, and
                accounting validation quality.
              </p>
            </div>

            <div className="bg-white/80 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                UAT Stabilisation
              </h3>
              <p className="text-sm leading-6">
                Reduced UAT failure rate from 26% internal testing issues to
                only 3% during final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

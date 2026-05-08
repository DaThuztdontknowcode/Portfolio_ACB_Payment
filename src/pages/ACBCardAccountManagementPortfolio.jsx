import { Link } from "react-router-dom";
export default function ACBCardAccountManagementPortfolio() {

  const stats = [
    { value: "25+", label: "Card Transaction Scenarios" },
    { value: "30+", label: "Requirement Workshops" },
    { value: "80+", label: "Functional Documents" },
    { value: "20+", label: "Integration APIs" },
    { value: "400+", label: "SIT/UAT Test Cases" },
    { value: "8+", label: "Integrated Systems" }
  ];

  const achievements = [
    "Analysed and documented 25+ card transaction scenarios including issuance, activation, blocking, limit management, dispute handling, and account maintenance workflows.",
    "Facilitated and documented 30+ requirement workshops with Business Users, Card Centre stakeholders, QA teams, and technical leads across 8+ integrated system components.",
    "Produced 80+ functional documents: Use Cases, User Stories, business rules, acceptance criteria, workflow diagrams, and process specifications for branch teller, ATM, mobile banking, and third-party integration scenarios.",
    "Analysed and validated 20+ integration APIs/interfaces connecting Card Management System, Core Banking, ATM/POS channels, and Visa/Mastercard settlement services.",
    "Defined validation rules, role-based access control, audit logging, and data integrity constraints to improve transaction traceability and compliance.",
    "Prepared and maintained 400+ SIT/UAT test cases covering functional, integration, negative, and end-to-end card management scenarios.",
    "Supported parallel-run validation and production deployment; participated in hypercare to resolve post-production issues."
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white p-8">
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
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-3">
                Key Project Experience
              </p>

              <h1 className="text-4xl font-bold leading-tight">
                ACB — Card & Account Information Management System
              </h1>

              <p className="text-slate-300 mt-3 text-lg">
                Business Analyst / Tester • FPT IS
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Timeline</p>
                <p className="font-semibold mt-1">
                  Aug 2024 – Apr 2026
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Methodology</p>
                <p className="font-semibold mt-1">
                  Agile / Scrum
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Team Size</p>
                <p className="font-semibold mt-1">
                  ~50 Members
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">Platform</p>
                <p className="font-semibold mt-1 text-sm">
                  Card Management + Multichannel
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

              <div className="text-3xl font-bold text-cyan-400">
                {item.value}
              </div>

              <div className="text-sm text-slate-400 mt-2">
                {item.label}
              </div>

            </div>

          ))}

        </div>

        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Business Analysis, Integration & Delivery
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {achievements.map((item, index) => (

              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5"
              >

                <div className="w-3 h-3 rounded-full bg-cyan-400 mb-4" />

                <p className="text-slate-300 leading-7 text-sm">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>

      </div>
    </section>
  );
}
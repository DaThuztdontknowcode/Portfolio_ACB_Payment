import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ACBInternationalPaymentPortfolio from "./pages/ACBInternationalPaymentPortfolio";
import ACBCardAccountManagementPortfolio from "./pages/ACBCardAccountManagementPortfolio";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-8">

      <h1 className="text-5xl font-bold">
        ThucLDD Banking Portfolio
      </h1>

      <div className="flex gap-6">

        <Link
          to="/international-payment"
          className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-2xl text-lg font-semibold transition"
        >
          International Payment System
        </Link>

        <Link
          to="/card-management"
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl text-lg font-semibold transition"
        >
          Card Management System
        </Link>

      </div>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/international-payment"
          element={<ACBInternationalPaymentPortfolio />}
        />

        <Route
          path="/card-management"
          element={<ACBCardAccountManagementPortfolio />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Credit from "./pages/credit/Credit";
import Pro from "./pages/pro/Pro";
import GlobalNavigationBar from "./components/organisms/GlobalNavigationBar";
import PaymentHistory from "./pages/PaymentHistory";
import ProRefundPolicy from "./pages/pro/ProRefundPolicy";
import CreditRefundPolicy from "./pages/credit/CreditRefundPolicy";
import Footer from "./components/organisms/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <GlobalNavigationBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/pro" element={<Pro />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
            <Route path="/pro/refund-policy" element={<ProRefundPolicy />} />
            <Route
              path="/credit/refund-policy"
              element={<CreditRefundPolicy />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

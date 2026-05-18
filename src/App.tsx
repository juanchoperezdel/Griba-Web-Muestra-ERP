import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainStrip from "./components/PainStrip";
import TrustStrip from "./components/TrustStrip";
import FlowStepper from "./components/FlowStepper";
import GribaOrdena from "./components/GribaOrdena";
import Comparison from "./components/Comparison";
import ROICalculator from "./components/ROICalculator";
import Implementacion from "./components/Implementacion";
import Team from "./components/Team";
import Faqs from "./components/Faqs";
import CalendarSection from "./components/CalendarSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

function Landing() {
  return (
    <div className="min-h-screen bg-bg font-sans text-fg selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PainStrip />
        <TrustStrip />
        <FlowStepper />
        <GribaOrdena />
        <Comparison />
        <ROICalculator />
        <CalendarSection />
        <Implementacion />
        <Team />
        <Faqs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  // Simple path-based routing — sin dependencias externas.
  // Netlify SPA fallback (`/* → /index.html`) entrega esta SPA en cualquier ruta,
  // y acá decidimos qué renderizar según el pathname.
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  if (pathname === "/gracias" || pathname === "/gracias/") {
    return <ThankYou />;
  }

  return <Landing />;
}

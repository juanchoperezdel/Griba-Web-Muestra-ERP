import Navbar from "./components/v2/Navbar";
import Hero from "./components/v2/Hero";
import PainStrip from "./components/v2/PainStrip";
import Comparison from "./components/v2/Comparison";
import ROICalculator from "./components/v2/ROICalculator";
import FlowStepper from "./components/v2/FlowStepper";
import Team from "./components/v2/Team";
import CalendarSection from "./components/v2/CalendarSection";
import Faqs from "./components/v2/Faqs";
import FinalCTA from "./components/v2/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// v2 — narrativa Smartway (general, visceral, eje "se adapta vs enlatado")
// sobre la estética visual de Griba. Sirve en la ruta /v2; la v1 queda intacta.
export default function LandingV2() {
  return (
    <div className="min-h-screen bg-bg font-sans text-fg selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PainStrip />
        <Comparison />
        <ROICalculator />
        <FlowStepper />
        <Team />
        <CalendarSection />
        <Faqs />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

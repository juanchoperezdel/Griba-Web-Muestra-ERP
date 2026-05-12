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

export default function App() {
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

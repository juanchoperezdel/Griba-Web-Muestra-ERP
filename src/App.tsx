/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Comparison from './components/Comparison';
import ROICalculator from './components/ROICalculator';
import CalendarSection from './components/CalendarSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <Logos />
      <Problems />
      <Solutions />
      <Comparison />
      <ROICalculator />
      <CalendarSection />
      <Footer />
    </div>
  );
}

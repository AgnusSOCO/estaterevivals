import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialties from './components/Specialties';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import ProcessSimulation from './components/ProcessSimulation';
import PropertyInterest from './components/PropertyInterest';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle, X } from 'lucide-react';

function App() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialties />
        <AboutUs />
        <HowItWorks />
        <ProcessSimulation />
        <PropertyInterest />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {isWidgetOpen ? (
        <>
          <button
            onClick={() => setIsWidgetOpen(false)}
            className="fixed right-[420px] bottom-[510px] z-[1000] bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <iframe 
            id="audio_iframe" 
            src="https://widget.synthflow.ai/widget/v2/450ef0c9-eae4-4479-8139-17420180b7a1/1748208839390x138830193793144660"
            allow="microphone"
            width="400"
            height="550"
            style={{
              position: 'fixed',
              right: '20px',
              bottom: '20px',
              background: 'transparent',
              border: 'none',
              zIndex: 999,
              pointerEvents: 'auto'
            }}
          />
        </>
      ) : (
        <button
          onClick={() => setIsWidgetOpen(true)}
          className="fixed right-6 bottom-6 z-[1000] bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
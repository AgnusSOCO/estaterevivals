import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-blue-900/50"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left Column - Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="w-full lg:w-1/2 text-center lg:text-left mt-8 sm:mt-12 lg:mt-0"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 backdrop-blur-sm mb-6 border border-blue-400/20"
              >
                <span className="text-sm font-medium">Las Vegas' Premier Real Estate Solutions</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="block text-white">
                  Transform Your
                </span>
                <span className="block text-blue-400 mt-2">
                  Property Dreams
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Get a guaranteed cash offer within 24 hours. No repairs, no fees, just a seamless selling experience.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="group relative overflow-hidden bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Your Cash Offer
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                
                <button className="group relative overflow-hidden bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Feature Cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { delayChildren: 0.4, staggerChildren: 0.1 } }
              }}
              className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { title: 'Fast Cash Offers', value: '24h', desc: 'Response Time' },
                { title: 'Quick Closing', value: '7d', desc: 'Average Time' },
                { title: 'Properties Bought', value: '500+', desc: 'And Counting' },
                { title: 'Client Satisfaction', value: '100%', desc: 'Guaranteed' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-1">{feature.value}</div>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}

export default Hero;
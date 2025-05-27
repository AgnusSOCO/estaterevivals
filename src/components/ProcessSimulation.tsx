import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Home,
  Phone,
  ClipboardCheck,
  DollarSign,
  CalendarCheck,
  Key,
  ArrowRight
} from 'lucide-react';

const ProcessSimulation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      icon: <Phone className="w-12 h-12" />,
      title: "Initial Contact",
      description: "Contact us about your property - we'll respond within 24 hours",
      animation: "call"
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Property Assessment",
      description: "We evaluate your property and situation to provide the best solution",
      animation: "assess"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Cash Offer",
      description: "Receive a fair, no-obligation cash offer for your property",
      animation: "offer"
    },
    {
      icon: <CalendarCheck className="w-12 h-12" />,
      title: "Schedule Closing",
      description: "Choose your closing date - as quick as 7 days",
      animation: "schedule"
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: "Close & Get Paid",
      description: "Close at a reputable title company and receive your cash",
      animation: "close"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && inView) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, steps.length]);

  const handleStepClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentStep(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes selling your home quick and hassle-free. Here's how we transform your property challenges into solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Process Timeline */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
            
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  className={`relative flex flex-col items-center ${
                    index <= currentStep ? 'cursor-pointer' : 'cursor-not-allowed'
                  }`}
                  onClick={() => index <= currentStep && handleStepClick(index)}
                  whileHover={index <= currentStep ? { scale: 1.1 } : {}}
                  whileTap={index <= currentStep ? { scale: 0.95 } : {}}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index <= currentStep 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Current Step Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {steps[currentStep].icon}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {steps[currentStep].title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {steps[currentStep].description}
                  </p>
                </div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isAutoPlaying
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? 'Pause Animation' : 'Start Animation'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSimulation;
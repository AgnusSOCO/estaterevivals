import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Home, DollarSign, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: "Contact Us",
      description: "Reach out via phone, email, or our contact form for a free consultation."
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Property Visit",
      description: "We'll schedule a visit to assess your property and discuss your needs."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Get Your Offer",
      description: "Receive a fair, no-obligation cash offer within 24 hours."
    },
    {
      icon: <Handshake className="w-12 h-12 text-blue-600" />,
      title: "Close the Deal",
      description: "Close at a reputable title company and get your cash in as little as 7 days."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes selling your home quick and hassle-free. Here's how we work with you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Clock, Wrench, DollarSign } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Fast Home Purchase",
      description: "We buy houses directly, offering quick closings and cash payments for a hassle-free experience."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Quick Closing",
      description: "Close on your timeline - as fast as 7 days or on your schedule. No waiting for bank approvals."
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "No Repairs Needed",
      description: "Sell your home as-is. We handle all repairs, cleaning, and updates after the purchase."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "No Extra Fees",
      description: "No real estate commissions, no fees, and no closing costs. Get a fair cash offer for your home."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We provide professional and reliable solutions for homeowners looking to sell their properties quickly and efficiently.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
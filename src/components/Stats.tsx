import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Clock, DollarSign, Star } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      value: "500+",
      label: "Properties Purchased",
      description: "Successfully acquired and renovated",
      prefix: "",
      suffix: "+"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      value: "7",
      label: "Days Average",
      description: "From offer to closing",
      prefix: "",
      suffix: ""
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      value: "50",
      label: "In Transactions",
      description: "Total value of properties purchased",
      prefix: "$",
      suffix: "M+"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      value: "100",
      label: "Satisfaction",
      description: "From our valued clients",
      prefix: "",
      suffix: "%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_50px_rgba(37,99,235,0.2)] transition-all duration-500">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                
                <div className="relative">
                  <motion.div
                    variants={numberVariants}
                    className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2 flex justify-center items-center"
                  >
                    <span className="text-3xl mr-1">{stat.prefix}</span>
                    {stat.value}
                    <span className="text-3xl ml-1">{stat.suffix}</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Stats;
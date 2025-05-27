import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Professional Excellence",
      description: "We maintain the highest standards of professionalism in every transaction."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Client-Focused",
      description: "Your needs and goals are our top priority throughout the entire process."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Results-Driven",
      description: "We're committed to achieving the best possible outcome for every client."
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Community Impact",
      description: "We're dedicated to improving Las Vegas neighborhoods one property at a time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Estate Revivals</h2>
          <p className="text-xl text-gray-600 mb-8">
            We are the Elite Real Estate Investing Team of Las Vegas, dedicated to providing innovative solutions for homeowners while revitalizing our communities.
          </p>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
              alt="Estate Revivals Team"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-xl"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to rejuvenate neighborhoods and increase the standard of living by improving the overall quality of housing for new owners. We're committed to helping homeowners avoid foreclosure while assisting them in restoring their credit and maintaining their dignity.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Ed S.",
      role: "Home Owner",
      quote: "Catherine, Thanks so much. You are an Angel. I couldn't have done this without you. Your professionalism and dedication made the entire process smooth and stress-free.",
      rating: 5
    },
    {
      name: "Douglas W.",
      role: "Home Owner",
      quote: "Thank you for all your help. You were always there when I needed you. It was like you could read my mind. I will recommend you to everyone I know. Thank you for being such a trusted partner.",
      rating: 5
    },
    {
      name: "Steve H.",
      role: "Home Owner",
      quote: "I chose Estate Revivals because they're female-owned, minority-owned, and showed genuine care. Catherine's honesty, intelligence, and compassion make her stand out in the industry.",
      rating: 5
    },
    {
      name: "Susan P.",
      role: "Home Owner",
      quote: "I am settling into my new home and I want to express my deepest appreciation to the entire team for their assistance in the sale of my previous residence.",
      rating: 5
    },
    {
      name: "Bob F.",
      role: "Home Owner",
      quote: "Catherine has been extremely patient with me while I made a decision to sell or not. She worked around my terms and allowed me to stay after closing. I am grateful she brought my house back to its former glory.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with Estate Revivals.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative p-8 md:p-12">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-100" />
              
              <motion.div
                key={`quote-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl text-gray-600 italic mb-8 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
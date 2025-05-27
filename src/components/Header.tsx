import React, { useState, useEffect } from 'react';
import { Home, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a 
            href="#"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className={`w-6 h-6 sm:w-8 sm:h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-lg sm:text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              Estate Revivals
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-blue-400 transition-colors relative text-sm sm:text-base`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="hidden lg:flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className={`w-5 h-5 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <a
              href="tel:+17029309420"
              className={`font-semibold text-sm sm:text-base ${isScrolled ? 'text-blue-600' : 'text-white'}`}
            >
              (702) 930-9420
            </a>
          </motion.div>

          <motion.button 
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-blue-900 to-gray-900 shadow-xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-xl font-bold text-white">Menu</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6">
                <div className="px-6 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      variants={itemVariants}
                      className="flex items-center w-full space-x-4 text-lg font-medium text-white/90 hover:text-blue-400 transition-colors"
                      whileHover={{ x: 8 }}
                      onClick={() => handleMenuItemClick(item.href)}
                      custom={index}
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="p-6 border-t border-white/10"
              >
                <a
                  href="tel:+17029309420"
                  className="flex items-center justify-center space-x-3 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(702) 930-9420</span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
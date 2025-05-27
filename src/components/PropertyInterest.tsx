import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Home, Building2, Warehouse, Store } from 'lucide-react';
import emailjs from '@emailjs/browser';

const PropertyInterest = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zipCode: '',
    phone: '',
    propertyType: 'house'
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const propertyTypes = [
    { icon: <Building className="w-8 h-8" />, label: 'Apartment', value: 'apartment' },
    { icon: <Building2 className="w-8 h-8" />, label: 'Condominium', value: 'condo' },
    { icon: <Home className="w-8 h-8" />, label: 'House', value: 'house' },
    { icon: <Warehouse className="w-8 h-8" />, label: 'Office', value: 'office' },
    { icon: <Store className="w-8 h-8" />, label: 'Shop', value: 'shop' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_6t1dbo4',
        'template_uxmehy9',
        formRef.current!,
        's12vchCgUJ_gZy4hV'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! We\'ll be in touch soon with property options.'
        });
        setFormData({
          name: '',
          email: '',
          zipCode: '',
          phone: '',
          propertyType: 'house'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again.'
      });
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interested in Buying?</h2>
            <p className="text-xl text-gray-600">
              We have a variety of properties available. Let us know what you're looking for!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {propertyTypes.map((type, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setFormData(prev => ({ ...prev, propertyType: type.value }))}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                      formData.propertyType === type.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className={`mb-2 ${formData.propertyType === type.value ? 'text-white' : 'text-blue-600'}`}>
                      {type.icon}
                    </div>
                    <span className="text-sm font-medium">{type.label}</span>
                  </motion.button>
                ))}
              </div>

              <input type="hidden" name="property_type" value={formData.propertyType} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700 mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter zip code"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter phone number"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex justify-center mt-8"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Get More Information'}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PropertyInterest;
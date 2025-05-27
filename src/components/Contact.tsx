import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

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
          message: 'Thank you for contacting us! We\'ll be in touch soon.'
        });
        formRef.current?.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">Get in touch with our team</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-base text-gray-500">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+17029309420" className="mt-2 text-blue-600 hover:text-blue-700">
              (702) 930-9420
            </a>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">24/7 support</p>
            <a href="mailto:info@estaterevivals.com" className="mt-2 text-blue-600 hover:text-blue-700">
              info@estaterevivals.com
            </a>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Office</h3>
            <p className="mt-2 text-base text-gray-500">Come visit us</p>
            <address className="mt-2 text-base text-gray-500 not-italic text-center">
              Las Vegas<br />
              Nevada
            </address>
          </div>
        </div>

        <div className="mt-12">
          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {submitStatus.type && (
              <div className={`sm:col-span-2 p-4 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
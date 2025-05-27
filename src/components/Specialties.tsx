import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Banknote, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Wrench,
  Scale,
  Home,
  FileCheck,
  Users,
  PiggyBank,
  HelpCircle,
  X
} from 'lucide-react';

interface Specialty {
  icon: JSX.Element;
  title: string;
  shortDesc: string;
  longDesc: string;
}

const Specialties = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  const specialties: Specialty[] = [
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Debt Negotiation",
      shortDesc: "Expert bank negotiations for underwater properties",
      longDesc: "Our team specializes in negotiating with banks to accept less than what is owed on your property. We work to potentially get the debt forgiven without tax implications, allowing you to start rebuilding your credit immediately."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Lien Resolution",
      shortDesc: "Clear outstanding liens and judgments",
      longDesc: "We handle any outstanding liens or judgments you may have incurred through the years, clearing them on your behalf. Our offer takes care of these issues, providing you with a clean slate."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Credit Improvement",
      shortDesc: "Boost your credit score for better mortgages",
      longDesc: "Your credit score significantly impacts your mortgage options. Our team works with you to improve your financial standing, helping you qualify for the home of your dreams with better rates."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Process",
      shortDesc: "Fast-tracked home buying experience",
      longDesc: "While our properties move quickly, we ensure a smooth buying experience. We guide you through everything from financial assessment to payment planning and pre-approval."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Payment Protection",
      shortDesc: "Immediate mortgage assistance",
      longDesc: "We take over payments immediately and bring mortgages current. Even with underwater mortgages, we can purchase your property and handle all bank interactions, taxes, and fees at closing."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Foreclosure Solutions",
      shortDesc: "Expert handling of bank-seized properties",
      longDesc: "We specialize in properties seized by banks or lenders. We navigate the complexities of foreclosure costs, unpaid mortgages, and interest to find the best solution for all parties."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "As-Is Purchase",
      shortDesc: "No repairs needed, fast cash offers",
      longDesc: "Sell your home 'As Is' - no repairs required. We offer flexible payment options, including cash, with fast closing times. Skip the traditional selling process and save on realtor commissions."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Title Protection",
      shortDesc: "Comprehensive title research & insurance",
      longDesc: "We protect your investment by thoroughly researching property history, resolving unknown liens, debts, or claims that could restrict sale or purchase, and securing title insurance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Transition Support",
      shortDesc: "Full relocation assistance",
      longDesc: "We assist in both buying and selling while ensuring you have a place to stay. Our step-by-step guidance makes the transition process simple and effective, regardless of your situation."
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Cost Reduction",
      shortDesc: "Eliminate property holding costs",
      longDesc: "If your property has become a financial drain with mounting holding costs, we can help. We'll take the property off your hands and handle all associated expenses."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Repair Solutions",
      shortDesc: "Solutions for properties needing repairs",
      longDesc: "Properties requiring major repairs can be difficult to sell or finance. We purchase homes regardless of condition, eliminating the need to deal with contractors or lender requirements."
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Bankruptcy Assistance",
      shortDesc: "Fresh start opportunities",
      longDesc: "Get straight answers to your bankruptcy questions and relief from mortgage burden. Our team can evaluate your situation and help you understand all available options."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Real Estate Specialties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions for every real estate situation, from financial challenges to property improvements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedSpecialty(specialty)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  {specialty.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{specialty.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{specialty.shortDesc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedSpecialty && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                      {selectedSpecialty.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedSpecialty.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedSpecialty(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedSpecialty.longDesc}
                </p>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedSpecialty(null)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specialties;
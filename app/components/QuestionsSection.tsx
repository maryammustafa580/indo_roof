"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "WHY IS PROFESSIONAL ROOF WASHING ESSENTIAL FOR LONGEVITY?",
    answer:
      "Natural elements like moss, lichen, and algae trap moisture against your roof tiles, accelerating structural breakdown. Our specialized soft-wash treatments safely eliminate these growths at the root without damaging protective shingle granules.",
  },
  {
    question: "HOW DOES INDO ROOF CLEANERS PROTECT SURROUNDING LANDSCAPES?",
    answer:
      "We utilize eco-friendly, biodegradable cleaning agents and pre-wet surrounding plants and landscaping. This proactive technique ensures your gardens and outdoor features remain completely protected throughout the cleaning process.",
  },
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN SOFT-WASHING AND PRESSURE WASHING?",
    answer:
      "Pressure washing uses high-velocity water ideal for tough, hard surfaces like concrete driveways and paved patios. Soft-washing relies on low pressure combined with tailored cleaning solutions, making it safe for delicate roofing and exterior walls.",
  },
  {
    question: "CAN REGULAR EXTERIOR MAINTENANCE IMPROVE ENERGY EFFICIENCY?",
    answer:
      "Yes. Dark stains, algae buildup, and grime absorb excessive solar heat rather than reflecting it. Keeping your roof and exterior surfaces pristine helps regulate indoor temperatures and lowers cooling costs.",
  },
  {
    question: "WHAT CAN I EXPECT DURING A SCHEDULED PROPERTY SERVICE?",
    answer:
      "Our team conducts a thorough initial surface assessment, prepares the surrounding workspace, applies precise cleaning methods tailored to your specific materials, and performs a complete final rinse and site cleanup.",
  },
];

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="bg-[#3c3835] text-white min-h-screen py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-24"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#FAF6F0] tracking-tight mb-4"
              style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
            >
              Frequently asked questions
            </h2>
            <p
              className="text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Everything you need to know about our professional property care processes, safety standards, and solutions.
            </p>
            <div className="w-16 h-[2px] bg-[#B89774] mx-auto mt-6" />
          </motion.div>

          {/* FAQ Cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#FAF6F0] border-[#B89774]/40 shadow-lg shadow-black/20 text-stone-900"
                      : "bg-[#FAF6F0]/10 border-white/10 hover:bg-[#FAF6F0]/15 hover:border-white/20 text-white"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 md:p-8 text-left group cursor-pointer gap-4 sm:gap-6"
                  >
                    <span
                      className={`text-xs sm:text-sm md:text-base font-medium tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-colors duration-300 ${
                        isOpen
                          ? "text-stone-900 font-bold"
                          : "text-white group-hover:text-[#B89774]"
                      }`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.question}
                    </span>

                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#B89774] text-white rotate-180"
                          : "bg-white/10 text-white group-hover:bg-[#B89774] group-hover:text-white"
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-0 border-t border-stone-300/60 mt-2">
                          <p
                            className="text-stone-900 text-sm sm:text-base md:text-[17px] leading-relaxed font-light pt-4"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
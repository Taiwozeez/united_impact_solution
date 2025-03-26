import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const faqData: FAQItem[] = [
  {
    question: "What is InnovateHub?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "What are the benefits of joining the community?",
    answer: ""
  },
  {
    question: "Do you provide financial Support?",
    answer: ""
  },
  {
    question: "How do I get started?",
    answer: "You can get started by signing up on our platform and completing your profile."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl px-4 py-8 mx-auto sm:px-6">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 p-6 mb-8 bg-white border border-gray-100 shadow-sm sm:flex-row sm:items-center rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Want More Clarity?
        </h2>
        <span className="px-3 py-1 text-sm font-medium border rounded-full bg-emerald-50 text-emerald-600 border-emerald-100">
          FAQ
        </span>
      </div>
      
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-5 cursor-pointer transition-all duration-200
              ${openIndex === index ? "border-[1.5px] border-[#4A3AFF]" : "border border-gray-200"}
              shadow-sm hover:shadow-md`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.question}
              </h3>
              <div className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors
                ${openIndex === index ? "bg-[#4A3AFF]" : "bg-gray-50"}
                shadow-xs`}>
                {openIndex === index ? (
                  <ChevronDown className="w-4 h-4 text-white" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </div>
            </div>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 text-gray-600">
                    {item.answer || (
                      <ul className="pl-5 space-y-2 list-disc">
                        <li>Access to exclusive resources and networking opportunities</li>
                        <li>Professional mentorship programs</li>
                        <li>Potential funding and investment connections</li>
                        <li>Skill development workshops</li>
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
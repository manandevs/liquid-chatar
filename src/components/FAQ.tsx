import { useState } from "react";

const questions = [
  {
    question: "Is my data really liquid... and secure?",
    answer: "Absolutely. We use AES-256 encryption for all messages. 'Liquid' refers to our UI philosophy, not a security leak! Your chats are locked tight."
  },
  {
    question: "Does it work on mobile?",
    answer: "Yes! The design is fully responsive. It flows perfectly into any screen size, from an iPhone Mini to a 34-inch ultra-wide monitor."
  },
  {
    question: "What is the file limit on the Free plan?",
    answer: "You can send files up to 100MB per transfer on the Free plan. Pro users get up to 4GB per file (perfect for 4K video)."
  },
  {
    question: "Can I customize the colors?",
    answer: "Pro members can unlock 'Chameleon Mode' which adapts the UI colors to your wallpaper or mood. Free users get our signature Lime & Black theme."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-2 py-4 font-liquid text-black">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-lime-300 rounded-full blur-3xl opacity-50"></div>
          <h2 className="text-4xl md:text-5xl font-bold relative z-10">Got Questions?</h2>
        </div>

        <div className="space-y-4">
          {questions.map((q, index) => (
            <div 
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`
                group cursor-pointer rounded-[2rem] border transition-all duration-300 overflow-hidden relative
                ${openIndex === index 
                  ? "bg-white border-white shadow-lg scale-[1.02]" 
                  : "bg-white/20 border-white/40 hover:bg-white/40 hover:border-white/60"
                }
              `}
            >
              {/* Question Header */}
              <div className="p-6 md:p-8 flex justify-between items-center">
                <h3 className={`text-lg md:text-xl font-bold ${openIndex === index ? "text-black" : "text-gray-800"}`}>
                  {q.question}
                </h3>
                
                {/* Animated Icon */}
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                  ${openIndex === index ? "bg-black border-black rotate-180" : "bg-white border-white/50"}
                `}>
                  <svg 
                    className={`w-4 h-4 ${openIndex === index ? "text-lime-400" : "text-black"}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Answer (Animated Height) */}
              <div 
                className={`
                  transition-all duration-300 ease-in-out
                  ${openIndex === index ? "max-h-48 opacity-100 pb-8 px-8" : "max-h-0 opacity-0 px-8"}
                `}
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  {q.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
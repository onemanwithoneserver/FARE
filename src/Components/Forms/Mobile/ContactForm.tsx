import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
export default function ContactForm() {
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 800);
  };
  if (isSubmitted) {
    return (
      <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-[#0B1D3A]/10 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-[#0B1D3A]" />
        </div>
        <h3 className="text-3xl font-black text-[#0B1D3A] mb-3">
          {language === "te" ? "సందేశం పంపబడింది" : "Message Sent"}
        </h3>
        <p className="text-[#475569] text-lg max-w-[400px]">
          {language === "te"
            ? "మమ్మల్ని సంప్రదించినందుకు ధన్యవాదాలు. మేము త్వరలో మీకు ప్రత్యుత్తరం ఇస్తాము."
            : "Thank you for contacting us. We have received your message and will reply shortly."}
        </p>
      </div>
    );
  }
  return (
    <div className="p-8 md:p-12 bg-white flex flex-col relative overflow-hidden">
      <div className="max-w-2xl mx-auto w-full relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#F8FAFD] flex items-center justify-center border border-[#0B1D3A]/10">
              <MessageSquare size={18} className="text-[#0B1D3A]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1D3A]">
              Get in{" "}
              <span className="text-[#C99A2E] gold-underline">Touch</span>
            </h2>
          </div>
          <p className="text-[#475569] text-[15px]">
            Have questions about our platform or services? Send us a message and
            our support team will assist you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                required
                type="text"
                id="contact_name"
                className="peer w-full bg-transparent border-b-2 border-[#0B1D3A]/10 py-3 text-[16px] text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] transition-colors placeholder-transparent"
                placeholder="Name"
              />
              <label
                htmlFor="contact_name"
                className="absolute left-0 top-3 text-[15px] text-[#0B1D3A]/40 transition-all peer-focus:-top-4 peer-focus:text-[12px] peer-focus:text-[#C99A2E] peer-focus:font-bold peer-valid:-top-4 peer-valid:text-[12px] peer-valid:text-[#0B1D3A]/60"
              >
                Full Name
              </label>
            </div>
            <div className="relative group">
              <input
                required
                type="email"
                id="contact_email"
                className="peer w-full bg-transparent border-b-2 border-[#0B1D3A]/10 py-3 text-[16px] text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] transition-colors placeholder-transparent"
                placeholder="Email"
              />
              <label
                htmlFor="contact_email"
                className="absolute left-0 top-3 text-[15px] text-[#0B1D3A]/40 transition-all peer-focus:-top-4 peer-focus:text-[12px] peer-focus:text-[#C99A2E] peer-focus:font-bold peer-valid:-top-4 peer-valid:text-[12px] peer-valid:text-[#0B1D3A]/60"
              >
                Email Address
              </label>
            </div>
          </div>
          <div className="relative group pt-4">
            <input
              required
              type="text"
              id="contact_subject"
              className="peer w-full bg-transparent border-b-2 border-[#0B1D3A]/10 py-3 text-[16px] text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] transition-colors placeholder-transparent"
              placeholder="Subject"
            />
            <label
              htmlFor="contact_subject"
              className="absolute left-0 top-7 text-[15px] text-[#0B1D3A]/40 transition-all peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#C99A2E] peer-focus:font-bold peer-valid:top-0 peer-valid:text-[12px] peer-valid:text-[#0B1D3A]/60"
            >
              Subject
            </label>
          </div>
          <div className="relative group pt-4">
            <textarea
              required
              id="contact_message"
              rows={4}
              className="peer w-full bg-transparent border-b-2 border-[#0B1D3A]/10 py-3 text-[16px] text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] transition-colors placeholder-transparent resize-none custom-scrollbar"
              placeholder="Message"
            ></textarea>
            <label
              htmlFor="contact_message"
              className="absolute left-0 top-7 text-[15px] text-[#0B1D3A]/40 transition-all peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#C99A2E] peer-focus:font-bold peer-valid:top-0 peer-valid:text-[12px] peer-valid:text-[#0B1D3A]/60"
            >
              Your Message
            </label>
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full sm:w-auto px-10 py-4 mt-6 bg-[#0B1D3A] text-white rounded-full font-bold text-[15px] flex items-center justify-center gap-3 shadow-[0_8px_16px_-8px_rgba(11,29,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.5)] transition-all ml-auto"
          >
            Send Message <Send size={16} />
          </motion.button>
        </form>
      </div>
    </div>
  );
}

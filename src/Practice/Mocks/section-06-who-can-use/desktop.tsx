import { motion } from "motion/react";
import { data } from "../data";
import { Users, Building, Laptop, BarChart2, Briefcase, Network, UserCheck } from "lucide-react";

const icons = [UserCheck, BarChart2, Network, Laptop, Users, Briefcase, Building];

export default function Desktop() {
  const sectionData = data.whoCanUse;
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold text-[#0B1D3A] mb-6">
            {sectionData.title}
          </h2>
          <div className="w-16 h-1 bg-[#C99A2E] mx-auto rounded-[2px]" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {sectionData.roles.map((role, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-6 rounded-[8px] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-[4px] bg-white shadow-sm flex items-center justify-center text-[#C99A2E] mb-5 group-hover:bg-[#C99A2E] group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-3">
                  {role.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {role.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

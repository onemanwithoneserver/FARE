import { motion } from "motion/react";
import { data } from "../data";
import { Users, Building, Laptop, BarChart2, Briefcase, Network, UserCheck } from "lucide-react";

const icons = [UserCheck, BarChart2, Network, Laptop, Users, Briefcase, Building];

export default function Mobile() {
  const sectionData = data.whoCanUse;
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-[28px] font-bold text-[#0B1D3A] mb-4">
            {sectionData.title}
          </h2>
          <div className="w-12 h-1 bg-[#C99A2E] mx-auto rounded-[2px]" />
        </motion.div>
        
        <div className="flex flex-col gap-4">
          {sectionData.roles.map((role, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-5 rounded-[4px] flex items-start gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-[4px] bg-[#C99A2E] shadow-md flex items-center justify-center text-white mt-1">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2">
                    {role.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

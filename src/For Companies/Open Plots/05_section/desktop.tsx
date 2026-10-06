
import { motion } from "motion/react";
import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { getData } from "./data";
import { accentAt, IconBadge, HoverGlow, ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, PrimaryButton } from "../../../Practice/ui";
import { useState } from "react";
import Modal from "../../../Components/Forms/Modal";
import FormComponent from "../../../Components/Forms/Desktop/RECompaniesForm";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <Section tone="soft" ariaLabel={data.title} mobile={false}>
      <SectionHeader  eyebrow={data.overline} icon={ClipboardCheck} accent={ACCENTS[2]} title={data.headline} description={data.desc1 + " " + data.desc2} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-10"
      >
        {data.testAreas.map((area: string, i: number) => {
          const a = accentAt(i);
          return (
            <motion.div key={i} variants={fadeUp} className={`${CARD_BASE} ${CARD_HOVER} p-6 flex items-center gap-4`}>
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              <IconBadge icon={CheckCircle2} accent={a} size="sm" />
              <h3 className="text-[16px] font-bold text-[#0B1D3A]">{area}</h3>
            </motion.div>
          );
        })}
      </motion.div>
      
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} className="text-center mb-8">
        <p className="text-[18px] font-bold gold-gradient-text">{data.evaluationFlow}</p>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-wrap justify-center gap-4 mb-6">
        {data.secondaryButton && <PrimaryButton onClick={() => setIsModalOpen(true)}>{data.secondaryButton}</PrimaryButton>}
      </motion.div>
      
      <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} className="text-center text-[13px] italic font-medium text-[#64748B]">
        {data.footerText}
      </motion.p>
    </Section>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <FormComponent />
    </Modal>
    </>
  );
}

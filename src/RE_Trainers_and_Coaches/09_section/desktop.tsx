
import { motion } from "motion/react";
import { Handshake } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import { accentAt, ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, PrimaryButton } from "../../Practice/ui";
import { useState } from "react";
import Modal from "../../Components/Forms/Modal";
import FormComponent from "../../Components/Forms/Desktop/RETrainersForm";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <Section tone="white" ariaLabel={data.title} mobile={false}>
      <SectionHeader  eyebrow={data.overline} icon={Handshake} accent={ACCENTS[8]} title={data.headline} description={data.description} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="max-w-[1000px] mx-auto text-center"
      >
        <motion.h3 variants={fadeUp} className="text-[20px] font-bold text-[#0B1D3A] mb-8">{data.exploreHeading}</motion.h3>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-10">
          {data.exploreItems.map((item: string, i: number) => {
            const a = accentAt(i);
            return (
              <div key={i} className={`${CARD_BASE} ${CARD_HOVER} px-5 py-3 flex items-center gap-3 relative overflow-hidden`}>
                <AccentHairline accent={a} />
                <span aria-hidden="true" className="w-2 h-2 rounded-full" style={{ background: a.to }} />
                <span className="text-[14px] lg:text-[15px] font-bold text-[#0B1D3A]">{item}</span>
              </div>
            );
          })}
        </motion.div>
        
        <motion.div variants={fadeUp}>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>Schedule a Demo</PrimaryButton>
        </motion.div>
      </motion.div>
    </Section>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <FormComponent />
    </Modal>
    </>
  );
}


import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { getData } from "./data";
import { SecondaryButton, ACCENTS, Section, SectionHeader, VIEWPORT, fadeUp, PrimaryButton } from "../../../Practice/ui";
import { useState } from "react";
import Modal from "../../../Components/Forms/Modal";
import FormComponent from "../../../Components/Forms/Desktop/RECompaniesForm";
import VideoModal from "../../../Components/Forms/VideoModal";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
    <Section tone="soft" orbs ariaLabel={data.title} mobile={false}>
      <SectionHeader  eyebrow={data.overline} icon={Rocket} accent={ACCENTS[5]} title={data.headline} description={data.subtitle} />

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-wrap justify-center gap-4 mt-10">
        {data.buttons?.primary && <PrimaryButton onClick={() => setIsModalOpen(true)}>{data.buttons.primary}</PrimaryButton>}
        {data.buttons?.secondary && <SecondaryButton onClick={() => setIsVideoModalOpen(true)}>{data.buttons.secondary}</SecondaryButton>}
      </motion.div>
    </Section>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <FormComponent />
    </Modal>
    <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  );
}

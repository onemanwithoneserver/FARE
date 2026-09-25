import type { Language } from "../../context/LanguageContext";
export const dataEn = {
  title: "Header",
  navLinks: [
    {
      title: "For Companies",
      href: "re-companies",
      subItems: [
        {
          title: "Residential & Commercial",
          href: "re-companies",
        },
        {
          title: "Open Plots",
          href: "open-plots",
        },
      ],
    },
    { title: "For Trainers", href: "re-trainers-coaches" },
    { title: "Trainer Directory", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact Us", href: "contact-us" },
  ],
};
export const dataTe = {
  title: "Header",
  navLinks: [
    {
      title: "కంపెనీల కోసం",
      href: "re-companies",
      subItems: [
        {
          title: "రెసిడెన్షియల్ & కమర్షియల్",
          href: "re-companies",
        },
        {
          title: "ఓపెన్ ప్లాట్స్",
          href: "open-plots",
        },
      ],
    },
    { title: "ట్రైనర్ల కోసం", href: "re-trainers-coaches" },
    { title: "ట్రైనర్ డైరెక్టరీ", href: "#" },
    { title: "మా గురించి", href: "#" },
    { title: "సంప్రదించండి", href: "contact-us" },
  ],
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;

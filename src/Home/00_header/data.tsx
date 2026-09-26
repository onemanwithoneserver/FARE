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
    {
      title: "For Learners",
      href: "#",
      subItems: [
        {
          title: "Students & Freshers",
          href: "#",
          formKey: "students",
        },
        {
          title: "Employees",
          href: "#",
          formKey: "employees",
        },
        {
          title: "Freelancers - Open Plot",
          href: "#",
          formKey: "freelancer-open-plot",
        },
        {
          title: "Freelancers - Residential",
          href: "#",
          formKey: "freelancer-residential",
        },
        {
          title: "Career Switchers",
          href: "#",
          formKey: "career-switchers",
        },
      ],
    },
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
    {
      title: "అభ్యాసకుల కోసం",
      href: "#",
      subItems: [
        {
          title: "విద్యార్థులు & ఫ్రెషర్స్",
          href: "#",
          formKey: "students",
        },
        {
          title: "ఉద్యోగులు",
          href: "#",
          formKey: "employees",
        },
        {
          title: "ఫ్రీలాన్సర్లు - ఓపెన్ ప్లాట్",
          href: "#",
          formKey: "freelancer-open-plot",
        },
        {
          title: "ఫ్రీలాన్సర్లు - రెసిడెన్షియల్",
          href: "#",
          formKey: "freelancer-residential",
        },
        {
          title: "కెరీర్ స్విచ్చర్స్",
          href: "#",
          formKey: "career-switchers",
        },
      ],
    },
    { title: "ట్రైనర్ డైరెక్టరీ", href: "#" },
    { title: "మా గురించి", href: "#" },
    { title: "సంప్రదించండి", href: "contact-us" },
  ],
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;

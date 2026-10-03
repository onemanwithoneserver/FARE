export const getData = (lang: "en" | "te" = "en") => {
  if (lang === "te") {
    return {
      copyright: "© {year} FARE. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
      socialLinks: [
        { name: "Facebook", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Linkedin", url: "#" },
        { name: "Youtube", url: "#" },
      ],
      footerGroups: [
        {
          title: "అభ్యాసకుల కోసం",
          links: [
            { label: "విద్యార్థులు & ఫ్రెషర్స్", path: "fare-for-students-freshers" },
            { label: "ఉద్యోగులు", path: "fare-for-employees" },
            { label: "ఫ్రీలాన్సర్లు - ఓపెన్ ప్లాట్", path: "fare-for-freelancers-open-plot" },
            { label: "ఫ్రీలాన్సర్లు - రెసిడెన్షియల్", path: "fare-for-freelancers-residential" },
            { label: "కెరీర్ స్విచ్చర్స్", path: "fare-for-career-switchers" },
          ],
        },
        {
          title: "కంపెనీల కోసం",
          links: [
            { label: "రెసిడెన్షియల్ & కమర్షియల్", path: "re-companies" },
            { label: "ఓపెన్ ప్లాట్స్", path: "open-plots" },
          ],
        },
        {
          title: "ట్రైనర్ల కోసం",
          links: [
            { label: "ట్రైనర్‌గా నమోదు చేసుకోండి", path: "re-trainers-coaches" },
            { label: "ట్రైనర్ డైరెక్టరీ", path: "trainer-directory" },
          ],
        },
        {
          title: "వనరులు",
          links: [
            { label: "ప్లాట్‌ఫారమ్", path: "home" },
            { label: "నాలెడ్జ్ బ్యాంక్", path: "fare-knowledge-bank" },
            { label: "సంప్రదించండి", path: "contact-us" },
            { label: "గోప్యత", path: "#" },
            { label: "నిబంధనలు", path: "#" },
          ],
        },
      ],
    };
  }
  return {
    copyright: "© {year} FARE. All rights reserved.",
    socialLinks: [
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Linkedin", url: "#" },
      { name: "Youtube", url: "#" },
    ],
    footerGroups: [
      {
        title: "For Learners",
        links: [
          { label: "Students & Freshers", path: "fare-for-students-freshers" },
          { label: "Employees", path: "fare-for-employees" },
          { label: "Freelancers - Open Plot", path: "fare-for-freelancers-open-plot" },
          { label: "Freelancers - Residential", path: "fare-for-freelancers-residential" },
          { label: "Career Switchers", path: "fare-for-career-switchers" },
        ],
      },
      {
        title: "For Companies",
        links: [
          { label: "Residential & Commercial", path: "re-companies" },
          { label: "Open Plots", path: "open-plots" },
        ],
      },
      {
        title: "For Trainers",
        links: [
          { label: "Register a Trainer", path: "re-trainers-coaches" },
          { label: "Trainer Directory", path: "trainer-directory" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Platform", path: "home" },
          { label: "Knowledge Bank", path: "fare-knowledge-bank" },
          { label: "Contact Us", path: "contact-us" },
          { label: "Privacy Policy", path: "#" },
          { label: "Terms of Service", path: "#" },
        ],
      },
    ],
  };
};
export const data = getData("en");

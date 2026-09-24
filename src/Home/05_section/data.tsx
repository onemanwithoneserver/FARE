export const getData = (lang: "en" | "te" = "en") => {
  if (lang === "te") {
    return {
      copyright: "© {year} FARE. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
      navLinks: [
        { label: "ప్లాట్‌ఫారమ్", path: "home" },
        { label: "ఓపెన్ ప్లాట్స్", path: "open-plots" },
        { label: "కంపెనీల కోసం", path: "re-companies" },
        { label: "ట్రైనర్‌గా నమోదు చేసుకోండి", path: "re-trainers-coaches" },
        { label: "ట్రైనర్ డైరెక్టరీ", path: "#" },
        { label: "మా గురించి", path: "#" },
        { label: "సంప్రదించండి", path: "contact-us" },
        { label: "గోప్యత", path: "#" },
        { label: "నిబంధనలు", path: "#" },
      ],
    };
  }
  return {
    copyright: "© {year} FARE. All rights reserved.",
    navLinks: [
      { label: "Platform", path: "home" },
      { label: "Open Plots", path: "open-plots" },
      { label: "For Companies", path: "re-companies" },
      { label: "Register a Trainer", path: "re-trainers-coaches" },
      { label: "Trainer Directory", path: "#" },
      { label: "About", path: "#" },
      { label: "Contact", path: "contact-us" },
      { label: "Privacy", path: "#" },
      { label: "Terms", path: "#" },
    ],
  };
};
export const data = getData("en");

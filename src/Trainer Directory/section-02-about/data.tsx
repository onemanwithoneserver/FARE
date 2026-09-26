import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  about: {
    title: "About the Trainer",
    content: "Priya Sharma is a highly recognized Real Estate Sales Trainer with over 12 years of hands-on industry experience and 8 years of dedicated coaching. Having started her career as a sales executive at a top-tier developer, she scaled the ranks by consistently breaking sales records. She understands the ground realities, customer psychology, and high-pressure environments that real estate professionals face daily.\n\nHer training modules are deeply rooted in practical application rather than just theory, making her one of the most sought-after trainers for residential and commercial real estate segments."
  },
  philosophy: {
    title: "Training Philosophy",
    quote: "Sales in real estate is not about convincing; it’s about consulting. When you empower the buyer with the right knowledge, the sale becomes a natural conclusion.",
    author: "Priya Sharma"
  }
};

export const dataTe = {
  about: {
    title: "ట్రైనర్ గురించి",
    content: "ప్రియా శర్మ 12 సంవత్సరాలకు పైగా పరిశ్రమ అనుభవం మరియు 8 సంవత్సరాల అంకితమైన కోచింగ్‌తో అత్యంత గుర్తింపు పొందిన రియల్ ఎస్టేట్ సేల్స్ ట్రైనర్. అగ్రశ్రేణి డెవలపర్‌లో సేల్స్ ఎగ్జిక్యూటివ్‌గా తన కెరీర్‌ను ప్రారంభించి, సేల్స్ రికార్డులను నిరంతరం బ్రేక్ చేయడం ద్వారా ఆమె ర్యాంకులను అధిరోహించింది. రియల్ ఎస్టేట్ నిపుణులు ప్రతిరోజూ ఎదుర్కొనే వాస్తవ పరిస్థితులు, కస్టమర్ సైకాలజీ మరియు అధిక ఒత్తిడి వాతావరణాలను ఆమె అర్థం చేసుకుంటుంది.\n\nఆమె శిక్షణా మాడ్యూల్స్ కేవలం సిద్ధాంతం మాత్రమే కాకుండా ఆచరణాత్మక అనువర్తనంలో లోతుగా పాతుకుపోయాయి, నివాస మరియు వాణిజ్య రియల్ ఎస్టేట్ విభాగాలకు అత్యధికంగా కోరబడిన శిక్షకులలో ఆమె ఒకరు."
  },
  philosophy: {
    title: "శిక్షణ తత్వశాస్త్రం",
    quote: "రియల్ ఎస్టేట్‌లో అమ్మకాలు అంటే ఒప్పించడం కాదు; ఇది కన్సల్టింగ్ గురించి. మీరు కొనుగోలుదారుకు సరైన జ్ఞానంతో సాధికారత ఇచ్చినప్పుడు, విక్రయం సహజమైన ముగింపు అవుతుంది.",
    author: "ప్రియా శర్మ"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;

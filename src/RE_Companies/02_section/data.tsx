import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    overline: "Challenges",
    title: "Common Sales & Training Challenges",
    headline: "Your teams know the product. But are they able to sell it effectively?",
    challenges: [
        "Pre-Sales Calls Fail to Create Impact",
        "Customer Needs Are Not Analysed Effectively",
        "Sales Teams Struggle to Handle Customer Objections",
        "Channel Partners Don't Fully Understand the Project",
        "Product Knowledge Doesn't Translate Into Confident Selling",
        "Sales & CP Teams Need Continuous Skill Practice",
        "Knowledge Gaps Are Difficult to Identify",
        "Training Is Often One-Time, Not Continuous",
        "Specialised Skills Require Specialised Trainers"
    ],
    transitionTitle: "What if your project knowledge and sales training could become a continuous learning system?",
    transitionSubtitle: "Presenting FARE Custom RE LMS."
};

export const dataTe = {
    overline: "Challenges",
    title: "సాధారణ సేల్స్ & ట్రైనింగ్ సవాళ్లు",
    headline: "మీ టీమ్‌కు ప్రొడక్ట్ తెలుసు. కానీ వారు దాన్ని సమర్థవంతంగా విక్రయించగలుగుతున్నారా?",
    challenges: [
        "ప్రీ-సేల్స్ కాల్స్ ప్రభావం చూపడంలో విఫలమవుతున్నాయి",
        "కస్టమర్ అవసరాలను సరిగ్గా విశ్లేషించడం లేదు",
        "కస్టమర్ అభ్యంతరాలను ఎదుర్కోవడంలో సేల్స్ టీమ్స్ ఇబ్బంది పడుతున్నాయి",
        "ఛానల్ పార్ట్‌నర్‌లకు ప్రాజెక్ట్ గురించి పూర్తి అవగాహన లేదు",
        "ప్రొడక్ట్ నాలెడ్జ్ కాన్ఫిడెంట్ సెల్లింగ్‌గా మారడం లేదు",
        "సేల్స్ & CP టీమ్‌లకు నిరంతర స్కిల్ ప్రాక్టీస్ అవసరం",
        "నాలెడ్జ్ గ్యాప్‌లను గుర్తించడం కష్టం",
        "ట్రైనింగ్ తరచుగా ఒకేసారి జరుగుతుంది, నిరంతరంగా కాదు",
        "ప్రత్యేక స్కిల్స్ కోసం ప్రత్యేక ట్రైనర్స్ అవసరం"
    ],
    transitionTitle: "మీ ప్రాజెక్ట్ నాలెడ్జ్ మరియు సేల్స్ ట్రైనింగ్ ఒక నిరంతర లెర్నింగ్ సిస్టమ్‌గా మారితే ఎలా ఉంటుంది?",
    transitionSubtitle: "ప్రెజెంటింగ్ FARE కస్టమ్ RE LMS."
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;

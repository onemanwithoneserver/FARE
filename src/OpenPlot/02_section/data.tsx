import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 2 — Common Training Challenges in Open Plot Companies",
    subtitle: "Training is important. But making it work consistently is a challenge.",
    challenges: [
        "Training Motivation Fades Quickly",
        "Senior Teams Keep Repeating New-Joiner Training",
        "Learning Doesn't Translate Into Practical Situations",
        "Training Is Difficult to Manage & Track",
        "Limited Access to Relevant Open Plot Trainers",
        "New Challenges Require New & Specialised Skills",
        "Knowledge Gaps Are Difficult to Measure",
        "Training Is Event-Driven, Not Continuous",
        "Limited Specialised Training for Senior Teams"
    ],
    transitionTitle: "What if training could become a continuous system — not just an occasional activity?",
    transitionSubtitle: "That's where FARE comes in."
};

export const dataTe = {
    title: "సెక్షన్ 2 — Open Plot కంపెనీలలో సాధారణ Training Challenges",
    subtitle: "Training ముఖ్యమే. కానీ దాన్ని నిరంతరం కొనసాగించడం ఒక సవాలు.",
    challenges: [
        "Training Motivation త్వరగా తగ్గిపోతుంది",
        "Senior Teams కొత్త Associatesకు Trainingను పదేపదే ఇవ్వాల్సి వస్తుంది",
        "Learning Practical Situationsలోకి మారడం లేదు",
        "Trainingను Manage & Track చేయడం కష్టం",
        "Relevant Open Plot Trainersకు పరిమితమైన యాక్సెస్",
        "కొత్త Challengesకు కొత్త & Specialised Skills అవసరం",
        "Knowledge Gapsను Measure చేయడం కష్టం",
        "Training Continuousగా కాకుండా Event-Drivenగా ఉంటుంది",
        "Senior Teams కోసం Specialised Training పరిమితంగా ఉంటుంది"
    ],
    transitionTitle: "Training ఒకసారి జరిగే activity కాకుండా, Continuous Systemగా మారితే?",
    transitionSubtitle: "అక్కడే FARE వస్తుంది."
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;

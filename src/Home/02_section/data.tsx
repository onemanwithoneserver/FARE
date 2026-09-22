import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "02_section",
    headline: {
        line1: "One Platform.",
        line2: "Four Ways",
        line3: "to build",
        line4: "capability."
    },
    subtitle: "Designed around the way real estate professionals learn, practice, benchmark, and master high-value capabilities.",
    tabs: [
        { id: '01', title: 'KNOWLEDGE BANK', subtitle: '(Quizzes)', desc: 'Build and test real estate knowledge with 12 interactive questions and instant scoring.' },
        { id: '02', title: 'SKILL PRACTICE', subtitle: '(Mocks with Trainers)', desc: 'Practise real-world objection handling with live interactive simulated trainer scenarios.' },
        { id: '03', title: 'FUNCTIONAL SKILLS', subtitle: '(Questionnaires)', desc: 'Benchmark your non-sales capabilities against industry peers with dynamic self-assessments.' },
        { id: '04', title: 'DAILY HABITS', subtitle: '(Habit Tracker)', desc: 'Build consistency with an interactive 30-day habit streak tracker without date constraints.' }
    ],
    browser: {
        url: "fare.training",
        content: {
            "01": {
                tag: "KNOWLEDGE BANK",
                title: "RERA & Real Estate Mastery",
                totalQuestions: 12,
                questions: [
                    {
                        id: 1,
                        question: "Under RERA, what is the maximum penalty a developer can face for non-disclosure or false representation of project details?",
                        options: [
                            "Up to 5% of estimated project cost",
                            "Up to 10% of estimated project cost",
                            "₹10 Lakh flat statutory fine",
                            "3 years non-bailable imprisonment"
                        ],
                        correctIndex: 1,
                        explanation: "Section 61 of RERA specifies a penalty of up to 10% of the estimated cost of the real estate project for contravention of disclosures."
                    },
                    {
                        id: 2,
                        question: "According to the RERA Act, how is 'Carpet Area' strictly defined for sales and agreement documentation?",
                        options: [
                            "Usable floor area including external walls and open terrace",
                            "Net usable floor area of an apartment excluding external walls",
                            "Built-up area plus pro-rata common area share",
                            "Super built-up area minus open balcony area"
                        ],
                        correctIndex: 1,
                        explanation: "RERA mandates that Carpet Area means the net usable floor area of an apartment, excluding the area covered by external walls and service shafts."
                    },
                    {
                        id: 3,
                        question: "What minimum percentage of funds received from buyers must be deposited in a dedicated RERA project escrow account?",
                        options: [
                            "50% of total collections",
                            "60% of total collections",
                            "70% of total collections",
                            "100% of total collections"
                        ],
                        correctIndex: 2,
                        explanation: "Section 4(2)(l)(D) mandates that 70% of the amounts realized for the project from allottees must be deposited in a separate escrow account."
                    },
                    {
                        id: 4,
                        question: "Under RERA, what is the mandatory structural defect liability period during which a promoter must rectify issues without charge?",
                        options: [
                            "1 Year from possession",
                            "3 Years from possession",
                            "5 Years from possession",
                            "10 Years from possession"
                        ],
                        correctIndex: 2,
                        explanation: "Section 14(3) sets a 5-year defect liability period from the date of handing over possession for structural defects or quality issues."
                    },
                    {
                        id: 5,
                        question: "What does Floor Space Index (FSI) or Floor Area Ratio (FAR) represent in urban property development?",
                        options: [
                            "Ratio of total built-up floor area to the gross plot area",
                            "Ratio of dedicated parking space to residential units",
                            "Percentage of green area required per acre",
                            "The maximum physical height limit in meters"
                        ],
                        correctIndex: 0,
                        explanation: "FSI/FAR is the maximum permissible ratio of total covered floor area across all floors relative to the total plot area."
                    },
                    {
                        id: 6,
                        question: "What is the primary legal objective of obtaining an Encumbrance Certificate (EC) during property title due diligence?",
                        options: [
                            "To verify timely municipal property tax remittances",
                            "To trace registered transactions, mortgages, and legal claims over a period",
                            "To validate architectural floor plan sanctions",
                            "To secure immediate water and power connections"
                        ],
                        correctIndex: 1,
                        explanation: "An Encumbrance Certificate provides evidence of all registered encumbrances, sales, leases, or mortgages registered against the property."
                    },
                    {
                        id: 7,
                        question: "Under Section 54 of the Indian Income Tax Act, capital gains tax exemption can be claimed on sale of residential house property by reinvesting in:",
                        options: [
                            "Commercial office complexes",
                            "Another residential house property within specified timelines",
                            "Listed real estate infrastructure investment trusts (REITs)",
                            "Gold bonds and commodities"
                        ],
                        correctIndex: 1,
                        explanation: "Section 54 provides capital gains exemption when long-term capital gains from a residential property are reinvested in residential property."
                    },
                    {
                        id: 8,
                        question: "What is the mandatory TDS deduction rate under Section 194-IA by a buyer on purchasing immovable property worth above ₹50 Lakhs?",
                        options: [
                            "0.5% of total sale consideration",
                            "1.0% of total sale consideration",
                            "2.0% of total sale consideration",
                            "5.0% of total sale consideration"
                        ],
                        correctIndex: 1,
                        explanation: "Section 194-IA mandates the buyer to deduct 1% TDS on the total sale consideration or stamp duty value exceeding ₹50 Lakhs."
                    },
                    {
                        id: 9,
                        question: "For thorough institutional and luxury title due diligence, what is the standard recommended title search period in India?",
                        options: [
                            "5 to 7 Years",
                            "12 to 15 Years",
                            "30 to 40 Years",
                            "100 Years"
                        ],
                        correctIndex: 2,
                        explanation: "A 30 to 40 year chain of title search is standard practice to establish clear, marketable, and unencumbered ownership rights."
                    },
                    {
                        id: 10,
                        question: "Under FEMA and RBI investment regulations, which of the following property types is an NRI legally prohibited from purchasing?",
                        options: [
                            "Luxury penthouses in metropolitan cities",
                            "Agricultural land, plantation property, or farm houses",
                            "Grade-A commercial office spaces",
                            "Retail shopping mall units"
                        ],
                        correctIndex: 1,
                        explanation: "Under general RBI/FEMA regulations, Non-Resident Indians (NRIs) and OCIs are not permitted to acquire agricultural land, plantation property, or farm houses."
                    },
                    {
                        id: 11,
                        question: "In a typical Joint Development Agreement (JDA), what is the primary consideration provided by the landowner to the developer?",
                        options: [
                            "Construction labor and materials",
                            "Land development rights in exchange for built area or revenue share",
                            "Direct mortgage collateral for project debt",
                            "Architectural design and brand licensing"
                        ],
                        correctIndex: 1,
                        explanation: "In a JDA, the landowner contributes the land and grants development rights to the builder in exchange for a predefined share of built area or revenue."
                    },
                    {
                        id: 12,
                        question: "Why is an Occupancy Certificate (OC) strictly required before a buyer can legally occupy a newly constructed building?",
                        options: [
                            "It certifies the building is constructed per sanctioned plans and is safe for habitation",
                            "It is solely required for home loan sanctioning",
                            "It transfers the municipal property tax assessment to the state",
                            "It acts as the final agreement of sale"
                        ],
                        correctIndex: 0,
                        explanation: "The local municipal authority issues an Occupancy Certificate confirming the building complies with building codes and sanctioned plans."
                    }
                ]
            },
            "02": {
                tag: "SKILL PRACTICE",
                title: "Interactive Objection Simulator",
                status: "Trainer Live AI",
                trainer: { name: "Priya Mehta", role: "Master Coach · Certified Real Estate Trainer" },
                learner: { name: "Rahul Sharma", role: "Associate · Tier 1 Firm" },
                scenarios: [
                    {
                        id: 1,
                        title: "Price Drop Hesitation",
                        buyerPrompt: '"I really like the luxury unit, but I will wait 6 months. Market reports say prices might drop 10%."',
                        options: [
                            {
                                id: 'a',
                                label: "Capital Growth & Inventory Scarcity",
                                text: '"I understand market timing is key. However, in this prime micro-market, Grade-A inventory with OC has grown 8% YoY due to limited land supply. Waiting 6 months risks losing the preferred corner layout and paying higher per-sqft rates."',
                                score: 96,
                                feedback: "Mastery! Excellent use of micro-market data and inventory scarcity without exerting aggressive pressure.",
                                strengths: ["High Empathy", "Micro-Market Data", "Value Urgency"]
                            },
                            {
                                id: 'b',
                                label: "Inflation Hedge & Opportunity Cost",
                                text: '"Waiting carries rental outflows and construction cost escalation. Let us lock in the current pre-launch rate with developer price-protection guarantee."',
                                score: 84,
                                feedback: "Strong financial positioning! Addressing opportunity costs gives the buyer logical reassurance.",
                                strengths: ["Financial Rationale", "Risk Mitigation"]
                            },
                            {
                                id: 'c',
                                label: "Passive Delay Agreement",
                                text: '"Sure, let us stay in touch. I will call you after 6 months to check if prices have dropped."',
                                score: 38,
                                feedback: "Weak closing strategy. Conceding without clarifying buyer motivation loses the deal to competing advisors.",
                                strengths: ["Polite Tone"]
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Location & Infrastructure Hesitation",
                        buyerPrompt: '"The property is great, but the new metro link and arterial expressway are still 18 months away from completion."',
                        options: [
                            {
                                id: 'a',
                                label: "Infrastructure Arbitrage & Capital Upside",
                                text: '"That is precisely why entering today offers maximum capital appreciation. Once the metro is operational, entry prices typically appreciate by 20-25%. You are buying the infrastructure upside at current rates."',
                                score: 98,
                                feedback: "Superb! Framing infrastructural transition as an investment upside converts buyer fear into greed.",
                                strengths: ["Appreciation Framing", "Strategic Vision", "Market Conviction"]
                            },
                            {
                                id: 'b',
                                label: "Immediate Connectivity Alternatives",
                                text: '"The existing arterial bypass already connects to business hubs within 25 minutes during peak hours, so your daily commute is smooth today."',
                                score: 82,
                                feedback: "Good factual grounding on current commute times to eliminate daily friction.",
                                strengths: ["Practical Reality", "Commute Proof"]
                            },
                            {
                                id: 'c',
                                label: "Speculative Guarantee",
                                text: '"Do not worry, the government promised it will finish within 3 months regardless of reports."',
                                score: 25,
                                feedback: "Never give unverified timelines. Regulatory and governmental commitments must always be accurately presented.",
                                strengths: ["High Energy"]
                            }
                        ]
                    }
                ]
            },
            "03": {
                tag: "FUNCTIONAL SKILLS",
                title: "Capability Diagnostic & Peer Benchmark",
                percentile: "86th %ile",
                skills: [
                    {
                        id: 'comm',
                        label: 'Client High-Trust Communication',
                        val: 88,
                        peer: 72,
                        level: 'Expert',
                        desc: 'Active listening, executive presence, and framing complex high-ticket real estate options.'
                    },
                    {
                        id: 'market',
                        label: 'RERA & Micro-Market Intelligence',
                        val: 82,
                        peer: 68,
                        level: 'Advanced',
                        desc: 'Regulatory compliance, title verification, zoning bylaws, and capital appreciation analysis.'
                    },
                    {
                        id: 'nego',
                        label: 'High-Stakes Deal Negotiation',
                        val: 78,
                        peer: 55,
                        level: 'Advanced',
                        desc: 'Closing multi-crore transactions, structuring payment plans, and handling discount requests.'
                    },
                    {
                        id: 'lead',
                        label: 'HNW Lead Lifecycle & CRM Management',
                        val: 94,
                        peer: 75,
                        level: 'Mastery',
                        desc: 'Systematic pipeline hygiene, tailored buyer qualification, and recurring advisory referrals.'
                    }
                ]
            },
            "04": {
                tag: "DAILY HABITS",
                title: "30-Day Professional Consistency Matrix",
                streak: "14 Days",
                totalDays: 30,
                habits: [
                    {
                        id: 'h1',
                        label: 'Morning Micro-Market & Policy Review',
                        category: 'Intelligence',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20, 22, 23, 24, 27],
                        color: '#D5AA45'
                    },
                    {
                        id: 'h2',
                        label: '5 HNW Client Pipeline Follow-ups',
                        category: 'Sales Execution',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 21, 22, 25, 26, 28, 29],
                        color: '#6B8AFF'
                    },
                    {
                        id: 'h3',
                        label: 'CRM Updates & Opportunity Tracking',
                        category: 'System Discipline',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 20, 23, 26, 28, 30],
                        color: '#34D399'
                    },
                    {
                        id: 'h4',
                        label: 'RERA & Legal Case Law Catchup',
                        category: 'Continuous Learning',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 19, 21, 24, 27, 29],
                        color: '#A78BFA'
                    }
                ]
            }
        }
    }
};

export const dataTe = {
    title: "02_section",
    headline: {
        line1: "ఒకే ప్లాట్‌ఫారమ్.",
        line2: "సామర్థ్యాన్ని నిర్మించడానికి",
        line3: "నాలుగు శక్తివంతమైన",
        line4: "మార్గాలు."
    },
    subtitle: "రియల్ ఎస్టేట్ నిపుణులు అత్యున్నత నైపుణ్యాలను నేర్చుకోవడానికి, సాధన చేయడానికి మరియు నిరూపించుకోవడానికి రూపొందించబడింది.",
    tabs: [
        { id: '01', title: 'నాలెడ్జ్ బ్యాంక్', subtitle: '(క్విజ్‌లు)', desc: '12 ఇంటరాక్టివ్ ప్రశ్నలు మరియు తక్షణ స్కోరింగ్‌తో రియల్ ఎస్టేట్ పరిజ్ఞానాన్ని నిర్మించండి.' },
        { id: '02', title: 'నైపుణ్య సాధన', subtitle: '(ట్రైనర్ మాక్స్)', desc: 'లైవ్ సిమ్యులేటెడ్ ట్రైనర్ దృశ్యాలతో నిజ జీవిత అభ్యంతరాల పరిష్కారాన్ని సాధన చేయండి.' },
        { id: '03', title: 'ఫంక్షనల్ స్కిల్స్', subtitle: '(ప్రశ్నావళి)', desc: 'పరిశ్రమ సహచరులతో మీ నాన్-సేల్స్ సామర్థ్యాలను డైనమిక్ అసెస్‌మెంట్‌లతో సరిపోల్చండి.' },
        { id: '04', title: 'రోజువారీ అలవాట్లు', subtitle: '(హ్యాబిట్ ట్రాకర్)', desc: 'తేదీ పరిమితులు లేకుండా 30-రోజుల హ్యాబిట్ స్ట్రీక్ ట్రాకర్‌తో నిలకడను నిర్మించుకోండి.' }
    ],
    browser: {
        url: "fare.training",
        content: {
            "01": {
                tag: "నాలెడ్జ్ బ్యాంక్",
                title: "RERA & రియల్ ఎస్టేట్ మాస్టరీ",
                totalQuestions: 12,
                questions: [
                    {
                        id: 1,
                        question: "RERA ప్రకారం ప్రాజెక్ట్ వివరాలను వెల్లడించకపోవడం లేదా తప్పుడు సమాచారం ఇవ్వడం వల్ల డెవలపర్‌కు గరిష్ట జరిమానా ఎంత?",
                        options: [
                            "అంచనా ప్రాజెక్ట్ వ్యయంలో 5% వరకు",
                            "అంచనా ప్రాజెక్ట్ వ్యయంలో 10% వరకు",
                            "₹10 లక్షల చట్టబద్ధమైన జరిమానా",
                            "3 సంవత్సరాల నాన్-బెయిలబుల్ జైలు శిక్ష"
                        ],
                        correctIndex: 1,
                        explanation: "RERA సెక్షన్ 61 ప్రకారం ప్రాజెక్ట్ వివరాల ఉల్లంఘనకు అంచనా ప్రాజెక్ట్ వ్యయంలో 10% వరకు జరిమానా విధించవచ్చు."
                    },
                    {
                        id: 2,
                        question: "RERA చట్టం ప్రకారం సేల్స్ మరియు అగ్రిమెంట్ డాక్యుమెంటేషన్ కోసం 'కార్పెట్ ఏరియా' ఎలా నిర్వచించబడింది?",
                        options: [
                            "బాహ్య గోడలు మరియు ఓపెన్ టెర్రస్‌తో సహా ఉపయోగించగల విస్తీర్ణం",
                            "బాహ్య గోడలను మినహాయించి అపార్ట్‌మెంట్ నికర ఉపయోగించగల ఫ్లోర్ ఏరియా",
                            "బిల్ట్-అప్ ఏరియా మరియు కామన్ ఏరియా వాటా",
                            "సూపర్ బిల్ట్-అప్ ఏరియా మైనస్ ఓపెన్ బాల్కనీ"
                        ],
                        correctIndex: 1,
                        explanation: "కార్పెట్ ఏరియా అంటే బాహ్య గోడలు మరియు సర్వీస్ షాఫ్ట్‌లను మినహాయించి అపార్ట్‌మెంట్ యొక్క నికర ఉపయోగించగల ఫ్లోర్ ఏరియా."
                    },
                    {
                        id: 3,
                        question: "కొనుగోలుదారుల నుండి సేకరించిన నిధులలో కనీసం ఎంత శాతం ప్రత్యేక RERA ఎస్క్రో ఖాతాలో జమ చేయాలి?",
                        options: [
                            "మొత్తం వసూళ్లలో 50%",
                            "మొత్తం వసూళ్లలో 60%",
                            "మొత్తం వసూళ్లలో 70%",
                            "మొత్తం వసూళ్లలో 100%"
                        ],
                        correctIndex: 2,
                        explanation: "సెక్షన్ 4(2)(l)(D) ప్రకారం అలాటీల నుండి వసూలు చేసిన మొత్తంలో 70% ప్రత్యేక ఎస్క్రో ఖాతాలో జమ చేయాలి."
                    },
                    {
                        id: 4,
                        question: "RERA ప్రకారం నిర్మాణ లోపాల బాధ్యత వ్యవధి (డిఫెక్ట్ లయబిలిటీ పీరియడ్) ఎంత కాలం ఉంటుంది?",
                        options: [
                            "స్వాధీనం నుండి 1 సంవత్సరం",
                            "స్వాధీనం నుండి 3 సంవత్సరాలు",
                            "స్వాధీనం నుండి 5 సంవత్సరాలు",
                            "స్వాధీనం నుండి 10 సంవత్సరాలు"
                        ],
                        correctIndex: 2,
                        explanation: "సెక్షన్ 14(3) ప్రకారం స్వాధీనం అప్పగించిన తేదీ నుండి 5 సంవత్సరాల పాటు ఉచితంగా లోపాలను సరిదిద్దాలి."
                    },
                    {
                        id: 5,
                        question: "పట్టణ ఆస్తి అభివృద్ధిలో ఫ్లోర్ స్పేస్ ఇండెక్స్ (FSI) లేదా ఫ్లోర్ ఏరియా రేషియో (FAR) దేనిని సూచిస్తుంది?",
                        options: [
                            "మొత్తం ప్లాట్ విస్తీర్ణానికి మరియు మొత్తం కవర్డ్ ఫ్లోర్ ఏరియాకి గల నిష్పత్తి",
                            "రెసిడెన్షియల్ యూనిట్లకు పార్కింగ్ స్థలాల నిష్పత్తి",
                            "ఎకరానికి అవసరమైన గ్రీన్ ఏరియా శాతం",
                            "గరిష్ట భవన ఎత్తు పరిమితి"
                        ],
                        correctIndex: 0,
                        explanation: "FSI/FAR అనేది ప్లాట్ విస్తీర్ణానికి అనుగుణంగా అన్ని అంతస్తులలో అనుమతించబడిన గరిష్ట కవర్డ్ ఏరియా నిష్పత్తి."
                    },
                    {
                        id: 6,
                        question: "టైటిల్ డ్యూ డిలిజెన్స్ సమయంలో ఎన్‌కంబరెన్స్ సర్టిఫికేట్ (EC) పొందడం యొక్క ప్రధాన చట్టపరమైన లక్ష్యం ఏమిటి?",
                        options: [
                            "మున్సిపల్ ఆస్తి పన్ను చెల్లింపులను ధృవీకరించడానికి",
                            "నమోదైన లావాదేవీలు, తనఖాలు మరియు చట్టపరమైన క్లెయిమ్‌లను గుర్తించడానికి",
                            "భవన నిర్మాణ ప్లాన్ ఆమోదాలను ధృవీకరించడానికి",
                            "తక్షణ నీటి మరియు విద్యుత్ కనెక్షన్లు పొందడానికి"
                        ],
                        correctIndex: 1,
                        explanation: "ఆస్తిపై నమోదైన అన్ని లావాదేవీలు, విక్రయాలు, లీజులు లేదా తనఖాలను EC ద్వారా తెలుసుకోవచ్చు."
                    },
                    {
                        id: 7,
                        question: "భారతీయ ఆదాయపు పన్ను చట్టంలోని సెక్షన్ 54 కింద మూలధన లాభాల పన్ను మినహాయింపు దేనిలో పెట్టుబడి పెట్టడం ద్వారా పొందవచ్చు?",
                        options: [
                            "కమర్షియల్ ఆఫీస్ కాంప్లెక్స్‌లు",
                            "నిర్దేశిత గడువులోపు మరొక నివాస గృహ ఆస్తి",
                            "లిస్టెడ్ REITs",
                            "బంగారు బాండ్లు మరియు కమోడిటీలు"
                        ],
                        correctIndex: 1,
                        explanation: "నివాస ఆస్తి అమ్మకం ద్వారా వచ్చిన దీర్ఘకాలిక మూలధన లాభాలను మరొక నివాస ఆస్తిలో పెట్టుబడి పెడితే సెక్షన్ 54 వర్తిస్తుంది."
                    },
                    {
                        id: 8,
                        question: "₹50 లక్షల కంటే ఎక్కువ విలువైన స్థిరాస్తిని కొనుగోలు చేసేటప్పుడు సెక్షన్ 194-IA కింద తప్పనిసరి TDS తగ్గింపు రేటు ఎంత?",
                        options: [
                            "మొత్తం విక్రయ పరిశీలనలో 0.5%",
                            "మొత్తం విక్రయ పరిశీలనలో 1.0%",
                            "మొత్తం విక్రయ పరిశీలనలో 2.0%",
                            "మొత్తం విక్రయ పరిశీలనలో 5.0%"
                        ],
                        correctIndex: 1,
                        explanation: "సెక్షన్ 194-IA ప్రకారం ₹50 లక్షలు దాటిన ఆస్తిపై కొనుగోలుదారుడు 1% TDS మినహాయించాలి."
                    },
                    {
                        id: 9,
                        question: "భారతదేశంలో స్పష్టమైన టైటిల్ డ్యూ డిలిజెన్స్ కోసం ప్రామాణికంగా ఎన్ని సంవత్సరాల టైటిల్ సెర్చ్ సిఫార్సు చేయబడింది?",
                        options: [
                            "5 నుండి 7 సంవత్సరాలు",
                            "12 నుండి 15 సంవత్సరాలు",
                            "30 నుండి 40 సంవత్సరాలు",
                            "100 సంవత్సరాలు"
                        ],
                        correctIndex: 2,
                        explanation: "స్పష్టమైన మరియు వివాద రహిత యాజమాన్య హక్కులను స్థాపించడానికి 30 నుండి 40 సంవత్సరాల టైటిల్ సెర్చ్ ప్రామాణికం."
                    },
                    {
                        id: 10,
                        question: "FEMA మరియు RBI నిబంధనల ప్రకారం ఒక NRI ఏ రకమైన ఆస్తిని కొనుగోలు చేయడానికి చట్టబద్ధంగా అనుమతి లేదు?",
                        options: [
                            "మెట్రో నగరాల్లో లగ్జరీ పెంట్‌హౌస్‌లు",
                            "వ్యవసాయ భూమి, తోటలు లేదా ఫామ్‌హౌస్‌లు",
                            "గ్రేడ్-A కమర్షియల్ ఆఫీస్ స్థలాలు",
                            "రిటైల్ షాపింగ్ మాల్ యూనిట్లు"
                        ],
                        correctIndex: 1,
                        explanation: "RBI/FEMA నిబంధనల ప్రకారం ఎన్నారైలు వ్యవసాయ భూమి, తోటలు లేదా ఫామ్‌హౌస్‌లను కొనుగోలు చేయలేరు."
                    },
                    {
                        id: 11,
                        question: "సాధారణ జాయింట్ డెవలప్‌మెంట్ అగ్రిమెంట్ (JDA) లో భూయజమాని బిల్డర్‌కు ఏమి అందిస్తారు?",
                        options: [
                            "నిర్మాణ కార్మికులు మరియు మెటీరియల్",
                            "నిర్మిత ప్రాంతం లేదా ఆదాయ వాటాకు బదులుగా భూమి అభివృద్ధి హక్కులు",
                            "ప్రాజెక్ట్ అప్పుకు ప్రత్యక్ష తనఖా సెక్యూరిటీ",
                            "ఆర్కిటెక్చరల్ డిజైన్ మరియు బ్రాండ్ లైసెన్సింగ్"
                        ],
                        correctIndex: 1,
                        explanation: "JDA లో భూ యజమాని భూమిని మరియు అభివృద్ధి హక్కులను బిల్డర్‌కు వాటా ప్రాతిపదికన అందిస్తారు."
                    },
                    {
                        id: 12,
                        question: "కొనుగోలుదారుడు చట్టబద్ధంగా నూతన భవనంలోకి ప్రవేశించడానికి ఆక్యుపెన్సీ సర్టిఫికేట్ (OC) ఎందుకు తప్పనిసరి?",
                        options: [
                            "భవనం ఆమోదిత ప్లాన్ల ప్రకారం నిర్మించబడిందని, నివాసానికి సురక్షితమని ధృవీకరిస్తుంది",
                            "హోమ్ లోన్ మంజూరు కోసం మాత్రమే అవసరం",
                            "మున్సిపల్ పన్నును రాష్ట్రానికి బదిలీ చేస్తుంది",
                            "ఇది తుది సేల్ అగ్రిమెంట్‌గా పనిచేస్తుంది"
                        ],
                        correctIndex: 0,
                        explanation: "స్థానిక మున్సిపల్ అథారిటీ భవనం నిబంధనల ప్రకారం సురక్షితంగా పూర్తయిందని ధృవీకరిస్తూ OC జారీ చేస్తుంది."
                    }
                ]
            },
            "02": {
                tag: "నైపుణ్య సాధన",
                title: "ఇంటరాక్టివ్ అభ్యంతరాల సిమ్యులేటర్",
                status: "ట్రైనర్ లైవ్ AI",
                trainer: { name: "ప్రియా మెహతా", role: "మాస్టర్ కోచ్ · సర్టిఫైడ్ రియల్ ఎస్టేట్ ట్రైనర్" },
                learner: { name: "రాహుల్ శర్మ", role: "అసోసియేట్ · టైర్ 1 సంస్థ" },
                scenarios: [
                    {
                        id: 1,
                        title: "ధర తగ్గుదల సంకోచం",
                        buyerPrompt: '"లగ్జరీ యూనిట్ బాగుంది, కానీ 6 నెలలు ఆగుతాను. మార్కెట్ ధరలు 10% తగ్గుతాయని రిపోర్టులు చెబుతున్నాయి."',
                        options: [
                            {
                                id: 'a',
                                label: "క్యాపిటల్ గ్రోత్ & ఇన్వెంటరీ కొరత",
                                text: '"మార్కెట్ సమయం ముఖ్యమని నాకు అర్థమైంది. అయితే ఈ ప్రైమ్ మైక్రో-మార్కెట్లో OC ఉన్న గ్రేడ్-A ప్రాపర్టీలు పరిమిత లభ్యత వల్ల సంవత్సరానికి 8% పెరిగాయి. 6 నెలలు ఆగితే నచ్చిన కార్నర్ యూనిట్ కోల్పోయే ప్రమాదం ఉంది."',
                                score: 96,
                                feedback: "అద్భుతం! ఒత్తిడి లేకుండా మైక్రో-మార్కెట్ డేటా మరియు ఇన్వెంటరీ కొరతను సమర్థవంతంగా ఉపయోగించారు.",
                                strengths: ["అధిక సానుభూతి", "మైక్రో-మార్కెట్ డేటా", "విలువ ప్రాధాన్యత"]
                            },
                            {
                                id: 'b',
                                label: "ద్రవ్యోల్బణ రక్షణ & అవకాశ వ్యయం",
                                text: '"వేచి ఉండడం వల్ల అద్దె ఖర్చులు మరియు నిర్మాణ వ్యయాలు పెరుగుతాయి. డెవలపర్ ధర-రక్షణ హామీతో ప్రస్తుత రేటును లాక్ చేసుకోండి."',
                                score: 84,
                                feedback: "బలమైన ఆర్థిక విశ్లేషణ! కొనుగోలుదారునికి తార్కిక హామీ ఇస్తుంది.",
                                strengths: ["ఆర్థిక విశ్లేషణ", "రిస్క్ నివారణ"]
                            },
                            {
                                id: 'c',
                                label: "నిష్క్రియాత్మక అంగీకారం",
                                text: '"సరే, టచ్‌లో ఉందాం. ధరలు తగ్గాయో లేదో 6 నెలల తర్వాత కాల్ చేస్తాను."',
                                score: 38,
                                feedback: "బలహీనమైన ముగింపు వ్యూహం. క్లయింట్‌ను పోటీదారులకు కోల్పోయే ప్రమాదం ఉంది.",
                                strengths: ["మర్యాదపూర్వక సంభాషణ"]
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "లొకేషన్ & ఇన్‌ఫ్రాస్ట్రక్చర్ సంకోచం",
                        buyerPrompt: '"ప్రాపర్టీ బాగుంది, కానీ కొత్త మెట్రో మరియు ఎక్స్‌ప్రెస్‌వే పూర్తి కావడానికి ఇంకా 18 నెలలు పడుతుంది."',
                        options: [
                            {
                                id: 'a',
                                label: "ఇన్‌ఫ్రాస్ట్రక్చర్ అడ్వాంటేజ్ & క్యాపిటల్ పెరుగుదల",
                                text: '"ఈరోజే ప్రవేశించడం గరిష్ట లాభాన్ని ఇస్తుంది. మెట్రో ప్రారంభమైన తర్వాత ధరలు సాధారణంగా 20-25% పెరుగుతాయి. మీరు ప్రస్తుత రేట్లకే భవిష్యత్ ప్రయోజనాన్ని పొందుతున్నారు."',
                                score: 98,
                                feedback: "అద్భుతం! ఇన్‌ఫ్రాస్ట్రక్చర్ పరివర్తనను పెట్టుబడి అవకాశంగా మార్చడం చాలా సమర్థవంతమైన వ్యూహం.",
                                strengths: ["విలువ పెరుగుదల దృక్పథం", "వ్యూహాత్మక దృష్టి", "మార్కెట్ నమ్మకం"]
                            },
                            {
                                id: 'b',
                                label: "ప్రస్తుత కనెక్టివిటీ ప్రత్యామ్నాయాలు",
                                text: '"ప్రస్తుత బైపాస్ రోడ్డు ద్వారా పీక్ అవర్స్‌లో కూడా 25 నిమిషాల్లో బిజినెస్ హబ్‌లకు చేరుకోవచ్చు."',
                                score: 82,
                                feedback: "రోజువారీ ప్రయాణ సమయంపై స్పష్టమైన అవగాహన కల్పించడం మంచిది.",
                                strengths: ["వాస్తవికత", "ప్రయాణ సమయ హామీ"]
                            },
                            {
                                id: 'c',
                                label: "నిరాధారమైన హామీ",
                                text: '"కంగారు పడకండి, 3 నెలల్లో ప్రభుత్వం పూర్తి చేస్తుందని హామీ ఇచ్చింది."',
                                score: 25,
                                feedback: "ఎప్పుడూ ధృవీకరించని సమయాలను చెప్పవద్దు. వాస్తవ వివరాలు మాత్రమే ఇవ్వాలి.",
                                strengths: ["ఎనర్జిటిక్"]
                            }
                        ]
                    }
                ]
            },
            "03": {
                tag: "ఫంక్షనల్ స్కిల్స్",
                title: "సామర్థ్య నిర్ధారణ & పీర్ బెంచ్‌మార్క్",
                percentile: "86వ పర్సంటైల్",
                skills: [
                    {
                        id: 'comm',
                        label: 'క్లయింట్ హై-ట్రస్ట్ కమ్యూనికేషన్',
                        val: 88,
                        peer: 72,
                        level: 'ఎక్స్‌పర్ట్',
                        desc: 'చురుకైన వినడం, ఎగ్జిక్యూటివ్ ప్రెజెన్స్ మరియు సంక్లిష్టమైన రియల్ ఎస్టేట్ అంశాల వివరణ.'
                    },
                    {
                        id: 'market',
                        label: 'RERA & మైక్రో-మార్కెట్ ఇంటెలిజెన్స్',
                        val: 82,
                        peer: 68,
                        level: 'అడ్వాన్స్‌డ్',
                        desc: 'రెగ్యులేటరీ నిబంధనలు, టైటిల్ వెరిఫికేషన్ మరియు క్యాపిటల్ అప్రిసియేషన్ విశ్లేషణ.'
                    },
                    {
                        id: 'nego',
                        label: 'హై-స్టేక్స్ డీల్ నెగోషియేషన్',
                        val: 78,
                        peer: 55,
                        level: 'అడ్వాన్స్‌డ్',
                        desc: 'భారీ లావాదేవీలను ముగించడం, పేమెంట్ ప్లాన్‌లను రూపొందించడం మరియు డిస్కౌంట్ నిర్వహణ.'
                    },
                    {
                        id: 'lead',
                        label: 'HNW లీడ్ లైఫ్‌సైకిల్ & CRM మేనేజ్‌మెంట్',
                        val: 94,
                        peer: 75,
                        level: 'మాస్టరీ',
                        desc: 'పైప్‌లైన్ నిర్వహణ, అర్హులైన కొనుగోలుదారుల ఎంపిక మరియు రెఫరల్స్ పెంపు.'
                    }
                ]
            },
            "04": {
                tag: "రోజువారీ అలవాట్లు",
                title: "30-రోజుల ప్రొఫెషనల్ కన్సిస్టెన్సీ మ్యాట్రిక్స్",
                streak: "14 రోజులు",
                totalDays: 30,
                habits: [
                    {
                        id: 'h1',
                        label: 'ఉదయం మైక్రో-మార్కెట్ & పాలసీ సమీక్ష',
                        category: 'ఇంటెలిజెన్స్',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20, 22, 23, 24, 27],
                        color: '#D5AA45'
                    },
                    {
                        id: 'h2',
                        label: '5 HNW క్లయింట్ పైప్‌లైన్ ఫాలో-అప్‌లు',
                        category: 'సేల్స్ ఎగ్జిక్యూషన్',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 21, 22, 25, 26, 28, 29],
                        color: '#6B8AFF'
                    },
                    {
                        id: 'h3',
                        label: 'CRM అప్‌డేట్‌లు & అవకాశాల ట్రాకింగ్',
                        category: 'సిస్టమ్ డిసిప్లిన్',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 20, 23, 26, 28, 30],
                        color: '#34D399'
                    },
                    {
                        id: 'h4',
                        label: 'RERA & చట్టపరమైన కేసుల పరిశీలన',
                        category: 'నిరంతర అభ్యాసం',
                        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 19, 21, 24, 27, 29],
                        color: '#A78BFA'
                    }
                ]
            }
        }
    }
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;

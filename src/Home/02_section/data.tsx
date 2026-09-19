export const data = {
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
        url: "app.fare.academy",
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

/** @type {Page[]} */
export const pages = ["home","roadmap","tokenomics","team","faqs"]

/** @type {Phase[]} */
export const phases = [
    {
        season: "oct 2021",
        tasks: [
            { description: "Fair launch with balance limit of 72m $KIOO", completed: true },
            { description: "Listing on DEXes", completed: true },
            { description: "Nomics listing", completed: true }
        ]
    },
    {
        season: "nov 2021",
        tasks: [
            { description: "Airdrop for addresses without KIOO", completed: false },
            { description: "Website launch", completed: false },
            { description: "KIOO telegram bot", completed: false },
            { description: "Contract ownership renounced", completed: false },
            { description: "Marketing campaign 1", completed: false }
        ]
    },
    {
        season: "dec 2021",
        tasks: [
            { description: "NFT project X reveal", completed: false },
            { description: "Pool & farming on DEXes", completed: false },
            { description: "Liquidity startegy", completed: false }
        ]
    },
    {
        season: "q1-q2 2022",
        tasks: [
            { description: "NFT project X first items", completed: false },
            { description: "Startegic partnership", completed: false },
            { description: "Marketing campaign 2", completed: false }
        ]
    },
    {
        season: "q3-q4 2022",
        tasks: [
            { description: "Micro lending/borrowing DApps", completed: false },
            { description: "More to be announced", completed: false }
        ]
    }
]

/** @type {Supply[]} */
export const supplies = [
    {
        type : "max",
        value : 72000000
    },
    {
        type : "circulating",
        value : 69970                
    },
    {
        type : "reflection",
        value : 6.090,
        percent : 8.46
    },
    {
        type : "burn",
        value : 2.030,
        percent : 2.82
    },
    {
        type : "liquidity",
        value : 5.6591,
        percent : 8.46
    }

]

/** @type {Employee[]} */
export const team = [
    {
        name: "Esther Howard",
        designation: "CEO",
        imgSrc: "/images/team/Esther Howard.png"
    },
    {
        name: "Wade Warren",
        designation: "COO",
        imgSrc: "/images/team/Wade Warren.png"
    },
    {
        name: "Annette Black",
        designation: "CTO",
        imgSrc: "/images/team/Annette Black.png"
    },
    {
        name: "Theresa Webb",
        designation: "Lead Web Engineer",
        imgSrc: "/images/team/Theresa Webb 1.png"
    },
    {
        name: "Theresa Webb",
        designation: "Game Developer",
        imgSrc: "/images/team/Theresa Webb.png"
    },
    {
        name: "Darlene Robertson",
        designation: "Product Designer",
        imgSrc: "/images/team/Darlene Robertson.png"
    },
]


/** @type {Faq[]}  */
export const faqs = [
    {
        question: "Is there a free trail available?",
        answer: "Yes, you can try us for free 15 days, If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up."
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can try us for free 15 days, If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up."
    },
    {
        question: "What is your cancellation policy?",
        answer: "Yes, you can try us for free 15 days, If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up."
    },
    {
        question: "How does NFT works?",
        answer: "Yes, you can try us for free 15 days, If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up."
    },
    {
        question: "How do i change my account email?",
        answer: "Yes, you can try us for free 15 days, If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up."
    },
]
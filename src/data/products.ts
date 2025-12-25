export interface Product {
    id: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    price: number;
    image: string;
    benefits: string[];
    highlights: string[]; // Key selling points displayed below title
    recommendedFor: string;
    usageSteps: string[];
}

export const products: Product[] = [
    {
        id: "numerology-remedy-kit",
        name: "Numerology Remedy Kit",
        shortDescription: "A curated set of crystals and symbols aligned with your personal numbers.",
        fullDescription: "This custom-assembled kit utilizes the vibrational energy of specific crystals and yantras to balance the planetary influences in your life. Based on your birth chart, we select the exact tools you need to enhance positive frequencies and mitigate challenges.",
        price: 99,
        image: "/numerology_remedy_kit.png",
        highlights: [
            "Hand-assembled Crystal Set",
            "Energized Before Delivery",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Balances planetary energies",
            "Enhances focus and clarity",
            "Customized to your birth chart"
        ],
        recommendedFor: "Individuals facing recurring obstacles or seeking to amplify their personal energy field.",
        usageSteps: [
            "Place the yantra in your meditation space or workplace.",
            "Carry the specific crystal with you during important meetings.",
            "Cleanse the items weekly using the provided sage or moonlight."
        ]
    },
    {
        id: "name-correction-report",
        name: "Name Correction Report",
        shortDescription: "Detailed analysis and vibration adjustment for your professional name.",
        fullDescription: "Your name is a mantra that you repeat every day. This comprehensive report analyzes your current name's vibration and suggests precise spelling adjustments to align it with your life path and career goals for maximum success.",
        price: 149,
        image: "/name_correction_report.png",
        highlights: [
            "Detailed Vibration Analysis",
            "Personalized Spelling Options",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Aligns name with life path",
            "Boosts professional brand",
            "Harmonizes personal vibration"
        ],
        recommendedFor: "Professionals, entrepreneurs, and artists seeking to elevate their public image and attract right opportunities.",
        usageSteps: [
            "Review the proposed spelling variations.",
            "Select the one that resonates most with your intuition.",
            "Begin using the new spelling on social media and professional signatures for 41 days."
        ]
    },
    {
        id: "lucky-number-guidance",
        name: "Lucky Number Guidance",
        shortDescription: "Your personal cheat-sheet for dates, vehicle numbers, and investments.",
        fullDescription: "Stop guessing. This guidance sheet provides you with your permanently lucky numbers, favorable dates for each month, and guidelines for choosing phone numbers, vehicle plates, or house numbers that support your growth.",
        price: 49,
        image: "/lucky_number_guidance.png",
        highlights: [
            "Lifetime Lucky Numbers",
            "Monthly Date Guide",
            "Instant Digital Delivery",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Daily decision support",
            "Vehicle & property selection",
            "Monthly favorable dates"
        ],
        recommendedFor: "Anyone who wants to make everyday decisions with confidence and numeric alignment.",
        usageSteps: [
            "Keep the digital card on your phone for quick reference.",
            "Check the favorable dates before scheduling important events.",
            "Use your primary lucky numbers for passwords, pins, and ticket selection."
        ]
    },
    {
        id: "business-card-design",
        name: "Numerology Business Card",
        shortDescription: "Design guidelines optimized for your business number vibration.",
        fullDescription: "Your business card is your energy handshake. This service provides layout, color, and font recommendations based on your company's numerology to ensure your first impression attracts abundance and trust.",
        price: 79,
        image: "/business_card_design.png",
        highlights: [
            "Numerology-Aligned Layouts",
            "Success Color Palette",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Attracts ideal clients",
            "Enhances brand authority",
            "Aligned with success numbers"
        ],
        recommendedFor: "Business owners and freelancers wanting every touchpoint to resonate with success.",
        usageSteps: [
            "Submit your business details and current logo.",
            "Receive 3 layout options with specific numerological dimensions.",
            "Use the guide to print your new high-vibrational cards."
        ]
    },
    {
        id: "signature-analysis",
        name: "Signature Analysis",
        shortDescription: "Optimize your signature to attract wealth and stability.",
        fullDescription: "Your signature reveals your public image and financial flow. We analyze your current signature's loops, slant, and underline to identify blocks, and design a new, powerful signature that commands respect and invites prosperity.",
        price: 89,
        image: "/signature_analysis_report.png",
        highlights: [
            "Graphology & Numerology",
            "Wealth-Attracting Design",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Improves financial flow",
            "Project confidence and authority",
            "Removes hidden subconscious blocks"
        ],
        recommendedFor: "Executives, leaders, and anyone signing important contracts.",
        usageSteps: [
            "Upload a sample of your current signature.",
            "Practice the new recommended signature daily for 21 days.",
            "Update your bank and legal documents once the new signature becomes natural."
        ]
    },
    {
        id: "wealth-bracelet",
        name: "Wealth Attraction Bracelet",
        shortDescription: "Premium Citrine and Pyrite bracelet energized for financial growth.",
        fullDescription: "Hand-strung with high-grade natural Citrine and Pyrite beads, this bracelet acts as a magnet for opportunity. Each piece is cleansed and energized with specific wealth mantras before shipping.",
        price: 129,
        image: "/wealth_crystal_bracelet.png",
        highlights: [
            "Natural Citrine & Pyrite",
            "Energized Before Delivery",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Attracts financial opportunities",
            "Boosts confidence in business",
            "Clears money blocks"
        ],
        recommendedFor: "Individuals focusing on career growth, sales, or business expansion.",
        usageSteps: [
            "Wear on your left hand (receiving hand) during business hours.",
            "Remove while sleeping to allow your energy to reset.",
            "Re-energize in sunlight for 1 hour once a month."
        ]
    },
    {
        id: "mantra-audio",
        name: "Personalized Mantra Audio",
        shortDescription: "Custom-recorded mantra chanting for your specific planetary remediation.",
        fullDescription: "Sound is energy. Receieve a high-quality audio recording of the specific Vedic mantra calculated to heal your weakest planetary influence. Recorded by expert priests with perfect pronunciation/diction.",
        price: 59,
        image: "/personalized_mantra_audio.png",
        highlights: [
            "Studio Quality Audio",
            "Vedic Priest Recording",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Deep subconscious healing",
            "Stress reduction",
            "Planetary alignment"
        ],
        recommendedFor: "Those who find it difficult to chant themselves or need passive remediation.",
        usageSteps: [
            "Listen for 15 minutes each morning upon waking.",
            "Use headphones for maximum vibrational impact.",
            "Play quietly in the background while working for focus."
        ]
    },
    {
        id: "relationship-yantra",
        name: "Harmony Yantra Plate",
        shortDescription: "Copper engraved Yantra to heal and strengthen relationships.",
        fullDescription: "A geometrically precise Yantra etched on pure copper. Designed to balance Venusian energy, fostering love, understanding, and harmony in your home or marriage.",
        price: 119,
        image: "/relationship_harmony_yantra.png",
        highlights: [
            "Hand-crafted Pure Copper Yantra",
            "Energized Before Delivery",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Reduces domestic conflict",
            "Attracts love and affection",
            "Harmonizes home environment"
        ],
        recommendedFor: "Couples facing discord or singles seeking a meaningful connection.",
        usageSteps: [
            "Place in the South-East corner of your bedroom.",
            "Offer fresh petals or light incense near it on Fridays.",
            "Meditate on the center point for 5 minutes when seeking clarity in love."
        ]
    },
    {
        id: "vehicle-guide",
        name: "Vehicle Number Selector",
        shortDescription: "Guide to choosing a lucky license plate for travel safety.",
        fullDescription: "Your vehicle carries you through life. Ensure it matches your vibration to prevent accidents and mechanical failures. This guide helps you select the perfect new license plate number or remedy an existing one.",
        price: 39,
        image: "/vehicle_number_guide.png",
        highlights: [
            "Safety & Success Check",
            "Instant Calculation",
            "Expert Guidance Included",
            "Trusted by 5000+ Clients Worldwide"
        ],
        benefits: [
            "Enhances travel safety",
            "Reduces mechanical breakdowns",
            "Lucky number alignment"
        ],
        recommendedFor: "Anyone buying a new car or facing frequent vehicle issues.",
        usageSteps: [
            "Use the calculation table to check potential plate numbers.",
            "Apply the suggested small sticker remedy if you cannot change an existing plate.",
            "Keep the guide for future vehicle purchases."
        ]
    }
];

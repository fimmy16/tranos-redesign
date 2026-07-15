import {
  CableClampProduct,
  CableGlandFamily,
  CableGlandValueProp,
  CableTraySpec,
  EquipmentRackProduct,
} from "@/types/product";

export const cableGlandsIntro: string[] = [
  "At Tranos, we manufacture and supply high-integrity cable glands engineered to provide superior strain relief, exceptional environmental sealing, and robust mechanical protection for electrical installations. As a core part of our Cable Management & Support System (alongside Tranos Trac, Tranos Eris, and Tranos Ellis), our cable glands ensure secure entry points for your enclosures, instruments, and industrial panels.",
  "We design and deliver high-performance cable entry solutions engineered to meet international safety and ingress standards in the most demanding environments.",
];

export const cableGlandsValueProps: CableGlandValueProp[] = [
  {
    title: "Engineering Excellence",
    description:
      "As Nigeria's leading engineering and manufacturing company, our products are built to withstand rigorous industrial demands.",
  },
  {
    title: "Complete System Integration",
    description:
      "Designed to seamlessly integrate with our broader cable tray, ladder, and support systems (Tranos Trac, Eris, and Ellis).",
  },
  {
    title: "Certified Protection",
    description:
      "Our glands meet rigid international standards for ingress protection (up to IP68) and hazardous area safety (ATEX).",
  },
];

export const cableTraySurfaceTreatments: { name: string; useCase: string }[] = [
  {
    name: "Pre-galvanized",
    useCase: "Indoor and partly outdoor non-heated areas such as office buildings, warehousing, and sports facilities.",
  },
  {
    name: "Pre-galvanized + painting",
    useCase: "Indoor and partly outdoor non-heated areas such as shops and office buildings.",
  },
  {
    name: "Hot-dip galvanized",
    useCase: "Indoor and outdoor environments with average to high environmental corrosion and high humidity or airborne pollution (urban and light industrial areas).",
  },
  {
    name: "Zinc pox",
    useCase: "Indoor and outdoor environments with very high industrial environmental corrosion and high humidity or aggressive atmospheres.",
  },
  {
    name: "Stainless steel, AISI 316L",
    useCase: "Indoor and outdoor environments for heavy industries, coastal and offshore areas, purifying plants with very high marine corrosion and near-permanent condensation.",
  },
];

export const cableTraySpec: CableTraySpec = {
  model: "200x100 Cable Tray",
  material: "Galvanized Steel or Stainless Steel",
  width: "70mm to 600mm",
  height: "50mm to 100mm load depth",
  finish: "Hot-dip galvanized or powder-coated for corrosion resistance",
  mounting: "Pre-punched slots for easy installation and configuration",
  compliance: "Adheres to IEC and ISO standards for cable tray systems",
};

export const equipmentRacks: EquipmentRackProduct[] = [
  {
    id: "eris-rack",
    name: "Tranos ERIS Equipment Rack & Instrumentation Support",
    description: [
      "The Tranos ERIS Rack is durable, easy to assemble, versatile in application, and ideal for both indoor & outdoor electrical component mounting applications.",
      "A complete unit features single or double slot rungs with integrated cable management features and can be supplied in pre-assembled or flat-pack forms.",
      "They are reconfigurable and adaptable to any application and come in standard or customized sizes.",
    ],
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Tranos ERIS equipment rack and instrumentation support",
    datasheetHref: "/documents/tranos-eris-rack-datasheet.pdf",
  },
];

export const cableClampProducts: CableClampProduct[] = [
  {
    id: "tranos-ellis-cable-clamp",
    name: "Tranos Ellis Cable Guide Clamp",
    description:
      "Designed, developed, tested, and manufactured following IEC 61914 (cable cleats for electrical installations). The Cable Guide Clamp is a unique combination of cable guide and cable clamp, installed along the cable route in place of rollers. Its fully gimballed mounting and slippery nylon construction minimize friction.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Tranos Ellis cable guide clamp",
  },
  {
    id: "tranos-ellis-cable-cleat",
    name: "Tranos Ellis Cable Cleat",
    description:
      "Secures cable to the tray or ladder and prevents damage that might occur in situations of short-circuiting in electrical systems.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Tranos Ellis cable cleat",
  },
];

export const cableGlandFamilies: CableGlandFamily[] = [
  {
    id: "nickel-brass-ip54",
    name: "Nickel-Plated Brass Cable Glands (IP54)",
    description:
      "Designed for standard industrial applications, these glands offer excellent mechanical strength, durability, and corrosion resistance.",
    specLabel: "Ingress Protection",
    specValue: "IP54",
    bestFor:
      "Indoor machinery, industrial control panels, and areas requiring reliable strain relief without extreme moisture exposure.",
    imageSrc: "/images/products/cable-glands/nickel-plated-brass-cable-gland.jpg",
    imageAlt: "Nickel-plated brass cable gland",
  },
  {
    id: "nickel-brass-ip68",
    name: "Nickel-Plated Brass Cable Glands (IP68)",
    description:
      "Built for environments requiring complete protection against dust and continuous immersion in water.",
    specLabel: "Ingress Protection",
    specValue: "IP68 (Waterproof and Dust-tight)",
    bestFor:
      "Outdoor installations, heavy industrial machinery, and washdown areas requiring a highly resilient seal.",
    imageSrc: "/images/products/cable-glands/nickel-plated-brass-cable-gland.jpg",
    imageAlt: "Nickel-plated brass cable gland",
  },
  {
    id: "stainless-aisi-303",
    name: "Stainless Steel Cable Glands (AISI 303)",
    description:
      "An excellent mid-grade stainless steel option offering high mechanical toughness, wear resistance, and good corrosion protection.",
    specLabel: "Material",
    specValue: "AISI 303 Stainless Steel",
    bestFor:
      "Food processing equipment, pharmaceutical environments, and light chemical processing plants.",
    imageSrc: "/images/products/cable-glands/stainless-steel-cable-gland.jpg",
    imageAlt: "Stainless steel cable gland",
  },
  {
    id: "stainless-aisi-316l",
    name: "Stainless Steel Cable Glands (AISI 316L)",
    description:
      "Our premium grade stainless steel glands, offering maximum resistance to chloride pitting, harsh acids, and severe industrial atmospheres.",
    specLabel: "Material",
    specValue: "AISI 316L (Low-Carbon Marine Grade)",
    bestFor:
      "Marine engineering, offshore oil & gas platforms, and highly corrosive chemical processing plants.",
    imageSrc: "/images/products/cable-glands/stainless-steel-cable-gland.jpg",
    imageAlt: "Stainless steel cable gland",
  },
  {
    id: "polyamide-locknut",
    name: "Polyamide Cable Glands (with Complete Locknut)",
    description:
      "Lightweight, highly flexible, and completely non-corrosive. Engineered for quick installation and reliable sealing. Comes complete with a matching locknut for immediate, secure mounting.",
    specLabel: "Material",
    specValue: "Premium Polyamide (Nylon)",
    bestFor: "Telecommunications, commercial distribution boards, and non-metallic enclosures.",
    imageSrc: "/images/products/cable-glands/polyamide-cable-gland.jpg",
    imageAlt: "Polyamide cable gland with complete locknut",
    codeTable: [
      { product: "Polyamide gland PG07 3+6.5", code: "6018-P07" },
      { product: "Polyamide gland PG09 3.6+8", code: "6018-P09" },
      { product: "Polyamide gland PG11 4.5+10", code: "6018-P11" },
      { product: "Polyamide gland M12 3.5+7", code: "6018-P12" },
      { product: "Polyamide gland M16 7+14", code: "6018-P16" },
      { product: "Polyamide gland M20 6+13", code: "6018-P20" },
      { product: "Polyamide gland M25 9+17", code: "6018-P25" },
      { product: "Polyamide gland M32 15+21", code: "6018-P32" },
    ],
  },
  {
    id: "atex-explosion-proof",
    name: "ATEX (Explosion-Proof) Cable Glands",
    description:
      "Engineered specifically for hazardous locations where combustible gases, vapors, or dust are present. These glands safely contain internal ignition hazards.",
    specLabel: "Certification",
    specValue: "ATEX / Explosion-Proof",
    bestFor: "Refineries, petrochemical facilities, gas metering stations, and hazardous zones.",
    imageSrc: "/images/products/cable-glands/atex-cable-gland.jpg",
    imageAlt: "ATEX explosion-proof cable gland with armor clamping ring",
  },
];

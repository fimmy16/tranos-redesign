import {
  CableClampProduct,
  CableGlandFamily,
  CableTraySpec,
  EquipmentRackProduct,
} from "@/types/product";

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
    id: "ellis-cable-clamp",
    name: "Ellis Cable Guide Clamp",
    description:
      "Designed, developed, tested, and manufactured following IEC 61914 (cable cleats for electrical installations). The Cable Guide Clamp is a unique combination of cable guide and cable clamp, installed along the cable route in place of rollers. Its fully gimballed mounting and slippery nylon construction minimize friction.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Ellis cable guide clamp",
  },
  {
    id: "ellis-cable-cleat",
    name: "Ellis Cable Cleat",
    description:
      "Secures cable to the tray or ladder and prevents damage that might occur in situations of short-circuiting in electrical systems.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Ellis cable cleat",
  },
];

export const cableGlandFamilies: CableGlandFamily[] = [
  {
    id: "nickel-brass-ip54",
    name: "Nickel Plated Brass Cable Glands IP54",
    description: "Nickel-plated brass cable glands rated to IP54 for general indoor and light industrial installations.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Nickel plated brass cable gland IP54",
    codeTable: [
      { product: "Nickel plated brass gland PG07 3-6.5", code: "6018-N07" },
      { product: "Nickel plated brass gland PG09 3.6-8", code: "6018-N09" },
      { product: "Nickel plated brass gland PG11 4.5-10", code: "6018-N11" },
    ],
  },
  {
    id: "nickel-brass-ip68",
    name: "Nickel Plated Brass Cable Glands IP68",
    description: "Nickel-plated brass cable glands rated to IP68 for submersible and high ingress-protection applications.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Nickel plated brass cable gland IP68",
    codeTable: [
      { product: "Nickel plated brass gland M16 7-14", code: "6068-N16" },
      { product: "Nickel plated brass gland M20 6-13", code: "6068-N20" },
      { product: "Nickel plated brass gland M25 9-17", code: "6068-N25" },
    ],
  },
  {
    id: "stainless-aisi-303",
    name: "Stainless Steel Cable Glands AISI 303",
    description: "Corrosion-resistant AISI 303 stainless steel cable glands for general industrial environments.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Stainless steel cable gland AISI 303",
    codeTable: [
      { product: "Stainless steel gland M20 AISI 303", code: "6303-S20" },
      { product: "Stainless steel gland M25 AISI 303", code: "6303-S25" },
      { product: "Stainless steel gland M32 AISI 303", code: "6303-S32" },
    ],
  },
  {
    id: "stainless-aisi-316l",
    name: "Stainless Steel Cable Glands AISI 316L",
    description: "Marine-grade AISI 316L stainless steel cable glands for coastal, offshore, and high-corrosion environments.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Stainless steel cable gland AISI 316L",
    codeTable: [
      { product: "Stainless steel gland M20 AISI 316L", code: "6316-S20" },
      { product: "Stainless steel gland M25 AISI 316L", code: "6316-S25" },
      { product: "Stainless steel gland M32 AISI 316L", code: "6316-S32" },
    ],
  },
  {
    id: "polyamide-locknut",
    name: "Polyamide Cable Glands (Also Available with Complete Locknut)",
    description:
      "IP68 polyamide glands consist of a body fitted with elastic fins that, when a nut is tightened, tighten concentrically and uniformly around an NBR washer seal, guaranteeing IP68 water tightness and efficient cable retention. The trapezoidal thread prevents accidental unscrewing through vibration. Seals resist ageing, corrosion, and oils. PG thread in accordance with DIN 40430.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Polyamide cable gland with locknut",
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
    name: "ATEX (Explosion Proof) Cable Glands",
    description: "Certified explosion-proof cable glands for Zone 1 / Zone 2 hazardous-area installations.",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "ATEX explosion proof cable gland",
    codeTable: [
      { product: "ATEX gland M20 Ex d/e", code: "6ATEX-20" },
      { product: "ATEX gland M25 Ex d/e", code: "6ATEX-25" },
      { product: "ATEX gland M32 Ex d/e", code: "6ATEX-32" },
    ],
  },
];

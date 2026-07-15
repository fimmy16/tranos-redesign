import { BusinessDivision, ComplianceCertificate } from "@/types/product";

export const businessDivisions: BusinessDivision[] = [
  {
    id: "gaskets",
    name: "Gaskets",
    shortDescription:
      "Flange insulation gasket sets and high-pressure sealing products engineered for critical process integrity across oil & gas and industrial piping networks.",
    href: "/#gaskets",
    gridSpan: "featured",
    imageSrc: "/images/products/gaskets/spiral-wound-gasket.webp",
    imageAlt: "Spiral wound gasket for high-pressure industrial sealing",
    productLines: [
      "Kammprofile Gaskets",
      "PTFE Gaskets",
      "Rubber Gaskets",
      "Spiral Wound Gaskets",
      "Non-Asbestos Gaskets",
    ],
  },
  {
    id: "power-distribution",
    name: "Power Protection & Distribution",
    shortDescription:
      "Low-voltage electrical power distribution and control systems, the Tranos Elite Range, Siemens SIVACON S8 switchboards, Medium Voltage SIMOPRIME/SIMOSEC switchgear, and ATEX explosion-proof power panels.",
    href: "/power-distribution",
    gridSpan: "standard",
    imageSrc: "/images/products/power-distribution/siemens-sivacon-s8.webp",
    imageAlt: "Siemens SIVACON S8 low voltage switchboard built in Nigeria by Tranos",
    productLines: [
      "Tranos Elite Range",
      "Siemens SIVACON S8",
      "Medium Voltage SIMOPRIME & SIMOSEC",
      "ATEX Power Panels",
    ],
  },
  {
    id: "power-energy",
    name: "Power Generation & Backup",
    shortDescription:
      "Gas and diesel generator sets, containerized and packaged power solutions, and industrial backup power systems engineered for continuous-duty operation.",
    href: "/power-energy",
    gridSpan: "standard",
    imageSrc: "/images/products/generators/tg-2000-gas-generator.jpg",
    imageAlt: "TG-2000 20kVA gas generator",
    productLines: [
      "TG-2000 20kVA Gas Generator",
      "Tranos THUNDERBOLT Generators",
      "Containerized Generator Enclosures",
      "Industrial Backup Power",
    ],
  },
  {
    id: "enclosures",
    name: "Enclosures",
    shortDescription:
      "Wall-mounted, free-standing, and flush-mounted electrical enclosures, mechanical enclosures, heavy-duty packaged sub-stations, and battery cabinets.",
    href: "/enclosures",
    gridSpan: "standard",
    imageSrc: "/images/products/enclosures/electrical/wall-mounted-enclosure.webp",
    imageAlt: "Wall-mounted electrical enclosure",
    productLines: [
      "Wall-Mounted & Free-Standing Enclosures",
      "Mechanical Enclosures",
      "Heavy-Duty / Packaged Sub-Stations",
      "Battery Cabinets",
    ],
  },
  {
    id: "cable-management",
    name: "Cable Management & Support System",
    shortDescription:
      "Tranos TRAC cable trays and ladders, Tranos ERIS equipment racks and instrumentation supports, Tranos Ellis cable clamps/cleats, and cable glands.",
    href: "/cable-management",
    gridSpan: "standard",
    imageSrc: "/images/products/cable-management/tranos-cable-ladder.webp",
    imageAlt: "Tranos cable ladder for industrial cable management",
    productLines: [
      "Cable Trays & Ladders",
      "Equipment Racks & Instrumentation Supports",
      "Cable Clamps & Cleats",
      "Cable Glands",
    ],
  },
  {
    id: "warehouse-storage",
    name: "Warehouse Storage System",
    shortDescription:
      "Heavy-duty industrial pallet racking, standalone and shop-fitting warehouse racks, and structural logistics shelving.",
    href: "/#warehouse-storage",
    gridSpan: "standard",
    imageSrc: "/images/products/warehouse/warehouse-racks.webp",
    imageAlt: "Heavy-duty pallet racking in an industrial warehouse",
    productLines: [
      "Standard Pallet Racks",
      "Standalone Warehouse Racks",
      "Shop-Fitting Racks",
      "Heavy-Duty Industrial Racks",
    ],
  },
  {
    id: "lighting-wiring",
    name: "Light & Wiring Devices",
    shortDescription:
      "High-quality switches and socket plates, commercial wiring accessories, and hazardous-area ATEX certified explosion-proof lights.",
    href: "/#lighting-wiring",
    gridSpan: "standard",
    imageSrc: "/images/tranos-logo.png",
    imageAlt: "Tranos brand mark — light and wiring devices placeholder pending product photography",
    productLines: ["Switches & Sockets", "Wiring Accessories", "ATEX Explosion-Proof Lights"],
  },
];

export const complianceCertificates: ComplianceCertificate[] = [
  {
    id: "iso-9001",
    standard: "ISO 9001:2015",
    title: "Quality Management Systems",
    description:
      "Certified quality management framework governing design, manufacture, and delivery of Tranos industrial product lines.",
    issuedScope: "Design, Manufacture & Supply of Electrical & Mechanical Industrial Equipment",
  },
  {
    id: "iso-45001",
    standard: "ISO 45001:2018",
    title: "Occupational Health & Safety Management",
    description:
      "Certified occupational health and safety management framework governing workplace safety across manufacturing and field service activities.",
    issuedScope: "Workplace Safety Across Manufacturing & Field Service Operations",
  },
];

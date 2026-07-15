import { EnclosureCategory, EnclosureProduct } from "@/types/product";

export const enclosureCategories: EnclosureCategory[] = [
  {
    id: "electrical",
    label: "Electrical Enclosures",
    description:
      "Wall-mounted, free-standing, and flush-mounted enclosures protecting electrical and electronic components from harsh environmental impact.",
  },
  {
    id: "mechanical",
    label: "Mechanical Enclosures",
    description: "Structural mechanical enclosures for industrial process and control equipment.",
  },
  {
    id: "heavy-duty",
    label: "Heavy Duty Enclosures",
    description: "Reinforced enclosures and E-Houses/skids engineered for demanding field environments.",
  },
  {
    id: "customized",
    label: "Customized Enclosures",
    description: "Bespoke enclosure configurations engineered to a client's exact dimensional and environmental requirements.",
  },
  {
    id: "data-center",
    label: "Servers & Datacenter Racks",
    description: "Mechanical server racks and datacenter enclosures for critical IT infrastructure.",
  },
  {
    id: "battery-cabinets",
    label: "Battery Cabinets & Racks",
    description: "Ventilated cabinets and racks for stationary battery banks in backup power installations.",
  },
  {
    id: "atex-junction",
    label: "ATEX Junction Boxes",
    description: "GRP ATEX explosion-proof junction boxes rated for Zone 1 / Zone 2 hazardous-area deployment.",
  },
  {
    id: "meter-boxes",
    label: "Meter Boxes",
    description: "Weatherproof metering enclosures for utility and sub-metering installations.",
  },
];

export const enclosureProducts: EnclosureProduct[] = [
  {
    id: "electrical-wall-mounted",
    categoryId: "electrical",
    name: "Wall-Mounted Enclosure",
    summary:
      "Specifically designed to protect electrical and electronic components from harsh environmental impact. Available in Aluminium, Stainless Steel, Powder Coated, and Mild Steel, in various designs for outdoor and indoor applications.",
    ipRating: ["IP55"],
    impactProtection: "IK10 impact protection on all external panel faces",
    finishes: ["Aluminium", "Stainless Steel", "Powder Coated", "Mild Steel"],
    imageAlt: "Wall-mounted electrical enclosure",
    imageSrc: "/images/products/enclosures/electrical/wall-mounted-enclosure.webp",
    specSheet: [
      { label: "Mounting", value: "Wall-Mounted" },
      { label: "IP Rating", value: "IP55" },
      { label: "Impact Rating", value: "IK10" },
      { label: "Material Options", value: "Aluminium / Stainless Steel / Powder Coated / Mild Steel" },
      { label: "Application", value: "Indoor & Outdoor" },
    ],
  },
  {
    id: "electrical-free-standing",
    categoryId: "electrical",
    name: "Free-Standing Enclosure",
    summary:
      "Designed to meet International Electrotechnical Commission (IEC) standards. Provide protection of IP55 and internal segregation ranging from Form 1 to Form 4, in different heights, widths, and depths for Oil & Gas, Manufacturing, Building, Healthcare, and Energy applications.",
    ipRating: ["IP55"],
    impactProtection: "Internal segregation Form 1 to Form 4",
    finishes: ["Powder Coated", "Stainless Steel"],
    imageAlt: "Free-standing electrical enclosure on a factory floor",
    imageSrc: "/images/products/enclosures/electrical/free-standing-enclosure.webp",
    specSheet: [
      { label: "Mounting", value: "Free-Standing" },
      { label: "IP Rating", value: "IP55" },
      { label: "Internal Segregation", value: "Form 1 to Form 4" },
      { label: "Industries", value: "Oil & Gas, Manufacturing, Building, Healthcare, Energy" },
      { label: "Standard", value: "IEC" },
    ],
  },
  {
    id: "electrical-flush-mounted",
    categoryId: "electrical",
    name: "Flush-Mounted Enclosure",
    summary:
      "Ideal for fitting inside the wall to house electrical controls, terminals, and instruments. Durable and easy to install, available in various sizes for indoor applications, designed to IEC & NEMA standards.",
    ipRating: ["IP55"],
    impactProtection: "IK10 impact protection",
    finishes: ["Powder Coated", "Mild Steel"],
    imageAlt: "Flush-mounted enclosure integrated into a wall assembly",
    imageSrc: "/images/products/enclosures/electrical/free-standing-single-door-enclosure.webp",
    specSheet: [
      { label: "Mounting", value: "Flush-Mounted" },
      { label: "IP Rating", value: "IP55" },
      { label: "Impact Rating", value: "IK10" },
      { label: "Standard", value: "IEC & NEMA" },
      { label: "Application", value: "Indoor" },
    ],
  },
  {
    id: "mechanical-server-rack",
    categoryId: "mechanical",
    name: "Mechanical Rack Cabinet",
    summary:
      "Mechanical rack cabinet engineered for structural rigidity under heavy equipment loads with high-airflow ventilation panels.",
    ipRating: ["IP54"],
    impactProtection: "IK08 impact protection with reinforced frame corners",
    finishes: ["Powder Coated"],
    imageAlt: "Mechanical rack cabinet with ventilated panels",
    imageSrc: "/images/products/enclosures/mechanical/large-industrial-enclosure.webp",
    specSheet: [
      { label: "Mounting", value: "Free-Standing" },
      { label: "IP Rating", value: "IP54" },
      { label: "Impact Rating", value: "IK08" },
      { label: "Load Rating", value: "Up to 1500kg Static Load" },
    ],
  },
  {
    id: "heavy-duty-e-house",
    categoryId: "heavy-duty",
    name: "Heavy-Duty E-House / Skid",
    summary:
      "Packaged sub-station and skid-mounted E-House solutions engineered for rapid deployment of complete switchgear systems in remote field conditions, including soundproof engine enclosures for 2MW-class installations.",
    ipRating: ["IP65", "IP66"],
    impactProtection: "IK10 impact protection with structural steel chassis",
    finishes: ["Hot-Dip Galvanized", "Marine-Grade Coating"],
    imageAlt: "Packaged sub-station heavy-duty enclosure",
    imageSrc: "/images/products/enclosures/heavy-duty/packaged-substation-rendered.png",
    specSheet: [
      { label: "Mounting", value: "Skid-Mounted" },
      { label: "IP Rating", value: "IP65 / IP66" },
      { label: "Impact Rating", value: "IK10" },
      { label: "Structure", value: "Structural Steel Chassis" },
    ],
  },
  {
    id: "customized-enclosure",
    categoryId: "customized",
    name: "Customized Enclosure",
    summary:
      "Bespoke enclosure design and fabrication built to a client's exact dimensional, ingress-protection, and material requirements — including modular control rooms and containerized units.",
    ipRating: ["IP55", "IP65"],
    impactProtection: "Configurable to project specification",
    finishes: ["Configurable"],
    imageAlt: "Tranos brand mark — customized enclosure photography pending",
    imageSrc: "/images/tranos-logo.png",
    specSheet: [
      { label: "Mounting", value: "Project-Specific" },
      { label: "IP Rating", value: "IP55 / IP65 (configurable)" },
      { label: "Examples", value: "40ft Modular Control Rooms, Packaged Sub-Stations" },
    ],
  },
  {
    id: "data-center-rack",
    categoryId: "data-center",
    name: "Datacenter Server Rack",
    summary:
      "High-density datacenter enclosure with hot/cold aisle containment compatibility and lockable perforated doors.",
    ipRating: ["IP54"],
    impactProtection: "IK08 impact protection",
    finishes: ["Powder Coated"],
    imageAlt: "Tranos brand mark — datacenter rack photography pending",
    imageSrc: "/images/tranos-logo.png",
    specSheet: [
      { label: "Mounting", value: "Free-Standing" },
      { label: "IP Rating", value: "IP54" },
      { label: "Airflow", value: "Perforated Front / Rear Doors" },
    ],
  },
  {
    id: "battery-cabinet",
    categoryId: "battery-cabinets",
    name: "Battery Cabinet & Rack",
    summary:
      "Ventilated stationary battery cabinet for UPS and backup power installations, with segregated compartments for safe battery bank storage.",
    ipRating: ["IP54"],
    impactProtection: "IK08 impact protection",
    finishes: ["Powder Coated"],
    imageAlt: "Ventilated battery cabinet and rack",
    imageSrc: "/images/products/enclosures/battery-cabinets/standing-battery-cabinet.webp",
    specSheet: [
      { label: "Mounting", value: "Free-Standing" },
      { label: "IP Rating", value: "IP54" },
      { label: "Ventilation", value: "Segregated, Vented Compartments" },
    ],
  },
  {
    id: "atex-junction-box",
    categoryId: "atex-junction",
    name: "GRP ATEX Junction Box",
    summary:
      "Glass-reinforced polyester junction box certified for Zone 1 / Zone 2 hazardous areas with corrosion-resistant sealing.",
    ipRating: ["IP66"],
    impactProtection: "IK10 impact protection with anti-static GRP shell",
    finishes: ["Glass-Reinforced Polyester (GRP)"],
    imageAlt: "Tranos brand mark — GRP ATEX junction box photography pending",
    imageSrc: "/images/tranos-logo.png",
    specSheet: [
      { label: "Certification", value: "ATEX Zone 1 / Zone 2" },
      { label: "IP Rating", value: "IP66" },
      { label: "Material", value: "Glass-Reinforced Polyester (GRP)" },
    ],
  },
  {
    id: "meter-box",
    categoryId: "meter-boxes",
    name: "Weatherproof Meter Box",
    summary:
      "Weatherproof metering enclosure for utility and sub-metering installations, sized for single and multi-meter configurations.",
    ipRating: ["IP54", "IP55"],
    impactProtection: "IK08 impact protection",
    finishes: ["Powder Coated", "Mild Steel"],
    imageAlt: "Tranos brand mark — meter box photography pending",
    imageSrc: "/images/tranos-logo.png",
    specSheet: [
      { label: "Mounting", value: "Wall-Mounted" },
      { label: "IP Rating", value: "IP54 / IP55" },
      { label: "Application", value: "Utility / Sub-Metering" },
    ],
  },
];

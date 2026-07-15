import { EnergySectorDeployment, GeneratorProduct, PartnerLogo } from "@/types/product";

export const integrationPartners: PartnerLogo[] = [
  { id: "siemens", name: "Siemens", imageSrc: "/images/tranos-logo.png" },
  { id: "soga", name: "Soga", imageSrc: "/images/tranos-logo.png" },
  { id: "toyota", name: "Toyota", imageSrc: "/images/tranos-logo.png" },
  { id: "yanmar", name: "Yanmar", imageSrc: "/images/tranos-logo.png" },
  { id: "dkc", name: "DKC", imageSrc: "/images/tranos-logo.png" },
  { id: "ellis", name: "Ellis", imageSrc: "/images/tranos-logo.png" },
];

export const energySectorDeployments: EnergySectorDeployment[] = [
  {
    id: "oil-gas",
    sector: "Oil & Gas",
    bullets: [
      "ATEX-rated generator enclosures for hazardous-area field sites",
      "Hybrid diesel/LPG configurations for remote well-head operations",
      "Continuous-duty backup UPS networks for control room resilience",
    ],
  },
  {
    id: "telecommunications",
    sector: "Telecommunications",
    bullets: [
      "TG-Series LPG gas generators for unmanned tower sites",
      "Low-noise enclosures for urban and rooftop telecom installations",
      "Remote monitoring via DSE 610 / DK300 control configurations",
    ],
  },
  {
    id: "industrial-manufacturing",
    sector: "Industrial & Manufacturing",
    bullets: [
      "Tranos THUNDERBOLT generator sets for continuous plant operations",
      "Synchronized multi-generator paralleling for production redundancy",
      "Scheduled maintenance contracts for high-utilization duty cycles",
    ],
  },
  {
    id: "residential-commercial",
    sector: "Residential & Commercial",
    bullets: [
      "Backup UPS networks for residential estates and commercial facilities",
      "Sound-suppressed generator enclosures for noise-sensitive sites",
      "400VAC distribution matched to building electrical standards",
    ],
  },
];

export const generatorProducts: GeneratorProduct[] = [
  {
    id: "tg-2000-20kva",
    name: "TG-2000 | 20kVA Gas Generator",
    tagline:
      "A 20kVA, 400VAC gas generator. A more environmentally friendly power solution with very low emissions to the atmosphere.",
    imageSrc: "/images/products/generators/tg-2000-gas-generator.jpg",
    imageAlt: "TG-2000 20kVA LPG gas generator unit",
    datasheetHref: "/documents/tg-2000-datasheet.pdf",
    specs: [
      { label: "Model", value: "TG-2000" },
      { label: "Engine Model", value: "4TN88GN-XITN" },
      { label: "Engine", value: "Yanmar" },
      { label: "Engine Type", value: "Vertical In-line water cooled 4 cycle" },
      { label: "Power Rating", value: "20kVA" },
      { label: "Voltage Delivery", value: "400VAC" },
      { label: "Alternator Model", value: "SK 160" },
      { label: "Rated Speed", value: "1500 RPM" },
      { label: "Cooling System", value: "Water Cooled with Radiator" },
      { label: "Controller Module", value: "DK300" },
      { label: "Fuel Type", value: "Liquified Petroleum Gas (LPG)" },
      { label: "Insulation Class", value: "1500" },
      { label: "Sound Pressure Level", value: "55 dB(A) at 7 Meters" },
    ],
  },
  {
    id: "thunderbolt-diesel",
    name: "Tranos THUNDERBOLT Diesel Generator",
    tagline: "Proprietary heavy-duty diesel generator line for continuous industrial operations",
    imageSrc: "/images/products/generators/thunderbolt-generator.png",
    imageAlt: "Tranos THUNDERBOLT diesel generator set",
    datasheetHref: "/documents/thunderbolt-datasheet.pdf",
    specs: [
      { label: "Engine Model", value: "4TN88GN-XITN" },
      { label: "Engine", value: "Yanmar" },
      { label: "Power Rating", value: "20kVA" },
      { label: "Voltage Delivery", value: "400VAC" },
      { label: "Controller Module", value: "DK300" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Sound Pressure Level", value: "55 dB(A) at 7 Meters" },
    ],
  },
];

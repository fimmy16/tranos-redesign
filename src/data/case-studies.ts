import { CaseStudy, CaseStudySector } from "@/types/product";

export const caseStudySectors: CaseStudySector[] = [
  "Power & Energy",
  "Oil & Gas",
  "Residential & Commercial",
  "Industrial & Manufacturing",
  "Telecommunications",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "2mw-generator-enclosure",
    sector: "Power & Energy",
    title: "2 Megawatts Generator Enclosure",
    projectSummary: "Soundproof enclosure for a 2MW engine.",
    imageSrc: "/images/products/enclosures/heavy-duty/containerised-generator.jpg",
    imageAlt: "2 Megawatts generator enclosure project",
  },
  {
    id: "1000kva-mtu-containerized",
    sector: "Power & Energy",
    title: "1000kVA MTU Containerized Generator Enclosure Unit",
    projectSummary: "Soundproof enclosure for a 2MW engine.",
    imageSrc: "/images/products/enclosures/heavy-duty/containerised-generator.jpg",
    imageAlt: "1000kVA MTU containerized generator enclosure unit",
  },
  {
    id: "packaged-substation",
    sector: "Power & Energy",
    title: "Packaged Sub-station",
    projectSummary: "Soundproof enclosure for a 2MW engine.",
    imageSrc: "/images/products/enclosures/heavy-duty/packaged-substation.jpg",
    imageAlt: "Packaged sub-station project",
  },
  {
    id: "coleman-distribution-panels",
    sector: "Industrial & Manufacturing",
    title: "Coleman Distribution & Control Panels",
    projectSummary: "Considering load demand at different factories, we offered the following.",
    imageSrc: "/images/products/power-distribution/industrial-electrical-panel-system.webp",
    imageAlt: "Coleman distribution and control panels project",
  },
  {
    id: "40ft-modular-control-room",
    sector: "Oil & Gas",
    title: "Design & Fabrication of 40FT Modular Control Room",
    projectSummary: "Soundproof enclosure for a 2MW engine.",
    imageSrc: "/images/products/enclosures/mechanical/10ft-prefabricated-shelter-enclosure.jpeg",
    imageAlt: "Design and fabrication of 40ft modular control room",
  },
  {
    id: "cable-trays-ladders-supply",
    sector: "Telecommunications",
    title: "Supply of Cable Trays, Ladders and Accessories",
    projectSummary: "Soundproof enclosure for a 2MW engine.",
    imageSrc: "/images/products/cable-management/industrial-cable-ladder-system.webp",
    imageAlt: "Supply of cable trays, ladders, and accessories project",
  },
];

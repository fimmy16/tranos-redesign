import { SwitchgearFeatureSet } from "@/types/product";

export const powerDistributionIntro: string[] = [
  "As Nigeria's leading engineering manufacturer, we specialize in designing and producing high-quality low-voltage electrical power distribution and control systems.",
  "We proudly supply critical infrastructure across the industrial, commercial, and residential sectors, ensuring reliable power for every application. We are experts in the complete lifecycle of electrical power distribution, protection, and control panels: from design and manufacturing to final assembly.",
  "Our technical capability is immense, providing robust low-voltage panels for rated currents ranging from 63A to 6,300A. Each product is built with an uncompromising focus on quality, utilizing only superb components.",
  "The Tranos Elite Range: Engineered to deliver safety and peace of mind without compromising affordability.",
];

export const lowVoltageSwitchgear: SwitchgearFeatureSet[] = [
  {
    id: "tranos-elite-range",
    name: "Tranos Elite Range",
    tagline: "Engineered for IEC Certified Safety",
    description: [
      "The Tranos Elite panels and switchboards are designed according to IEC 61439 standards. This standard governs the design, construction, and verification requirements for low-voltage switchgear and control gear assemblies. Manufactured using high-quality components from original equipment manufacturers such as Siemens, Schneider Electric and ABB, and in accordance with the ISO 9001:2015 quality management system, all Tranos panels are built with cutting-edge technology and modern engineering principles at our facility in Lagos.",
    ],
    features: [
      "Panel Enclosure Degree of Protection IP XX-55",
      "Busbar Design in accordance with DIN43670",
      "Anti-Corrosion Treatment",
      "Fully Bolted Construction for Flexibility",
      "Provision of Future Expansion",
      "Powder Coating",
      "Schematics and Outline Drawing",
    ],
    applications: [
      "Power Control Centers (PCC)",
      "PLC Control Panels",
      "Monitor Control Centers (MCC)",
      "Main Distribution Boards",
      "Automatic Mains Failure (AMF) and Synchronization Panels",
    ],
    callToAction: "Request Quote",
  },
  {
    id: "siemens-sivacon-s8",
    name: "Siemens SIVACON S8",
    tagline: "Siemens SIVACON S8 Built in Nigeria by Tranos",
    description: [
      "As a licensed partner for Siemens in Nigeria, Tranos still remains the level-1 technology partner for low-voltage switchgear range in the country, signaling that we are authorized to produce SIVACON S8 switchboards under the Siemens brand.",
      "The fusion of Siemens' years of experience with our world-class sheet metal design and manufacturing ability produces an assortment of reliable switchgear for the various clients we serve.",
      "We manufacture type-approved low-voltage panels for the SIVACON S8, with ratings up to 7,000A, including Motor Control Centers (MCC) rated up to 3,600A featuring exceptional safety measures and digital connectivity.",
      "“SIVACON S8 Low-voltage Boards with SENTRON Components” — meet the tried-and-true low-voltage power distribution boards (SIVACON S8 boards with SENTRON components), perfectly compatible for safe, flexible, and efficient implementation of power distribution planning, design, and the general operations required in industrial plants, buildings, and infrastructure, reducing investment trade-offs and improving plant uptime during its operational lifecycle.",
      "The SIVACON S8 low-voltage power distribution board is engineered to provide seamless power distribution and protection for both personnel and equipment. It meets the rigorous standards of IEC 61641 and VDE 0660 Part 500-2, ensuring that it remains safe even in the event of internal arcing faults. Thoughtful design choices, such as minimizing the use of plastic components and utilizing fully insulated main busbars, further enhance safety and system reliability. These features also help to reduce overall liability risks for operators and owners.",
    ],
    features: [
      "Type-approved panels rated up to 7,000A",
      "Motor Control Centers (MCC) rated up to 3,600A",
      "IEC 61641 and VDE 0660 Part 500-2 compliant",
      "Fully insulated main busbars, minimized plastic components",
    ],
    stats: [
      "Over 404,000 SIVACON S8 low-voltage switchboards already in service worldwide",
    ],
    callToAction: "Download the Catalog",
  },
];

export const mediumVoltageSwitchgear: SwitchgearFeatureSet[] = [
  {
    id: "siemens-simoprime",
    name: "Siemens SIMOPRIME",
    tagline: "Air-Insulated Medium-Voltage Switchgear",
    description: [
      "Tranos' modular switchboard SIMOPRIME is a factory-built switchgear designed for indoor installations in areas with distribution substations. Our successful quality testing of this switchboard shows that it aligns with IEC 62271-200, VDE 0670 Part 6, and GODT 14693-90 standards.",
      "SIMOPRIME employs air-insulated medium-voltage switchgear technology with a modular design for customizable panels in industrial applications.",
    ],
    features: [
      "The SIMOPRIME switchboard accommodates all switching actions: normal maintenance or emergency manual overrides without opening the high-voltage door.",
      "Safety interlocking (mechanical or electromagnetic) prevents access to high-voltage components unless switching devices are in a safe state.",
      "Rack-in and rack-out of the circuit-breaker truck occur without opening the high-voltage door.",
      "Metallic earthed shutters and partitions automatically cover high-voltage bushings when the circuit-breaker truck is racked out.",
      "Internal arc-tested design of up to 25 kA for 1 second, per IEC 62271-200 Annex A criteria.",
      "Employs vacuum circuit-breakers (VCB) as its primary switching device to interrupt medium-voltage currents up to 24 kV safely and reliably.",
    ],
    callToAction: "Download the Catalog",
  },
  {
    id: "siemens-simosec",
    name: "Siemens SIMOSEC",
    tagline: "Air-Insulated Medium-Voltage Switchgear for Secondary Distribution",
    description: [
      "SIMOSEC switchgear is a factory-assembled, type-tested, three-phase, metal-enclosed, indoor switchgear according to IEC 62271-200 and GB 3906 for single busbars.",
    ],
    features: [
      "Up to 24 kV, 25 kA, 1250 A busbar, 1250 A feeder",
      "Metal-enclosed, single busbar",
      "Air-insulated technology combined with gas-insulated switching functions",
      "Factory-assembled, routine-tested according to IEC 62271-200",
      "Type-tested according to IEC 62271-100, -200",
    ],
    applications: [
      "Security of Operation, Reliability",
      "Personal Safety",
      "Compactness",
      "Economy, Ecology",
    ],
    callToAction: "Download the Catalog",
  },
];

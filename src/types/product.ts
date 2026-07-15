export type BusinessDivisionId =
  | "gaskets"
  | "power-distribution"
  | "enclosures"
  | "cable-management"
  | "power-energy"
  | "warehouse-storage"
  | "lighting-wiring";

export type IngressProtectionRating =
  | "IP54"
  | "IP55"
  | "IP65"
  | "IP66"
  | "IK08"
  | "IK10";

export type EnclosureCategoryId =
  | "electrical"
  | "mechanical"
  | "heavy-duty"
  | "customized"
  | "data-center"
  | "battery-cabinets"
  | "atex-junction"
  | "meter-boxes";

export interface EnclosureCategory {
  id: EnclosureCategoryId;
  label: string;
  description: string;
}

export interface EnclosureProduct {
  id: string;
  categoryId: EnclosureCategoryId;
  name: string;
  summary: string;
  ipRating: IngressProtectionRating[];
  impactProtection: string;
  finishes: string[];
  imageAlt: string;
  imageSrc: string;
  specSheet: EnclosureSpecRow[];
}

export interface EnclosureSpecRow {
  label: string;
  value: string;
}

export interface BusinessDivision {
  id: BusinessDivisionId;
  name: string;
  shortDescription: string;
  href: string;
  gridSpan: "featured" | "standard";
  imageSrc: string;
  imageAlt: string;
  productLines: string[];
}

export interface SectorProject {
  id: string;
  sector: "Aviation" | "Manufacturing" | "Telecom" | "Oil & Gas";
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export type CaseStudySector =
  | "Power & Energy"
  | "Oil & Gas"
  | "Residential & Commercial"
  | "Industrial & Manufacturing"
  | "Telecommunications";

export interface CaseStudy {
  id: string;
  sector: CaseStudySector;
  title: string;
  projectSummary: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ComplianceCertificate {
  id: string;
  standard: string;
  title: string;
  description: string;
  issuedScope: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  imageSrc: string;
}

export interface EnergySectorDeployment {
  id: string;
  sector: string;
  bullets: string[];
}

export interface GeneratorTechnicalSpec {
  label: string;
  value: string;
}

export interface GeneratorProduct {
  id: string;
  name: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  datasheetHref: string;
  specs: GeneratorTechnicalSpec[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavCategory {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface CableTraySpec {
  model: string;
  material: string;
  width: string;
  height: string;
  finish: string;
  mounting: string;
  compliance: string;
}

export interface CableGlandVariant {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CableGlandCodeRow {
  product: string;
  code: string;
}

export interface CableGlandFamily {
  id: string;
  name: string;
  description: string;
  specLabel: string;
  specValue: string;
  bestFor: string;
  imageSrc: string;
  imageAlt: string;
  // Real, catalog-verified codes only — omit rather than fabricate. Currently
  // only the polyamide family has confirmed real codes (see cable-management.ts).
  codeTable?: CableGlandCodeRow[];
}

export interface CableGlandValueProp {
  title: string;
  description: string;
}

export interface CableClampProduct {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface EquipmentRackProduct {
  id: string;
  name: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  datasheetHref: string;
}

export interface CompanyContact {
  headOfficeAddress: string;
  factoryAddress: string;
  phoneNumbers: string[];
  email: string;
  socialLinks: { label: string; href: string }[];
}

export interface AtexPanelProduct {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
}

export interface EliteRangeApplication {
  name: string;
}

export interface SwitchgearFeatureSet {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  features: string[];
  applications?: string[];
  stats?: string[];
  callToAction: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  title: string;
  bio: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface CompanyValue {
  id: string;
  name: string;
  description: string;
}

export interface CareerProgram {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  benefits?: string[];
  ctaLabel: string;
  ctaHref: string;
}

export type ProductInterest =
  | "Gaskets"
  | "Power Protection & Distribution"
  | "Power Generation & Backup"
  | "Enclosures"
  | "Cable Management & Support System"
  | "Warehouse Storage System"
  | "Light & Wiring Devices"
  | "Other";

export interface QuoteFormFields {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  productInterest: ProductInterest;
  projectDetails: string;
  rackHeight: string;
  rackWidth: string;
  rackDepth: string;
  rackFieldDimensions: string;
  requestSiteInspection: boolean;
}

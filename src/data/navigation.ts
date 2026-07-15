import { NavCategory } from "@/types/product";

export const primaryNavigation: NavCategory[] = [
  {
    label: "About",
    href: "/about/who-we-are",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Products",
    href: "/#products",
    children: [
      { label: "Power Protection & Distribution", href: "/power-distribution" },
      { label: "Power Generation & Backup", href: "/power-energy" },
      { label: "Enclosures", href: "/enclosures" },
      { label: "Gaskets", href: "/#gaskets" },
      { label: "Cable Management & Support System", href: "/cable-management" },
      { label: "Warehouse Storage System", href: "/#warehouse-storage" },
      { label: "Light & Wiring Devices", href: "/#lighting-wiring" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Power & Energy", href: "/case-studies?sector=Power+%26+Energy" },
      { label: "Oil & Gas", href: "/case-studies?sector=Oil+%26+Gas" },
      { label: "Residential & Commercial", href: "/case-studies?sector=Residential+%26+Commercial" },
      { label: "Industrial & Manufacturing", href: "/case-studies?sector=Industrial+%26+Manufacturing" },
      { label: "Telecommunications", href: "/case-studies?sector=Telecommunications" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

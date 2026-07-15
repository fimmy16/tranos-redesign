import Image from "next/image";
import Link from "next/link";
import { companyContact } from "@/data/company";

const productLinks = [
  { label: "Power Protection & Distribution", href: "/power-distribution" },
  { label: "Power Generation & Backup", href: "/power-energy" },
  { label: "Enclosures", href: "/enclosures" },
  { label: "Gaskets", href: "/#gaskets" },
  { label: "Cable Management & Support System", href: "/cable-management" },
];

const companyLinks = [
  { label: "Who We Are", href: "/about/who-we-are" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tranos-navy" aria-label="Site footer">
      <div className="mx-auto max-w-[1400px] px-gutter py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <section aria-label="Company brand summary" className="flex flex-col gap-6">
            <Image
              src="/images/tranos-logo.png"
              alt="Tranos company logo"
              width={140}
              height={38}
              className="h-9 w-auto select-none brightness-0 invert"
              draggable={false}
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              TRANOS is the engineering and manufacturing leader adding value
              to lives through innovative solutions.
            </p>
          </section>

          <nav aria-label="Products footer navigation">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company footer navigation">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-label="Contact information and newsletter">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Head Office
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              {companyContact.headOfficeAddress}
            </p>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-white">
              Contact Us
            </h3>
            <p className="mb-1 text-sm text-white/70">
              {companyContact.phoneNumbers.join(", ")}
            </p>
            <p className="mb-6 text-sm text-white/70">
              <a href={`mailto:${companyContact.email}`} className="hover:text-white">
                {companyContact.email}
              </a>
            </p>
            <div className="flex gap-3" aria-label="Social media links">
              {companyContact.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs text-white/70 transition-colors duration-150 hover:border-white hover:text-white"
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            &copy; {currentYear} Tranos. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/60">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <span>ISO 9001:2015 &amp; ISO 45001:2018 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

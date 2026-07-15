"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { primaryNavigation } from "@/data/navigation";
import { NavCategory } from "@/types/product";

export default function Navbar(): JSX.Element {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const scheduleCloseDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  }, []);

  const closeDropdownImmediately = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((previousState) => !previousState);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-gutter pt-4">
      <nav
        aria-label="Primary site navigation"
        className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-tranos-slate/60 bg-white/95 px-6 py-3 shadow-[0_4px_24px_rgba(0,28,73,0.12)] backdrop-blur-sm"
      >
        <Link href="/" aria-label="Tranos home page" className="flex flex-shrink-0 items-center">
          <Image
            src="/images/tranos-logo.png"
            alt="Tranos company logo"
            width={148}
            height={40}
            priority
            className="h-9 w-auto select-none"
            draggable={false}
          />
        </Link>

        <ul className="hidden items-center gap-2 lg:flex" role="menubar">
          {primaryNavigation.map((category: NavCategory) => (
            <li
              key={category.label}
              role="none"
              className="relative"
              onMouseEnter={() => category.children && openDropdown(category.label)}
              onMouseLeave={() => category.children && scheduleCloseDropdown()}
            >
              <Link
                href={category.href}
                role="menuitem"
                aria-haspopup={category.children ? "true" : undefined}
                aria-expanded={category.children ? activeDropdown === category.label : undefined}
                onFocus={() => category.children && openDropdown(category.label)}
                onKeyDown={(event) => {
                  if (category.children && (event.key === "Escape")) {
                    closeDropdownImmediately();
                  }
                }}
                className="inline-block rounded-full px-4 py-2 text-sm font-medium tracking-wide text-tranos-navy transition-colors duration-200 hover:bg-tranos-slate/50"
              >
                {category.label}
              </Link>

              {category.children && activeDropdown === category.label && (
                <ul
                  role="menu"
                  aria-label={`${category.label} submenu`}
                  onMouseEnter={() => openDropdown(category.label)}
                  onMouseLeave={scheduleCloseDropdown}
                  onFocus={() => openDropdown(category.label)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      closeDropdownImmediately();
                    }
                  }}
                  className="absolute left-0 top-full min-w-[300px] rounded-2xl border border-tranos-slate/60 bg-white p-2 shadow-[0_12px_32px_rgba(0,28,73,0.16)]"
                >
                  {category.children.map((child) => (
                    <li key={child.href + child.label} role="none">
                      <Link
                        href={child.href}
                        role="menuitem"
                        className="block rounded-xl px-4 py-3 text-sm text-tranos-navy/80 transition-colors duration-150 hover:bg-tranos-slate/40 hover:text-tranos-navy"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-panel"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-tranos-slate bg-white lg:hidden"
        >
          <span className="block h-[2px] w-6 bg-tranos-navy" />
          <span className="block h-[2px] w-6 bg-tranos-navy" />
          <span className="block h-[2px] w-6 bg-tranos-navy" />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-panel"
          role="menu"
          aria-label="Mobile primary navigation"
          className="mx-auto mt-3 max-h-[75vh] max-w-[1400px] overflow-y-auto rounded-3xl border border-tranos-slate/60 bg-white px-6 pb-8 pt-2 shadow-[0_12px_32px_rgba(0,28,73,0.16)] lg:hidden"
        >
          {primaryNavigation.map((category: NavCategory) => (
            <div key={category.label} className="border-b border-tranos-slate/60 py-3">
              <Link
                href={category.href}
                role="menuitem"
                className="block py-2 text-base font-semibold text-tranos-navy"
              >
                {category.label}
              </Link>
              {category.children && (
                <ul className="mt-1 flex flex-col gap-1 pl-4">
                  {category.children.map((child) => (
                    <li key={child.href + child.label}>
                      <Link
                        href={child.href}
                        role="menuitem"
                        className="block py-2 text-sm text-tranos-navy/70"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

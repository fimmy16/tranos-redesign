"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  id?: string;
  ariaLabel?: string;
}

export default function RevealSection({
  children,
  className = "",
  as = "div",
  id,
  ariaLabel,
}: RevealSectionProps): JSX.Element {
  const revealRef = useScrollReveal<HTMLElement>();
  const combinedClassName = `reveal-on-scroll ${className}`;

  if (as === "section") {
    return (
      <section
        ref={revealRef as React.RefObject<HTMLElement>}
        id={id}
        aria-label={ariaLabel}
        className={combinedClassName}
      >
        {children}
      </section>
    );
  }

  if (as === "article") {
    return (
      <article
        ref={revealRef as React.RefObject<HTMLElement>}
        id={id}
        aria-label={ariaLabel}
        className={combinedClassName}
      >
        {children}
      </article>
    );
  }

  if (as === "li") {
    return (
      <li
        ref={revealRef as React.RefObject<HTMLLIElement>}
        id={id}
        aria-label={ariaLabel}
        className={combinedClassName}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      ref={revealRef as React.RefObject<HTMLDivElement>}
      id={id}
      aria-label={ariaLabel}
      className={combinedClassName}
    >
      {children}
    </div>
  );
}

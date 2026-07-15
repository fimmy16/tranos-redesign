"use client";

import { useQuoteModal } from "@/context/QuoteModalContext";

export default function FloatingQuoteButton(): JSX.Element {
  const { openQuoteModal, isOpen } = useQuoteModal();

  if (isOpen) {
    return <></>;
  }

  return (
    <button
      type="button"
      onClick={() => openQuoteModal()}
      aria-label="Request a quote"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-tranos-blue px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,48,135,0.4)] transition-transform duration-200 hover:scale-105"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
        />
      </svg>
      Request Quote
    </button>
  );
}

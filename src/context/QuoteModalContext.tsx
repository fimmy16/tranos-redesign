"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ProductInterest } from "@/types/product";

interface QuoteModalContextValue {
  isOpen: boolean;
  presetProduct: ProductInterest | null;
  openQuoteModal: (presetProduct?: ProductInterest) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [presetProduct, setPresetProduct] = useState<ProductInterest | null>(null);

  const openQuoteModal = useCallback((product?: ProductInterest) => {
    setPresetProduct(product ?? null);
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, presetProduct, openQuoteModal, closeQuoteModal }),
    [isOpen, presetProduct, openQuoteModal, closeQuoteModal]
  );

  return <QuoteModalContext.Provider value={value}>{children}</QuoteModalContext.Provider>;
}

export function useQuoteModal(): QuoteModalContextValue {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}

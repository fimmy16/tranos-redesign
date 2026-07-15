"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { ProductInterest, QuoteFormFields } from "@/types/product";

const PRODUCT_INTEREST_OPTIONS: ProductInterest[] = [
  "Gaskets",
  "Power Protection & Distribution",
  "Power Generation & Backup",
  "Enclosures",
  "Cable Management & Support System",
  "Warehouse Storage System",
  "Light & Wiring Devices",
  "Other",
];

const INITIAL_FORM_STATE: QuoteFormFields = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phoneNumber: "",
  productInterest: "Other",
  projectDetails: "",
  rackHeight: "",
  rackWidth: "",
  rackDepth: "",
  rackFieldDimensions: "",
  requestSiteInspection: false,
};

export default function QuoteModal(): JSX.Element | null {
  const { isOpen, presetProduct, closeQuoteModal } = useQuoteModal();
  const [formState, setFormState] = useState<QuoteFormFields>(INITIAL_FORM_STATE);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setFormState((previousState) => ({
        ...previousState,
        productInterest: presetProduct ?? previousState.productInterest,
      }));
      setIsSubmitted(false);
    }
  }, [isOpen, presetProduct]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeQuoteModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  const handleFieldChange = useCallback(
    (field: keyof QuoteFormFields) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { value } = event.target;
        setFormState((previousState) => ({ ...previousState, [field]: value }));
      },
    []
  );

  const handleSiteInspectionToggle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setFormState((previousState) => ({ ...previousState, requestSiteInspection: checked }));
  }, []);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  }, []);

  if (!isOpen) {
    return null;
  }

  const isWarehouseInterest = formState.productInterest === "Warehouse Storage System";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
      className="fixed inset-0 z-50 flex items-center justify-center bg-tranos-navy/60 px-4 py-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeQuoteModal();
        }
      }}
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-xl font-bold text-tranos-navy">Request a Quote</h2>
          <button
            type="button"
            onClick={closeQuoteModal}
            aria-label="Close quote request form"
            className="flex h-8 w-8 items-center justify-center rounded-full text-tranos-navy/60 transition-colors duration-150 hover:bg-tranos-slate/40 hover:text-tranos-navy"
          >
            &times;
          </button>
        </div>

        {isSubmitted ? (
          <p className="text-sm font-semibold text-tranos-navy">
            Thank you. Your quote request has been received and our team will respond shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Quote request form">
            <label className="flex flex-col gap-1.5 text-sm text-tranos-navy/80">
              Product Interest
              <select
                value={formState.productInterest}
                onChange={handleFieldChange("productInterest")}
                className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                aria-label="Product interest"
              >
                {PRODUCT_INTEREST_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm text-tranos-navy/80">
                Full Name
                <input
                  type="text"
                  required
                  value={formState.fullName}
                  onChange={handleFieldChange("fullName")}
                  className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                  aria-label="Full name"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-tranos-navy/80">
                Company Name
                <input
                  type="text"
                  value={formState.companyName}
                  onChange={handleFieldChange("companyName")}
                  className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                  aria-label="Company name"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-tranos-navy/80">
                Work Email
                <input
                  type="email"
                  required
                  value={formState.workEmail}
                  onChange={handleFieldChange("workEmail")}
                  className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                  aria-label="Work email"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-tranos-navy/80">
                Phone Number
                <input
                  type="tel"
                  required
                  value={formState.phoneNumber}
                  onChange={handleFieldChange("phoneNumber")}
                  className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                  aria-label="Phone number"
                />
              </label>
            </div>

            {isWarehouseInterest && (
              <div className="flex flex-col gap-4 rounded-lg border border-tranos-slate bg-tranos-slate/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-tranos-navy">
                  Warehouse Storage System Details
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <label className="flex flex-col gap-1.5 text-xs text-tranos-navy/80">
                    Height
                    <input
                      type="text"
                      value={formState.rackHeight}
                      onChange={handleFieldChange("rackHeight")}
                      className="rounded-lg border border-tranos-slate bg-white px-3 py-2 text-tranos-navy outline-none focus:border-tranos-blue"
                      aria-label="Available height dimension"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs text-tranos-navy/80">
                    Width
                    <input
                      type="text"
                      value={formState.rackWidth}
                      onChange={handleFieldChange("rackWidth")}
                      className="rounded-lg border border-tranos-slate bg-white px-3 py-2 text-tranos-navy outline-none focus:border-tranos-blue"
                      aria-label="Available width dimension"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs text-tranos-navy/80">
                    Depth
                    <input
                      type="text"
                      value={formState.rackDepth}
                      onChange={handleFieldChange("rackDepth")}
                      className="rounded-lg border border-tranos-slate bg-white px-3 py-2 text-tranos-navy outline-none focus:border-tranos-blue"
                      aria-label="Available depth dimension"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5 text-xs text-tranos-navy/80">
                  Dimensions for Rack Field
                  <input
                    type="text"
                    value={formState.rackFieldDimensions}
                    onChange={handleFieldChange("rackFieldDimensions")}
                    className="rounded-lg border border-tranos-slate bg-white px-3 py-2 text-tranos-navy outline-none focus:border-tranos-blue"
                    aria-label="Dimensions for rack field"
                  />
                </label>
                <label className="flex items-center gap-2 text-xs text-tranos-navy/80">
                  <input
                    type="checkbox"
                    checked={formState.requestSiteInspection}
                    onChange={handleSiteInspectionToggle}
                    className="h-4 w-4 rounded border-tranos-slate text-tranos-blue focus:ring-tranos-blue"
                  />
                  Request a site inspection
                </label>
              </div>
            )}

            <label className="flex flex-col gap-1.5 text-sm text-tranos-navy/80">
              Project Details
              <textarea
                rows={3}
                value={formState.projectDetails}
                onChange={handleFieldChange("projectDetails")}
                className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                aria-label="Project details"
              />
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-tranos-blue px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

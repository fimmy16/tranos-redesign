"use client";

import Image from "next/image";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { generatorProducts } from "@/data/energy";
import { GeneratorProduct } from "@/types/product";

type QuotePanelMode = "datasheet" | "quote";

interface QuoteFormState {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  projectDetails: string;
}

const INITIAL_QUOTE_FORM_STATE: QuoteFormState = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phoneNumber: "",
  projectDetails: "",
};

const ANALYTICAL_TABLE_COLUMNS = [
  "Engine Model",
  "Power Rating",
  "Voltage Delivery",
  "Fuel Type",
  "Controller Module",
  "Sound Pressure Level",
] as const;

export default function ProductEnginePage(): JSX.Element {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    generatorProducts[0].id
  );
  const [panelMode, setPanelMode] = useState<QuotePanelMode>("datasheet");
  const [quoteFormState, setQuoteFormState] = useState<QuoteFormState>(
    INITIAL_QUOTE_FORM_STATE
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const selectedProduct: GeneratorProduct = useMemo(
    () =>
      generatorProducts.find((product) => product.id === selectedProductId) ??
      generatorProducts[0],
    [selectedProductId]
  );

  const handleProductSelect = useCallback((productId: string) => {
    setSelectedProductId(productId);
  }, []);

  const handlePanelModeChange = useCallback((mode: QuotePanelMode) => {
    setPanelMode(mode);
  }, []);

  const handleFormFieldChange = useCallback(
    (field: keyof QuoteFormState) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setQuoteFormState((previousState) => ({
          ...previousState,
          [field]: value,
        }));
      },
    []
  );

  const handleQuoteFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsFormSubmitted(true);
    },
    []
  );

  return (
    <>
      <section aria-label="Specs engine introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Specs Engine
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Technical Specification Engine &amp; Quote Panel
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Preview full engineering datasheets or request a formal quotation directly against
            precise technical criteria.
          </p>
        </div>
      </section>

      <section aria-label="Product selection and specification preview" className="px-gutter py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[320px_1fr]">
          <nav aria-label="Product selector" className="flex flex-col gap-3">
            {generatorProducts.map((product) => (
              <button
                key={product.id}
                type="button"
                aria-pressed={selectedProductId === product.id}
                onClick={() => handleProductSelect(product.id)}
                className={`rounded-full px-5 py-4 text-left text-sm font-semibold transition-colors duration-200 ${
                  selectedProductId === product.id
                    ? "bg-tranos-blue text-white"
                    : "bg-tranos-slate/30 text-tranos-navy hover:bg-tranos-slate/60"
                }`}
              >
                {product.name}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-8">
            <div className="data-protected relative aspect-video w-full overflow-hidden rounded-2xl border border-tranos-slate bg-tranos-slate/20">
              <Image
                src={selectedProduct.imageSrc}
                alt={selectedProduct.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                draggable={false}
                className="select-none object-contain p-12"
              />
            </div>

            <div className="flex gap-3" role="tablist" aria-label="Datasheet or quote panel switcher">
              <button
                type="button"
                role="tab"
                aria-selected={panelMode === "datasheet"}
                onClick={() => handlePanelModeChange("datasheet")}
                className={`flex-1 rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-200 ${
                  panelMode === "datasheet"
                    ? "bg-tranos-navy text-white"
                    : "border border-tranos-slate text-tranos-navy hover:bg-tranos-slate/30"
                }`}
              >
                Download Full Datasheet
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={panelMode === "quote"}
                onClick={() => handlePanelModeChange("quote")}
                className={`flex-1 rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-200 ${
                  panelMode === "quote"
                    ? "bg-tranos-blue text-white"
                    : "border border-tranos-slate text-tranos-navy hover:bg-tranos-slate/30"
                }`}
              >
                Request Quote
              </button>
            </div>

            {panelMode === "datasheet" ? (
              <div role="tabpanel" aria-label="Datasheet download panel" className="rounded-2xl border border-tranos-slate bg-white p-8">
                <h2 className="mb-4 text-xl font-bold text-tranos-navy">{selectedProduct.name}</h2>
                <p className="mb-6 text-sm leading-relaxed text-tranos-graphite">
                  {selectedProduct.tagline}
                </p>
                <a
                  href={selectedProduct.datasheetHref}
                  className="inline-block rounded-full bg-tranos-navy px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                  aria-label={`Download full datasheet for ${selectedProduct.name}`}
                >
                  Download Full Datasheet (PDF)
                </a>
              </div>
            ) : (
              <div
                id="request-quote"
                role="tabpanel"
                aria-label="Engineering quote request panel"
                className="rounded-2xl border border-tranos-slate bg-white p-8"
              >
                {isFormSubmitted ? (
                  <p className="text-sm font-semibold text-tranos-navy">
                    Thank you. Your quote request for {selectedProduct.name} has been received and
                    our team will respond shortly.
                  </p>
                ) : (
                  <form
                    onSubmit={handleQuoteFormSubmit}
                    className="flex flex-col gap-5"
                    aria-label="Engineering quote request form"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="flex flex-col gap-2 text-sm text-tranos-navy/80">
                        Full Name
                        <input
                          type="text"
                          required
                          value={quoteFormState.fullName}
                          onChange={handleFormFieldChange("fullName")}
                          className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                          aria-label="Full name"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm text-tranos-navy/80">
                        Company Name
                        <input
                          type="text"
                          required
                          value={quoteFormState.companyName}
                          onChange={handleFormFieldChange("companyName")}
                          className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                          aria-label="Company name"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm text-tranos-navy/80">
                        Work Email
                        <input
                          type="email"
                          required
                          value={quoteFormState.workEmail}
                          onChange={handleFormFieldChange("workEmail")}
                          className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                          aria-label="Work email"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm text-tranos-navy/80">
                        Phone Number
                        <input
                          type="tel"
                          required
                          value={quoteFormState.phoneNumber}
                          onChange={handleFormFieldChange("phoneNumber")}
                          className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                          aria-label="Phone number"
                        />
                      </label>
                    </div>
                    <label className="flex flex-col gap-2 text-sm text-tranos-navy/80">
                      Project Details
                      <textarea
                        required
                        rows={4}
                        value={quoteFormState.projectDetails}
                        onChange={handleFormFieldChange("projectDetails")}
                        className="rounded-lg border border-tranos-slate bg-white px-4 py-3 text-tranos-navy outline-none focus:border-tranos-blue"
                        aria-label="Project details"
                      />
                    </label>
                    <button
                      type="submit"
                      className="w-fit rounded-full bg-tranos-blue px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                    >
                      Submit Quote Request
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section aria-label="Full analytical technical criteria table" className="border-t border-tranos-slate bg-tranos-slate/20 px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-3xl font-bold text-tranos-navy lg:text-display-h2">
            Analytical Technical Criteria
          </h2>
          <div className="data-protected overflow-x-auto rounded-2xl border border-tranos-slate bg-white">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-tranos-navy">
                  <th scope="col" className="px-6 py-4 font-semibold text-white">
                    Product
                  </th>
                  {ANALYTICAL_TABLE_COLUMNS.map((column) => (
                    <th key={column} scope="col" className="px-6 py-4 font-semibold text-white">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generatorProducts.map((product) => {
                  const specMap = new Map(product.specs.map((spec) => [spec.label, spec.value]));
                  return (
                    <tr key={product.id} className="border-b border-tranos-slate">
                      <th scope="row" className="px-6 py-4 font-semibold text-tranos-navy">
                        {product.name}
                      </th>
                      {ANALYTICAL_TABLE_COLUMNS.map((column) => (
                        <td key={column} className="px-6 py-4 text-tranos-graphite">
                          {specMap.get(column) ?? "—"}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

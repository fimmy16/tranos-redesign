"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import RevealSection from "@/components/RevealSection";
import { useTabListKeyboardNav } from "@/hooks/useTabListKeyboardNav";
import { enclosureCategories, enclosureProducts } from "@/data/enclosures";
import { EnclosureCategoryId, EnclosureProduct } from "@/types/product";

export default function EnclosuresPage(): JSX.Element {
  const [activeCategoryId, setActiveCategoryId] = useState<EnclosureCategoryId>(
    enclosureCategories[0].id
  );

  const handleCategoryChange = useCallback((categoryId: EnclosureCategoryId) => {
    setActiveCategoryId(categoryId);
  }, []);

  const categoryIds = enclosureCategories.map((category) => category.id);
  const { registerRef, handleKeyDown } = useTabListKeyboardNav(
    categoryIds,
    activeCategoryId,
    handleCategoryChange
  );

  const filteredProducts: EnclosureProduct[] = useMemo(() => {
    return enclosureProducts.filter((product) => product.categoryId === activeCategoryId);
  }, [activeCategoryId]);

  const activeCategory = useMemo(
    () => enclosureCategories.find((category) => category.id === activeCategoryId),
    [activeCategoryId]
  );

  return (
    <>
      <section aria-label="Enclosures hub introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Encase Enclosures Division
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Enclosures
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Tranos designs and manufactures a broad range of enclosures for electrical,
            mechanical and information technology or data applications. Branded &lsquo;Encase&rsquo;,
            our enclosures are designed and manufactured according to various standards,
            including IEC 60529, IEC 62208, IEC 62271-202, and NEMA 250.
          </p>
        </div>
      </section>

      <nav
        aria-label="Enclosure category switcher"
        className="sticky top-24 z-30 border-b border-tranos-slate bg-white/95 px-gutter py-4 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3" role="tablist">
          {enclosureCategories.map((category) => (
            <button
              key={category.id}
              ref={registerRef(category.id)}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={activeCategoryId === category.id}
              aria-controls={`panel-${category.id}`}
              tabIndex={activeCategoryId === category.id ? 0 : -1}
              onClick={() => handleCategoryChange(category.id)}
              onKeyDown={handleKeyDown}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                activeCategoryId === category.id
                  ? "bg-tranos-navy text-white"
                  : "bg-tranos-slate/30 text-tranos-navy hover:bg-tranos-slate/60"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      <section
        id={`panel-${activeCategoryId}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCategoryId}`}
        aria-label={`${activeCategory?.label ?? ""} product overview`}
        className="px-gutter py-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-tranos-navy">
            {activeCategory?.label}
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-tranos-graphite">{activeCategory?.description}</p>

          {filteredProducts.length === 0 ? (
            <p className="text-sm text-tranos-graphite">
              Enclosure products for this category are being added to the catalog. Contact us for
              current specifications.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product: EnclosureProduct) => (
                <RevealSection
                  as="article"
                  key={product.id}
                  className="data-protected flex flex-col overflow-hidden rounded-2xl border border-tranos-slate bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  ariaLabel={product.name}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-tranos-slate/20">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      draggable={false}
                      className="select-none object-contain p-8"
                    />
                  </div>
                  <div className="bg-tranos-navy px-5 py-4">
                    <h3 className="text-base font-semibold text-white">{product.name}</h3>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <p className="text-sm leading-relaxed text-tranos-graphite">{product.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.ipRating.map((rating) => (
                        <span
                          key={rating}
                          className="rounded-full bg-tranos-blue/10 px-3 py-1 text-xs font-semibold text-tranos-blue"
                        >
                          {rating}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs uppercase tracking-wider text-tranos-graphite">
                      {product.impactProtection}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <RevealSection
        as="section"
        ariaLabel="Detailed enclosure specifications"
        className="border-t border-tranos-slate bg-tranos-slate/20 px-gutter py-20"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">
            Full Technical Specification Directory
          </h2>

          {filteredProducts.map((product: EnclosureProduct, index: number) => {
            const isEvenRow = index % 2 === 0;
            return (
              <article
                key={product.id}
                className={`data-protected flex flex-col gap-10 lg:flex-row ${
                  isEvenRow ? "" : "lg:flex-row-reverse"
                }`}
                aria-label={`${product.name} full specification`}
              >
                <div className="relative aspect-video w-full flex-1 overflow-hidden rounded-2xl border border-tranos-slate bg-white">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    draggable={false}
                    className="select-none object-contain p-12"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-5">
                  <h3 className="text-2xl font-bold text-tranos-navy">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-tranos-graphite">{product.summary}</p>
                  <table className="w-full border-collapse text-left text-sm">
                    <tbody>
                      {product.specSheet.map((row) => (
                        <tr key={row.label} className="border-b border-tranos-slate">
                          <th scope="row" className="py-3 pr-4 font-semibold text-tranos-navy">
                            {row.label}
                          </th>
                          <td className="py-3 text-tranos-graphite">{row.value}</td>
                        </tr>
                      ))}
                      <tr className="border-b border-tranos-slate">
                        <th scope="row" className="py-3 pr-4 font-semibold text-tranos-navy">
                          Finishes
                        </th>
                        <td className="py-3 text-tranos-graphite">{product.finishes.join(", ")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            );
          })}
        </div>
      </RevealSection>
    </>
  );
}

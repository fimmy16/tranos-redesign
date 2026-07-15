"use client";

import { useCallback, useRef } from "react";

// Implements the WAI-ARIA APG "tabs, automatic activation" keyboard pattern:
// Left/Right (or Up/Down) moves and activates, Home/End jump to the ends,
// and the roving tabIndex keeps the tablist a single Tab stop.
export function useTabListKeyboardNav<T extends string>(
  items: readonly T[],
  activeItem: T,
  onActivate: (item: T) => void
) {
  const itemRefs = useRef<Map<T, HTMLButtonElement>>(new Map());

  const registerRef = useCallback(
    (item: T) => (element: HTMLButtonElement | null) => {
      if (element) {
        itemRefs.current.set(item, element);
      } else {
        itemRefs.current.delete(item);
      }
    },
    []
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      const currentIndex = items.indexOf(activeItem);
      let nextIndex: number | null = null;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % items.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + items.length) % items.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = items.length - 1;
      }

      if (nextIndex !== null) {
        event.preventDefault();
        const nextItem = items[nextIndex];
        onActivate(nextItem);
        itemRefs.current.get(nextItem)?.focus();
      }
    },
    [items, activeItem, onActivate]
  );

  return { registerRef, handleKeyDown };
}

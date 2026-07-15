"use client";

import { useEffect } from "react";

const BLOCKED_KEY_COMBINATIONS: ReadonlyArray<(event: KeyboardEvent) => boolean> = [
  (event) => event.key === "F12",
  (event) => event.ctrlKey && event.shiftKey && event.key.toUpperCase() === "I",
  (event) => event.ctrlKey && event.shiftKey && event.key.toUpperCase() === "C",
  (event) => event.ctrlKey && event.shiftKey && event.key.toUpperCase() === "J",
  (event) => event.ctrlKey && event.key.toUpperCase() === "U",
  (event) => event.metaKey && event.altKey && event.key.toUpperCase() === "I",
];

const PROTECTED_CONTENT_SELECTOR = ".data-protected";

// Scoped to protected content only (spec tables, product imagery) — see
// CLAUDE_RULES.md 3.2. The corresponding CSS (.data-protected user-select: none)
// already lives in globals.css; this listener is what actually enforces it,
// since a bare CSS rule doesn't stop selection dragging across sibling nodes.
export function useSecurityEngine(): void {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent): void => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(PROTECTED_CONTENT_SELECTOR)) {
        event.preventDefault();
      }
    };

    const handleDragStart = (event: DragEvent): void => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(PROTECTED_CONTENT_SELECTOR)) {
        event.preventDefault();
      }
    };

    const handleSelectStart = (event: Event): void => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      if (target?.closest(PROTECTED_CONTENT_SELECTOR)) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      const isBlocked = BLOCKED_KEY_COMBINATIONS.some((matcher) => matcher(event));
      if (isBlocked) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);
}

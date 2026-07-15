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

const PROTECTED_STYLE_ELEMENT_ID = "tranos-security-engine-style";

const PROTECTED_GLOBAL_STYLES = `
  html body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  html body img,
  html body svg,
  html body picture {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    pointer-events: auto;
  }
  html body input,
  html body textarea,
  html body [contenteditable="true"] {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
`;

function injectProtectedStyles(): void {
  if (document.getElementById(PROTECTED_STYLE_ELEMENT_ID)) {
    return;
  }
  const styleElement = document.createElement("style");
  styleElement.id = PROTECTED_STYLE_ELEMENT_ID;
  styleElement.textContent = PROTECTED_GLOBAL_STYLES;
  document.head.appendChild(styleElement);
}

function removeProtectedStyles(): void {
  const existingStyleElement = document.getElementById(PROTECTED_STYLE_ELEMENT_ID);
  if (existingStyleElement) {
    existingStyleElement.remove();
  }
}

export function useSecurityEngine(): void {
  useEffect(() => {
    injectProtectedStyles();

    const handleContextMenu = (event: MouseEvent): void => {
      event.preventDefault();
    };

    const handleDragStart = (event: DragEvent): void => {
      event.preventDefault();
    };

    const handleSelectStart = (event: Event): void => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      event.preventDefault();
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
      removeProtectedStyles();
    };
  }, []);
}

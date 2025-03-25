"use client";

import { ReactNode, useEffect, useLayoutEffect, useState, useRef } from "react";

// Safely use useLayoutEffect with SSR
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function LayoutWrapper({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const hasCleanedUpRef = useRef(false);

  // Clean up any data-* attributes added by browser extensions after the first render
  useIsomorphicLayoutEffect(() => {
    if (typeof document !== "undefined" && !hasCleanedUpRef.current) {
      hasCleanedUpRef.current = true;

      // Remove data attributes that might be added by browser extensions
      const bodyElement = document.body;

      // Create list of attributes to remove
      const attributesToRemove: string[] = [];
      for (let i = 0; i < bodyElement.attributes.length; i++) {
        const attr = bodyElement.attributes[i];
        // Only remove data attributes that we don't explicitly set
        if (
          attr.name.startsWith("data-") &&
          attr.name !== "data-theme" &&
          !attr.name.startsWith("data-next")
        ) {
          attributesToRemove.push(attr.name);
        }
      }

      // Remove them (can't modify attributes while iterating)
      attributesToRemove.forEach((attr) => {
        bodyElement.removeAttribute(attr);
      });

      // Set mounted state only after cleanup
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) {
    // Return a bare minimum during SSR to avoid hydration mismatch
    return <>{children}</>;
  }

  return <>{children}</>;
}

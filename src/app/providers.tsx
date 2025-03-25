"use client";

import { QuizProvider } from "./context/QuizContext";
import { ReactNode, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR and the first client render, return a placeholder that matches server output
  if (!isMounted) {
    return <>{children}</>;
  }

  // After component mounts on client, provide the context
  return <QuizProvider>{children}</QuizProvider>;
}

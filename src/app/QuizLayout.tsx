"use client";

import React, { ReactNode } from "react";
import { QuizProvider } from "./context/QuizContext";

interface QuizLayoutProps {
  children: ReactNode;
}

export default function QuizLayout({ children }: QuizLayoutProps) {
  return <QuizProvider>{children}</QuizProvider>;
}

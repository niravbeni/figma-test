"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define types for our quiz state
interface QuizState {
  month: string | null;
  color: string | null;
  iceCream: string | null;
}

// Define types for our context
interface QuizContextType {
  answers: QuizState;
  setMonth: (month: string) => void;
  setColor: (color: string) => void;
  setIceCream: (flavor: string) => void;
  resetAnswers: () => void;
  isReady: boolean;
}

// Create initial empty context
const initialContext: QuizContextType = {
  answers: { month: null, color: null, iceCream: null },
  setMonth: () => {},
  setColor: () => {},
  setIceCream: () => {},
  resetAnswers: () => {},
  isReady: false,
};

// Create the context with a default value
const QuizContext = createContext<QuizContextType>(initialContext);

// Hook to use the quiz context
export function useQuiz() {
  return useContext(QuizContext);
}

// Provider component
export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<QuizState>({
    month: null,
    color: null,
    iceCream: null,
  });

  const [isReady, setIsReady] = useState(false);

  // Set ready state after hydration
  useEffect(() => {
    setIsReady(true);
  }, []);

  const setMonth = (month: string) => {
    setAnswers((prev) => ({ ...prev, month }));
  };

  const setColor = (color: string) => {
    setAnswers((prev) => ({ ...prev, color }));
  };

  const setIceCream = (iceCream: string) => {
    setAnswers((prev) => ({ ...prev, iceCream }));
  };

  const resetAnswers = () => {
    setAnswers({
      month: null,
      color: null,
      iceCream: null,
    });
  };

  const value = {
    answers,
    setMonth,
    setColor,
    setIceCream,
    resetAnswers,
    isReady,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

"use client";

import { Layout, Button } from "./components";
import Link from "next/link";
import { useQuiz } from "./context/QuizContext";
import { useEffect, useRef } from "react";

export default function Home() {
  const { resetAnswers, isReady } = useQuiz();
  const hasResetRef = useRef(false);

  // Only reset answers after hydration is complete and only once
  useEffect(() => {
    if (isReady && !hasResetRef.current) {
      hasResetRef.current = true;
      resetAnswers();
    }
  }, [isReady, resetAnswers]);

  return (
    <Layout>
      <div className="flex flex-col h-full pt-6">
        <h1 className="text-5xl font-medium text-black text-center mb-12 leading-[1.2em] tracking-[-0.03em]">
          Find your Spirit Animal
        </h1>

        <div className="flex-1 flex items-center justify-center">
          <img src="/icons/pets.svg" alt="Pets" className="w-72 h-72" />
        </div>

        <div className="w-full max-w-[346px] mx-auto">
          <Link href="/quiz" className="w-full">
            <Button text="Start" className="mt-auto" fontWeight="semibold" />
          </Link>
        </div>

        {/* Demo links - only visible in development */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 text-sm text-gray-500">
            <p className="text-center mb-2">Demo Links:</p>
            <div className="flex flex-col gap-2">
              <Link href="/quiz" className="text-center underline">
                Month Question
              </Link>
              <Link href="/quiz/color" className="text-center underline">
                Color Question
              </Link>
              <Link href="/quiz/ice-cream" className="text-center underline">
                Ice Cream Question
              </Link>
              <Link href="/quiz/summary" className="text-center underline">
                Summary
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

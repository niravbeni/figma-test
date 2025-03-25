"use client";

import { useState, useEffect, useRef } from "react";
import { Layout, Button, SelectOption, ProgressBar } from "../components";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQuiz } from "../context/QuizContext";

export default function QuizPage() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const router = useRouter();
  const { answers, setMonth, isReady } = useQuiz();
  const hasSetMonthRef = useRef(false);

  // Set the selected month from context if available
  useEffect(() => {
    if (isReady && answers.month && !hasSetMonthRef.current) {
      hasSetMonthRef.current = true;
      setSelectedMonth(answers.month);
    }
  }, [isReady, answers.month]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Layout>
      <div className="flex flex-col h-full">
        {/* Header with back and close buttons */}
        <div className="flex justify-between mb-6">
          <Link href="/">
            <button className="p-1">
              <img
                src="/icons/arrow_circle_left.svg"
                alt="Back"
                className="w-8 h-8"
              />
            </button>
          </Link>
          <Link href="/">
            <button className="p-1">
              <img src="/icons/cancel.svg" alt="Cancel" className="w-8 h-8" />
            </button>
          </Link>
        </div>

        {/* Question */}
        <h2 className="text-3xl font-medium text-black mb-8 tracking-tight leading-tight">
          What month were you born?
        </h2>

        {/* Options */}
        <div className="flex flex-wrap gap-3 mb-8">
          {months.map((month) => (
            <SelectOption
              key={month}
              text={month}
              selected={selectedMonth === month}
              onClick={() => setSelectedMonth(month)}
            />
          ))}
        </div>

        {/* Currently selected month */}
        {selectedMonth && (
          <div className="py-4 px-6 bg-gray-100 rounded-lg mb-auto">
            <span className="text-xl font-medium">{selectedMonth}</span>
          </div>
        )}

        {/* Progress bar */}
        <ProgressBar currentStep={1} totalSteps={4} className="mx-auto mb-6" />

        {/* Next button */}
        <div className="w-full max-w-[346px] mx-auto">
          <Button
            text="Next Question"
            variant="primary"
            onClick={() => {
              if (selectedMonth) {
                setMonth(selectedMonth);
                router.push("/quiz/color");
              } else {
                alert("Please select a month to continue.");
              }
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

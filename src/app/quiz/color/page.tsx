"use client";

import { useState, useEffect, useRef } from "react";
import { Layout, Button, SelectOption, ProgressBar } from "../../components";
import { theme } from "../../theme";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQuiz } from "../../context/QuizContext";

export default function ColorQuizPage() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const router = useRouter();
  const { answers, setColor, isReady } = useQuiz();
  const hasSetColorRef = useRef(false);

  // Set the selected color from context if available
  useEffect(() => {
    if (isReady && answers.color && !hasSetColorRef.current) {
      hasSetColorRef.current = true;
      setSelectedColor(answers.color);
    }
  }, [isReady, answers.color]);

  const colors = [
    { name: "Red", value: theme.colors.red },
    { name: "Yellow", value: theme.colors.yellow },
    { name: "Green", value: theme.colors.green },
    { name: "Purple", value: theme.colors.purple },
    { name: "Blue", value: theme.colors.blue },
    { name: "Black", value: theme.colors.black },
    { name: "Orange", value: theme.colors.orange },
    { name: "Brown", value: theme.colors.brown },
    { name: "Pink", value: theme.colors.pink },
  ];

  return (
    <Layout>
      <div className="flex flex-col h-full">
        {/* Header with back and close buttons */}
        <div className="flex justify-between mb-6">
          <Link href="/quiz">
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
          What&apos;s your favourite colour?
        </h2>

        {/* Background image - this would typically come from the Figma design */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-3 mb-8">
          {colors.map((color) => (
            <SelectOption
              key={color.name}
              text={color.name}
              color={color.value}
              selected={selectedColor === color.name}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>

        {/* Currently selected color */}
        {selectedColor && (
          <div className="flex items-center gap-2 py-4 px-6 bg-gray-100 rounded-lg mb-auto w-fit">
            <div
              className="w-6 h-6 rounded-md"
              style={{
                backgroundColor: colors.find((c) => c.name === selectedColor)
                  ?.value,
              }}
            />
            <span className="text-xl font-medium">{selectedColor}</span>
          </div>
        )}

        {/* Progress bar */}
        <ProgressBar currentStep={2} totalSteps={4} className="mx-auto mb-6" />

        {/* Next button */}
        <div className="w-full max-w-[346px] mx-auto">
          <Button
            text="Next Question"
            variant="primary"
            onClick={() => {
              if (selectedColor) {
                setColor(selectedColor);
                router.push("/quiz/ice-cream");
              } else {
                alert("Please select a color to continue.");
              }
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

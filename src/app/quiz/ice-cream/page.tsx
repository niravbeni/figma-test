"use client";

import { useState, useEffect, useRef } from "react";
import { Layout, Button, SelectOption, ProgressBar } from "../../components";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQuiz } from "../../context/QuizContext";

export default function IceCreamQuizPage() {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const router = useRouter();
  const { answers, setIceCream, isReady } = useQuiz();
  const hasSetFlavorRef = useRef(false);

  // Set the selected flavor from context if available
  useEffect(() => {
    if (isReady && answers.iceCream && !hasSetFlavorRef.current) {
      hasSetFlavorRef.current = true;
      setSelectedFlavor(answers.iceCream);
    }
  }, [isReady, answers.iceCream]);

  const flavors = [
    "Chocolate",
    "Strawberry",
    "Vanilla",
    "Mint",
    "Coffee",
    "Pistachio",
    "Caramel",
    "Cookies & Cream",
  ];

  return (
    <Layout>
      <div className="flex flex-col h-full">
        {/* Header with back and close buttons */}
        <div className="flex justify-between mb-6">
          <Link href="/quiz/color">
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
          What&apos;s your favourite ice cream flavour?
        </h2>

        {/* Options */}
        <div className="flex flex-wrap gap-3 mb-8">
          {flavors.map((flavor) => (
            <SelectOption
              key={flavor}
              text={flavor}
              selected={selectedFlavor === flavor}
              onClick={() => setSelectedFlavor(flavor)}
            />
          ))}
        </div>

        {/* Currently selected flavor */}
        {selectedFlavor && (
          <div className="py-4 px-6 bg-gray-100 rounded-lg mb-auto w-fit">
            <span className="text-xl font-medium">{selectedFlavor}</span>
          </div>
        )}

        {/* Progress bar */}
        <ProgressBar currentStep={3} totalSteps={4} className="mx-auto mb-6" />

        {/* Next button */}
        <div className="w-full max-w-[346px] mx-auto">
          <Button
            text="Next Question"
            variant="primary"
            onClick={() => {
              if (selectedFlavor) {
                setIceCream(selectedFlavor);
                router.push("/quiz/summary");
              } else {
                alert("Please select an ice cream flavor to continue.");
              }
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

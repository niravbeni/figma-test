"use client";

import { Layout, Button, SelectOption } from "../../components";
import { theme } from "../../theme";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQuiz } from "../../context/QuizContext";
import { useRef, useEffect, useState } from "react";

export default function SummaryPage() {
  const router = useRouter();
  const { answers, resetAnswers, isReady } = useQuiz();
  const didNavigateRef = useRef(false);
  const hasUpdatedRef = useRef(false);
  const [displayAnswers, setDisplayAnswers] = useState({
    month: null as string | null,
    color: null as string | null,
    iceCream: null as string | null,
  });

  // Update display answers when ready, but only once
  useEffect(() => {
    if (isReady && !hasUpdatedRef.current) {
      hasUpdatedRef.current = true;
      setDisplayAnswers(answers);
    }
  }, [isReady, answers]);

  // Find the correct color value for the selected color
  const getColorValue = (colorName: string | null) => {
    if (!colorName) return theme.colors.blue; // Default color

    const colorMap: Record<string, string> = {
      Red: theme.colors.red,
      Yellow: theme.colors.yellow,
      Green: theme.colors.green,
      Purple: theme.colors.purple,
      Blue: theme.colors.blue,
      Black: theme.colors.black,
      Orange: theme.colors.orange,
      Brown: theme.colors.brown,
      Pink: theme.colors.pink,
    };

    return colorMap[colorName] || theme.colors.blue;
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        {/* Header with back button */}
        <div className="flex justify-between mb-6">
          <Link href="/quiz/ice-cream">
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

        <h2 className="text-3xl font-medium text-black mb-8 tracking-tight leading-tight">
          Summary
        </h2>

        <div className="space-y-6 mb-auto">
          <div>
            <p className="text-lg font-medium mb-2 text-center">
              The Month you picked is:
            </p>
            <div className="flex justify-center">
              <SelectOption
                text={displayAnswers.month || "Not selected"}
                className="w-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-medium mb-2 text-center">
              The Colour you picked is:
            </p>
            <div className="flex justify-center">
              <SelectOption
                text={displayAnswers.color || "Not selected"}
                color={getColorValue(displayAnswers.color)}
                className="w-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-medium mb-2 text-center">
              Your Ice-Cream you picked is:
            </p>
            <div className="flex justify-center">
              <SelectOption
                text={displayAnswers.iceCream || "Not selected"}
                className="w-auto"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[346px] mx-auto">
          <Button
            text="Looks Good!"
            variant="primary"
            onClick={() => {
              if (didNavigateRef.current) return;
              didNavigateRef.current = true;

              const colorText = displayAnswers.color
                ? displayAnswers.color
                : "Blue";
              alert(`Your Spirit Animal is a ${colorText} Wolf!`);
              resetAnswers();
              router.push("/");
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

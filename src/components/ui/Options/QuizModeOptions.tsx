import React, { type FC, useEffect } from "react";
import type { QuizMode } from "../../../types";
import { useQuiz } from "../../../context/QuizContext";

interface QuizModeOptionsProps {
  setQuizMode: (mode: QuizMode) => void;
}

const QuizModeOptions: FC<QuizModeOptionsProps> = ({ setQuizMode }) => {
  const { quizOptions } = useQuiz();
  const quizModes: { quizMode: QuizMode; title: string; subtitle: string }[] = [
    {
      quizMode: "num-jap",
      title: "Number → Japanese",
      subtitle: "See a number, type the Japanese reading",
    },
    {
      quizMode: "jap-num",
      title: "Japanese → Number",
      subtitle: "See a Japanese reading, type the number ",
    },
  ];
  const [selectedQuizMode, setSelectedQuizMode] =
    React.useState<QuizMode>("num-jap");

  // Initialize from context when component mounts
  useEffect(() => {
    setSelectedQuizMode(quizOptions.quizMode);
  }, [quizOptions]);

  const handleQuizModeSelect = (mode: QuizMode) => {
    setSelectedQuizMode(mode);
    setQuizMode(mode);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  max-w-full mx-auto">
      {quizModes.map((quizMode) => (
        <button
          onClick={() => handleQuizModeSelect(quizMode.quizMode)}
          className={`btn btn-primary btn-soft p-10 w-full flex flex-col ${
            selectedQuizMode === quizMode.quizMode && "btn-active"
          }`}
        >
          <p className="font-bold ">{quizMode.title}</p>
          <p>{quizMode.subtitle}</p>
        </button>
      ))}
    </div>
  );
};

export default QuizModeOptions;

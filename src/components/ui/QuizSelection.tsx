import type { FC } from "react";
import { useQuiz } from "../../context/QuizContext";

import NumberOptions from "./Options/NumberOptions";
import QuestionCountOptions from "./Options/QuestionCountOptions";
import QuizModeOptions from "./Options/QuizModeOptions";
import NumberFormatOptions from "./Options/NumberFormatOptions";
import Quiz from "./Quiz";

const QuizSelection: FC = () => {
  const { quizOptions, setQuizOptions, quizStarted, setQuizStarted } = useQuiz();

  return quizStarted ? (
    <div className="w-full flex flex-col items-center bg-base-100 text-center">
      <Quiz />
    </div>
  ) : (
    <div className="flex flex-col items-center bg-base-100 gap-8 p-8 text-center min-h-[calc(100vh-300px)]">
      <button
        onClick={() => setQuizStarted(true)}
        className="btn btn-primary btn-xl"
      >
        Start Quiz
      </button>
      <div className="w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4 text-base-content">
          Number Range
        </h3>
        <NumberOptions
          setNumbers={(numbers) => setQuizOptions({ ...quizOptions, numbers })}
        />
      </div>
      <div className="w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4 text-base-content">
          Question Count
        </h3>
        <QuestionCountOptions
          setQuestionCount={(questionCount) =>
            setQuizOptions({ ...quizOptions, questionCount })
          }
        />
      </div>
      <div className="w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4 text-base-content">
          Quiz Mode
        </h3>
        <QuizModeOptions
          setQuizMode={(quizMode) =>
            setQuizOptions({ ...quizOptions, quizMode })
          }
        />
      </div>
      <div className="w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4 text-base-content">
          Number Format
        </h3>
        <NumberFormatOptions
          setNumberFormat={(numberFormat) =>
            setQuizOptions({ ...quizOptions, numberFormat })
          }
        />
      </div>
    </div>
  );
};

export default QuizSelection;

import type { FC } from "react";
import { useState } from "react";
import {
  type QuizOptions,
  DEFAULT_NUMBERS,
  DEFAULT_NUMBER_FORMAT,
  DEFAULT_QUESTION_COUNT,
  DEFAULT_QUIZ_MODE,
} from "../../types";

import NumberOptions from "./Options/NumberOptions";
import QuestionCountOptions from "./Options/QuestionCountOptions";
import QuizModeOptions from "./Options/QuizModeOptions";
import NumberFormatOptions from "./Options/NumberFormatOptions";

const Quiz: FC = () => {
  const [quizOptions, setQuizOptions] = useState<QuizOptions>({
    numbers: DEFAULT_NUMBERS,
    questionCount: DEFAULT_QUESTION_COUNT,
    numberFormat: DEFAULT_NUMBER_FORMAT,
    quizMode: DEFAULT_QUIZ_MODE,
  });

  return (
    <div className="flex flex-col items-center bg-base-100 gap-8 p-8 text-center">
      <button className="btn btn-primary btn-xl">Start Quiz</button>
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

export default Quiz;

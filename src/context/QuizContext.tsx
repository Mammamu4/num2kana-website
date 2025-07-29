import React, { createContext, useState, useContext, type ReactNode } from 'react';
import {
  type QuizOptions,
  DEFAULT_NUMBERS,
  DEFAULT_NUMBER_FORMAT,
  DEFAULT_QUESTION_COUNT,
  DEFAULT_QUIZ_MODE,
} from "../types";

interface QuizContextType {
  quizOptions: QuizOptions;
  setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>;
  quizStarted: boolean;
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizOptions, setQuizOptions] = useState<QuizOptions>({
    numbers: DEFAULT_NUMBERS,
    questionCount: DEFAULT_QUESTION_COUNT,
    numberFormat: DEFAULT_NUMBER_FORMAT,
    quizMode: DEFAULT_QUIZ_MODE,
  });

  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  return (
    <QuizContext.Provider value={{ quizOptions, setQuizOptions, quizStarted, setQuizStarted }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
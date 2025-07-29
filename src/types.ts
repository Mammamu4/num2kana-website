export type NumberFormat = "kanji" | "hiragana" | "katakana" | "romaji";
export type QuizMode = "num-jap" | "jap-num";

export interface Question {
  number: number;
  kanji: string;
  hiragana: string;
  katakana: string;
  romaji: string;
}
export interface QuizOptions {
  numbers: NumberRange | number[];
  questionCount: number;
  numberFormat: NumberFormat;
  quizMode: QuizMode;
}

export interface NumberRange {
  start: number;
  end: number;
}

export interface Tab {
  name: TabName;
  component: React.ReactNode;
}

export type TabName = "Quiz" | "Learn" | "About";

export const DEFAULT_NUMBERS: NumberRange = {
  start: 1,
  end: 10,
};
export const DEFAULT_QUESTION_COUNT: number = 10;
export const DEFAULT_NUMBER_FORMAT: NumberFormat = "kanji";
export const DEFAULT_QUIZ_MODE: QuizMode = "num-jap";

import { useState } from "react";
import { numToAllFormats } from "num2kana";
import KanaTable from "./KanaTable";

interface Translations {
  kanji: string;
  hiragana: string;
  katakana: string;
  romaji: string;
}

const Learn = () => {
  const [numberInput, setNumberInput] = useState<number | null>(null);
  const [translatedNumbers, setTranslatedNumbers] = useState<Translations>({
    kanji: "",
    hiragana: "",
    katakana: "",
    romaji: "",
  });
  const translateNumber = (num: number) => {
    try {
      setTranslatedNumbers(numToAllFormats(num, { spaceRomaji: true }));
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedNumbers({
        kanji: "Error",
        hiragana: "Error",
        katakana: "Error",
        romaji: "Error",
      });
    }
  };
  return (
    <div className="p-8 md:p-16 flex flex-col items-center text-base-content bg-base-100">
      <input
        type="number"
        className="input md:input-xl validator"
        placeholder="Type a number to translate"
        autoFocus
        value={numberInput ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setNumberInput(value ? parseInt(value, 10) : null);
          translateNumber(value ? parseInt(value, 10) : 0);
        }}
        min="0"
      />
      <p className="validator-hint">Not a valid number</p>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          numberInput != null
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list">
          <li
            className="list-row animate-fadeIn"
            style={{ animationDelay: "100ms" }}
          >
            <span className="list-label">Kanji:</span>
            <span className="list-value">{translatedNumbers.kanji}</span>
          </li>
          <li
            className="list-row animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            <span className="list-label">Hiragana:</span>
            <span className="list-value">{translatedNumbers.hiragana}</span>
          </li>
          <li
            className="list-row animate-fadeIn"
            style={{ animationDelay: "300ms" }}
          >
            <span className="list-label">Katakana:</span>
            <span className="list-value">{translatedNumbers.katakana}</span>
          </li>
          <li
            className="list-row animate-fadeIn"
            style={{ animationDelay: "400ms" }}
          >
            <span className="list-label">Romaji:</span>
            <span className="list-value">{translatedNumbers.romaji}</span>
          </li>
        </ul>
      </div>
      <p className="mt-8 text-lg font-light">
        Japanese numerals have their roots in Chinese numerals, introduced to
        Japan as early as the 5th century. Over time, Japan developed a hybrid
        system using both native Japanese readings (kun’yomi) and Sino-Japanese
        readings (on’yomi), depending on the context—dates, counting people, and
        even money use different readings.
      </p>
      <p className="mt-8 text-lg font-light">
        A unique feature of Japanese (and East Asian) numbering is its
        myriad-based system. Unlike Western systems that group large numbers by
        thousands, Japanese groups by ten-thousands (万, man = 10,000). For
        example, 100,000 is "十万" (juu-man), meaning "ten ten-thousands." This
        extends further: 100 million is "一億" (ichi-oku), literally "one
        hundred-million," and 1 trillion is "一兆" (icchou), showing how myriads
        stack hierarchically.
      </p>
      <KanaTable />
    </div>
  );
};

export default Learn;

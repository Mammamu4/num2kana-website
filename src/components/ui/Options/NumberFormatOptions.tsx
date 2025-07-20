import { useState, type FC } from "react";
import type { NumberFormat } from "../../../types";

interface NumberFormatOptionsProps {
  setNumberFormat: (format: NumberFormat) => void;
}

const NumberFormatOptions: FC<NumberFormatOptionsProps> = ({
  setNumberFormat,
}) => {
  const [selectedNumberFormat, setSelectedNumberFormat] =
    useState<NumberFormat>("kanji");
  const numberFormats: { format: NumberFormat; title: string }[] = [
    { format: "kanji", title: "Kanji" },
    { format: "hiragana", title: "Hiragana" },
    { format: "katakana", title: "Katakana" },
    { format: "romaji", title: "Romaji" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full mx-auto">
      {numberFormats.map((format) => (
        <button
          key={format.format}
          onClick={() => {
            setSelectedNumberFormat(format.format);
            setNumberFormat(format.format);
          }}
          className={`btn btn-soft btn-primary w-full ${
            selectedNumberFormat === format.format
              ? "btn-active"
              : ""
          }`}
        >
          <p className="font-bold">{format.title}</p>
        </button>
      ))}
    </div>
  );
};

export default NumberFormatOptions;

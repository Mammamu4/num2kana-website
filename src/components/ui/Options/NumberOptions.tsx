import { useState, type FC } from "react";
import type { NumberRange } from "../../../types";

interface NumberOptionsProps {
  setNumbers: (newNumbers: NumberRange | number[]) => void;
}

const NumberOptions: FC<NumberOptionsProps> = ({ setNumbers }) => {
  const [selectedRangeIndex, setSelectedRangeIndex] = useState<number>(0);
  const [selectedSetIndex, setSelectedSetIndex] = useState<number>(0);
  const [isRangeMode, setIsRangeMode] = useState<boolean>(true);

  const numberRanges: NumberRange[] = [
    { start: 1, end: 10 },
    { start: 1, end: 100 },
    { start: 1, end: 1000 },
    { start: 1, end: 10000 },
    { start: 1, end: 100000 },
    { start: 1, end: 1000000 },
  ];

  interface NumberSet {
    name: string;
    numbers: number[];
  }
  const numberSets: NumberSet[] = [
    { name: "Tens", numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90] },
    {
      name: "Hundreds",
      numbers: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Thousands",
      numbers: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
    },
    {
      name: "Ten Thousands",
      numbers: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000],
    },
    {
      name: "Hundred Thousands",
      numbers: [
        100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
      ],
    },
    {
      name: "Millions",
      numbers: [
        1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000,
        9000000,
      ],
    },
  ];

  const handleNumberRangeSelect = (index: number) => {
    setSelectedRangeIndex(index);
    setIsRangeMode(true);
    const newNumbers = numberRanges[index];
    setNumbers(newNumbers);
  };

  const handleNumberSetSelect = (index: number) => {
    setSelectedSetIndex(index);
    setIsRangeMode(false);
    const newNumbers = numberSets[index];
    setNumbers(newNumbers.numbers);
  };

  return (
    <div className="w-full">
      <div className="tabs tabs-boxed mb-6 justify-center">
        <button
          className={`tab tab-lg text-base-content ${isRangeMode ? "tab-active" : ""}`}
          onClick={() => {
            setIsRangeMode(true);
            setNumbers(numberRanges[selectedRangeIndex]);
          }}
        >
          Ranges
        </button>
        <button
          className={`tab tab-lg text-base-content ${!isRangeMode ? "tab-active" : ""}`}
          onClick={() => {
            setIsRangeMode(false);
            setNumbers(numberSets[selectedSetIndex].numbers);
          }}
        >
          Sets
        </button>
      </div>

      {isRangeMode ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-full mx-auto">
          {numberRanges.map((range: NumberRange, index: number) => (
            <div key={`range-${index}`}>
              <button
                className={`btn btn-soft btn-primary w-full ${
                  selectedRangeIndex === index && "btn-active"
                }`}
                onClick={() => handleNumberRangeSelect(index)}
              >
                {range.start} - {range.end}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-full mx-auto">
          {numberSets.map((set: NumberSet, index: number) => (
            <div key={`set-${index}`}>
              <button
                className={`btn btn-soft btn-primary w-full ${
                  selectedSetIndex === index && "btn-active"
                }`}
                onClick={() => handleNumberSetSelect(index)}
              >
                {set.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NumberOptions;

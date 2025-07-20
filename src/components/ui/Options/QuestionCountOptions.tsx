import { useState, type FC } from "react";

interface QuestionCountOptionsProps {
  setQuestionCount: (count: number) => void;
}

const QuestionCountOptions: FC<QuestionCountOptionsProps> = ({
  setQuestionCount,
}) => {
  const questionCounts: number[] = [5, 10, 15, 20, 25, 30];
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(5);

  const handleQuestionCountChange = (count: number) => {
    setQuestionCount(count);
    setSelectedQuestionCount(count);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-full mx-auto">
      {questionCounts.map((count: number) => (
        <div key={`count-${count}`}>
          <button
            className={`btn btn-primary btn-soft w-full ${
              selectedQuestionCount === count && "btn-active"
            }`}
            onClick={() => handleQuestionCountChange(count)}
          >
            {count}
          </button>
        </div>
      ))}
      <input
        type="range"
        min={1}
        max={100}
        value={selectedQuestionCount}
        onChange={(e) => handleQuestionCountChange(e.target.valueAsNumber)}
        className="range range-primary w-full col-span-2 md:col-span-3"
      />
      {!questionCounts.some((count) => count === selectedQuestionCount) && (
        <div className="col-span-3 text-center text-sm text-gray-500">
          {selectedQuestionCount}
        </div>
      )}
    </div>
  );
};

export default QuestionCountOptions;

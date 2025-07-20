import { useMemo } from "react";
import { numToAllFormats } from "num2kana";

const KanaTable = () => {
  interface KanaData {
    num: number;
    kanji: string;
    hiragana: string;
    katakana: string;
    romaji: string;
  }
  const kanaTableData = useMemo(() => {
    const numbers: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200,
      300, 400, 500, 600, 700, 800, 900, 1000, 10000, 100000, 1000000, 10000000,
      100000000, 1000000000,
    ];
    const data: KanaData[] = [];
    numbers.forEach((i) => {
      try {
        const formats = numToAllFormats(i, { spaceRomaji: true });
        data.push({
          num: i,
          kanji: formats.kanji,
          hiragana: formats.hiragana,
          katakana: formats.katakana,
          romaji: formats.romaji,
        });
      } catch (error) {
        console.error(`Error generating format for number ${i}:`, error);
        data.push({
          num: i,
          kanji: "Error",
          hiragana: "Error",
          katakana: "Error",
          romaji: "Error",
        });
      }
    });
    return data;
  }, []);

  return (
    <div className="w-full overflow-hidden mt-8">
      <div className="overflow-x-auto max-w-full">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="sticky left-0 z-10">Number</th>
              <th>漢字 (Kanji)</th>
              <th>ひらがな (Hiragana)</th>
              <th>カタカナ (Katakana)</th>
              <th>Romaji</th>
            </tr>
          </thead>
          <tbody>
            {kanaTableData.map((item, index) => (
              <tr
                key={item.num}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <th className="sticky left-0 z-10">{item.num}</th>
                <td>{item.kanji}</td>
                <td>{item.hiragana}</td>
                <td>{item.katakana}</td>
                <td>{item.romaji}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KanaTable;

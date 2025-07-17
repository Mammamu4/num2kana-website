import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="min-h-[1024px] flex flex-col items-center"
      onClick={() => setCount(count + 1)}
    >
      <button className="font-bold text-4xl cursor-pointer">
        Hello Count {count}
      </button>
    </div>
  );
}

export default App;

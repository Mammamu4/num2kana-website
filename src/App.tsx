import { useState } from "react";
import "./App.css";

import Quiz from "./components/ui/Quiz";
import Learn from "./components/ui/Learn";
import About from "./components/ui/About";

function App() {
  interface Tab {
    name: string;
    component: React.ReactNode;
  }
  const tabs: Tab[] = [
    { name: "Quiz", component: <Quiz /> },
    { name: "Learn", component: <Learn /> },
    { name: "About", component: <About /> },
  ];

  const [activeTab, setActiveTab] = useState("Quiz");
  const [heroExpanded, setHeroExpanded] = useState(true);

  return (
    <div>
      <div 
        className={`hero bg-base-200 overflow-hidden transition-all duration-500 ease-in-out ${
          heroExpanded ? "min-h-[500px]" : "min-h-[80px]"
        }`}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div 
              className="flex items-center justify-center cursor-pointer" 
              onClick={() => setHeroExpanded(!heroExpanded)}
            >
              <h1 className="text-5xl font-bold">Learn Japanese Numerals</h1>
              <button className="ml-4 btn btn-circle btn-sm">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-6 w-6 transition-transform duration-300 ${heroExpanded ? "rotate-0" : "rotate-180"}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              heroExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}>
              <p className="py-6 text-xl font-light">
                Learn to read, write, and understand Japanese with fun,
                interactive lessons designed to build your skills one step at a
                time.
              </p>
              <div className="join">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    className={`join-item btn btn-primary md:btn-md lg:btn-lg xl:btn-xl ${
                      activeTab === tab.name ? "btn-active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <object
                className="mx-auto mt-8"
                data="https://img.shields.io/npm/v/num2kana?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=for-the-badge&logo=npm&label=num2kana&color=605DFF&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnum2kana"
                type="image/svg+xml"
                aria-label="NPM Version"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        {tabs.map((tab) => {
          if (activeTab === tab.name) {
            return <div key={tab.name}>{tab.component}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import type { Tab, TabName } from "./types";
import Hero from "./components/ui/Hero";

import Quiz from "./components/ui/Quiz";
import Learn from "./components/ui/Learn";
import About from "./components/ui/About";

function App() {
  const tabs: Tab[] = [
    { name: "Quiz", component: <Quiz /> },
    { name: "Learn", component: <Learn /> },
    { name: "About", component: <About /> },
  ];

  const [activeTab, setActiveTab] = useState<TabName>("Quiz");

  return (
    <div>
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <div>
        {tabs.map((tab) => {
          if (activeTab === tab.name) {
            return <section key={tab.name}>{tab.component}</section>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;

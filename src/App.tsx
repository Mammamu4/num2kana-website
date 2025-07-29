import { useState } from "react";
import "./App.css";
import type { Tab, TabName } from "./types";
import Hero from "./components/ui/Hero";
import ThemeSwitcher from "./components/ui/ThemeSwitcher";
import QuizSelection from "./components/ui/QuizSelection";
import Learn from "./components/ui/Learn";
import About from "./components/ui/About";
import Footer from "./components/ui/Footer";
import { QuizProvider } from "./context/QuizContext";

function App() {
  const tabs: Tab[] = [
    { name: "Quiz", component: <QuizSelection /> },
    { name: "Learn", component: <Learn /> },
    { name: "About", component: <About /> },
  ];

  const [activeTab, setActiveTab] = useState<TabName>("Quiz");

  return (
    <QuizProvider>
      <div className="flex flex-col min-h-screen">
        <div className="fixed bottom-4 right-4 z-100 md:top-4 md:bottom-auto">
          <ThemeSwitcher />
        </div>
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        <div className="flex-grow bg-base-100">
          {tabs.map((tab) => {
            if (activeTab === tab.name) {
              return <section key={tab.name}>{tab.component}</section>;
            }
            return null;
          })}
        </div>
        <Footer />
      </div>
    </QuizProvider>
  );
}

export default App;

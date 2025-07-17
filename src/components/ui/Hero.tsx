import { useState, type FC } from "react";
import type { TabName, Tab } from "../../types";

interface HeroProps {
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void;
  tabs: Tab[];
}

const Hero: FC<HeroProps> = ({ activeTab, setActiveTab, tabs }) => {
  const [heroExpanded, setHeroExpanded] = useState<boolean>(true);

  return (
    <div
      className={`flex justify-center w-full bg-base-200 overflow-hidden transition-all duration-500 ease-in-out text-center ${
        heroExpanded ? "min-h-[400px]" : "min-h-[100px]"
      }`}
    >
      <div className="max-w-md">
        <div
          className="relative w-full cursor-pointer"
          onClick={() => setHeroExpanded(!heroExpanded)}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold my-8">Learn Japanese Numerals</h1>
          <button className="btn btn-circle btn-sm absolute right-0 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 ${
                heroExpanded ? "rotate-0" : "rotate-180"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            heroExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-xl font-light max-w-[80%] mx-auto">
            Learn to read, write, and understand Japanese with fun, interactive
            lessons designed to build your skills one step at a time.
          </p>
          <div className="join flex justify-center my-8">
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
          <div className="flex justify-center space-x-4 my-8">
            <object
              className=""
              data="https://img.shields.io/npm/v/num2kana?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=for-the-badge&logo=npm&label=num2kana&color=605DFF&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnum2kana"
              type="image/svg+xml"
              aria-label="NPM Version"
            />
            <object
              data="https://img.shields.io/github/license/mammamu4/num2kana?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2FMammamu4%2Fnum2kana-website%2Fblob%2Fmain%2FLICENSE"
              type="image/svg+xml"
              aria-label="License"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

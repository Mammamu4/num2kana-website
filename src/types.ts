export interface Tab {
  name: TabName;
  component: React.ReactNode;
}

export type TabName = "Quiz" | "Learn" | "About";


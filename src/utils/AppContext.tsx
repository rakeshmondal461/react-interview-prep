import { createContext, ReactNode, useContext, useState } from "react";

interface BackgroundContextType {
  background: string;
  changeBackground: (value: string) => void;
}

const AppContext = createContext<BackgroundContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState<string>("white");

  const changeBackground = (val: string) => {
    setBackground(val);
  };

  return (
    <AppContext.Provider value={{ background, changeBackground }}>
      {children}
    </AppContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useTheme must be used within AppProvider");
  return context;
};

import { ReactNode } from "react";
import { useState } from "react";
import ColorContext from "./ColorContext";

// A provider component for the color label context
const ColorContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Default color text
  const DEFAULT_COLOR = "white";

  // Color text property, defaults to white
  const [colorText, setColorText] = useState<string>(DEFAULT_COLOR);

  // Background color property
  const [backgroundColor, setBackgroundColor] = useState<string>(DEFAULT_COLOR);

  // Function to update the color
  const changeColorText = (newColorText: string) => {
    setColorText(newColorText);
    setBackgroundColor(newColorText);
  };

  return (
    <ColorContext.Provider value={{ colorText, changeColorText }}>
      <div style={{ backgroundColor: backgroundColor }}>{children}</div>
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;

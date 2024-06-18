import { ReactNode } from "react";
import { useState } from "react";
import ColorLabelContext from "./ColorLabelContext";

// A provider component for the color label context
const ColorLabelContextProvider: React.FC<{ children: ReactNode }> = ({
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
    <ColorLabelContext.Provider value={{ colorText, changeColorText }}>
      <div style={{ backgroundColor: backgroundColor }}>{children}</div>
    </ColorLabelContext.Provider>
  );
};

export default ColorLabelContextProvider;

import { ReactNode } from "react";
import { useState } from "react";
import BackgroundColorContext from "./BackgroundColorContext";

// Creates a provider component with type annotations.
// A provider component is a wrapper that makes the context available to all child components.
const BackgroundColorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Color property, defaults to white
  const [color, setColor] = useState("white");

  // Function to update the color
  const changeColor = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <BackgroundColorContext.Provider value={{ color, changeColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export default BackgroundColorProvider;

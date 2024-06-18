import { useContext } from "react";
import ColorLabelContext from "./ColorLabelContext";

// A React hook method that retrieves the background color context object.
const useColorLabelContext = () => {
  const context = useContext(ColorLabelContext);
  if (!context) {
    throw new Error(
      "useColorLabelContext must be used within a ColorLabelContextProvider"
    );
  }

  return context;
};

export default useColorLabelContext;

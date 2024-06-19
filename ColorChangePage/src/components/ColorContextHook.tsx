import { useContext } from "react";
import ColorContext from "./ColorContext";

// A React hook method that retrieves the background color context object.
const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error(
      "useColorContext must be used within a ColorContextProvider"
    );
  }

  return context;
};

export default useColorContext;

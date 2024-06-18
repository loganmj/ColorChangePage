import { useContext } from "react";
import BackgroundColorContext from "./BackgroundColorContext";

// A React hook method that retrieves the background color context object.
const useBackgroundColor = () => {
  const context = useContext(BackgroundColorContext);
  if (!context) {
    throw new Error(
      "useBackgroundColor must be used within a BackgroundColorProvider"
    );
  }

  return context;
};

export default useBackgroundColor;

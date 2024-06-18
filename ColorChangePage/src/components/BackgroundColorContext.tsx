import { createContext } from "react";
import IBackgroundColorState from "./IBackgroundColorState";

// Creates a Context with a default undefined value
// The context will hold all state data for the React app.
const BackgroundColorContext = createContext<IBackgroundColorState | undefined>(
  undefined
);

export default BackgroundColorContext;

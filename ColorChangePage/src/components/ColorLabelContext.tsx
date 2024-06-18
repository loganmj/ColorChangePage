import { createContext } from "react";
import IColorLabelContext from "./IColorLabelContext";

// Contains the color label context for our app
const ColorLabelContext = createContext<IColorLabelContext | undefined>(
  undefined
);

export default ColorLabelContext;

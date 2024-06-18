import { createContext } from "react";
import IColorContext from "./IColorContext";

// Contains the color label context for our app
const ColorContext = createContext<IColorContext | undefined>(undefined);

export default ColorContext;

import useColorContext from "./ColorContextHook";
import "../styles/ColorLabel.css";

const ColorLabel: React.FC = () => {
  // Use context for color property
  const { colorText } = useColorContext();

  return <label className="color-label">Current Color: {colorText}</label>;
};

export default ColorLabel;

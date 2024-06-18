import useColorLabelContext from "./ColorLabelHook";
import "../styles/ColorLabel.css";

const ColorLabel: React.FC = () => {
  // Use context for color property
  const { colorText } = useColorLabelContext();

  return <label className="color-label">{colorText}</label>;
};

export default ColorLabel;

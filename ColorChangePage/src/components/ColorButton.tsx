import IColorButton from "./IColorButton";
import useColorLabelContext from "./ColorLabelHook";

const ColorButton: React.FC<IColorButton> = ({ text }) => {
  // Use context for color property
  const { changeColorText } = useColorLabelContext();

  // Handles the button press
  const handleButtonClick = () => {
    changeColorText(text);
  };
  return <button onClick={handleButtonClick}>{text}</button>;
};

export default ColorButton;

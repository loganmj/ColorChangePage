import IColorButton from "./IColorButton";
import useColorLabelContext from "./ColorLabelHook";
import "../styles/ColorButton.css";

const ColorButton: React.FC<IColorButton> = ({ text }) => {
  // Use context for color property
  const { changeColorText } = useColorLabelContext();

  // Handles the button press
  const handleButtonClick = () => {
    changeColorText(text);
  };
  return (
    <button className="color-button" onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default ColorButton;

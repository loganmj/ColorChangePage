import IColorButton from "./IColorButton";
import useColorContext from "./ColorContextHook";
import "../styles/ColorButton.css";

const ColorButton: React.FC<IColorButton> = ({ text }) => {
  // Use context for color property
  const { changeColorText } = useColorContext();

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

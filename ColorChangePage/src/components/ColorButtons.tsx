import useBackgroundColor from "./BackgroundColorHook";

// Component that renders the buttons
const ColorButtons: React.FC = () => {
  const { changeColor } = useBackgroundColor();

  // Handles the red button click
  const onRedButtonClick = () => {
    changeColor("red");
  };

  // Handles the blue button click
  const onBlueButtonClick = () => {
    changeColor("blue");
  };

  // Handles the green button click
  const onGreenButtonClick = () => {
    changeColor("green");
  };

  return (
    <div>
      <button onClick={onRedButtonClick}>Red</button>
      <button onClick={onBlueButtonClick}>Blue</button>
      <button onClick={onGreenButtonClick}>Green</button>
    </div>
  );
};

export default ColorButtons;

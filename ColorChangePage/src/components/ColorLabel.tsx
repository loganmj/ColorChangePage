import useColorLabelContext from "./ColorLabelHook";

const ColorLabel: React.FC = () => {
  // Use context for color property
  const { colorText } = useColorLabelContext();

  return <label>{colorText}</label>;
};

export default ColorLabel;

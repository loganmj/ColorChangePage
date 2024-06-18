import "./App.css";
import useBackgroundColor from "./components/BackgroundColorHook";
import BackgroundColorProvider from "./components/BackgroundColorProvider";
import ColorButtons from "./components/ColorButtons";

const App: React.FC = () => {
  const { color } = useBackgroundColor();

  return (
    <BackgroundColorProvider>
      <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
        <ColorButtons />
      </div>
    </BackgroundColorProvider>
  );
};

export default App;

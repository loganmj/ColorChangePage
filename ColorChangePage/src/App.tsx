import "./App.css";
import ColorButton from "./components/ColorButton";
import ColorLabelContextProvider from "./components/ColorContextProvider";
import ColorLabel from "./components/ColorLabel";

const App: React.FC = () => {
  return (
    <div className="app-context">
      <ColorLabelContextProvider>
        <div className="buttons-div">
          <ColorButton text="red"></ColorButton>
          <ColorButton text="green"></ColorButton>
          <ColorButton text="blue"></ColorButton>
        </div>
        <div className="label-div">
          <ColorLabel />
        </div>
      </ColorLabelContextProvider>
    </div>
  );
};

export default App;

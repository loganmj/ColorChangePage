import "./App.css";

const App = () => {
  const { color } = useBackgroundColor();

  return{
    <BackgroundColorProvider>
      <div style={{backgroundColor: color, height: '100vh', width: '100vw'}}>
        <ColorButtons/>
      </div>
    </BackgroundColorProvider>
  };
};

export default App;

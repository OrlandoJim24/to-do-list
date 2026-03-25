import { useState } from "react";
import { FirstComponent } from "./components/FirstComponent";

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="app-container">
      <div className="click-counter">
        <h1>Total Clicks: {clickCount}</h1>
        <button onClick={handleButtonClick} className="btn-primary">
          Click me
        </button>
      </div>
      <FirstComponent data={clickCount} />
    </div>
  );
};

export default App;
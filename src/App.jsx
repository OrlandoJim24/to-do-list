import { useState } from "react";
import { FirstComponent } from "./components/FirstComponent";

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleReset = () => {
    setClickCount(0);
  };

  const isCounterActive = clickCount > 0;

  return (
    <div className="app-container">
      <div className="click-counter">
        <h1 className="counter-title">
          {isCounterActive ? `Total Clicks: ${clickCount}` : "Start Clicking!"}
        </h1>
        
        <div className="button-group">
          <button 
            onClick={handleButtonClick} 
            className="btn-primary"
            aria-label="Increment click counter"
          >
            Click me
          </button>
          
          {isCounterActive && (
            <button 
              onClick={handleReset} 
              className="btn-secondary"
              aria-label="Reset click counter"
            >
              Reset
            </button>
          )}
        </div>

        <FirstComponent data={clickCount} />
      </div>
    </div>
  );
};

export default App;
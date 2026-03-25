import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FirstComponent } from "./components/FirstComponent";

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  // Memoized callbacks to prevent unnecessary re-renders
  const handleButtonClick = useCallback(() => {
    setClickCount(prev => prev + 1);
  }, []);

  const handleReset = useCallback(() => {
    setClickCount(0);
  }, []);

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

        <FirstComponent 
          data={clickCount}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

App.propTypes = {
  // Component props validation
};

FirstComponent.propTypes = {
  data: PropTypes.number.isRequired,
  onReset: PropTypes.func,
};

export default App;
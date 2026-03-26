<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FirstComponent } from "./components/FirstComponent";
>>>>>>> 7d0fd1513dfcf81b9d186499aed2c3dd4a6f090c

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  // Memoized callbacks to prevent unnecessary re-renders
  const handleButtonClick = useCallback(() => {
    setClickCount(prev => prev + 1);
  }, []);

<<<<<<< HEAD
  const btnClick = () => {
    console.log("Clicked");
    x++;
    console.log(x);
  };

  return (
    <div>
      {x}
      <button onClick={() => { btnClick() }}>
        Click me
      </button>
=======
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
>>>>>>> 7d0fd1513dfcf81b9d186499aed2c3dd4a6f090c
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
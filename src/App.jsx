import { useState, useRef } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {

  const inputRef = useRef(null);

  return (
    <div>
       <input type="text" />
       <button>Submit</button>

    </div>
  )
};

export default App;
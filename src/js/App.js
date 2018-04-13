import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import style from "../main.css";
import BaseLayout from './BaseLayout';

// Initialize a context
import { Provider, Consumer } from './SetupContext';

const App = () => {
  return (
    <Provider value={{ name: 'laurindo' }}>
      <Router>
        <BaseLayout />  
      </Router>
    </Provider>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
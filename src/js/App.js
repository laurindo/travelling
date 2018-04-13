import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import style from "../main.css";
import BaseLayout from './BaseLayout.jsx';

const App = () => {
  return (
    <Router>
      <BaseLayout />  
    </Router>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
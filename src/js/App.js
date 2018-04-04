import React from "react";
import ReactDOM from "react-dom";

import style from "../main.css";

import Header from './components/Header.jsx';

const App = () => {
  return (
    <div>
      <Header name="my header" />
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
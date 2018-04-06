import React from "react";
import ReactDOM from "react-dom";

import style from "../main.css";

import Header from './components/Header.jsx';
import Label from './components/Label.jsx';

import { HeaderNavItems } from './utils/nav-items-utils';

const App = () => {
  return (
    <div>
      <Header name="my header" navItems={ HeaderNavItems } />
      <Label>Hello Label</Label>
      <h3>React here!</h3>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
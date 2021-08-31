import React from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css"
import "./App.css";

function App() {
  return (
    <div className="App">
      <DatePicker
        ref={(picker) => {
          // console.log(picker.focus()); // no type hint
          console.log(picker, "ref"); // but it does have `focus` method
        }}
      />
    </div>
  );
}

export default App;

import React from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const App = () => {
  return (
    <>
      <h4>Default</h4>
      <Checkbox />
      <h4>Using Custom Icon</h4>
      <Checkbox
        icon={<Icon.FiCheck color="#174A41" size={14} />}
        name="my-input"
        checked={true}
        onChange={(value) => {
          let p = {
            isTrue: value,
          };
          return alert(value);
        }}
        borderColor="#D7C629"
        style={{ cursor: "pointer" }}
        labelStyle={{ userSelect: "none" }}
        label="Have you started using it?"
      />
    </>
  );
};

export default App;

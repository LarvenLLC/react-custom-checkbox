import React from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const App = () => {
  return (
    <>
      <h4>Default:</h4>
      <Checkbox tabIndex={1} />
      <h4>Using Custom Icon:</h4>
      <Checkbox
        tabIndex={2}
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
        labelStyle={{ marginLeft: 5, userSelect: "none" }}
        label="Have you started using it?"
      />
      <h4>Using Image Icon:</h4>
      <Checkbox
        tabIndex={3}
        checked={true}
        icon={<img src="https://raw.githubusercontent.com/LarvenLLC/react-custom-checkbox/master/example/src/check.png" style={{ width: 24 }} alt="" />}
        borderColor="#D7C629"
        borderRadius={10}
        size={18}
        label="Get em!"
      />
      <h4>More Styling:</h4>
      <Checkbox
        tabIndex={4}
        checked={true}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#174A41",
              alignSelf: "stretch",
            }}
          >
            <Icon.FiCheck color="white" size={20} />
          </div>
        }
        borderColor="#174A41"
        // borderWidth={0}
        borderRadius={20}
        style={{ overflow: "hidden" }}
        size={20}
        label="Coooool right?"
      />
    </>
  );
};

export default App;

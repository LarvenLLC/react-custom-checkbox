# react-custom-checkbox

> A simple and fully customizable React checkbox input component.

[![NPM](https://img.shields.io/npm/v/react-custom-checkbox.svg)](https://www.npmjs.com/package/react-custom-checkbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-custom-checkbox
```

Or

```bash
yarn add react-custom-checkbox
```

## Usage

```jsx
import React from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const MyComponent = () => {
  return (
    <>
      <h4>Default:</h4>
      <Checkbox />
      <h4>Using Custom Icon:</h4>
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
        labelStyle={{ marginLeft: 5, userSelect: "none" }}
        label="Have you started using it?"
      />
      <h4>Using Image Icon:</h4>
      <Checkbox
        checked={true}
        icon={<img src={require("./check.png")} style={{ width: 24 }} alt="" />}
        borderColor="#D7C629"
        borderRadius={10}
        size={18}
        label="Get em!"
      />
      <h4>More Styling:</h4>
      <Checkbox
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

export default MyComponent;
```

## License

MIT © [BossBele](https://github.com/BossBele)

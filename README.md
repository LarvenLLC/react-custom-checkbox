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

![Demo Video](/example/public/react-custom-checkbox.gif)

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

## Props

| Prop               |                  Explanation                  |  Data Type   |                            (Sample) Values                             |                                    Default                                    |
| ------------------ | :-------------------------------------------: | :----------: | :--------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| icon               |               custom check icon               | Object (jsx) | \* `<img src={require("./check.png")} style={{ width: 24 }} alt="" />` | `<div style={{ backgroundColor: "#D7C629", borderRadius: 5, padding: 5 }} />` |
| checked            |               state of checkbox               |     Bool     |                         _ `true`<br/>_ `false`                         |                                    `false`                                    |
| disabled           |     checkbox input active/inactive state      |     Bool     |                         _ `true`<br/>_ `false`                         |                                    `false`                                    |
| label              |              checkbox label text              |    String    |                     _ `"Cheese"`<br/>_ `"Lettuce"`                     |                                      ``                                       |
| onChange           | function triggered when checked state changes |     Func     |           Usage <br/> \* `(checked) => console.log(checked)`           |                                    `null`                                     |
| size               |               size of checkbox                |    Number    |                         _ `30`<br/>_ `15`<br/>                         |                                     `18`                                      |
| right              |             label position right?             |     Bool     |                         _ `true`<br/>_ `false`                         |                                    `false`                                    |
| name               |              checkbox input name              |    String    |                    _ `"toppings"`<br/>_ `"hobbies"`                    |                                     `""`                                      |
| value              |             checkbox input value              |    Number    |                     _ `"cheese"`<br/>_ `"lettuce"`                     |                                     `""`                                      |
| reference          |              checkbox input ref               |     Func     |                _ `checkboxRef`<br/>_ `this.checkboxRef`                |                                      ``                                       |
| style              |              checkbox css style               |    Object    |                         \* `{margin: 10}`<br/>                         |                                     `{}`                                      |
| className          |            checkbox css class(es)             |    String    |                   _ `"p-5 mb-3"`<br/>_ `"uk-margin"`                   |                                     `""`                                      |
| borderColor        |           color of checkbox border            |    String    |                        _ `"red"`<br/>_ `"#fff"`                        |                                  `"#D7C629"`                                  |
| borderRadius       |           radius of checkbox border           |    Number    |                            _ `10`<br/>_ `0`                            |                                      `5`                                      |
| borderStyle        |           style of checkbox border            |    Object    |             _ `"solid"`<br/>_ `"dashed"`<br/>\* `"dotted"`             |                                   `"solid"`                                   |
| borderWidth        |         thickness of checkbox border          |    Number    |                            _ `4`<br/>_ `0`                             |                                      `2`                                      |
| labelClassName     |           label text css class(es)            |    String    |                   _ `"p-5 mb-3"`<br/>_ `"uk-margin"`                   |                                     `""`                                      |
| labelStyle         |             label text css style              |    Object    |                           \* `{margin: 10}`                            |                              `{ marginLeft: 5 }`                              |
| containerClassName |   checkbox & label container css class(es)    |    String    |                   _ `"p-5 mb-3"`<br/>_ `"uk-margin"`                   |                                     `""`                                      |
| containerStyle     |          checkbox & label css style           |    Object    |                           \* `{margin: 10}`                            |                                     `{}`                                      |

## License

MIT © [BossBele](https://github.com/BossBele)

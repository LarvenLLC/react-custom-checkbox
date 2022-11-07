import React, { useState } from "react";
import Checkbox from "react-custom-checkbox";
import Switch from "react-custom-checkbox/switch";

const checkedTrackStyle = {
  opacity: 1,
  transition: 'all 0.25s ease-in-out',
}

const checkedIndicatorStyle = {
  background: '#44aa44',
  transform: 'translateX(30px)',
}

const checkedIconStyle = {
  opacity: 1,
  transition: 'all 0.25s ease-in-out',
}

const indicatorStyle = {
  alignItems: 'center',
  background: '#f34334',
  borderRadius: 24,
  bottom: 2,
  display: 'flex',
  height: 24,
  justifyContent: 'center',
  left: 2,
  outline: 'solid 2px transparent',
  position: 'absolute',
  transition: '0.25s',
  width: 24,
}

const trackStyle = {
  background: '#e5efe9',
  border: '1px solid #e6e6e6',
  borderRadius: 15,
  cursor: 'pointer',
  display: 'flex',
  height: 28,
  marginRight: 12,
  position: 'relative',
  width: 60,
}

const App = () => {
  const [switchOneCheck, setSwitchOneCheck] = useState(false);

  return (
    <>
      <h4>Default:</h4>
      <Checkbox tabIndex={1} />
      <h4>Using Custom Icon:</h4>
      <Checkbox
        tabIndex={2}
        icon={<svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="#174A41"
          size="14"
          height="14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
          style={{color: '#174A41'}}
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>}
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
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              color="white"
              size="20"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              style={{color: 'white'}}
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        }
        borderColor="#174A41"
        // borderWidth={0}
        borderRadius={20}
        style={{ overflow: "hidden" }}
        size={20}
        label="Coooool right?"
      />
      <h2>Switch:</h2>
      <Switch
        icon={
          <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
            <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
          </svg>
        }
      />
      <Switch
        checked={switchOneCheck}
        onChange={setSwitchOneCheck}
        indicatorStyle={indicatorStyle}
        trackStyle={trackStyle}
        checkedIconStyle={checkedIconStyle}
        checkedIndicatorStyle={checkedIndicatorStyle}
        checkedTrackStyle={checkedTrackStyle}
      />
    </>
  );
};

export default App;

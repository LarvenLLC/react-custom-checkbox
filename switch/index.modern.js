import React, { useState, useEffect } from 'react';

function Switch(props) {
  const {
    iconClassName,
    iconStyle,
    checked,
    checkedIconStyle,
    checkedIndicatorStyle,
    checkedTrackStyle,
    className,
    containerClassName,
    containerStyle,
    disabled,
    icon,
    indicatorClassName,
    indicatorStyle,
    labelStyle,
    labelClassName,
    name,
    onChange,
    reference,
    style,
    trackClassName,
    trackStyle,
    value,
    ...rest
  } = props;
  const [check, setCheck] = useState(checked);

  const toggle = e => {
    e.preventDefault();

    if (disabled) {
      return null;
    }

    setCheck(!check);
    onChange && onChange(!check, e);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyle,
    className: containerClassName
  }, /*#__PURE__*/React.createElement("label", {
    className: labelClassName,
    style: labelStyle,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("input", Object.assign({}, rest, {
    ref: reference,
    name: name,
    type: "checkbox",
    className: className,
    style: style,
    checked: check,
    value: value,
    onChange: toggle,
    disabled: disabled,
    hidden: true
  })), /*#__PURE__*/React.createElement("span", {
    className: trackClassName,
    style: { ...trackStyle,
      ...(check ? checkedTrackStyle : {})
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: indicatorClassName,
    style: { ...indicatorStyle,
      ...(check ? checkedIndicatorStyle : {})
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: iconClassName,
    style: { ...iconStyle,
      ...(check ? checkedIconStyle : {})
    }
  }, icon) : null))));
}

Switch.defaultProps = {
  iconClassName: "larven__activeIcon",
  iconStyle: {
    fill: '#fff',
    height: 20,
    width: 20,
    opacity: 0,
    transition: 'all 0.25s ease-in-out'
  },
  checkedIconStyle: {
    opacity: 1,
    transition: 'all 0.25s ease-in-out'
  },
  checkedIndicatorStyle: {
    background: '#121943',
    transform: 'translateX(30px)'
  },
  checkedTrackStyle: {
    border: '1px solid transparent',
    boxShadow: '0px 0px 0px 2px #121943',
    opacity: 1,
    transition: 'all 0.25s ease-in-out'
  },
  className: "larven__toggleInput",
  containerStyle: {
    display: 'inline-block'
  },
  indicatorClassName: "larven__toggle-indicator",
  indicatorStyle: {
    alignItems: 'center',
    background: '#121943',
    borderRadius: 24,
    bottom: 2,
    display: 'flex',
    height: 24,
    justifyContent: 'center',
    left: 2,
    outline: 'solid 2px transparent',
    position: 'absolute',
    transition: '0.25s',
    width: 24
  },
  labelStyle: {
    alignItems: 'center',
    borderRadius: 100,
    display: 'flex',
    fontWeight: 700,
    marginBottom: 16
  },
  labelClassName: "larven__toggle",
  style: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1
  },
  trackClassName: "larven__toggle-track",
  trackStyle: {
    background: '#e5efe9',
    border: '1px solid #5a72b5',
    borderRadius: 100,
    cursor: 'pointer',
    display: 'flex',
    height: 30,
    marginRight: 12,
    position: 'relative',
    width: 60
  }
};

export default Switch;
//# sourceMappingURL=index.modern.js.map

import React, { useState, useEffect } from 'react';

const Checkbox = props => {
  const {
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
    checkbox,
    className,
    checked,
    disabled,
    containerClassName,
    containerStyle,
    label,
    labelClassName,
    labelStyle,
    name,
    onChange,
    reference,
    right,
    size,
    style,
    value,
    icon,
    tabIndex,
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
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      ...containerStyle
    },
    className: containerClassName,
    onClick: e => toggle(e)
  }, right && label && /*#__PURE__*/React.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) || null, checkbox || /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: size,
      width: size,
      borderWidth: borderWidth,
      borderColor: borderColor,
      borderStyle: borderStyle,
      borderRadius: borderRadius,
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : ""
    },
    tabIndex: tabIndex,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        toggle(e);
      }
    },
    className: className
  }, check && icon || null, /*#__PURE__*/React.createElement("input", Object.assign({}, rest, {
    ref: reference,
    type: "checkbox",
    name: name,
    checked: check,
    value: value,
    onChange: toggle,
    disabled: disabled,
    hidden: true
  })))), !right && label && /*#__PURE__*/React.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) || null);
};

Checkbox.defaultProps = {
  borderColor: "#D7C629",
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 5,
  checked: false,
  disabled: false,
  right: false,
  name: "",
  size: 18,
  style: {},
  className: "",
  labelStyle: {
    marginLeft: 5
  },
  labelClassName: "",
  containerStyle: {},
  containerClassName: "",
  value: "",
  onChange: null,
  icon: /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#D7C629",
      borderRadius: 5,
      padding: 5
    }
  })
};

export default Checkbox;
//# sourceMappingURL=index.modern.js.map

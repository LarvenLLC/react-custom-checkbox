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
    icon
  } = props;
  const [check, setCheck] = useState(checked);

  const toggle = e => {
    e.preventDefault();
    setCheck(!check);
    onChange && onChange(!check);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);
  return /*#__PURE__*/React.createElement("label", {
    style: containerStyle,
    className: containerClassName,
    onClick: toggle
  }, right && label && /*#__PURE__*/React.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) || null, checkbox || /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: { ...style,
      height: size,
      width: size,
      borderWidth: borderWidth,
      borderColor: borderColor,
      borderStyle: borderStyle,
      borderRadius: borderRadius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    className: className
  }, check && icon || null, /*#__PURE__*/React.createElement("input", {
    ref: reference,
    type: "checkbox",
    name: name,
    checked: check,
    value: value,
    onChange: toggle,
    hidden: true
  }))), !right && label && /*#__PURE__*/React.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) || null);
};

Checkbox.defaultProps = {
  borderColor: '#D7C629',
  borderStyle: 'solid',
  borderWidth: 2,
  borderRadius: 5,
  checked: false,
  right: false,
  name: '',
  size: 18,
  style: {},
  className: '',
  labelStyle: {},
  labelClassName: '',
  containerStyle: {},
  containerClassName: '',
  value: '',
  onChange: null,
  icon: /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: '#D7C629',
      borderRadius: 5,
      padding: 5
    }
  })
};

export default Checkbox;
//# sourceMappingURL=index.modern.js.map

import React, { useState, useEffect } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Checkbox = function Checkbox(props) {
  var borderColor = props.borderColor,
      borderRadius = props.borderRadius,
      borderStyle = props.borderStyle,
      borderWidth = props.borderWidth,
      checkbox = props.checkbox,
      className = props.className,
      checked = props.checked,
      disabled = props.disabled,
      containerClassName = props.containerClassName,
      containerStyle = props.containerStyle,
      label = props.label,
      labelClassName = props.labelClassName,
      labelStyle = props.labelStyle,
      name = props.name,
      onChange = props.onChange,
      reference = props.reference,
      right = props.right,
      size = props.size,
      style = props.style,
      value = props.value,
      icon = props.icon;

  var _useState = useState(checked),
      check = _useState[0],
      setCheck = _useState[1];

  var toggle = function toggle(e) {
    e.preventDefault();
    setCheck(!check);
    onChange && onChange(!check);
  };

  useEffect(function () {
    setCheck(checked);
  }, [checked]);
  return /*#__PURE__*/React.createElement("label", {
    style: _extends({}, containerStyle, {
      display: "flex",
      alignItems: "center"
    }),
    className: containerClassName,
    onClick: function onClick(e) {
      return !disabled ? toggle(e) : null;
    }
  }, right && label && /*#__PURE__*/React.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) || null, checkbox || /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: _extends({}, style, {
      height: size,
      width: size,
      borderWidth: borderWidth,
      borderColor: borderColor,
      borderStyle: borderStyle,
      borderRadius: borderRadius,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : ""
    }),
    className: className
  }, check && icon || null, /*#__PURE__*/React.createElement("input", {
    ref: reference,
    type: "checkbox",
    name: name,
    checked: check,
    value: value,
    onChange: toggle,
    disabled: disabled,
    hidden: true
  }))), !right && label && /*#__PURE__*/React.createElement("span", {
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

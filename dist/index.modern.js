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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["borderColor", "borderRadius", "borderStyle", "borderWidth", "checkbox", "className", "checked", "disabled", "containerClassName", "containerStyle", "label", "labelClassName", "labelStyle", "name", "onChange", "reference", "right", "size", "style", "value", "icon", "tabIndex"];

function Checkbox(props) {
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
      icon = props.icon,
      tabIndex = props.tabIndex,
      rest = _objectWithoutPropertiesLoose(props, _excluded);

  var _useState = useState(checked),
      check = _useState[0],
      setCheck = _useState[1];

  var toggle = function toggle(e) {
    e.preventDefault();

    if (disabled) {
      return null;
    }

    setCheck(!check);
    onChange && onChange(!check, e);
  };

  useEffect(function () {
    setCheck(checked);
  }, [checked]);
  return /*#__PURE__*/React.createElement("label", {
    style: _extends({
      display: "flex",
      alignItems: "center"
    }, containerStyle),
    className: containerClassName,
    onClick: function onClick(e) {
      return toggle(e);
    }
  }, right && label && /*#__PURE__*/React.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) || null, checkbox || /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: _extends({
      height: size,
      width: size,
      borderWidth: borderWidth,
      borderColor: borderColor,
      borderStyle: borderStyle,
      borderRadius: borderRadius
    }, style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : ""
    }),
    tabIndex: tabIndex,
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        toggle(e);
      }
    },
    className: className
  }, check && icon || null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
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
}
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

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

function Switch(props) {
  var iconClassName = props.iconClassName,
      iconStyle = props.iconStyle,
      checked = props.checked,
      checkedIconStyle = props.checkedIconStyle,
      checkedIndicatorStyle = props.checkedIndicatorStyle,
      checkedTrackStyle = props.checkedTrackStyle,
      className = props.className,
      containerClassName = props.containerClassName,
      containerStyle = props.containerStyle,
      disabled = props.disabled,
      icon = props.icon,
      id = props.id,
      indicatorClassName = props.indicatorClassName,
      indicatorStyle = props.indicatorStyle,
      labelStyle = props.labelStyle,
      labelClassName = props.labelClassName,
      onChange = props.onChange,
      style = props.style,
      trackClassName = props.trackClassName,
      trackStyle = props.trackStyle;

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
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyle,
    containerClassName: containerClassName
  }, /*#__PURE__*/React.createElement("label", {
    "class": labelClassName,
    style: labelStyle,
    "for": id,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: className,
    style: style,
    checked: checked,
    id: id
  }), /*#__PURE__*/React.createElement("span", {
    className: trackClassName,
    style: _extends({}, trackStyle, checked ? checkedTrackStyle : {})
  }, /*#__PURE__*/React.createElement("span", {
    className: indicatorClassName,
    style: _extends({}, indicatorStyle, checked ? checkedIndicatorStyle : {})
  }, icon ? /*#__PURE__*/React.createElement("span", {
    "class": iconClassName,
    style: _extends({}, iconStyle, checked ? checkedIconStyle : {})
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
  checkedIconStyle: {},
  checkedIndicatorStyle: {},
  checkedTrackStyle: {},
  className: "larven__toggleInput",
  containerStyle: {
    display: 'inline-block'
  },
  id: "larven__switchID",
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
  },
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    id: "ghq-svg-check",
    role: "presentation",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"
  }))
};

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
export { Switch };
//# sourceMappingURL=index.modern.js.map

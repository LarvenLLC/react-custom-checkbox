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

var _excluded = ["iconClassName", "iconStyle", "checked", "checkedIconStyle", "checkedIndicatorStyle", "checkedTrackStyle", "className", "containerClassName", "containerStyle", "disabled", "icon", "indicatorClassName", "indicatorStyle", "labelStyle", "labelClassName", "name", "onChange", "reference", "style", "trackClassName", "trackStyle", "value"];

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
      indicatorClassName = props.indicatorClassName,
      indicatorStyle = props.indicatorStyle,
      labelStyle = props.labelStyle,
      labelClassName = props.labelClassName,
      name = props.name,
      onChange = props.onChange,
      reference = props.reference,
      style = props.style,
      trackClassName = props.trackClassName,
      trackStyle = props.trackStyle,
      value = props.value,
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
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyle,
    className: containerClassName
  }, /*#__PURE__*/React.createElement("label", {
    className: labelClassName,
    style: labelStyle,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
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
    style: _extends({}, trackStyle, check ? checkedTrackStyle : {})
  }, /*#__PURE__*/React.createElement("span", {
    className: indicatorClassName,
    style: _extends({}, indicatorStyle, check ? checkedIndicatorStyle : {})
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: iconClassName,
    style: _extends({}, iconStyle, check ? checkedIconStyle : {})
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

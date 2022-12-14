function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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

var _excluded = ["checked", "disabled", "icon", "name", "onChange", "reference", "value", "tabIndex", "label", "isLabelRight", "className", "style", "iconClassName", "iconStyle", "checkedIconStyle", "indicatorClassName", "indicatorStyle", "checkedIndicatorStyle", "trackClassName", "trackStyle", "checkedTrackStyle", "labelStyle", "labelClassName", "containerClassName", "containerStyle", "wrapperClassName", "wrapperStyle"];

function Switch(props) {
  var checked = props.checked,
      disabled = props.disabled,
      icon = props.icon,
      name = props.name,
      onChange = props.onChange,
      reference = props.reference,
      value = props.value,
      tabIndex = props.tabIndex,
      label = props.label,
      isLabelRight = props.isLabelRight,
      className = props.className,
      style = props.style,
      iconClassName = props.iconClassName,
      iconStyle = props.iconStyle,
      checkedIconStyle = props.checkedIconStyle,
      indicatorClassName = props.indicatorClassName,
      indicatorStyle = props.indicatorStyle,
      checkedIndicatorStyle = props.checkedIndicatorStyle,
      trackClassName = props.trackClassName,
      trackStyle = props.trackStyle,
      checkedTrackStyle = props.checkedTrackStyle,
      labelStyle = props.labelStyle,
      labelClassName = props.labelClassName,
      containerClassName = props.containerClassName,
      containerStyle = props.containerStyle,
      wrapperClassName = props.wrapperClassName,
      wrapperStyle = props.wrapperStyle,
      rest = _objectWithoutPropertiesLoose(props, _excluded);

  var _useState = React.useState(checked),
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

  React.useEffect(function () {
    setCheck(checked);
  }, [checked]);
  return /*#__PURE__*/React__default.createElement("div", {
    style: wrapperStyle,
    className: wrapperClassName
  }, /*#__PURE__*/React__default.createElement("label", {
    className: containerClassName,
    style: containerStyle,
    onClick: toggle
  }, /*#__PURE__*/React__default.createElement("input", _extends({}, rest, {
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
  })), isLabelRight && label ? /*#__PURE__*/React__default.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) : null, /*#__PURE__*/React__default.createElement("span", {
    className: trackClassName,
    style: _extends({}, trackStyle, check ? checkedTrackStyle : {}, {
      cursor: disabled ? "not-allowed" : ""
    }),
    tabIndex: tabIndex
  }, /*#__PURE__*/React__default.createElement("span", {
    className: indicatorClassName,
    style: _extends({}, indicatorStyle, check ? checkedIndicatorStyle : {})
  }, icon ? /*#__PURE__*/React__default.createElement("span", {
    className: iconClassName,
    style: _extends({}, iconStyle, check ? checkedIconStyle : {})
  }, icon) : null)), !isLabelRight && label ? /*#__PURE__*/React__default.createElement("span", {
    className: labelClassName,
    style: labelStyle
  }, label) : null));
}

Switch.defaultProps = {
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
  wrapperStyle: {
    display: 'inline-block'
  },
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
  containerStyle: {
    alignItems: 'center',
    borderRadius: 100,
    display: 'flex',
    fontWeight: 700,
    marginBottom: 16
  },
  style: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1
  },
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

module.exports = Switch;
//# sourceMappingURL=index.js.map

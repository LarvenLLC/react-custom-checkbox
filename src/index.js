import React, { useState, useEffect } from "react";

const Checkbox = (props) => {
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
  } = props;
  const [check, setCheck] = useState(checked);

  const toggle = (e) => {
    e.preventDefault();
    setCheck(!check);
    onChange && onChange(!check);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <label
      style={{
        ...containerStyle,
        display: "flex",
        alignItems: "center",
      }}
      className={containerClassName}
      onClick={(e) => (!disabled ? toggle(e) : null)}
    >
      {(right && label && (
        <span className={labelClassName} style={labelStyle}>
          {label}
        </span>
      )) ||
        null}
      {checkbox || (
        <span>
          <div
            style={{
              ...style,
              height: size,
              width: size,
              borderWidth: borderWidth,
              borderColor: borderColor,
              borderStyle: borderStyle,
              borderRadius: borderRadius,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: disabled ? "not-allowed" : "",
            }}
            className={className}
          >
            {(check && icon) || null}
            <input
              ref={reference}
              type="checkbox"
              name={name}
              checked={check}
              value={value}
              onChange={toggle}
              disabled={disabled}
              hidden
            />
          </div>
        </span>
      )}
      {(!right && label && (
        <span className={labelClassName} style={labelStyle}>
          {label}
        </span>
      )) ||
        null}
    </label>
  );
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
  labelStyle: { marginLeft: 5 },
  labelClassName: "",
  containerStyle: {},
  containerClassName: "",
  value: "",
  onChange: null,
  icon: (
    <div style={{ backgroundColor: "#D7C629", borderRadius: 5, padding: 5 }} />
  ),
};
export default Checkbox;

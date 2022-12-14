import React, { useEffect, useState } from "react";

/**
 * @param {Object} props 
 * @param {Boolean} props.checked
 * @param {Boolean} props.disabled
 * @param {React.ReactElement} props.icon
 * @param {String} props.name
 * @param {function()} props.onChange
 * @param {String} props.reference
 * @param {String} props.value
 * @param {String} props.className
 * @param {Object} props.style
 * @param {String} props.iconClassName
 * @param {Object} props.iconStyle
 * @param {Object} props.checkedIconStyle
 * @param {String} props.indicatorClassName
 * @param {Object} props.indicatorStyle
 * @param {Object} props.checkedIndicatorStyle
 * @param {String} props.trackClassName
 * @param {Object} props.trackStyle
 * @param {Object} props.checkedTrackStyle
 * @param {String} props.labelClassName
 * @param {Object} props.labelStyle
 * @param {String} props.containerClassName
 * @param {Object} props.containerStyle
 * @param {String} props.wrapperClassName
 * @param {Object} props.wrapperStyle
 * @returns {React.ReactElement}
 */
function Switch(props) {
  const {
    checked,
    disabled,
    icon,
    name,
    onChange,
    reference,
    value,
    tabIndex,
    label,
    isLabelRight,
    className,
    style,
    iconClassName,
    iconStyle,
    checkedIconStyle,
    indicatorClassName,
    indicatorStyle,
    checkedIndicatorStyle,
    trackClassName,
    trackStyle,
    checkedTrackStyle,
    labelStyle,
    labelClassName,
    containerClassName,
    containerStyle,
    wrapperClassName,
    wrapperStyle,
    ...rest
  } = props;

  const [check, setCheck] = useState(checked);

  const toggle = (e) => {
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

  return (
    <div style={wrapperStyle} className={wrapperClassName}>
      <label className={containerClassName} style={containerStyle} onClick={toggle}>
        <input
          {...rest}
          ref={reference}
          name={name}
          type="checkbox"
          className={className}
          style={style}
          checked={check}
          value={value}
          onChange={toggle}
          disabled={disabled}
          hidden
        />
        {isLabelRight && label ? (
          <span className={labelClassName} style={labelStyle}>
            {label}
          </span>
        ) : null}
        <span
          className={trackClassName}
          style={{...trackStyle, ...(check ? checkedTrackStyle : {}), cursor: disabled ? "not-allowed" : "", }}
          tabIndex={tabIndex}
        >
          <span className={indicatorClassName} style={{...indicatorStyle, ...(check ? checkedIndicatorStyle : {})}}>
            {/* This check mark is optional  */}
            {icon ? (
              <span className={iconClassName} style={{...iconStyle, ...(check ? checkedIconStyle : {})}}>
                {icon}
              </span>
            ) : null}
          </span>
        </span>
        {!isLabelRight && label ? (
          <span className={labelClassName} style={labelStyle}>
            {label}
          </span>
        ) : null}
      </label>
    </div>
  )
}
Switch.defaultProps = {
  iconStyle: {
    fill: '#fff',
    height: 20,
    width: 20,
    opacity: 0,
    transition: 'all 0.25s ease-in-out',
  },
  checkedIconStyle: {
    opacity: 1,
    transition: 'all 0.25s ease-in-out',
  },
  checkedIndicatorStyle: {
    background: '#121943',
    transform: 'translateX(30px)',
  },
  checkedTrackStyle: {
    border: '1px solid transparent',
    boxShadow: '0px 0px 0px 2px #121943',
    opacity: 1,
    transition: 'all 0.25s ease-in-out',
  },
  wrapperStyle: { display: 'inline-block' },
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
    width: 24,
  },
  containerStyle: {
    alignItems: 'center',
    borderRadius: 100,
    display: 'flex',
    fontWeight: 700,
    marginBottom: 16,
  },
  style: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
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
    width: 60,
  }
};
export default Switch;
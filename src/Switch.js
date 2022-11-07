import React, { useEffect, useState } from "react";

/**
 * @param {Object} props 
 * @param {String} props.activeIconClassName
 * @param {Object} props.activeIconStyle
 * @param {Boolean} props.checked
 * @param {Object} props.checkedIconStyle
 * @param {Object} props.checkedIndicatorStyle
 * @param {Object} props.checkedTrackStyle
 * @param {String} props.className
 * @param {String} props.containerClassName
 * @param {Object} props.containerStyle
 * @param {Boolean} props.disabled
 * @param {React.ReactElement} props.icon
 * @param {String} props.id
 * @param {String} props.indicatorClassName
 * @param {Object} props.indicatorStyle
 * @param {Object} props.labelStyle
 * @param {String} props.labelClassName
 * @param {String} props.name
 * @param {function()} props.onChange
 * @param {String} props.reference
 * @param {Object} props.style
 * @param {String} props.trackClassName
 * @param {Object} props.trackStyle
 * @param {String} props.value
 * @returns {React.ReactElement}
 */
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
    id,
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
    <div style={containerStyle} className={containerClassName}>
      {/* begin toggle markup */}
      <label className={labelClassName} style={labelStyle} htmlFor={id} onClick={toggle}>
        <input
          {...rest}
          ref={reference}
          name={name}
          type="checkbox"
          className={className}
          style={style}
          checked={checked}
          id={id}
          value={value}
          onChange={toggle}
          disabled={disabled}
          hidden
        />
        <span className={trackClassName} style={{...trackStyle, ...(checked ? checkedTrackStyle : {})}}>
          <span className={indicatorClassName} style={{...indicatorStyle, ...(checked ? checkedIndicatorStyle : {})}}>
            {/* This check mark is optional  */}
            {icon ? (
              <span className={iconClassName} style={{...iconStyle, ...(checked ? checkedIconStyle : {})}}>
                {icon}
              </span>
            ) : null}
          </span>
        </span>
      </label>
    </div>
  )
}
Switch.defaultProps = {
  iconClassName: "larven__activeIcon",
  iconStyle: {
    fill: '#fff',
    height: 20,
    width: 20,
    opacity: 0,
    transition: 'all 0.25s ease-in-out',
  },
  checkedIconStyle: {},
  checkedIndicatorStyle: {},
  checkedTrackStyle: {},
  className: "larven__toggleInput",
  containerStyle: { display: 'inline-block' },
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
    width: 24,
  },
  labelStyle: {
    alignItems: 'center',
    borderRadius: 100,
    display: 'flex',
    fontWeight: 700,
    marginBottom: 16,
  },
  labelClassName: "larven__toggle",
  style: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
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
    width: 60,
  },
  icon: (
    <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
      <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
    </svg>
  ),
};
export default Switch;
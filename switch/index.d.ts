// Type definitions for react-custom-checkbox
// Project: https://github.com/LarvenLLC/react-custom-checkbox

interface SwitchProps {
  /** Switch button icon/element */
  icon: string;
  /** State of switch */
  checked: boolean;
  /** Switch input active/inactive state */
  disabled: boolean;
  /** Switch label text */
  label: string;
  /** Function triggered when checked state changes */
  onChange(checked: boolean, event: React.ChangeEvent<HTMLInputElement>): string;
  /** Label position right? */
  isLabelRight: boolean;
  /** Switch input name */
  name: string;
  /** Switch input value */
  value: string;
  /** Switch input ref */
  reference: React.RefObject<HTMLInputElement>;
  /** Switch css style */
  style: React.CSSProperties;
  /** Switch css class(es) */
  className: string;
  /** Switch button icon/element css styles */
  iconStyle: React.CSSProperties;
  /** Switch button icon/element css class(es) */
  iconClassName: string;
  /** Switch button icon/element css styles when checked */
  checkedIconStyle: React.CSSProperties;
  /** Switch button css styles */
  indicatorStyle: React.CSSProperties;
  /** Switch button css class(es) */
  indicatorClassName: string;
  /** Switch button css styles when checked */
  checkedIndicatorStyle: React.CSSProperties;
  /** Switch track css styles */
  trackStyle: React.CSSProperties;
  /** Switch track css class(es) */
  trackClassName: string;
  /** Switch track css styles when checked */
  checkedTrackStyle: React.CSSProperties;
  /** Label text css class(es) */
  labelClassName: string;
  /** Label text css styles */
  labelStyle: React.CSSProperties;
  /** Switch & label container css class(es) */
  containerClassName: string;
  /** Switch & label container css styles */
  containerStyle: React.CSSProperties;
  /** Whole component wrapper css class(es) */
  wrapperClassName: string;
  /** Whole component wrapper css styles */
  wrapperStyle: React.CSSProperties;
}

declare const Switch: React.FC<SwitchProps>;

/**
 * Usage: <code>import Switch from 'react-custom-checkbox/switch'</code>
 */
export default Switch;
// Type definitions for react-custom-checkbox
// Project: https://github.com/LarvenLLC/react-custom-checkbox

interface SwitchProps {
  icon: string;
  checked: boolean;
  disabled: boolean;
  label: string;
  onChange(checked: boolean, event: React.ChangeEvent<HTMLInputElement>): string;
  size: number;
  isLabelRight: boolean;
  name: string;
  value: string;
  reference: React.RefObject<HTMLInputElement>;
  style: React.CSSProperties;
  className: string;
  iconStyle: React.CSSProperties;
  iconClassName: string;
  checkedIconStyle: React.CSSProperties;
  indicatorStyle: React.CSSProperties;
  indicatorClassName: string;
  checkedIndicatorStyle: React.CSSProperties;
  trackStyle: React.CSSProperties;
  trackClassName: string;
  checkedTrackStyle: React.CSSProperties;
  labelClassName: string;
  labelStyle: React.CSSProperties;
  containerClassName: string;
  containerStyle: React.CSSProperties;
  wrapperClassName: string;
  wrapperStyle: React.CSSProperties;
}

declare function Switch(props?): React.FC<SwitchProps>;

/**
 * Usage: <code>import Switch from 'react-custom-checkbox/switch'</code>
 */
export default Switch;
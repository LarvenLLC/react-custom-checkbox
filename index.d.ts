// Type definitions for react-custom-checkbox
// Project: https://github.com/LarvenLLC/react-custom-checkbox

interface CheckboxProps {
  icon: string;
  checked: boolean;
  disabled: boolean;
  label: string;
  onChange(checked: boolean, event: React.ChangeEvent<HTMLInputElement>): string;
  size: number;
  right: boolean;
  name: string;
  value: string;
  reference: React.RefObject<HTMLInputElement>;
  style: React.CSSProperties;
  className: string;
  borderColor: string;
  borderRadius: number;
  borderStyle: React.CSSProperties;
  borderWidth: number;
  labelClassName: string;
  labelStyle: React.CSSProperties;
  containerClassName: string;
  containerStyle: React.CSSProperties;
}

declare function Checkbox(props?): React.FC<CheckboxProps>;

/**
 * Usage: <code>import Checkbox from 'react-custom-checkbox'</code>
 */
export default Checkbox;
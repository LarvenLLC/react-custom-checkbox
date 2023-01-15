// Type definitions for react-custom-checkbox
// Project: https://github.com/LarvenLLC/react-custom-checkbox

interface CheckboxProps {
  /** Custom check icon */
  icon: string;
  /** State of checkbox */
  checked: boolean;
  /** Checkbox input active/inactive state */
  disabled: boolean;
  /** Checkbox label text */
  label: string;
  /** Function triggered when checked state changes */
  onChange(checked: boolean, event: React.ChangeEvent<HTMLInputElement>): string;
  /** Size of checkbox */
  size: number;
  /** Label position right? */
  right: boolean;
  /** Checkbox input name */
  name: string;
  /** Checkbox input value */
  value: string;
  /** Checkbox input ref */
  reference: React.RefObject<HTMLInputElement>;
  /** Checkbox css style */
  style: React.CSSProperties;
  /** Checkbox css class(es) */
  className: string;
  /** Color of checkbox border */
  borderColor: string;
  /** Radius of checkbox border */
  borderRadius: number;
  /** Style of checkbox border */
  borderStyle: React.CSSProperties;
  /** Thickness of checkbox border */
  borderWidth: number;
  /** Label text css class(es) */
  labelClassName: string;
  /** Label text css style */
  labelStyle: React.CSSProperties;
  /** Checkbox & label container css class(es) */
  containerClassName: string;
  /** Checkbox & label container css style */
  containerStyle: React.CSSProperties;
}

declare const Checkbox: React.FC<CheckboxProps>;

/**
 * Usage: <code>import Checkbox from 'react-custom-checkbox'</code>
 */
export default Checkbox;
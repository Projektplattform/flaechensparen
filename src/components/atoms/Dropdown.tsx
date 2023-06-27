import { ChangeEventHandler } from "react";

export type Props = {
  includeBlank?: boolean;
  blankLabel?: string;
  currentOption?: string | number;
  options: [string, string][];
  onChange: ChangeEventHandler;
};

const Dropdown = ({
  includeBlank = false,
  blankLabel,
  currentOption,
  options,
  onChange
}: Props) => {
  return (
    <select value={currentOption} onChange={onChange}>
      {includeBlank && <option value="">{blankLabel}</option>}
      {options.map(([value, label]) => (
        <option key={`option-${value}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

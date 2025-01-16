interface DropdownProps {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export default DropdownProps;
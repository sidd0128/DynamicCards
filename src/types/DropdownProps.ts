interface DropdownProps {
  options: string[];
  selectedValue: string | null;
  onSelect: (value: string | null) => void;
}
  export default DropdownProps;

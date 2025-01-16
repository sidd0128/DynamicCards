import React, { FC, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import dropdownStyles from './styles';
import DropdownProps from '../../types/DropdownProps';

const Dropdown: FC<DropdownProps> = ({ options, selectedValue, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    options.map((option) => ({ label: option, value: option }))
  );

  const handleValueChange = useCallback((value: string) => {
    onSelect(value);
  }, [onSelect]);

  return (
    <View style={dropdownStyles.container}>
      <Text style={dropdownStyles.label}>Select a Hobby</Text>
      <DropDownPicker
        open={open}
        value={selectedValue}
        setValue={handleValueChange}
        items={items}
        setOpen={setOpen}
        setItems={setItems}
        placeholder="Choose a hobby..."
        style={dropdownStyles.input}
        textStyle={dropdownStyles.inputText}
        dropDownContainerStyle={dropdownStyles.dropDownContainer}
        placeholderStyle={dropdownStyles.placeholderText}
        listItemLabelStyle={dropdownStyles.listItemLabel}
        selectedItemLabelStyle={dropdownStyles.selectedItemLabel}
        zIndex={3000}
        zIndexInverse={1000}
      />
    </View>
  );
};

export default Dropdown;
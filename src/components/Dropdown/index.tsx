import React, {FC} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, TouchableOpacity } from 'react-native';
import dropdownStyles from './styles';
import DropdownProps from '../../types/DropdownProps';

const Dropdown: FC<DropdownProps> = ({ options, selectedValue, onSelect }) => {

  const items = options.map((option) => ({ label: option, value: option }));


  return (
    <View style={dropdownStyles.container}>
      <Text style={dropdownStyles.label}>Select a Hobby</Text>
        <RNPickerSelect
          onValueChange={(value) => onSelect(value)}
          items={items}
          value={selectedValue || 'Reading'}
          style={{
            inputIOS: dropdownStyles.input,
            inputAndroid: dropdownStyles.input,
          }}
          placeholder={{
            label: 'Choose a hobby...',
            value: null,
            color: '#9EA0A4',
          }}
          disabled={false} 
        />
    </View>
  );
};

export default Dropdown;


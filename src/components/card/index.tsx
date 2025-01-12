import React, { useState, FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import CardProps from '../../types/CardProps';
import Dropdown from '../Dropdown';
import CustomInput from '../CustomInput';

const Card: FC<CardProps> = ({ data, onCopy, onDelete, onUpdate, index }) => {
  const [options, setOptions] = useState<string[]>(data.options || ['']);

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (idx: number) => {
    if (options.length > 1) {
      const updatedOptions = options.filter((_, i) => i !== idx);
      setOptions(updatedOptions);
    }
  };

  const updateOption = (idx: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[idx] = value;
    setOptions(updatedOptions);
  };

  const renderTextInput = (
    label: string,
    placeholder: string,
    field: keyof CardProps['data'],
    multiline?: boolean
  ) => (
    <CustomInput
      label={label}
      placeholder={placeholder}
      value={data[field] || ''}
      onChangeText={(text) => onUpdate(index, { ...data, [field]: text })}
      multiline={multiline}
    />
  );

  return (
    <View style={styles.card}>
      {renderTextInput('Title', 'Enter Title', 'title')}
      {renderTextInput('Description', 'Enter Description', 'description', true)}

      <Dropdown
        options={['Reading', 'Gaming', 'Sports']}
        selectedValue={data.hobby}
        onSelect={(value) => onUpdate(index, { ...data, hobby: value })}
      />

      <Text style={styles.optionsLabel}>Options</Text>
      {options.map((option, idx) => (
        <View key={idx} style={styles.optionRow}>
          <CustomInput
            label={`Option ${idx + 1}`}
            placeholder="Option"
            value={option}
            onChangeText={(value) => updateOption(idx, value)}
          />
          {options.length > 1 && (
            <TouchableOpacity onPress={() => removeOption(idx)}>
              <Text style={styles.removeIcon}>X</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <TouchableOpacity onPress={addOption} style={styles.addOptionButton}>
        <Text>Add Option</Text>
      </TouchableOpacity>

      <View style={styles.cardActions}>
        <TouchableOpacity onPress={() => onCopy(index)} style={styles.actionButton}>
          <Text>Copy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(index)} style={styles.actionButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

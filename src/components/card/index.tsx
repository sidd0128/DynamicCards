import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CardProps from '../../types/CardProps';
import Dropdown from '../Dropdown';
import CustomInput from '../CustomInput';
import styles from './styles';

const Card: FC<CardProps> = ({ data, onCopy, onDelete, onUpdate, index }) => {
  const [selectedHobby, setSelectedHobby] = useState<string>(data.hobby ?? '');
  
  const handleInputOptionsTextChange = (idx: number, value: string) => {
    const updatedOptions = [...data.options];
    updatedOptions[idx] = value;
    onUpdate(index, { ...data, options: updatedOptions });
  };

  const addOption = () => {
    const updatedOptions = [...data.options, ''];
    onUpdate(index, { ...data, options: updatedOptions });
  };

  const removeOption = (idx: number) => {
    if (data.options.length > 1) {
      const updatedOptions = data.options.filter((_, i) => i !== idx);
      onUpdate(index, { ...data, options: updatedOptions });
    }
  };
  const handleHobbyChange = (value: string) => {
    onUpdate(index, { ...data, hobby: value});
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
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        {renderTextInput('Title', 'Enter Title', 'title')}
        {renderTextInput('Description', 'Enter Description', 'description', true)}
        <Dropdown
    options={['Reading', 'Gaming', 'Sports']}
    selectedValue={selectedHobby}
    onSelect={(value) => {
      setSelectedHobby(value);
      handleHobbyChange(value);
    }}
  />
        <Text style={styles.optionsLabel}>Options</Text>
        {data.options.map((option, idx) => (
          <View key={idx} style={styles.optionRow}>
          <View style={styles.inputContainer}>
            <CustomInput
              label={`Option ${idx + 1}`}
              placeholder="Option"
              value={option}
              onChangeText={(value) => handleInputOptionsTextChange(idx, value)}
            />
          </View>
          {data.options.length > 1 && (
            <TouchableOpacity
              style={styles.removeIconContainer}
              onPress={() => removeOption(idx)}
            >
              <Text style={styles.removeIcon}>X</Text>
            </TouchableOpacity>
          )}
        </View>
        ))}

        <TouchableOpacity onPress={addOption} style={styles.addOptionButton}>
          <Text>Add Option</Text>
        </TouchableOpacity>
      </ScrollView>

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

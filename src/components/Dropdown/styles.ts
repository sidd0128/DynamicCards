import { StyleSheet } from 'react-native';

const dropdownStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
    zIndex: 1000,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  dropDownContainer: {
    borderColor: '#ccc',
  },
  placeholderText: {
    color: '#9EA0A4',
  },
  listItemLabel: {
    color: '#333',
  },
  selectedItemLabel: {
    fontWeight: 'bold',
  },
});

export default dropdownStyles;
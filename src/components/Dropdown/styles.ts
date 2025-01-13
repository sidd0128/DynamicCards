import { StyleSheet } from 'react-native';

const dropdownStyles = StyleSheet.create({

  input: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#333',
    backgroundColor: '#fff',
    width: '100%',
  },
  container: {
    marginBottom: 10,
    width: '100%',
  },
  
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default dropdownStyles;

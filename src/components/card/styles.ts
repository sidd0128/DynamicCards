import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  textField: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  optionsLabel: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  removeIcon: {
    color: 'red',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  addOptionButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    padding: 5,
    borderRadius: 5,
  },
});

export default styles;

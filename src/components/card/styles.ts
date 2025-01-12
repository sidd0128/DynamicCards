import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    height: 510,
    width: Dimensions.get('screen').width,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
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

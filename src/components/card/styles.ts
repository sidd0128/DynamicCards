import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  scrollContent: {
    paddingHorizontal: 8,
  },
  optionsLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: '100%',
    backgroundColor: '#fdfdfd',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    height: 100,
    marginBottom: 16,
    width: '100%',
    backgroundColor: '#fdfdfd',
  },
  
  addOptionButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  
  inputContainer: {
    flex: 8,
  },
  
  removeIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  removeIcon: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  actionButton: {
    marginLeft: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
});
export default styles;


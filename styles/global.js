import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 30
  },
  item: {
    padding: 15,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    borderStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  }
});

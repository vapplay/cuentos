import {StyleSheet, Dimensions} from 'react-native';

const wHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F7B9D7',
    height: wHeight,
  },
  containerimages: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginTop:-5,
    // marginBottom: -50,
  },
  borderImg: {
    // padding: 10,
    flex: 2,
  },
  imageLeft: {
    height: 150,
    width: 150,
    transform: [{rotate: '-15deg'}],
    borderColor: 'black',
    borderWidth: 0.5,
  },
  imageRight: {
    height: 150,
    width: 150,
    transform: [{rotate: '15deg'}],
    borderColor: 'black',
    borderWidth: 1,
  },

  imageCenterRight: {
    height: 150,
    width: 150,
    transform: [{rotate: '3deg'}],
    borderColor: 'black',
    borderWidth: 1,
  },
  textLeft: {
    fontSize: 20,
    textAlign: 'center',
    transform: [{rotate: '-15deg'}],
    color: 'blue',
  },
  textRight: {
    fontSize: 20,
    textAlign: 'center',
    transform: [{rotate: '+15deg'}],
    color: 'blue',
  },
  textCenterRight: {
    fontSize: 20,
    textAlign: 'center',
    transform: [{rotate: '3deg'}],
    color: 'blue',
  },
  Title: {
    fontSize: 20,
    textAlign: 'center',
    //transform: [{ rotate: '3deg' }],
    color: 'blue',
    marginBottom: 37,
  },
});

export {styles};

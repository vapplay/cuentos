import { StyleSheet, Dimensions } from 'react-native';

const wHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   containerPlayer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: 'pink',
//     height: wHeight ,
//   },
//   buttonOpa: {
//     flex: 1,
//     justifyContent: 'space-between',
//     flexDirection: 'row',
    
    // marginTop:-5,
  //   // marginBottom: -50,
  // },
 

  const stylesP1 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#ffd55e'
    },

    
    buttonShare: {
      position: 'absolute',
      bottom: 160,
      right: 100,
      width: 150,
      height: 150,
      borderRadius: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00aae4',
      alignSelf: 'flex-end',
    },

    buttonPlay: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 150,
      height: 150,
      borderRadius: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00aae4',
      alignSelf: 'flex-end',
    },

    buttonBack: {
      position: 'absolute',
      bottom: 20,
      //right: 20,
      left : - 320,
      width: 150,
      height: 150,
      borderRadius: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00aae4',
      alignSelf: 'flex-end',
    },


    buttonText: {
      color: 'white',
      fontSize: 34, // Ajusta el tamaño del texto según sea necesario
      fontWeight: 'bold',
    },

    buttonPause: {
      width: 75,
      height: 75,
      borderRadius: 37.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00aae4',
      marginTop: 20, // Ajusta el margen superior según sea necesario
      alignSelf: 'flex-start', // Alinea a la izquierda
    },
    buttonStop: {
      width: 75,
      height: 75,
      borderRadius: 37.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00aae4',
      marginTop: 20, // Ajusta el margen superior según sea necesario
      alignSelf: 'flex-start', // Alinea a la izquierda
    },
    controlsContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    title: {
     // fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: -275, // Ajusta altura de titulo
    },
    image: {
      width: '100%',
      height: 'auto',
      aspectRatio: 1,
      resizeMode: 'contain',  // Cambia resizeMode a 'contain'
      marginVertical: 10,
    },

  });
  




// });

export {stylesP1};

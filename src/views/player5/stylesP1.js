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
    buttonPlay: {
      width: 150, // Ajusta el ancho según sea necesario
      height: 150, // Ajusta la altura según sea necesario
      borderRadius: 75, // La mitad del ancho y la altura para hacerlo redondo
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00aae4', // Color azul
      alignSelf: 'center'


    },
    buttonText: {
      color: 'white',
      fontSize: 34, // Ajusta el tamaño del texto según sea necesario
      fontWeight: 'bold',
    },


  });
  




// });

export {stylesP1};

import React from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import {stylesP1} from './stylesP1'; // Asegúrate de importar tus estilos correctamente

import {AppRegistry} from 'react-native';
import App from '../../../App';
import {name as appName} from '../../../app.json';
import {playbackService} from './trackPlayerServices';
import {useEffect, useState} from 'react';
import { Share } from 'react-native-share';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {setupPlayer, addTracks} from './trackPlayerServices';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
  usePlaybackState,
} from 'react-native-track-player';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon } from 'react-native-elements';
import {Icon} from '@rneui/themed';
import {Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { onShare } from './App2';


AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);




// const handleShare = () => {
//   // Comparte el texto "¡Hola, mundo!"
//   Share.share(
//     {
//       title: '¡Hola, mundo!',
//       message: '¡Hola, mundo!',
//     },
//     {
//       dialogTitle: 'Compartir con...',
//       subject: 'Un saludo',
//     }
//   )
//     .then((result) => {
//       if (result.action === Share.sharedAction) {
//         alert('Contenido compartido');
//       } else if (result.action === Share.dismissedAction) {
//         alert('Compartir cancelado');
//       }
//     })
//     .catch((error) => {
//       alert('Ocurrió un error: ' + error.message);
//     });
// };




const App2 = () => {
  const [appId, setAppId] = useState('com.example.myapp');

  const onShare = () => {
    
    try {
      Share.share({
        title: '¡Descarga mi app!',
        message: 'Esta app es genial, ¡descárgala ahora!',
        url: `https://play.google.com/store/apps/details?id=${appId}`,
      });
    } catch (error) {
      alert('Ocurrió un error al compartir: ' + error.message);
    }
  };

  
  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={appId}
        onChangeText={(text) => setAppId(text)}
      />
      <Button title="Compartir" onPress={onShare} />
    </View>
  );
};

//export default App2;









function Controls({onShuffle}) {
  const navigation = useNavigation();
  const playerState = usePlaybackState();

  const [play, setPlay] = useState(Boolean);

  async function handlePlayPress() {
    if ((await TrackPlayer.getState()) == State.Playing) {
      TrackPlayer.pause();
      setPlay(true);
    } else {
      TrackPlayer.play();
      setPlay(false);
    }
  }








  
  return (
    <View style={stylesP1.controlsContainer}>

<TouchableOpacity style={stylesP1.buttonShare} onPress={() => App2.onShare()}>
        <Text style={stylesP1.buttonText}>Compartir</Text>
      </TouchableOpacity>


      <TouchableOpacity style={stylesP1.buttonPlay} onPress={handlePlayPress}>
        <Text style={stylesP1.buttonText}>{play ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesP1.buttonBack} onPress={() => navigation.goBack()} >
        <Text style={stylesP1.buttonText}>atras</Text>
      </TouchableOpacity>


      <Icon name="rowing" />

      <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
    </View>
  );
}
//name={playerState == State.Playing ? 'pause' : 'play'}

function PlayerScreen({ navigation}) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);
  if (!isPlayerReady) {
    return (
      // <SafeAreaView style={stylesP1.container}>
      <ActivityIndicator size="large" color="blue" />
      //   </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={stylesP1.container}>
      <Text style={stylesP1.title}>Marie Curie, una Niña Científica 123 ¡</Text>

      <Image
        source={require('./images/marieCurie1.jpg')} // Reemplaza 'ruta/de/tu/imagen.png' con la ruta de tu imagen
        style={stylesP1.image}
      />

      <Controls />
      {/* <TouchableOpacity style={stylesP1.buttonPlay} onPress={() => TrackPlayer.play()}>
        <Text style={stylesP1.buttonText}>Play</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={stylesP1.buttonPause} onPress={() => TrackPlayer.play()}>
        <Text style={stylesP1.buttonText}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesP1.buttonStop} onPress={() => TrackPlayer.play()}>
        <Text style={stylesP1.buttonText}>Stop</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );








  
  // return (
  //   <SafeAreaView style={stylesP1.container}>
  //     <Button title="Play" color="#777" onPress={() => TrackPlayer.play()}/>
  //   </SafeAreaView>
  // );
}
























// return (
//   <View style={styles.containerPlayer}>
//     <Text style={styles.text}>PlayerScreen</Text>
//     <Button
//       title="Go Back to Home"
//       onPress={() => navigation.goBack()}
//       color="blue"
//     />

//     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//       <View style={styles.buttonOpa}>
//         <Text style={styles.buttonText}>Go to Home with TouchableOpacity</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
// );
// }

export default PlayerScreen;

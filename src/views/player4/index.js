import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {stylesP1} from './stylesP1'; // Asegúrate de importar tus estilos correctamente
import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from '../../../App';
import {name as appName} from '../../../app.json';
import { playbackService } from './trackPlayerServices';
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { setupPlayer, addTracks } from './trackPlayerServices';





AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);

function PlayerScreen({ navigation }) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if(isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);
  if(!isPlayerReady) {
    return (
     // <SafeAreaView style={stylesP1.container}>
        <ActivityIndicator size="large" color="blue"/>
   //   </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={stylesP1.container}>
      <TouchableOpacity style={stylesP1.buttonPlay} onPress={() => TrackPlayer.play()}>
        <Text style={stylesP1.buttonText}>Play</Text>
      </TouchableOpacity>
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



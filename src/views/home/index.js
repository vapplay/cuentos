import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { styles } from './styles';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.Title} >Selecciona  tu mágico cuento para el día de hoy ¡
</Text>
        <View style={styles.containerimages}>
          <TouchableOpacity onPress={() => navigation.navigate('Player')}>
            <View style={styles.borderImg}>
              <Image
                style={styles.imageLeft}
                source={require('../../assets/images/imagen1.png')}
              />
              <Text
                style={styles.textLeft}>
                Frida
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Player')}>
            <View style={styles.borderImg}>
              <Image
                style={styles.imageRight}
                source={require('../../assets/images/imagen2.png')}
              />
              <Text
                style={styles.textRight}>
                Joanne R
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerimages}>
          <TouchableOpacity onPress={() => navigation.navigate('Player')}>
            <View style={styles.borderImg}>
              <Image
                style={styles.imageRight}
                source={require('../../assets/images/imagen3.png')}
              />
              <Text
                style={styles.textRight}>
                Marie
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Player')}>
            <View style={styles.borderImg}>
              <Image
                style={styles.imageLeft}
                source={require('../../assets/images/imagen4.png')}
              />
              <Text
                style={styles.textLeft}>
                Serena
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerimages}>
          <TouchableOpacity onPress={() => navigation.navigate('Player')}>
            <View style={styles.borderImg}>
              <Image
                style={styles.imageCenterRight}
                source={require('../../assets/images/imagen6.png')}
              />
              <Text
                style={styles.textCenterRight}>
                ! Dedicado a tu {"\n"}
                extraordinaria hija!
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* <Text>HomeScreen</Text>
        <Button
          title="Go to Player"
          onPress={() => navigation.navigate('Player')}
        /> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('Player')}>
          <View style={{backgroundColor: 'tomato', padding: 10, marginTop: 20}}>
            <Text style={{color: 'white'}}>
              Go to Player with TouchableOpacity
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

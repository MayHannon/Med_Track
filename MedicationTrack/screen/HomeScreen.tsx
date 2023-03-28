/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const  HomeScreen = ({navigation})=> {

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#EEEEEE' }}>
      <Image style={{ marginTop: 100, left: 50, width: 300, height: 300 }} source={require("../img/Home.png")} />
      <Text style={{ color: "#000000", fontFamily: "Poppins", fontWeight: "bold", textAlign: 'center', marginTop: 20 }}>Track Your  Medications with MedTrak</Text>
      <Text style={{ color: "#000000", fontFamily: "Poppins", marginTop: 8, textAlign: 'center', }}>Morem ipsum dolor sit amet, consectetur {"\n"} adipiscing elit. Nunc vulputate libero et velit{"\n"} interdum, ac aliquet odio mattis.</Text>
      <View style={{ width: 340, maxHeight: 100, left: 26, top: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
         <Text>Get Started</Text> 
          
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen;

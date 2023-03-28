/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  TouchableOpacity
} from 'react-native/Libraries/NewAppScreen';



function LogIn({navigation}): JSX.Element {
  const [name, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogIn = async () => {
    try {
console.log({ name: name, password: password })
      const response = await fetch('http://192.168.191.167:3004/user/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, password: password })
        
        
      });

      if (!response.ok) {
        throw new Error('Error Log in user');
      }
      const data = await response.json();
      const userId = data.id;
      console.log(userId)
            navigation.navigate('DashComponent',{ userId: userId} );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{ width: '100%', height: '100%', backgroundColor: '#EEEEEE' }}>
      <Text style={{ top: 50, fontSize: 22, color: "#000000", fontFamily: "Poppins", fontWeight: "bold", textAlign: 'center', marginTop: 20 }}>Welcome Back! </Text>
      <Image style={{
        marginTop: 60,
        left: 50,
        width: 300, height: 250
      }} source={require("../img/LogIn.png")} />
      <TextInput placeholder="Name:"
        style={{ color: "#000000", fontFamily: "Poppins", fontWeight: "bold", fontSize: 18, marginTop: 30, left: 50 }} value={name}
        onChangeText={setFirstName}></TextInput>
      <TextInput placeholder="Password:"
        style={{ color: "#000000", fontFamily: "Poppins", fontWeight: "bold", fontSize: 18, marginTop: 15, left: 50 }}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        ></TextInput>

<View style={{ width: 340, maxHeight: 100, left: 26, top: 50 }}>
        <Button title="LogIn" onPress={handleLogIn} />
      </View>

    </View>


  )
}
export default LogIn;

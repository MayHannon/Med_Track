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
} from 'react-native/Libraries/NewAppScreen';



function Register({navigation}): JSX.Element {

  const [name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    try {

      const response = await fetch('http://192.168.191.167:3004/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
        
        
      });

      if (!response.ok) {
        throw new Error('Error adding user');
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
    <View style={{ width: '100%', height: '100%', backgroundColor: '#EEEEEE' }}>
      <Text style={{ top: 50, fontSize: 22, color: '#000000', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Welcome Onboard!</Text>
      <Text style={{ color: '#000000', fontFamily: 'Poppins', textAlign: 'center', marginTop: 60 }}>Morem ipsum dolor sit amet, consectetur {'\n'} </Text>
      <TextInput
        placeholder="First Name:"
        style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 18, marginTop: 60, left: 50 }}
        value={name}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Email:"
        style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 18, marginTop: 30, left: 50 }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password:"
        style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 18, marginTop: 15, left: 50 }}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={{ width: 340, maxHeight: 100, left: 26, top: 50 }}>
        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
}

export default Register;

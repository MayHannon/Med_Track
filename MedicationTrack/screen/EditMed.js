/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome5';


function EditMed({navigation ,route}): JSX.Element {
  const { userId, id } = route.params;
    const [name, setName] = useState('');

    const [frequency, setFrequencyCount] = useState(0);
    const [dosage, setDosageCount] = useState(0);

    function handleFrequencyClick() {
      setFrequencyCount(frequency + 1);
    }
  
    function handleDosageClick() {
      setDosageCount(dosage + 1);
    }
    const editMed = async () => {

        try {
            
            console.log(userId)   
            console.log(id)   


            const response = await fetch(`http://192.168.191.167:3004/medication/1/1/`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name:name , frequency:frequency , dosage:dosage }),
              
            });

            if (!response.ok) {
              throw new Error('Error ');
            }
            navigation.navigate('DashComponent',{ userId: userId} );

            console.log(userId)
          } catch (error) {
            console.error(error);
          }   
    }
  return (
    <View
      style={{ backgroundColor: '#EEEEEE',width:"100%",height:"100%" }}>
      
      <Text style={{ top: 50, fontSize: 22, color: "#000000", fontFamily: "Poppins", fontWeight: "bold", textAlign: 'center', marginTop: 20 }}> Edit Medication</Text>
      <Text style={{ color: "#000000", fontFamily: "Poppins", textAlign: 'center', marginTop: 60 }}>Morem ipsum dolor sit amet, consectetur {"\n"} </Text>
      <TextInput placeholder="Medication Name:"
        style={{ color: "#000000", fontFamily: "Poppins", fontWeight: "bold", fontSize: 18, marginTop: 60, left: 50 }} 
         value={name}
         onChangeText={setName}

        ></TextInput>
         

         
    <Text style={{ color: "#000000", fontFamily: "Poppins", fontSize: 18, fontWeight:"bold", marginTop: 30, left: 50,width:130 }}>Frequency</Text>

    <Text style={{ color: "#000000", fontFamily: "Poppins", fontSize: 18, fontWeight:"bold", marginTop: -20, left: 200,width:130 }}>{frequency}</Text>

      <Button onPress={handleFrequencyClick} title="+"/>

      <Text style={{ color: "#000000", fontFamily: "Poppins", fontSize: 18, fontWeight:"bold", marginTop: 30, left: 50,width:130 }}>Dosage</Text>
      <Text style={{ color: "#000000", fontFamily: "Poppins", fontSize: 18, fontWeight:"bold", marginTop: -20, left: 200,width:130 }}>{dosage}</Text>

      <Button onPress={handleDosageClick} title="+"/>
    
      
     <View style={{ width: 200, maxHeight: 50, left: 26, top: 20 }}>
     <Button title="Edit MEDICATION" onPress={editMed} />

      </View>
      
    </View>


  )
}
export default EditMed;

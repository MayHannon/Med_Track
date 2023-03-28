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


function AddMed({navigation, route}): JSX.Element {
    const [name, setName] = useState('');

    const [frequency, setFrequencyCount] = useState(0);
    const [dosage, setDosageCount] = useState(0);

    function handleFrequencyClick() {
      setFrequencyCount(frequency + 1);
    }
  
    function handleDosageClick() {
      setDosageCount(dosage + 1);
    }
    const addMed = async () => {
        const { userId } =route.params;;

        try {
            
            console.log(userId)   


            const response = await fetch(`http://192.168.191.167:3004/medication/${userId}/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name:name , frequency:frequency , dosage:dosage }),
              
            });
      
            if (!response.ok) {
              throw new Error('Error adding user');
            }
            console.log(userId)
                  navigation.navigate('DashComponent',{ userId: userId} );
          } catch (error) {
            console.error(error);
          }   
    }
  return (
    <View
      style={{ backgroundColor: '#EEEEEE',width:"100%",height:"100%" }}>
      
      <Text style={{ top: 50, fontSize: 22, color: "#000000", fontFamily: "Poppins", fontWeight: "bold", textAlign: 'center', marginTop: 20 }}>Add New Medication</Text>
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
    
      <Text style={{ color: "#000000", fontFamily: "Poppins", fontSize: 18, fontWeight:"bold", marginTop: 30, left: 50,width:130 }}>Add Reminder</Text>
      <View style={{ width: 40, maxHeight: 70, left: 200, top: -25 ,backgroundColor:"#376EFC"   }}>
        <Button
        
          title="+" 
        />

      </View>
     <View style={{ width: 340, maxHeight: 50, left: 26, top: 20 }}>
     <Button title="Add MEDICATION" onPress={addMed} />

      </View>
      
    </View>


  )
}
export default AddMed;

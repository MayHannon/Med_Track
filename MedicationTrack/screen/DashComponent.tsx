import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import MedicationComponent from './componand/MedicationComponent';

function DashComponent({navigation,route}) {
  const [medications, setMedications] = useState([]);
  const { userId } =route.params;;

  useEffect(() => {
    // Call API to fetch user medications
    fetch(`http://192.168.191.167:3004/medication/${userId}/`)
          .then(response => response.json())
      .then(data => setMedications(data)
      )
      .catch(error => console.log(error));

    }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#EEEEEE', width: '100%', height: 40, marginTop: 20 }}>
        <Text style={{ top: -20, backgroundColor: '#5D89F9', width: '100%', height: 130, fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }}></Text>
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        {medications.map(medication => (
          <MedicationComponent 
            key={medication.id}
            medication={medication}
            navigation={navigation}
          
          />
        ))}
      </ScrollView>

      <View style={{ width: 340, maxHeight: 50, left: 26, top: 0 }}>
     <Button title="Add MEDICATION" onPress={() => navigation.navigate('AddMed',{ userId: userId})} />

      </View>
      <View style={{ width: 340, maxHeight: 50, left: 26, top: 5 }}>
     <Button title="Notifications" onPress={() => navigation.navigate('Notifications',{ userId: userId})} />

      </View>

    </View>
  );
}

export default DashComponent;

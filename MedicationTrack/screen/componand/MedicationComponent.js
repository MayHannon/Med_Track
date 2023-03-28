import React from 'react';
import { View, Text, Button } from 'react-native';

function MedicationComponent({ navigation, medication  }) {
  const { id ,name, frequency, dosage, reminderTime } = medication;

const userId=(medication.userId)
console.log

  const DeleteMed = async () => {
    // const { userId } =route.params;;

        try {
            
            console.log(userId)   
            console.log(id)   


            const response = await fetch(`http://192.168.191.167:3004/medication/${userId}/${reminderId}/`, {
              method: 'Delete',
              headers: {
                'Content-Type': 'application/json',
              }              
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
        const EditMed = async () => {
          // const { userId } =route.params;;
      
                 try{

                 
                  console.log(userId)   
                  console.log(id)   
      
                  navigation.navigate('EditMed',{ userId, id ,navigation } );
                 }
                 catch (error) {
            console.error(error);
          } 
              }
              const AddREm = async () => {
                // const { userId } =route.params;;
            
                       try{
      
                       
                        console.log(userId)   
                        console.log(id)   
            
                        navigation.navigate('TimePicker',{ userId, id , navigation} );
                       }
                       catch (error) {
                  console.error(error);
                } 
                    }
  return (
    <View style={{ backgroundColor: '#D9D9D9', padding: 20, marginVertical: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Frequency: {frequency}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Dosage: {dosage}</Text>

      <View style={{ marginTop: 10 }}>
          <Button title="Add ReminderTime" onPress={AddREm} />
        </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ marginRight: 10 }}>
          <Button title="Edit" onPress={EditMed} />
        </View>
        <View>
          <Button title="Remove" onPress={DeleteMed}></Button> 
        </View>
      </View>
    </View>
  );
  }

export default MedicationComponent;

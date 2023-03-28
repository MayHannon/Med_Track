import React from 'react';
import { View, Text, Button } from 'react-native';

function NotificationsComponent({ navigation, medication , reminderId}) {
  const { id ,name, frequency, dosage } = medication;
const userId=(medication.userId)
console.log(reminderId)
const Done = async () => {
  try {
    const response = await fetch(`http://192.168.191.167:3004/reminder/Complete/${userId}/${reminderId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed ');
    }
    navigation.navigate('DashComponent',{ userId: userId} );

    console.log('complete successfully');
  } catch (error) {
    console.error(error);
  }

}
return (
  <View
    style={{ backgroundColor: '#EEEEEE',width:"100%",height:'100%'}}>
    <Text style={{ top: -20,backgroundColor:"#5D89F9",width:"100%",height:130, fontFamily: "Poppins", fontWeight: "bold", textAlign: 'center', marginTop: 20 }}></Text>

   
    <Text style={{ top: -100, fontSize: 22, color: "#000000", fontFamily: "Poppins", fontWeight: "bold", textAlign: 'center', marginTop: 20 }}>Notifications</Text>
   
    <Text style={{ top: -70, fontSize: 18, color: "#000000", fontFamily: "Poppins", textAlign: 'center', marginTop: 20 }}>Medication’s reminder  </Text>

    <Text style={{ top:-50,backgroundColor:"#EEEEEE", fontSize: 18, color: "#000000", fontFamily: "Poppins", fontWeight: "bold", textAlign: 'center',marginLeft:27 ,marginRight:27 }}>Its the time to take your Medicationplease{"\n"}
     take now {dosage} pills of {name}{"\n"}
      under  your doctor instruction {"\n"}
      prefer to eat first {"\n"}
      Be Will Soon   </Text>
      <View style={{ width: 60, maxHeight: 70, left: 300, top: -32 ,backgroundColor:"#5D89F9"   }}>
      <Button onPress={Done}
      
        title="Done" 
      />

    </View>
  </View>


)
}
export default NotificationsComponent;
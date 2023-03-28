/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import NotificationsComponent from './componand/NotificationsComponent';


function Notifications({navigation , route}): JSX.Element {
  const [medications, setMedications] = useState([]);
  const [reminder, setReminder] = useState([]);
  const { userId } =route.params;;
  console.log(userId)
  useEffect(() => {
    // Call API to fetch user medications
    fetch(`http://192.168.191.167:3004/reminder/${userId}/`)
          .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
      
      const medId=reminder.medicationId

    fetch(`http://192.168.191.167:3004/medication/${userId}/`)
          .then(response => response.json())
      .then(data => setMedications(data)
      )
      .catch(error => console.log(error));
      console.log("yguhijokp[",reminder)
    }, []);
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
    {medications.map(medication => (
      <NotificationsComponent 
        key={medication.id}
        medication={medication}
        navigation={navigation}
        reminderId={1}
        route={route}

      />
    ))}
  </ScrollView>

  )
}
export default Notifications;

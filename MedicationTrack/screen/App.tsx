/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;
import HomeScreen from "./HomeScreen"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LogIn from './LogIn';
import Register from './Register';
import DashComponent from './DashComponent';
import AddMed from './AddMed';
import EditMed from './EditMed';
import MedicationComponent from './componand/MedicationComponent';
import TimePicker from './componand/TimePicker';
import Notifications from './Notifications';
import NotificationsComponent from './componand/NotificationsComponent';
const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  
  

  return (
<SafeAreaProvider>
            <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='Register' component={Register}></Stack.Screen>
            <Stack.Screen name='DashComponent' component={DashComponent} ></Stack.Screen>
            <Stack.Screen name='LogIn' component={LogIn} ></Stack.Screen>
            <Stack.Screen name='AddMed' component={AddMed} ></Stack.Screen>
            <Stack.Screen name='EditMed' component={EditMed} ></Stack.Screen>
            <Stack.Screen name='TimePicker' component={TimePicker} ></Stack.Screen>
            <Stack.Screen name='Notifications' component={Notifications} ></Stack.Screen>
            <Stack.Screen name='NotificationsComponent' component={NotificationsComponent} ></Stack.Screen>

          </Stack.Navigator>
        </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
interface TimePickerProps {
  value: Date;
  onTimeChange: (time: Date) => void;
}
const TimePicker = ({navigation, route}) => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [isAM, setIsAM] = useState(true);
  const { userId ,medId } =route.params;;

  const formatTime = (time:number) => {
    return time < 10 ? '0' + time : time;
  };

  const onHourIncrement = () => {
    if (isAM && selectedHours === 12) {
      setSelectedHours(1);
    } else if (!isAM && selectedHours === 23) {
      setSelectedHours(12);
    } else {
      setSelectedHours(selectedHours + 1);
    }
  };

  const onHourDecrement = () => {
    if (isAM && selectedHours === 1) {
      setSelectedHours(12);
    } else if (!isAM && selectedHours === 12) {
      setSelectedHours(23);
    } else {
      setSelectedHours(selectedHours - 1);
    }
  };

  const onMinuteIncrement = () => {
    if (selectedMinutes === 59) {
      setSelectedMinutes(0);
      onHourIncrement();
    } else {
      setSelectedMinutes(selectedMinutes + 1);
    }
  };

  const onMinuteDecrement = () => {
    if (selectedMinutes === 0) {
      setSelectedMinutes(59);
      onHourDecrement();
    } else {
      setSelectedMinutes(selectedMinutes - 1);
    }
  };

  const onSave = async () => {
    const formattedHours = isAM ? selectedHours : selectedHours + 12;
    const formattedMinutes = selectedMinutes;
    console.log(`Selected time is: ${formattedHours}:${formattedMinutes}`);

    const selectedTime = new Date();
    selectedTime.setHours(formattedHours);
    selectedTime.setMinutes(formattedMinutes);
    
    try {
      const response = await fetch(`http://192.168.191.167:3004/medication/${userId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({medicationId:medId, time: selectedTime.toISOString() }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to save time');
      }
      navigation.navigate('DashComponent',{ userId: userId} );

      console.log('Time saved successfully');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.timePicker}>
        <TouchableOpacity onPress={onHourIncrement}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHourDecrement}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>

        <Text style={styles.timeText}>
          {formatTime(selectedHours)}:{formatTime(selectedMinutes)}
        </Text>

        <TouchableOpacity onPress={onMinuteIncrement}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onMinuteDecrement}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsAM(!isAM)}>
          <Text style={styles.ampm}>{isAM ? 'AM' : 'PM'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TimePicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timePicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#007AFF',
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  ampm: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#007AFF',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  saveText: {
    color: 'white',
    fontSize: 20,
  }
})

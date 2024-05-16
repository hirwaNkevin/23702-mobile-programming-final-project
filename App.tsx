/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
} from 'react-native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import MotionScreen from './src/screens/MotionScreen';
import LightScreen from './src/screens/LightScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LocationScreen from './src/screens/LocationScreen';
import { accelerometer } from 'react-native-sensors';

import {
  map,
  filter
} from 'rxjs/operators';

let Tab = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Light" component={LightScreen} />
          <Tab.Screen name="Motion" component={MotionScreen} />
          <Tab.Screen name="Location" component={LocationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

function getMotionInfo() {
  let motionSpeed;
  const subscription = accelerometer.pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 20)).subscribe((speed) => { motionSpeed = speed; });
  setTimeout(() => {
    subscription.unsubscribe();
  }, 1000);
  return motionSpeed;
}

// const styles = StyleSheet.create({

// });

export default App;

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from 'react-native';
import GettingStarted from './components/GettingStarted/GettingStarted';
import MainTabs from './screens/Navigation';

const RootStack = createStackNavigator();
const MainTabStack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState(null)

  return (
    <NavigationContainer>
      {
        token === null ? (
          <RootStack.Navigator headerMode="none">
            <RootStack.Screen
              name="GettingStarted"
              component={GettingStarted}
              initialParams={{setToken: setToken}}
            />
          </RootStack.Navigator>
        ) : (
          <MainTabStack.Navigator headerMode="none">
            <MainTabStack.Screen
              name="Main"
              component={MainTabs}
            />
          </MainTabStack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

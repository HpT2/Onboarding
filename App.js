import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Onboarding1 from "./screens/Onboarding1";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import Home from "./screens/HomeScreen";
import * as Linking from "expo-linking";
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Lấy URL của ứng dụng được lưu trữ trong Expo Client
    const url = Linking.createUrl();
    console.log('URL of your app hosted by Expo Client:', url);
  }, []);
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
      <Stack.Screen name="Onboarding1" component={Onboarding1}  options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding2" component={Onboarding2}  options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding3" component={Onboarding3}  options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home} options={{ headerLeft: null ,gestureEnabled: false, }}/>
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

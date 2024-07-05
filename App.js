import { View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
import { enableScreens } from "react-native-screens"
enableScreens()
const Stack = createNativeStackNavigator();

function Screen1({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{ width: 150, height: 150, backgroundColor: "green" }}
        sharedTransitionTag="sharedTag"
      />
      <Button title="Screen2" onPress={() => navigation.navigate("Screen2")} />
    </View>
  )
}

function Screen2({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{ width: 225, height: 225, backgroundColor: "yellow" }}
        sharedTransitionTag="sharedTag"
      />
      <Button title="Screen3" onPress={() => navigation.navigate("Screen3")} />
    </View>
  )
}

function Screen3({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{ width: 300, height: 300, backgroundColor: "red" }}
        sharedTransitionTag="sharedTag2"
      />
      <Button title="Screen1" onPress={() => navigation.navigate("Screen1")} />
    </View>
  )
}

function Screen4({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{ width: 450, height: 450, backgroundColor: "blue" }}
        sharedTransitionTag="sharedTag2"
      />
      <Button title="Screen1" onPress={() => navigation.navigate("Screen1")} />
    </View>
  )
}
function NestedScreen() {
  return (
    
      <Stack.Navigator initialRouteName="Screen4" screenOptions={{ animation: 'fade', headerShow: false, presentation: "transparentModal" }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2"
          component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    
  );
}

import {createDrawerNavigator} from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createDrawerNavigator()

export default function SharedElementExample() {
  return <NavigationContainer>
    <Navigator initialRouteName={"Start"}>
    <Screen name="Start" component={NestedScreen}/>
    </Navigator>
  </NavigationContainer>
}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screen/HomeScreen";
import BasicAnimation from "./src/Screen/Basic";
import Screen2 from "./src/Screen/Screen2";
import Screen3 from "./src/Screen/Screen3";
import Screen4 from "./src/Screen/Screen4";
import Screen5 from "./src/Screen/Screen5";
import NewScreen from "./src/Screen/NewScreen";


const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer >
    <Stack.Navigator  initialRouteName="New" >
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Basic" component={BasicAnimation}  />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen  name="Screen3" component={Screen3} />
      <Stack.Screen  name="Screen4" component={Screen4} options={{headerShown:false}}  />
      <Stack.Screen name="Screen5" component={Screen5}  />
      <Stack.Screen  name="New" component={NewScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}
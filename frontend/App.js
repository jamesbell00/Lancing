import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import User_Page from './src/screens/User_Page';
import OnboardingScreen from './src/screens/OnBoardingScreen';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//     <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} options={{headerShown: false}} />
//       {/*<Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Stack.Screen name="User_Page" component={User_Page} options={{headerShown: false}}/>*/}
//     </Stack.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MyStack/>
//     </NavigationContainer>
    
//   );
// }; //CODES WITHOUT ONBOARDING SECREEN ENDS HERE
const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(false); //MAKE IT TRURE TO KEEP SHOWING and command else false

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false); //AND MAKE THIS COMMENT
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User_Page" component={User_Page}/>
        </Stack.Navigator>
        
      </NavigationContainer>
    )
  );
};

LogBox.ignoreAllLogs();

export default App;

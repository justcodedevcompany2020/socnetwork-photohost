import { createStackNavigator } from '@react-navigation/stack';
import { HeaderWhiteTitle } from '../headers/HeaderWhiteTitle.';
import { HomeHeader } from '../headers/HomeHeader';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { NotificationScreen } from '../screens/Home/NotificationScreen';

export const LoginNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          header: ({ navigation }) => (
            <Header onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{
          header: ({ navigation }) => (
            <Header onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

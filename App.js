import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<SafeAreaProvider>
					<TailwindProvider>
						<Stack.Navigator>
							<Stack.Screen
								name="Home"
								component={HomeScreen}
								options={{
									headerShown: false,
								}}
							/>

							<Stack.Screen
								name="MapScreen"
								component={MapScreen}
								options={{
									headerShown: false,
								}}
							/>
						</Stack.Navigator>
					</TailwindProvider>
				</SafeAreaProvider>
			</Provider>
		</NavigationContainer>
	);
}

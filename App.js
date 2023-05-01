import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<TailwindProvider>
					<HomeScreen />
				</TailwindProvider>
			</SafeAreaProvider>
		</Provider>
	);
}

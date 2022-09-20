import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Text, ThemeProvider } from '@rneui/themed';

import { theme } from './styles/theme';

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<Text>Hello World</Text>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

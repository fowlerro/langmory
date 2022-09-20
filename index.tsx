import 'expo/build/Expo.fx';
import { AppRegistry, Platform } from 'react-native';
import { createRoot } from 'react-dom/client';
import withExpoRoot from 'expo/build/launch/withExpoRoot';

import App from './src/App';

AppRegistry.registerComponent('main', () => withExpoRoot(App));
if (Platform.OS === 'web') {
	const root = document.getElementById('root') ?? document.getElementById('main');
	const rootTag = createRoot(root!);
	const RootComponent = withExpoRoot(App);
	rootTag.render(<RootComponent exp={{}} />);
}

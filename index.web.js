/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/0_app';
import { createRoot } from 'react-dom/client';

AppRegistry.registerComponent('App', () => App);
const root = createRoot(document.getElementById('root'));
root.render(<App />);


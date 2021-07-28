/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Bootstrap} from './src/bootstrap';

AppRegistry.registerComponent(appName, () => Bootstrap);

import { AppRegistry, LogBox } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

import 'react-native-gesture-handler';

LogBox.ignoreLogs([/Expected style/]);

AppRegistry.registerComponent(appName, () => App);

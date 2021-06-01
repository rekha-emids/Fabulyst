// @flow
console.disableYellowBox = true
import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
// import Playground from './App/Containers/Playground'

AppRegistry.registerComponent('Fabulyst', () => App)

// @flow

console.disableYellowBox = true
import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
// import InfinitePlayground from './App/Containers/Playgrounds/InfinitePlayground'
// import Playground from 'playground'

// AppRegistry.registerComponent('Fabulyst', () => InfinitePlayground)
AppRegistry.registerComponent('Fabulyst', () => App)

console.log('AppRegistry', process.env.NODE_ENV)

global.LOG = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('/------------------------------\\')
    console.log('LOGGER', ...args)
    console.log('\\------------------------------/')
  }
  return args[args.length - 1]
}

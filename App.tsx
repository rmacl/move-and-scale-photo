import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';
import MoveScale from './src/screen/MoveScale';

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  MoveScale : { screen : MoveScale },
});

const App = createAppContainer(RootStack);
export default App;


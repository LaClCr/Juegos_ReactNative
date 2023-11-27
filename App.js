import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CrossWord from './src/screens/crossword';
import LetterSoup from './src/screens/letterSoup';

const Tab = createBottomTabNavigator();
const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="CrossWord" component={CrossWord} options={{ headerShown: false }} />
      <Tab.Screen name="LetterSoup" component={LetterSoup} options={{ headerShown: false }} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default App;
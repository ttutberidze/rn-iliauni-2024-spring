import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoryScreen from './screens/categoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from './screens/moviesScreen';
import MovieDetailScreen from './screens/movieDetailScreen';
import ThemeContextProvider, { useTheme } from './context/theme.context';
import ThemeButton from './components/themeButton';
import { Provider } from 'react-redux';
import {store} from './store/store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesScreen from './screens/favouritesScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigation} options={{headerShown: false}} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
  );
}

const StackNavigation = () => {
  const {theme} = useTheme()
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundColor,
        },
        headerTintColor: 'white',
      }}>
        <Stack.Screen 
          name='CategoryScreen' 
          component={CategoryScreen} 
          options={{
            title: 'All Categories',
            headerRight: ThemeButton
          }}
        />
        <Stack.Screen 
          name='MoviesScreen'
          component={MoviesScreen} 
          // options={({route}) => {
          //   return {
          //     title: DATA.find((category) => category.id === route.params.categoryId).name
          //   }
          // }}  
        />
        <Stack.Screen 
          name='MovieDetailScreen'
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
  )
}

export default function App() {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ThemeContextProvider>
        <NavigationContainer>

          <MyTabs />
          </NavigationContainer>
        </ThemeContextProvider>
        <StatusBar style="light" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

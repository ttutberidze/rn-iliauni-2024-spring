import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoryScreen from './screens/categoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from './screens/moviesScreen';
import MovieDetailScreen from './screens/movieDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#5f9c19',
          },
          headerTintColor: 'white',
        }}>
          <Stack.Screen 
            name='CategoryScreen' 
            component={CategoryScreen} 
            options={{
              title: 'All Categories'
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
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

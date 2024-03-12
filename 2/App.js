import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button } from 'react-native';
// import User, {person as Person} from './components/User';
import User from './components/User';
import { useState } from 'react';


export default function App() {

  // const [name, setName] = useState('Hello')

  // const onChangeText = (value) => {
  //   setName(value)
  // }

  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([{name: 'James', id: Math.random()}, {name: 'Bond'}]);

  const addTodo = () => {
    setTodos([...todos, {name: title}])
    setTitle('')
  }

  const onChangeText = (text) => {
    setTitle(text)
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Todo' onPress={addTodo} />
      <TextInput value={title} onChangeText={onChangeText} />
      {todos.map((todo, index) => {
        return <User key={index} name={todo.name} />
      })}
      {/* <Person /> */}
      <StatusBar style="auto" />
    </View>
  );
}

// export default function App() {
//   return (
//     <>
//       <View style={styles.container}>
//         <View style={{backgroundColor: 'red', width: 50, height: 50, flex: 5}}><Text>1</Text></View>
//         <View style={{backgroundColor: 'yellow', width: 50, height: 50, flex: 2}}><Text>2</Text></View>
//         <View style={{backgroundColor: 'lime', width: 50, height: 50}}><Text>3</Text></View>
//       </View>
//     </>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

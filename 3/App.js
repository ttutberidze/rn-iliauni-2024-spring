import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './components/TodoItem';
import { useCallback, useMemo, useState } from 'react';
import AddTodo from './components/AddTodo';


export default function App() {

  const [todos, setTodos] = useState([{name: 'James', id: Math.random()}, {name: 'Bond'}]);

  const addTodo = (title) => {
    setTodos([...todos, {name: title}])
  }

  const onDelete = useCallback((index) => {
    // setTodos(todos.filter((_, currentIndex) => currentIndex !== index))
    setTodos((state) => {
      return state.filter((_, currentIndex) => currentIndex !== index)
    })
  }, [])

  const value = useMemo(() => {
    return 100*100
  }, [])

  return (
    <View style={styles.container}>
      <AddTodo addTodo={addTodo} />
      <View>
        {/* <ScrollView>
          {todos.map((todo, index) => {
            return <TodoItem key={index} name={todo.name} />
          })}
        </ScrollView> */}
        <FlatList renderItem={({item: {name}, index}) => 
          <TodoItem name={name} index={index} onDelete={onDelete} />} data={todos} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30
  },
});

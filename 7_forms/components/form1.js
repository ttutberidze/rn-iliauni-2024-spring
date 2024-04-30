import { useReducer } from 'react'
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native'

const reducerFn = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    };
}

const initialValue = {
    name: '',
    lastName: ''
}

const Form1 = () => {
    
    const [form, dispatch] = useReducer(reducerFn, initialValue)

    const submit = () => {
        if(!form.name || !form.lastName) {
            Alert.alert('Error', 'All fields are required')
        } else {
            console.log(form)
        }
    }
    console.log('Rerender')
    return (
        <View>
            <View>
                <Text style={style.label}>Name</Text>
                <TextInput style={style.input} onChangeText={(value) => dispatch({value, name: 'name'})} value={form.name} />
            </View>
            <View>
                <Text style={style.label}>LastName</Text>
                <TextInput style={style.input} onChangeText={(value) => dispatch({value, name: 'lastName'})} value={form.lastName} />
            </View>
            <Button onPress={submit} title='Save' />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        padding: 10,
        fontSize: 20
    },
    label: {
        fontSize: 20
    },
})

export default Form1
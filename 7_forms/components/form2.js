import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import {Controller, useForm} from 'react-hook-form'


const Form2 = () => {
    
    const {control, handleSubmit} = useForm()

    // const [name] = watch(['name'])

    const onSubmit = (values) => {
        console.log(values)
    }
    const onError = (errors) => {
        console.log(errors)
    }
    console.log('Rerender')
    return (
        <View>
            <View>
                <Text style={style.label}>Name</Text>
                <Controller
                    control={control}
                    name='name'
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            style={style.input} 
                            onChangeText={onChange} 
                            value={value} />
                    )}
                    rules={{
                        required: true,
                        minLength: 5
                    }}
                />
            </View>
            <View>
                <Text style={style.label}>LastName</Text>
                <Controller
                    control={control}
                    name='lastName'
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            style={style.input} 
                            onChangeText={onChange} 
                            value={value} />
                    )}
                    rules={{
                        required: true
                    }}
                />
            </View>
            <Button onPress={handleSubmit(onSubmit, onError)} title='Save' />
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

export default Form2
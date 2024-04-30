import {View, Button} from 'react-native'
import {useForm, FormProvider} from 'react-hook-form'
import TextInput from './textInput'


const Form3 = () => {
    
    const methods = useForm()

    // const [name] = watch(['name'])
    const {handleSubmit} = methods;

    const onSubmit = (values) => {
        console.log(values)
    }
    const onError = (errors) => {
        console.log(errors)
    }
    console.log('Rerender')
    return (
        <FormProvider {...methods}>
            <TextInput 
                label='Name'
                name='name'
                rules={{
                    required: true,
                    minLength: 5
                }}
            />
            <TextInput 
                label='Lastname'
                name='lastName'
                rules={{
                    required: true,
                }}
            />
        
            <Button onPress={handleSubmit(onSubmit, onError)} title='Save' />
        </FormProvider>
    )
}

export default Form3
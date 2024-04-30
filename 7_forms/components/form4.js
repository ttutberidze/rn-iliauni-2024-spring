import { Button} from 'react-native'
import {useForm, FormProvider} from 'react-hook-form'
import TextInput from './textInput'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const validationSchema = yup.object({
    name: yup.string().required().min(3),
    lastName: yup.string().min(2)
})

const defaultValues = {
    name: '',
    lastName: ''
}

const Form4 = () => {
    
    const methods = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues
    })

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
            />
            <TextInput 
                label='Lastname'
                name='lastName'
            />
        
            <Button onPress={handleSubmit(onSubmit, onError)} title='Save' />
        </FormProvider>
    )
}

export default Form4
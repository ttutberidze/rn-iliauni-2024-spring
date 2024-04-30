import { TextInput as RnTextInput, StyleSheet, View, Text } from "react-native"
import {Controller, useFormContext} from 'react-hook-form'

const TextInput = ({
    label, name, rules = {}, textInputProps = {}
}) => {
    const {control, formState: {errors}} = useFormContext()
    const hasError = !!errors[name]
    return (
        <View>
            <Text style={style.label}>{label}</Text>
            <Controller
                control={control}
                name={name}
                render={({field: {onChange, value}}) => (
                    <RnTextInput
                        style={style.input} 
                        onChangeText={onChange} 
                        value={value}
                        {...textInputProps}
                        />
                )}
                rules={rules}
            />
            {hasError && <Text style={{color: 'red'}}>{errors[name].message}</Text>}
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

export default TextInput
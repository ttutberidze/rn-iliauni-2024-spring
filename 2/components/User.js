import { View, Text } from "react-native"

const User = ({name}) => {
    return (
        <View>
            <Text>User Name: {name}</Text>
        </View>
    )
}

// export const person = () => {
//     return (
//         <View>
//             <Text>Person Name: </Text>
//         </View>
//     )
// }

export default User;
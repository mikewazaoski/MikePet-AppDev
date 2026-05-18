import { Text, View } from "react-native";


interface AlertMessageConfig {
    title:string;
    message: string;
    
}

export default{
    customError: () => ({title, message}: AlertMessageConfig) => {
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>{title}</Text>
            <Text style={{ fontSize: 16 }}>{message}</Text>
        </View>
    },

    customSuccess: () => ({title, message}: AlertMessageConfig) => {
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>{title}</Text>
            <Text style={{ fontSize: 16 }}>{message}</Text>
        </View>
    },

    customInfo: ({title, message}: AlertMessageConfig) => {
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>{title}</Text>
            <Text style={{ fontSize: 16 }}>{message}</Text>
        </View>
    }


}
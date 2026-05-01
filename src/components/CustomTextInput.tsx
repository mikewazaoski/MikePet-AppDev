import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextStyle, ViewStyle } from 'react-native';

interface CustomTextInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
    secureTextEntry?: boolean;
}

const CustomTextInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    textStyle,
    containerStyle,
    secureTextEntry = false,
}: CustomTextInputProps) => {
    return (
        <View style={containerStyle}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#4A3A3A',
                    marginBottom: 4,
                }}
            >
                {label}
            </Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={[
                    textStyle,
                    {
                        width: '100%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#D5B4B4',
                        paddingVertical: 8,
                        fontSize: 15,
                        color: '#2B1A1A',
                    },
                ]}
            />
        </View>
    );
};

export default CustomTextInput;



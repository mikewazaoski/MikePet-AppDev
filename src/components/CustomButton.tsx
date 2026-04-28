import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { TextStyle, ViewStyle } from 'react-native';

interface CustomButtonProps {
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    label: string;
    onPress: () => void;
}

const CustomButton = ({ containerStyle, textStyle, label, onPress }: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;



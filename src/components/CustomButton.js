import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';



const CustomButton = ({ containerStyle, textStyle, label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;



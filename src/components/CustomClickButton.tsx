import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert, View, StyleSheet } from 'react-native';

interface CustomClickButtonProps {
    onPress?: () => void;
    containerStyle?: any;
    textStyle?: any;
    label?: string;
}

const CustomClickButton = ({ onPress, containerStyle, textStyle, label = "Click Me" }: CustomClickButtonProps) => {
    const [clicked, setClicked] = useState<number>(0);    
    const handlePress = () => {
        Alert.alert('HELLO ATECCO');
        setClicked(clicked + 1);
        if (onPress) {
            onPress();
        }
    };

    return (
        <View style={containerStyle}>
            <TouchableOpacity onPress={handlePress}>        
                <View
                    style={{
                        alignItems: 'center',   
                        justifyContent: 'center',
                        padding: 10,
                    }}      
                >
                    <Text style={textStyle}>{label}</Text>
                </View> 
            </TouchableOpacity>
        </View>
    );
};

export default CustomClickButton;

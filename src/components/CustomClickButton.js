import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert, View } from 'react-native';



const CustomClickButton = ({ onPress, containerStyle, textStyle, label = "Click Me" }) => {
    const [clicked, setClicked] = useState(0);    
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



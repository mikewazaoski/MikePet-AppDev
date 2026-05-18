import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

interface AlertMessageProps {
    title: string
    message: string
    position?: 'top' | 'bottom'
    visibilityTime: number
}


const showInfo = ({title, message, position = 'top', visibilityTime = 3000}: AlertMessageProps) => {
    Toast.show({
        type: 'info',
        text1: title,
        text2: message,
        position: position,
        visibilityTime: visibilityTime,
        
    });
};

const showSuccess = ({title, message, position = 'top', visibilityTime = 3000}: AlertMessageProps) => {
    Toast.show({
        type: 'success',
        text1: title,
        text2: message,
        position: position,
        visibilityTime: visibilityTime,
        
    });
};


const showError = ({title, message, position = 'top', visibilityTime = 3000}: AlertMessageProps) => {
    Toast.show({
        type: 'error',
        text1: title,
        text2: message,
        position: position,
        visibilityTime: visibilityTime,
        
    });
}

export { showInfo, showSuccess, showError };
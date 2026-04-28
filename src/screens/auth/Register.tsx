import { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import AppHeader from '../../components/AppHeader';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { authRegister } from '../../app/actions';
import { ROUTES } from '../../utils';

const CREAM      = '#FFFDF4';
const CARD_BG    = '#FFF8E7';
const BORDER     = '#F0D9A8';
const BROWN_DARK = '#5C3D1E';
const BROWN_MID  = '#8B5E3C';
const CARAMEL    = '#C49A6C';
const PASTEL_YLW = '#FDF3D0';
const ERROR_RED  = '#C0392B';

const Register = () => {
    const [name, setName] = useState('');
    const [emailAdd, setEmailAdd] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const { isRegistering, isRegisterError, registerError, registerData } = useSelector((state) => state.auth);

    useEffect(() => {
        if (registerData && registerData.token) {
            Alert.alert('Success', 'Registration successful!');
            navigation.navigate('Home');
        }
    }, [registerData, navigation]);

    const handleRegister = () => {
        if (name === '' || emailAdd === '' || password === '') {
            Alert.alert(
                'Missing fields',
                'Please fill in all required fields.',
            );
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Password mismatch', 'Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            Alert.alert('Weak password', 'Password must be at least 6 characters.');
            return;
        }
        dispatch(authRegister({ name, username: emailAdd, email: emailAdd, password }));
    };

    return (
        <View style={styles.screen}>

            {/* decorative blobs */}
            <View style={styles.blobTopRight} />
            <View style={styles.blobBottomLeft} />

            <AppHeader title="Create Account" subtitle="Join Pets Pantry in just a few steps!" />

            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{ width: '100%' }}>
                        <CustomTextInput
                            label="Full name"
                            placeholder="Enter your name"
                            value={name}
                            onChangeText={setName}
                            containerStyle={styles.inputContainer}
                            textStyle={styles.inputText}
                        />
                        <CustomTextInput
                            label="Email address"
                            placeholder="Enter your email"
                            value={emailAdd}
                            onChangeText={setEmailAdd}
                            containerStyle={styles.inputContainer}
                            textStyle={styles.inputText}
                        />
                        <CustomTextInput
                            label="Password"
                            placeholder="Enter a password (min 6 characters)"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            containerStyle={styles.inputContainer}
                            textStyle={styles.inputText}
                        />
                        <CustomTextInput
                            label="Confirm password"
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={true}
                            containerStyle={[styles.inputContainer, { marginBottom: 0 }]}
                            textStyle={styles.inputText}
                        />
                    </View>

                    <CustomButton
                        label={isRegistering ? "Creating account..." : "Create Account"}
                        containerStyle={styles.registerBtn}
                        textStyle={styles.registerBtnText}
                        onPress={handleRegister}
                    />

                    {isRegisterError && (
                        <Text style={styles.errorText}>
                            {registerError}
                        </Text>
                    )}

                    <View style={styles.loginRow}>
                        <Text style={styles.loginPrompt}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginLink}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: CREAM,
        overflow: 'hidden',
    },
    blobTopRight: {
        position: 'absolute',
        top: -60,
        right: -60,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: PASTEL_YLW,
        opacity: 0.6,
    },
    blobBottomLeft: {
        position: 'absolute',
        bottom: -80,
        left: -80,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#F5E6C8',
        opacity: 0.5,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 28,
        alignItems: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: CARD_BG,
        borderRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 28,
        borderWidth: 1.5,
        borderColor: BORDER,
        shadowColor: CARAMEL,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 12,
        elevation: 6,
    },
    inputContainer: {
        marginBottom: 14,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: BORDER,
        paddingHorizontal: 14,
        paddingVertical: 10,
    },
    inputText: {
        fontSize: 15,
        color: BROWN_DARK,
    },
    errorText: {
        color: ERROR_RED,
        textAlign: 'center',
        fontSize: 13,
        marginTop: 10,
        marginBottom: 4,
    },
    registerBtn: {
        backgroundColor: BROWN_DARK,
        borderRadius: 999,
        marginVertical: 24,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: BROWN_DARK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    registerBtnText: {
        color: '#FFF8E7',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.8,
    },
    loginRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginPrompt: {
        fontSize: 14,
        color: BROWN_MID,
    },
    loginLink: {
        color: BROWN_DARK,
        marginLeft: 8,
        fontWeight: '600',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default Register;

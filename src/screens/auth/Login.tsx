import { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import AppHeader from '../../components/AppHeader';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { authLogin } from '../../app/actions';
import { ROUTES } from '../../utils';

type AuthStackParamList = {
    [ROUTES.LOGIN]: undefined;
    [ROUTES.REGISTER]: undefined;
    [ROUTES.HOME]: undefined;
};

type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;

const CREAM      = '#FFFDF4';
const CARD_BG    = '#FFF8E7';
const BORDER     = '#F0D9A8';
const BROWN_DARK = '#5C3D1E';
const BROWN_MID  = '#8B5E3C';
const CARAMEL    = '#C49A6C';
const PASTEL_YLW = '#FDF3D0';
const ERROR_RED  = '#C0392B';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation<AuthNavigationProp>();
    
    const { isLoading, isError, error, data } = useSelector((state: any) => state?.auth || {});

    useEffect(() => {
        if (data && data.token) {
            Alert.alert('Success', 'Login successful!');
            navigation.navigate('Home');
        }
    }, [data, navigation]);

    return (
        <View style={styles.screen}>

            {/* decorative blobs */}
            <View style={styles.blobTopRight} />
            <View style={styles.blobBottomLeft} />

            <AppHeader title="PETS PANTRY" subtitle="Where happy pets begins!" />

            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{ width: '100%' }}>
                        <CustomTextInput
                            label="Username"
                            placeholder="Enter your username"
                            value={username}
                            onChangeText={setUsername}
                            containerStyle={styles.inputContainer}
                            textStyle={styles.inputText}
                        />
                        <CustomTextInput
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            containerStyle={{ ...styles.inputContainer, marginBottom: 0 }}
                            textStyle={styles.inputText}
                        />
                    </View>

                    <CustomButton
                        label={isLoading ? "Signing in..." : "Log in"}
                        containerStyle={styles.loginBtn}
                        textStyle={styles.loginBtnText}
                        onPress={() => {
                            if (username === '' || password === '') {
                                Alert.alert(
                                    'Invalid credentials',
                                    'Please enter your username and password.',
                                );
                                return;
                            }
                            dispatch(authLogin({ username, password }));
                        }}
                    />

                    <GoogleSigninButton
                        //  style={{ width: 212, height: 48 }}
                         size={GoogleSigninButton.Size.Wide}
                         color={GoogleSigninButton.Color.Dark}
                         onPress={async () => {
                          // await _signInwithGoogle().then((result) =>{
                          //   console.log(result);
                          // })
                          // .catch((err) => {
                          //   Alert.alert('Error', `${err.message}`);
                          // }).finally(() => {
                          //   Alert.alert('Success', 'Google Sign-In successful');
                          // });

                          Alert.alert(
                            'Google Sign-In',
                            'Google Sign-In process initiated'
                          );
                        }}
                       />

                       <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',}}>
                       </View>

                    {isError && (
                        <Text style={styles.errorText}>
                            {error}
                        </Text>
                    )}

                    <View style={styles.registerRow}>
                        <Text style={styles.registerPrompt}>Don&apos;t have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.registerLink}>Register</Text>
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
    loginBtn: {
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
    loginBtnText: {
        color: '#FFF8E7',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.8,
    },
    registerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerPrompt: {
        fontSize: 14,
        color: BROWN_MID,
    },
    registerLink: {
        color: BROWN_DARK,
        marginLeft: 8,
        fontWeight: '600',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default Login;

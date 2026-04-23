import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ROUTES } from '../utils';
import AppHeader from '../components/AppHeader';
import { authLogout } from '../app/actions';
import CustomClickButton from '../components/CustomClickButton';

const CREAM      = '#FFFDF4';
const CARD_BG    = '#FFF8E7';
const BORDER     = '#F0D9A8';
const BROWN_DARK = '#5C3D1E';
const BROWN_MID  = '#8B5E3C';
const CARAMEL    = '#C49A6C';
const PASTEL_YLW = '#FDF3D0';

interface AuthState {
    data?: {
        user?: {
            name?: string;
        };
    };
}

interface RootStackParamList {
    [ROUTES.HOME]: undefined;
    [ROUTES.PROFILE]: undefined;
    [ROUTES.LOGIN]: undefined;
    [ROUTES.REGISTER]: undefined;
}

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const { data } = useSelector((state: any) => state.auth) as AuthState;
    const [clicked, setClicked] = useState<number>(0);

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: () => { dispatch(authLogout()); },
                },
            ]
        );
    };

    const handlePress = () => {
        Alert.alert('HELLO ATECCO');
        setClicked(clicked + 1);
    };

    return (
        <View style={styles.screen}>

            <View style={styles.blobTopRight} />
            <View style={styles.blobBottomLeft} />
            <View style={styles.blobMidRight} />

            <AppHeader title="Pets Pantry" subtitle={`Welcome, ${data?.user?.name || 'User'}! 🐾`} />

            <View style={styles.container}>

                {/* greeting banner */}
                <View style={styles.bannerCard}>
                    <Text style={styles.bannerEmoji}> 🐶🐱</Text>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.bannerTitle}>Hello, {data?.user?.name || 'Friend'}!</Text>
                        <Text style={styles.bannerSub}>Your pets deserve the best ⭐</Text>
                    </View>
                </View>

                {/* main card */}
                <View style={styles.card}>
                    <Text style={styles.sectionLabel}>Quick Actions</Text>

                    <Text style={styles.subtext}>
                        You&apos;re successfully logged in. You can view and update your
                        profile details from here.
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        activeOpacity={0.85}
                    >
                        <View style={styles.profileBtn}>
                            <Text style={styles.profileBtnIcon}> 🐾</Text>
                            <Text style={styles.profileBtnText}>Go to Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogout} activeOpacity={0.85}>
                        <View style={styles.logoutBtn}>
                            <Text style={styles.logoutBtnText}>Sign Out</Text>
                        </View>

                    </TouchableOpacity>
                    <CustomClickButton onPress={handlePress} />
                   

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

    // blobs
    blobTopRight: {
        position: 'absolute',
        top: -70,
        right: -70,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: PASTEL_YLW,
        opacity: 0.7,
    },
    blobBottomLeft: {
        position: 'absolute',
        bottom: -90,
        left: -90,
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#F5E6C8',
        opacity: 0.55,
    },
    blobMidRight: {
        position: 'absolute',
        top: '40%',
        right: -50,
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: '#FAE8C8',
        opacity: 0.4,
    },

    // layout
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },

    // greeting banner
    bannerCard: {
        width: '100%',
        backgroundColor: PASTEL_YLW,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderWidth: 1.5,
        borderColor: BORDER,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        marginBottom: 16,
        shadowColor: CARAMEL,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 4,
    },
    bannerEmoji: {
        fontSize: 32,
    },
    bannerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: BROWN_DARK,
        marginBottom: 2,
    },
    bannerSub: {
        fontSize: 12,
        color: CARAMEL,
        fontWeight: '500',
    },

    // main card
    card: {
        width: '100%',
        backgroundColor: CARD_BG,
        borderRadius: 28,
        paddingHorizontal: 22,
        paddingVertical: 24,
        borderWidth: 1.5,
        borderColor: BORDER,
        shadowColor: CARAMEL,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 6,
    },
    sectionLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: CARAMEL,
        letterSpacing: 1.4,
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    subtext: {
        fontSize: 13,
        color: CARAMEL,
        lineHeight: 20,
        marginBottom: 22,
    },

    // profile button
    profileBtn: {
        backgroundColor: BROWN_DARK,
        paddingVertical: 15,
        borderRadius: 999,
        alignItems: 'center',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        shadowColor: BROWN_DARK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    profileBtnIcon: {
        fontSize: 16,
    },
    profileBtnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF8E7',
        letterSpacing: 0.8,
    },

    // logout button
    logoutBtn: {
        paddingVertical: 15,
        borderRadius: 999,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#D4956A',
        backgroundColor: '#FDF0E4',
    },
    logoutBtnText: {
        fontSize: 15,
        fontWeight: '700',
        color: BROWN_MID,
        letterSpacing: 1,
    },
});

export default HomeScreen;

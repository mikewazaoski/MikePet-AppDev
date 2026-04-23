import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../components/AppHeader';
import { authLogout } from '../app/actions';

const CREAM      = '#FFFDF4';
const CARD_BG    = '#FFF8E7';
const BORDER     = '#F0D9A8';
const BROWN_DARK = '#5C3D1E';
const BROWN_MID  = '#8B5E3C';
const CARAMEL    = '#C49A6C';
const PASTEL_YLW = '#FDF3D0';
const WARM_WHITE = '#FFFFFF';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.auth);

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

    return (
        <View style={styles.screen}>

            {/* decorative blobs */}
            <View style={styles.blobTopRight} />
            <View style={styles.blobBottomLeft} />
            <View style={styles.blobMidRight} />

            <AppHeader title="Profile" subtitle={`Welcome, ${data?.user?.name || 'User'}! 🐾`} />

            <View style={styles.container}>

                {/* avatar circle */}
                <View style={styles.avatarWrapper}>
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarEmoji}> 🐾</Text>
                    </View>
                    <Text style={styles.avatarName}>{data?.user?.name || 'User'}</Text>
                    <Text style={styles.avatarEmail}>{data?.user?.email || ''}</Text>
                </View>

                {/* info card */}
                <View style={styles.card}>
                    <Text style={styles.sectionLabel}>Account Details</Text>

                    <View style={styles.infoBlock}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}> 👤</Text>
                            <View>
                                <Text style={styles.infoLabel}>Full Name</Text>
                                <Text style={styles.infoValue}>{data?.user?.name || 'Not available'}</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}> ✉️</Text>
                            <View>
                                <Text style={styles.infoLabel}>Email Address</Text>
                                <Text style={styles.infoValue}>{data?.user?.email || 'Not available'}</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}> ✅</Text>
                            <View>
                                <Text style={styles.infoLabel}>Status</Text>
                                <Text style={styles.infoValue}>Active & Logged In</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.subtext}>
                        This is where your profile information will appear. You can extend this
                        screen with more details later.
                    </Text>

                    <TouchableOpacity onPress={handleLogout} activeOpacity={0.85}>
                        <View style={styles.logoutBtn}>
                            <Text style={styles.logoutBtnText}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
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

    // avatar section
    avatarWrapper: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatarCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: WARM_WHITE,
        borderWidth: 2,
        borderColor: BORDER,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        shadowColor: CARAMEL,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    avatarEmoji: {
        fontSize: 32,
    },
    avatarName: {
        fontSize: 18,
        fontWeight: '700',
        color: BROWN_DARK,
        marginBottom: 4,
    },
    avatarEmail: {
        fontSize: 14,
        color: BROWN_MID,
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

    // info block
    infoBlock: {
        marginBottom: 22,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    infoIcon: {
        fontSize: 20,
        marginRight: 16,
        width: 24,
        textAlign: 'center',
    },
    infoLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: BROWN_MID,
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '600',
        color: BROWN_DARK,
    },
    divider: {
        height: 1,
        backgroundColor: BORDER,
        marginHorizontal: 8,
    },

    // logout button
    logoutBtn: {
        backgroundColor: BROWN_DARK,
        paddingVertical: 15,
        borderRadius: 999,
        alignItems: 'center',
        shadowColor: BROWN_DARK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    logoutBtnText: {
        fontSize: 15,
        fontWeight: '700',
        color: WARM_WHITE,
        letterSpacing: 1,
    },
});

export default ProfileScreen;

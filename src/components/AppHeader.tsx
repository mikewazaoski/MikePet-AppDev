import { Platform, Text, View, StyleSheet } from 'react-native';

interface AppHeaderProps {
    title?: string;
    subtitle?: string;
}

const PRIMARY_COLOR  = '#5C3D1E';
const SUBTITLE_COLOR = '#C49A6C';
const BORDER         = '#F0D9A8';
const PASTEL_YLW     = '#FDF3D0';
const CREAM          = '#FFF8E7';

const AppHeader = ({ title, subtitle }: AppHeaderProps) => {
    return (
        <View style={styles.wrapper}>

            {/* decorative top accent bar */}
            <View style={styles.accentBar} />

            {/* decorative blobs inside header */}
            <View style={styles.blobLeft} />
            <View style={styles.blobRight} />

            <View style={styles.inner}>
                {/* paw dots row */}
                <View style={styles.pawRow}>
                    <View style={styles.pawDot} />
                    <View style={[styles.pawDot, styles.pawDotMid]} />
                    <View style={styles.pawDot} />
                </View>

                {title ? (
                    <Text style={styles.title}>{title}</Text>
                ) : null}

                {subtitle ? (
                    <View style={styles.subtitleRow}>
                        <View style={styles.subtitleLine} />
                        <Text style={styles.subtitle}>{subtitle}</Text>
                        <View style={styles.subtitleLine} />
                    </View>
                ) : null}
            </View>

            {/* bottom decorative border */}
            <View style={styles.bottomBorder} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingTop: Platform.OS === 'ios' ? 58 : 38,
        paddingBottom: 0,
        backgroundColor: CREAM,
        overflow: 'hidden',
        shadowColor: '#C49A6C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 10,
        elevation: 6,
    },

    // top accent bar
    accentBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: '#D4956A',
        opacity: 0.7,
    },

    // blobs
    blobLeft: {
        position: 'absolute',
        top: -30,
        left: -40,
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: PASTEL_YLW,
        opacity: 0.55,
    },
    blobRight: {
        position: 'absolute',
        bottom: -20,
        right: -30,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FAE8C8',
        opacity: 0.5,
    },

    // inner content
    inner: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: PASTEL_YLW,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: BORDER,
        marginBottom: 16,
        shadowColor: '#C49A6C',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 3,
        alignItems: 'flex-start',
    },

    // paw dot row
    pawRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 8,
    },
    pawDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#D4956A',
        opacity: 0.6,
    },
    pawDotMid: {
        width: 10,
        height: 10,
        borderRadius: 5,
        opacity: 0.8,
    },

    // title
    title: {
        fontSize: 26,
        fontWeight: '800',
        letterSpacing: 1,
        color: PRIMARY_COLOR,
        marginBottom: 4,
    },

    // subtitle with side lines
    subtitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 2,
    },
    subtitleLine: {
        height: 1,
        width: 18,
        backgroundColor: SUBTITLE_COLOR,
        opacity: 0.5,
    },
    subtitle: {
        fontSize: 12.5,
        fontWeight: '500',
        color: SUBTITLE_COLOR,
        letterSpacing: 0.4,
    },

    // bottom border wave substitute
    bottomBorder: {
        height: 3,
        backgroundColor: BORDER,
        opacity: 0.8,
    },
});

export default AppHeader;


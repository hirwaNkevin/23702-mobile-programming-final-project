/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native MotionScreen
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function MotionScreen(): React.JSX.Element {
    return (
        <ScrollView>
            <View style={[styles.container, styles.container]}>
                <Pressable style={styles.motionPressable}>
                    <Text style={{ color: '#fff' }}>Motion</Text>
                    <Text>Stationary</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    motionPressable: {
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: 20,
        height: 100,
        width: 100,
        overflow: 'scroll',
    },
});

export default MotionScreen;

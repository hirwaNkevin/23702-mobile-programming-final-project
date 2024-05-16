/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native LightScreen
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

function LightScreen(): React.JSX.Element {
    return (
        <ScrollView>
            <View style={[styles.container, styles.container]}>
                <Pressable style={styles.lightPressable}>
                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'left' }}>Light</Text>
                    <Text style={{ color: '#fff', fontSize: 32, textAlign: 'center' }}>70%</Text>
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
    lightPressable: {
        backgroundColor: 'yellow',
        color: '#fff',
        borderRadius: 20,
        height: 100,
        width: 100,
        overflow: 'scroll',
    },
});

export default LightScreen;

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    ScrollView,
    View,
} from 'react-native';


function HomeScreen(): React.JSX.Element {
    return (
        <ScrollView>
            <View style={[styles.container, styles.container]}>
                <Pressable style={[styles.lightPressable, styles.homePressable]}>
                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'left' }}>Ambient Light</Text>
                    <Text style={{ color: '#fff', fontSize: 32, textAlign: 'center' }}>70%</Text>
                </Pressable>
                <Pressable style={[styles.motionPressable, styles.homePressable]}>
                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'left' }}>Motion</Text>
                    <Text style={{ color: '#fff', fontSize: 32, textAlign: 'center' }}>Stationary</Text>
                </Pressable>
                <Pressable style={[styles.locationPressable, styles.homePressable]}>
                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'left' }}>Location</Text>
                    <Text style={{ color: '#fff', fontSize: 32, textAlign: 'center' }}>Inbounds</Text>
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
        gap: 8,
    },
    homePressable: {
        borderRadius: 14,
        backgroundColor: 'orange',
        height: 45,
        width: 45,
        overflow: 'scroll',
    },
    lightPressable: {
        backgroundColor: 'yellow',
        color: '#fff',
    },
    motionPressable: {
        backgroundColor: 'red',
        color: '#fff',
    },
    locationPressable: {
        backgroundColor: 'deepskyblue',
        color: '#fff',
    },
});

export default HomeScreen;

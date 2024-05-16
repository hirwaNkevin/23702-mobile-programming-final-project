/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native LocationScreen
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function LocationScreen(): React.JSX.Element {
    return (
        <ScrollView>
            <View style={[styles.container, styles.container]}>
                {/* <Pressable style={styles.locationPressable}>
                    <Text style={{ color: '#fff' }}>Location</Text>
                    <Text style={{ color: '#fff' }}>Inbounds</Text>
                </Pressable> */}
                <Text>Map</Text>
                <View>
                    <Text style={{ color: '#fff' }}>Inbounds of geofence</Text>
                </View>
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
    locationPressable: {
        backgroundColor: 'deepskyblue',
        color: '#fff',
        borderRadius: 20,
        height: 100,
        width: 100,
        overflow: 'scroll',
    },
    statusOfLocation: {
        width: '95%',
        margin: 'auto',
        borderRadius: 50,
        borderColor: 'deepskyblue',
    },
});

export default LocationScreen;

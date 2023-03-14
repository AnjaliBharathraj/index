import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'

export default function Screen2() {
    const position = new Animated.ValueXY({ x: 0, y: 0 });
    Animated.timing(position, {
        toValue: { x:200, y: 500 },
        // bounciness: 15,
        speed: 1,
        useNativeDriver: true,
        duration: 1500
    }).start()

    const rotate = position.x.interpolate({
        inputRange: [0, 200],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#ee82ee',
                    transform: [{ translateX: position.x },
                    { translateY: position.y },
                    { rotate: rotate }
                    ]
                }}>
            </Animated.View>
        </View >
    )
}

const styles = StyleSheet.create({
    // container: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: '#ee82ee',
    //     transform: [
    //         { translateX: position.x },
    //         { translateY: position.y }
    //     ]

    // }
})

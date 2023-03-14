import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native'
import React from 'react'

export default function Screen3() {
    const position = new Animated.ValueXY({ x: 0, y: 0 });

    const pan = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }] ),
        onPanResponderRelease: () => {
            Animated.spring(position, {
                toValue: { x: 0, y: 0 },
                useNativeDriver:true
            }).start()
        }
    })

    const rotate = position.x.interpolate({
        inputRange: [0, 200],
        outputRange: ['90deg', '320deg']
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View
                { ...pan.panHandlers }
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

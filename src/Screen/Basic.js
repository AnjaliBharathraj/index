import { Button, StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'

const position = new Animated.ValueXY({ x: 0, y: 0 });


const BasicAnimation = () => {
    Animated.spring(position, {
        toValue: { x: 100, y: 200 },
        bounciness: 15,
        speed: 1,
        useNativeDriver: true
    }).start()
    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={styles.container}>
            </Animated.View>

            {/* <Button title='Click Me' /> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: '#ee82ee',
        transform: [
            { translateX: position.x },
            { translateY: position.y }
        ]

    }
})
export default BasicAnimation; 
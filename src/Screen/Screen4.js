import { StyleSheet, Text, View, FlatList, TurboModuleRegistry, Animated } from 'react-native'
import React from 'react'
import { data } from '../data'

export default function Screen4() {
    const ScrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(ScrollY, 0, 45)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 45],
        outputRange: [0, -45]
    })

    return (
        <View style={{ paddingBottom: 35 }}>
            <Animated.View style={{
                transform: [{ translateY: translateY }],
                position: 'absolute',
                elevation: 5, zIndex: 2,
                top: 0, right: 0,
                left: 0, zIndex: 5,
                elevation: 4,
            }}>
                <View
                    style={{
                        backgroundColor: 'red',
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', }} >  Header  </Text>
                </View>

            </Animated.View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                onScroll={(e) => {
                    ScrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: '95%', alignSelf: 'center', backgroundColor: '#b4b4b4', marginVertical: 10, padding: 10 }}>
                            <Text style={styles.textStyle} > Name:  {item.username} </Text>
                            <Text style={styles.textStyle} >  Fullname:  {item.name} </Text>
                            <Text style={styles.textStyle} > Email:  {item.email} </Text>
                            <Text style={styles.textStyle} > WebCon. :  {item.website} </Text>
                            <Text style={styles.textStyle} > zipcode:   {item.address.zipcode} </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 17,
        fontWeight: '700',
        marginVertical: 5
    }
})
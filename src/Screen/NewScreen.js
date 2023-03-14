import { FlatList, InteractionManager, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NewScreen() {
    return (
        <View style={{ flex: 1, position: 'relative', backgroundColor: 'white' }}>
            <View style={[styles.upsideCircule, { borderColor: 'blue', left: '8%', zIndex:2}]}>
            </View>

            <View style={[styles.upsideCircule, { borderColor: 'black', left: '35%',zIndex:1 }]}>
            </View>

            <View style={[styles.upsideCircule, { borderColor: 'red', left: '62%', zIndex:0 }]}>
            </View>

            <View style={[styles.downSideCircule, { borderColor: 'yellow', left: '21%',zIndex:1 }]}>
            </View>

            <View style={[styles.downSideCircule, { borderColor: 'green', left: '49%', }]}>
            </View>
            
            {/* <FlatList
                data={[1, 1, 1, 1]}
                keyExtractor={(item, index) => index}
                renderItem={(item) => {
                    return (
                        <View style={{height:100, backgroundColor:"blue"}}>
                        </View>
                    )
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    upsideCircule: {
        height: 90,
        width: 90,
        borderWidth: 5,
        borderRadius: 50,
        position:  'absolute', //'relative',
         top: 40,
    },
    downSideCircule: {
        height: 90,
        width: 90,
        borderWidth: 5,
        borderRadius: 50,
        position:  'absolute', //'relative',
        top: 85 

    }
})
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
         <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
         <View style={[styles.card,styles.cardElevated]}>
            <Text>T0</Text>
        </View>
         <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
         <View style={[styles.card,styles.cardElevated]}>
            <Text>More ...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😌</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:70,
        marginBottom:20,
        textAlign:'center'
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:'#CAD5E2',
        borderRadius:10,
        margin:10
    },
    cardElevated:{
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:4
    },
    container:{
         flex:1,
        flexDirection:'row',
        padding:8
    }
})
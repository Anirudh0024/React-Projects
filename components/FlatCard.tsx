import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.card1]}>
            <Text>RED</Text>
        </View>
          <View style={[styles.card,styles.card2]}>
            <Text>GREEN</Text>
        </View>
          <View style={[styles.card,styles.card3]}>
            <Text>YELLO</Text>
        </View>
      </View>
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
    container:{
        flex:1,
        flexDirection:'row',
        padding:10
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,

    },
    card1:{
        backgroundColor:'#EF5354',
        borderRadius:10,
        margin:8
    }, card2:{
        backgroundColor:'#11994e',
        borderRadius:10,
        margin:8
    }, card3:{
        backgroundColor:'#e8e164',
        borderRadius:10,
        margin:8
    }
})
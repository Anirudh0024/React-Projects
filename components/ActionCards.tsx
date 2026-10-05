import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
function openWebsie(websiteLink:string){
    Linking.openURL(websiteLink)
}
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}> What's new in Javascript 21</Text>
        </View>
        <Image style={styles.cardImage}
        source={{
          uri:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600'
        }}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={2}>
            Just Like Every Year , Javascript brings in new feature . this year javascript is bringing 4 new features which are almost in production rollout. I wont'tbe wasting much more time directly
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text numberOfLines={2}>
            <TouchableOpacity style={styles.footerContainer} onPress={()=> openWebsie('https://chatgpt.com/c/6ab255de-ec50-83e8-a2fe-20d8b382869a')}>
              <Text style={styles.button}>
                Read more
              </Text>
            </TouchableOpacity>
          </Text>
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
card:{
  height:350,
  width:350,
  margin:16
},
elevatedCard:{
  backgroundColor:'#c18652',
  elevation:3,
  shadowOffset:{
    width:1,
    height:1
  },
  shadowColor:'#333',
  shadowOpacity:0.4,
  borderRadius:10
},
headingContainer:{
  height:40,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
headerText:{
  color:'#ffff',
  fontSize:16,
  fontWeight:600
},
cardImage:{
  height:200
},
cardBody:{
  padding:10
},
footerContainer:{
  flexDirection:'row',
  justifyContent:'center',
},
button:{
    backgroundColor:'#ffff',
    padding:8,
    borderRadius:10,
}
})
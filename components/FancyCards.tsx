import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places </Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image style={styles.cardImage}
        source={{
            uri: 'https://res.cloudinary.com/enchanting/q_80,f_auto,c_lfill,w_400,h_500/enchanting-web/2023/09/India-Goa-Beach.png'
        }}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Beach</Text>
              <Text style={styles.cardLabel}>Goa Beach</Text>
                <Text style={styles.cardDescription}>Goa Beach is famous for its golden sands, beautiful sunsets, clear waters, and lively atmosphere. It’s a popular destination for relaxing, water sports, and enjoying coastal views.
</Text>
                <Text style={styles.cardFooter}> 20 mins form airport</Text>
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
        width:380,
        height:380,
        borderRadius:12,
        marginVertical:12,
        marginHorizontal:16,
        marginBottom:24
    },
    cardElevated:{
        backgroundColor:'#CD9670',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        marginBottom:10,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        height:200,
        width:'100%'
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        fontSize:16,
        marginBottom:4
    
    },
    cardDescription:{
        fontSize:14,
        marginBottom:8
    },
    cardFooter:{}
})
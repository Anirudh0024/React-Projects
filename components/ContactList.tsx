import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
         {
    uid: 1,
    name: 'Anirudh Pratap Singh',
    status: 'A Hustler exploring things',
    imageUrl: 'https://www.loremfaces.net/96/id/1.jpg',
  },
  {
    uid: 2,
    name: 'Rahul Sharma',
    status: 'Learning and building every day',
    imageUrl: 'https://www.loremfaces.net/96/id/2.jpg',
  },
  {
    uid: 3,
    name: 'Arjun Mehta',
    status: 'Code. Coffee. Repeat.',
    imageUrl: 'https://www.loremfaces.net/96/id/3.jpg',
  },
  {
    uid: 4,
    name: 'Rohan Kapoor',
    status: 'Exploring new possibilities',
    imageUrl: 'https://www.loremfaces.net/96/id/4.jpg',
  },
  {
    uid: 5,
    name: 'Karan Verma',
    status: 'Dream big, work hard',
    imageUrl: 'https://www.loremfaces.net/96/id/5.jpg',
  },
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl}) =>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
               <View>
                 <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
               </View>
            </View>
        ))}
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
    container:{
        padding:20
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:6,
        backgroundColor:'#d7b5e6',
        padding:4,
        borderRadius:16
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:16,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#0000'
    },
    userStatus:{
        fontSize:12,
    }

})
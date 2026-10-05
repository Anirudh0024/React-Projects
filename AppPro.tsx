import React from 'react'

import{
View,
Text,
StyleSheet,
useColorScheme,
SafeAreaView
} from 'react-native'

function AppPro(){
    const isDarkMode=useColorScheme() ==='dark'
    
   return(
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText }>Hello World!</Text>
    </View>
    </SafeAreaView>
   )
}



const styles=StyleSheet.create({
    safeArea:{
        flex:1,
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
})
export default  AppPro;
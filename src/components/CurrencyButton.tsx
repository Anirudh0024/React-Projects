import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name:string;
    flag:string;
}>
// export default function CurrencyButton() {
//   return (
//     <View>
//       <Text>CurrencyButton</Text>
//     </View>
//   )
// }
const CurrencyButton =(props:CurrencyButtonProps)=>{
return(
    <View style={styles.buttonContainer}>
        <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.country}>{props.name}</Text>
    </View>
)
}

export default CurrencyButton
const styles = StyleSheet.create({
buttonContainer:{
    alignItems:'center'
},
country:{
    fontSize:14,
    color:'#2d3436',
},
flag:{
    fontSize:28,
    color:'#ffffff',
    marginBottom:4
}
})
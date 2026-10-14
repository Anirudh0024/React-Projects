import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import {setupPlayer,addTrack} from "../musicPlayerServices"
import { SafeAreaView } from 'react-native-safe-area-context'
export default function Moodify() {
  const [isPlayerReady, setIsPlayerReady]= useState(false)

async function setup(){
  let isSetup = await setupPlayer()
  if(isSetup){
    await addTrack()
  }

  setIsPlayerReady(isSetup)
}
  useEffect(() => {
   setup()
  }, [])
  
  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Testing seems okay</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
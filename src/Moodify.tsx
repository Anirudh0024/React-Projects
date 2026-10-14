import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import TrackPlayer from '@rntp/player';
import { setupPlayer, addTrack } from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function Moodify(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function initializePlayer() {
      try {
        const isSetup = await setupPlayer();

        if (!isSetup) {
          setIsPlayerReady(false);
          return;
        }

        await TrackPlayer.setVolume(1.0);

        const isTrackAdded = await addTrack();

        if (!isTrackAdded) {
          setIsPlayerReady(false);
          return;
        }

        setIsPlayerReady(true);
      } catch (error) {
        console.error('Player initialization failed:', error);
        setIsPlayerReady(false);
      }
    }

    initializePlayer();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" color="#1DB954" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <MusicPlayer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d23',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001d23',
  },
});

export default Moodify;
import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import TrackPlayer, { useIsPlaying } from '@rntp/player';

export default function ControlCenter() {
  const playing = useIsPlaying();

  const skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      console.error('Skip to next failed:', error);
    }
  };

  const skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      console.error('Skip to previous failed:', error);
    }
  };

  const togglePlayback = async () => {
    try {
      if (playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Playback failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={skipToPrevious}
        style={styles.sideButton}
        accessibilityLabel="Previous song"
      >
        <Text style={styles.sideIcon}>|◀</Text>
      </Pressable>

      <Pressable
        style={styles.playButton}
        onPress={togglePlayback}
        accessibilityLabel={playing ? 'Pause' : 'Play'}
      >
        <Text style={styles.playIcon}>
          {playing ? 'Ⅱ' : '▶'}
        </Text>
      </Pressable>

      <Pressable
        onPress={skipToNext}
        style={styles.sideButton}
        accessibilityLabel="Next song"
      >
        <Text style={styles.sideIcon}>▶|</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideButton: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 76,
    height: 76,
    marginHorizontal: 24,
    borderRadius: 38,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideIcon: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  playIcon: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
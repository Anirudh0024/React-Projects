import Slider from '@react-native-community/slider';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TrackPlayer, { useProgress } from '@rntp/player';

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return '0:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
};

const SongSlider = () => {
  const { position, duration } = useProgress();

  const handleSeek = async (value: number) => {
    try {
      await TrackPlayer.seekTo(value);
    } catch (error) {
      console.error('Failed to seek:', error);
    }
  };

  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={Math.max(duration, 1)}
        onSlidingComplete={handleSeek}
        thumbTintColor="#FFFFFF"
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#FFFFFF"
        style={styles.sliderContainer}
        disabled={duration <= 0}
      />

      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {formatTime(position)}
        </Text>

        <Text style={styles.time}>
          -{formatTime(Math.max(0, duration - position))}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
  },
  timeContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#FFFFFF',
  },
});

export default SongSlider;
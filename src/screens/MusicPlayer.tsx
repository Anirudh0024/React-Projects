import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useActiveMediaItem } from '@rntp/player';

import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const MusicPlayer = () => {
  const track = useActiveMediaItem();

  return (
    <View style={styles.container}>
      <View style={styles.albumContainer}>
        {track?.artworkUrl ? (
          <Image
            style={styles.albumArtImg}
            source={{ uri: String(track.artworkUrl) }}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.placeholder}>
            No artwork available
          </Text>
        )}
      </View>

      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
    paddingHorizontal: 20,
  },
  albumContainer: {
    width: 300,
    height: 300,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumArtImg: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholder: {
    color: '#ffffff',
  },
});

export default MusicPlayer;
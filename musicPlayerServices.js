import TrackPlayer, { PlayerCommand } from '@rntp/player';
import { playListData } from './src/constants';

let isSetup = false;
let isPlaylistLoaded = false;

export async function setupPlayer() {
  if (isSetup) {
    return true;
  }

  try {
    await TrackPlayer.setupPlayer({
      contentType: 'music',
      handleAudioBecomingNoisy: true,
    });

    isSetup = true;
    console.log('Player initialized successfully');

    return true;
  } catch (error) {
    console.error('Player setup failed:', error);
    return false;
  }
}

export async function addTrack() {
  try {
    if (!isSetup) {
      console.error('Player has not been initialized');
      return false;
    }

    if (isPlaylistLoaded) {
      return true;
    }

    await TrackPlayer.setMediaItems(playListData);

    await TrackPlayer.setCommands({
      capabilities: [
        PlayerCommand.PlayPause,
        PlayerCommand.Next,
        PlayerCommand.Previous,
      ],
    });

    isPlaylistLoaded = true;
    console.log('Playlist loaded successfully');

    return true;
  } catch (error) {
    console.error('Failed to load playlist:', error);
    return false;
  }
}
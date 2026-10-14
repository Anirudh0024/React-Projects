// export const currencyByRupee: Currency[] = [
//   {
//     name: 'DOLLAR',
//     value: 0.01039,
//     flag: '🇺🇸',
//     symbol: '$',
//   },
//   {
//     name: 'EURO',
//     value: 0.00923,
//     flag: '🇪🇺',
//     symbol: '€',
//   },
//   {
//     name: 'POUND',
//     value: 0.00785,
//     flag: '🇬🇧',
//     symbol: '£',
//   },
//   {
//     name: 'RUBLE',
//     value: 0.0115,
//     flag: '🇷🇺',
//     symbol: '₽',
//   },
//   {
//     name: 'AUS DOLLAR',
//     value: 0.01493,
//     flag: '🇦🇺',
//     symbol: 'A$',
//   },
//   {
//     name: 'CAN DOLLAR',
//     value: 0.01480,
//     flag: '🇨🇦',
//     symbol: 'C$',
//   },
//   {
//     name: 'YEN',
//     value: 1.64,
//     flag: '🇯🇵',
//     symbol: '¥',
//   },
//   {
//     name: 'DINAR',
//     value: 0.00312,
//     flag: '🇰🇼',
//     symbol: 'KD',
//   },
//   {
//     name: 'BITCOIN',
//     value: 0.00000012165,
//     flag: '🎰',
//     symbol: '₿',
//   },
// ];

// Here i am wo=riting constants for y music player app

import type { MediaItem } from '@rntp/player';

export const playListData: MediaItem[] = [
  {
    mediaId: '1',
    title: 'Dil Awara',
    artist: 'Diljeet',
    album: 'Champagne Talk',
    artworkUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJBuALMVxJv43_i3VD7qHLe3g47YCyX3N7u_2Caz4jw&s=10',
    url: require('./assets/audio/one.mp3'),
  },
  {
    mediaId: '2',
    title: 'Mashooka',
    artist: 'Pritam',
    album: 'Coktail',
    artworkUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflQHT-eCwj6uVLJX4yfvh7Hm_d_ujL_rSSRS6lm7NDg&s=10',
    url: require('./assets/audio/two.mp3'),
  },
  {
    mediaId: '3',
    title: 'Kalyaani',
    artist: 'Shreya Ghoshal',
    album: 'Kalyaani',
    artworkUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3nP1lxEE_DWOuTIKDf48yoLTVvKHs8c5G9HK-Zd-A&s=10',
    url: require('./assets/audio/three.mp3'),
  },
  {
    mediaId: '4',
    title: 'Jhol',
    artist: ' Maanu and Annural Khalid',
    album: 'Cooke Studio',
    artworkUrl:
      'https://i.scdn.co/image/ab67616d0000b273da7d1408f8e776063963572f',
    url: require('./assets/audio/four.mp3'),
  },
  {
    mediaId: '5',
    title: 'Tupka Takila',
    artist: 'Honey Singh',
    album: 'Pathaan',
    artworkUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAuvkmseWgX9gNeVU9H-NEUihlisRw14nRl9Rrp5HWw&s=10',
    url: require('./assets/audio/five.mp3'),
  },
];
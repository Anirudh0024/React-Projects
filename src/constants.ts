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

import { Track } from "react-native-track-player";

export const playListData: Track[] = [
    {
      id: 1,
      title: 'Maan Meri Jaan',
      artist: 'King',
      album: 'Champagne Talk',
      artwork:
        'https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg',
      url: require('./assets/audio/one.mp3'),
    },
    {
      id: 2,
      title: 'Raataan Lambiyan',
      artist: 'Tanishk Bagchi, Asees Kaur',
      album: 'Shershaah',
      artwork:
        'https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg',
      url: require('./assets/audio/two.mp3'),
    },
    {
      id: 3,
      title: 'Kesariya',
      artist: 'Arijit Singh, Amitabh Bhattacharya',
      album: 'Brahmastra',
      artwork:
        'https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg',
      url: require('./assets/audio/three.mp3'),
    },
    {
      id: 4,
      title: 'Title Track',
      artist: 'Arijit Singh, Parampara Tandon',
      album: 'Pal Pal Dil Ke Paas',
      artwork:
        'https://c.saavncdn.com/328/Pal-Pal-Dil-Ke-Paas-Hindi-2019-20200420150444-500x500.jpg',
      url: require('./assets/audio/four.mp3'),
    },
    {
      id: 5,
      title: 'Besharam Rang',
      artist: 'Vishal & Shekhar, Shilpa Rao',
      album: 'Pathaan',
      artwork:
        'https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-500x500.jpg',
      url: require('./assets/audio/five.mp3'),
    },
  ];
  
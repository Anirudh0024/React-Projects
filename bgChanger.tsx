import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function BgChanger() {
  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const [randomBackground, setRandomBackground] = useState(generateRandomColor);

  const generateColor = () => {
    setRandomBackground(generateRandomColor());
  };

  return (
    <>
      <StatusBar barStyle="light-content" />

      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});

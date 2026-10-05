import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = {
  imageUrl: ImageSourcePropType;
};

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function RollTheDice() {
  const [diceImage, setDiceImage] =
    useState<ImageSourcePropType>(DiceOne);

  const [diceNumber, setDiceNumber] = useState(1);

  // Animation values
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const rollDiceOnTap = () => {
    // Generate random number from 1 to 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Update result
    setDiceNumber(randomNumber);

    // Select dice image
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;

      case 2:
        setDiceImage(DiceTwo);
        break;

      case 3:
        setDiceImage(DiceThree);
        break;

      case 4:
        setDiceImage(DiceFour);
        break;

      case 5:
        setDiceImage(DiceFive);
        break;

      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    // Reset animation values
    rotateAnim.setValue(0);
    scaleAnim.setValue(1);

    // Start animations
    Animated.parallel([
      // Rotation animation
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),

      // Bounce animation
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),

        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  // Convert animation value into degrees
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Roll The Dice</Text>

      <Text style={styles.subtitle}>
        Tap the button and test your luck!
      </Text>

      {/* Animated Dice */}
      <Animated.View
        style={{
          transform: [
            {rotate},
            {scale: scaleAnim},
          ],
        }}>
        <Dice imageUrl={diceImage} />
      </Animated.View>

      {/* Result */}
      <Text style={styles.result}>
        You rolled: {diceNumber}
      </Text>

      {/* Roll Button */}
      <Pressable
        style={({pressed}) => [
          styles.rollButton,
          pressed && styles.rollButtonPressed,
        ]}
        onPress={rollDiceOnTap}>
        <Text style={styles.rollButtonText}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2D2D2D',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    marginBottom: 40,
  },

  diceContainer: {
    marginBottom: 25,
  },

  diceImage: {
    width: 200,
    height: 200,
  },

  result: {
    fontSize: 20,
    fontWeight: '700',
    color: '#444',
    marginBottom: 30,
  },

  rollButton: {
    backgroundColor: '#6A1B4D',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },

  rollButtonPressed: {
    transform: [{scale: 0.95}],
    backgroundColor: '#4E1238',
  },

  rollButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
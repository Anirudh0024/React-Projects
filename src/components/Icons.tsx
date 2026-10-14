import React from 'react';
import {StyleSheet, Text} from 'react-native';

type IconsProps = {
  name: string;
};

const Icons = ({name}: IconsProps) => {
  if (name === 'cross') {
    return <Text style={styles.cross}>✕</Text>;
  }

  if (name === 'circle') {
    return <Text style={styles.circle}>○</Text>;
  }

  return <Text style={styles.pencil}>✎</Text>;
};

const styles = StyleSheet.create({
  cross: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#E74C3C',
  },

  circle: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#3498DB',
  },

  pencil: {
    fontSize: 35,
    color: '#999999',
  },
});

export default Icons;
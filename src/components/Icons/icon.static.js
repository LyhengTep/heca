import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {HText} from '../HText/htext';

export const IconStatic = ({source, style, title}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.status}></View>
      <Image source={source} style={styles.img} />
      {title && <HText style={styles.text}>{title}</HText>}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 35,
    height: 35,
  },
  container: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 8,
    textAlign: 'center',
    width: '70%',
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2B9348',
  },
});

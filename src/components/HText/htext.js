import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const HText = ({children, white, h1, style}) => {
  return (
    <Text
      style={[
        {
          color: (white && 'white') || 'black',
          fontSize: h1 ? 30 : 16,
          fontWeight: h1 ? 'bold' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({});

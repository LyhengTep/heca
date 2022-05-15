import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {HText} from '../HText/htext';
import {Icons} from '../Icons/icons';

export const Button = ({title, children, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {children ? (
        children
      ) : (
        <>
          <HText white>Let's go</HText>
          <Icons.Ionic
            name={Platform.select({
              ios: 'ios-arrow-forward',
              android: 'ios-arrow-forward',
            })}
            color={'white'}
            size={20}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
  },
});

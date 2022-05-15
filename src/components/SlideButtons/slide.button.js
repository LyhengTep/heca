import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {IMAGES} from '../../configs/staticImages';
import {IconStatic} from '../Icons/icon.static';
import {SwitchButton} from '../SwitchButton/switch.button';

export const SlideButton = () => {
  return (
    <View style={styles.container}>
      <View>
        <IconStatic source={IMAGES.S_TV} title="Smart TV" />
      </View>
      <SwitchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: 130,
    backgroundColor: 'white',
    borderRadius: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

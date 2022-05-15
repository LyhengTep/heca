import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {HText} from '../HText/htext';
import {BlurViewContainer} from '../BlurViewContainer/blurview.container';
export const TemparaturePipe = ({children}) => {
  return (
    <BlurViewContainer>
      {/* <BlurView
        blurType="light"
        reducedTransparencyFallbackColor="grey"
        style={styles.container}>
        <HText>30</HText>
      </BlurView> */}
    </BlurViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

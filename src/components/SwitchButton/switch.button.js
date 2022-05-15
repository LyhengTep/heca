import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {HText} from '../HText/htext';

export const SwitchButton = ({onPress}) => {
  const [active, setActive] = React.useState(true);

  return (
    <TouchableOpacity
      onPress={() => setActive(!active)}
      style={[styles.container, {backgroundColor: active ? '#2B9348' : 'red'}]}>
      {active ? (
        <>
          <View style={styles.circle}></View>
          <HText white>On</HText>
        </>
      ) : (
        <>
          <HText white>Off</HText>
          <View style={styles.circle}></View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 70,
    borderRadius: 40,
    backgroundColor: '#2B9348',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: 'white',
  },
});

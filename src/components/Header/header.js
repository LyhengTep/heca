import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../Button/button';
import {HText} from '../HText/htext';
import {Icons} from '../Icons/icons';

export const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <HText h1 white>
          Heca
        </HText>
        <Button>
          <Icons.Ionic name="menu" size={40} color="white" />
        </Button>
      </View>
      <Button style={styles.btnStyle}>
        <Icons.Ionic name="ios-arrow-back-sharp" size={20} color="white" />
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  btnStyle: {
    // backgroundColor: 'green',
    width: '20%',
    marginTop: 10,
  },
});

import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import {Header} from '../../components/Header/header';
import {HText} from '../../components/HText/htext';
import {SlideButtons} from '../../components/SlideButtons/slide.buttons';
import {TemparaturePipe} from '../../components/TeparaturePipe/temparature.pipe';
import {IMAGES} from '../../configs/staticImages';

const HomeScreen = () => {
  return (
    <ImageBackground source={IMAGES.HOME_BG} style={styles.container}>
      <View>
        <Header />
        <SlideButtons />
        <View style={styles.subHeader}>
          <HText white h1 style={styles.subHeaderText}>
            Electricity Consumption
          </HText>
        </View>
        <TemparaturePipe />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  subHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    minHeight: 80,
    backgroundColor: 'black',
  },
  subHeaderText: {
    fontSize: 18,
  },
});

export default HomeScreen;

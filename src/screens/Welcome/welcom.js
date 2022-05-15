import React from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';
import {IMAGES} from '../../configs/staticImages';
import LinearGradient from 'react-native-linear-gradient';
import {HText} from '../../components/HText/htext';
import {BlurView} from '@react-native-community/blur';
import {Button} from '../../components/Button/button';
import {useNavigation} from '@react-navigation/native';
import {BlurViewContainer} from '../../components/BlurViewContainer/blurview.container';
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaView style={styles.container}>
    <ImageBackground source={IMAGES.BG} style={styles.imgContainer}>
      {/* <LinearGradient
        colors={['#000000', '#2B9348', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient> */}
      <BlurViewContainer
        style={{
          height: 320,
        }}>
        <BlurView
          blurType={Platform.select({
            ios: 'chromeMaterialDark',
            android: 'dark',
          })}
          style={styles.blurView}
          // blurAmount={50}
          reducedTransparencyFallbackColor="white"></BlurView>
        <View
          style={{
            width: 270,
            height: 320,
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            paddingLeft: 22,
            // backgroundColor: 'green',
          }}>
          <HText white h1 style={{width: '80%'}}>
            Welcom to HECA
          </HText>
          <HText white>hOmE Elecitricity Control Application</HText>
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}></Button>
        </View>
      </BlurViewContainer>
    </ImageBackground>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
  },
  imgContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 150,
  },
  blurView: {
    height: 320,
    width: 270,
    paddingHorizontal: 10,
    paddingLeft: 22,
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 20,
    borderBottomStartRadius: 100,
    position: 'absolute',
    left: -20,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default WelcomeScreen;

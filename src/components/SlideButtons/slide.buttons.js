import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {SlideButton} from './slide.button';
import Carousel from 'react-native-snap-carousel';
import {scrollInterpolator, animatedStyles} from '../../utils/animation';
const data = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
];
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
export const SlideButtons = () => {
  const [data, setData] = useState([
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
  ]);

  const renderSlides = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SlideButton />
      </View>
    );
  };

  const ref = React.useRef();
  return (
    <View style={{paddingHorizontal: 10}}>
      <Carousel
        layout={'default'}
        ref={ref}
        data={data}
        sliderWidth={SLIDER_WIDTH - 20}
        itemWidth={150}
        inactiveSlideShift={0}
        loop={true}
        // hasParallaxImages={true}
        inactiveSlideScale={0.7}
        activeSlideAlignment="center"
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        // contentContainerCustomStyle={{paddingHorizontal: 20}}
        // containerCustomStyle={{paddingHorizontal: 50}}
        renderItem={renderSlides}
        // onSnapToItem={index => this.setState({activeIndex: index})}
      />
    </View>
  );
  return;
};

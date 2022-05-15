import React, {useState, useEffect} from 'react';
import {Animated, View} from 'react-native';

export const BlurViewContainer = ({entering = 'FadeIn', children, style}) => {
  const [blurActive, setBlurActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurActive(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!blurActive) return null;

  return <View style={style}>{children}</View>;
};

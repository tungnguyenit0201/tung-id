import React, {useRef, useEffect} from 'react';
import Svg, {
  Mask,
  Path,
  G,
  Circle,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
import {Animated, Easing} from 'react-native';

function Loading(props) {
  const spinValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Animated.Image
      style={{transform: [{rotate: spin}], width: 40, height: 40}}
      source={require('../images/loading.png')}
    />
  );
}

export default Loading;

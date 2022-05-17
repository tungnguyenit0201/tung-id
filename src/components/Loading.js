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
import {Animated} from 'react-native';

function Loading(props) {
  const spinValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={120}
        height={120}>
        <Path
          d="M120 60c0 33.137-26.863 60-60 60S0 93.137 0 60 26.863 0 60 0s60 26.863 60 60zm-98.87 0c0 21.467 17.403 38.87 38.87 38.87S98.87 81.467 98.87 60 81.467 21.13 60 21.13 21.13 38.533 21.13 60z"
          fill="#C4C4C4"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill="url(#paint0_angular_24_8787)"
          d="M-7.88367 -7.88306H127.88233V127.88293999999999H-7.88367z"
        />
        <Circle cx={60.81} cy={109.848} r={10.7397} fill="#EB7A23" />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_angular_24_8787"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 60) scale(67.8832)">
          <Stop stopColor="#EB7A23" />
          <Stop offset={1} stopColor="#EB7A23" stopOpacity={0} />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default Loading;

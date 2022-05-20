import React, {useRef, useEffect, useState} from 'react';

import {Animated, Easing, View, Text} from 'react-native';
import {conmonApi} from '../services/hook';
import {NativeModules} from 'react-native';

function Loading(props) {
  const {clientAccessToken, loading} = conmonApi();
  const spinValue = useRef(new Animated.Value(0)).current;
  const [token, setToken] = useState();

  const onClientAccessToken = async () => {
    // let result = await clientAccessToken();
    // setToken(result?.data?.access_token);

    let result = await NativeModules.SecretManagement.fecthApi(
      'GET',
      '/trings',
      (err, res) => setToken(res),
    );
    console.log('result?.data :>> ', result);
    // setToken(result);
  };
  useEffect(() => {
    onClientAccessToken();
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
  console.log('token :>> ', token);
  return (
    <View>
      {loading ? (
        <Animated.Image
          style={{transform: [{rotate: spin}], width: 40, height: 40}}
          source={require('../images/loading.png')}
        />
      ) : (
        <Text>{token}</Text>
      )}
    </View>
  );
}

export default Loading;

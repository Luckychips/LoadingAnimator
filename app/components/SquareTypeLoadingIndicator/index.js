import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components';

const Loader = styled.View`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

const Square = styled.View`
  position: absolute;
  background: #000000;
  width: 22px;
  height: 22px;
  z-index: 1;
`;

const RemoverTop = styled.View`
  width: 15px;
  height: 2px;
  background: #ffffff;
  position: absolute;
  top: -2px;
  z-index: 2;
`;

const RemoverBottom = styled.View`
  width: 15px;
  height: 2px;
  background: #ffffff;
  position: absolute;
  bottom: -2px;
  z-index: 2;
`;

const RemoverLeft = styled.View`
  width: 2px;
  height: 15px;
  background: #ffffff;
  position: absolute;
  left: -2px;
  z-index: 2;
`;

const RemoverRight = styled.View`
  width: 2px;
  height: 15px;
  background: #ffffff;
  position: absolute;
  right: -2px;
  z-index: 2;
`;

const RotateSquare = props => {
  const [degree, setDegree] = useState(new Animated.Value(0));
  const [scale, setScale] = useState(new Animated.Value(0));
  useEffect(() => {
    const _animate = Animated.sequence([
      Animated.delay(200),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(degree, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 300,
      }),
      Animated.delay(200),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(degree, {
        toValue: 2,
        duration: 300,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 300,
      }),
      Animated.delay(200),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(degree, {
        toValue: 3,
        duration: 300,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 300,
      }),
      Animated.delay(200),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(degree, {
        toValue: 4,
        duration: 300,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 300,
      }),
    ]);

    _animate.start(event => {
      if (event.finished) {
        setDegree(new Animated.Value(0));
        setScale(new Animated.Value(0));
      }
    });

    return () => {
      _animate.stop();
    };
  }, [degree, scale]);

  const defaultStyles = {
    width: 44,
    height: 44,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Animated.View
      style={[
        defaultStyles,
        {
          width: scale.interpolate({
            inputRange: [0, 1],
            outputRange: [44, 60],
          }),
          height: scale.interpolate({
            inputRange: [0, 1],
            outputRange: [44, 60],
          }),
        },
        {
          transform: [
            {
              rotate: degree.interpolate({
                inputRange: [0, 1, 2, 3, 4],
                outputRange: ['360deg', '270deg', '180deg', '90deg', '0deg'],
              }),
            },
          ],
        },
      ]}>
      <RemoverTop scale={scale} />
      <RemoverBottom scale={scale} />
      <RemoverLeft scale={scale} />
      <RemoverRight scale={scale} />
    </Animated.View>
  );
};

const LoadingIndicator = () => {
  return (
    <Loader>
      <RotateSquare loading />
      <Square />
    </Loader>
  );
};

export default LoadingIndicator;

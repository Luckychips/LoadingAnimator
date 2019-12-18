import React, {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

const SmallCircleIndicator = props => {
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  useEffect(() => {
    const _animate = Animated.timing(rotateValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    _animate.start(event => {
      if (event.finished) {
        setRotateValue(new Animated.Value(0));
      }
    });

    return () => {
      _animate.stop();
    };
  }, [rotateValue]);
  return (
    <Animated.View
      style={[
        {
          width: props.size ? props.size : 55,
          height: props.size ? props.size : 55,
          transform: [
            {
              rotate: rotateValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}>
      <ProgressCircle
        style={{height: props.size ? props.size : 55}}
        progress={0.6}
        progressColor={props.progressColor ? props.progressColor : '#1f1f1f'}
        backgroundColor={
          props.backgroundColor ? props.backgroundColor : '#ffffff'
        }
      />
    </Animated.View>
  );
};

export default SmallCircleIndicator;

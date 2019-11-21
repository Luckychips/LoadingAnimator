import React, {Fragment, useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components';
const Clicker = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: powderblue;
  align-items: center;
  justify-content: center;
`;
const ClickerText = styled.Text``;
const FillProgressBar = styled.View`
  flex-direction: row;
`;
const SpringProgressBar = () => {
  const [createProgressBar, setCreateProgressBar] = useState(new Animated.Value(0));
  const [fillProgressBar, setFillProgressBar] = useState(new Animated.Value(0));
  const [fillColor, setFillColor] = useState(new Animated.Value(0));
  const [hiddenProgressBar, setHiddenProgressBar] = useState(new Animated.Value(0));
  const load = () => {
    const _animate = Animated.sequence([
      Animated.spring(createProgressBar, {
        toValue: 1,
        tension: 25,
        friction: 2,
      }),
      Animated.timing(fillProgressBar, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(hiddenProgressBar, {
        toValue: 1,
        duration: 1,
      }),
      Animated.timing(fillColor, {
        toValue: 1,
        duration: 0,
      }),
      Animated.spring(createProgressBar, {
        toValue: 0,
        tension: 25,
        friction: 2,
      }),
    ]);

    _animate.start(event => {
      if (event.finished) {
        setCreateProgressBar(new Animated.Value(0));
        setFillProgressBar(new Animated.Value(0));
        setFillColor(new Animated.Value(0));
        setHiddenProgressBar(new Animated.Value(0));
      }
    });
  };
  return (
    <Fragment>
      <Clicker onPress={load}>
        <ClickerText>click!</ClickerText>
      </Clicker>
      <Animated.View
        style={{
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: fillColor.interpolate({
            inputRange: [0, 1],
            outputRange: ['#696969', '#fae56d'],
          }),
          borderRadius: 50,
          width: createProgressBar.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 200],
          }),
          height: createProgressBar.interpolate({
            inputRange: [0, 1],
            outputRange: [40, 15],
          }),
        }}>
        {/*<Icon name={'check_circle'} size={30} color={'#ffaffb'} />*/}
      </Animated.View>
      <FillProgressBar>
        <Animated.View
          style={{
            backgroundColor: '#fae56d',
            width: fillProgressBar.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100],
            }),
            height: hiddenProgressBar.interpolate({
              inputRange: [0, 1],
              outputRange: [15, 0],
            }),
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            position: 'absolute',
            top: -15,
            right: 0,
          }}
        />
        <Animated.View
          style={{
            backgroundColor: '#fae56d',
            width: fillProgressBar.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100],
            }),
            height: hiddenProgressBar.interpolate({
              inputRange: [0, 1],
              outputRange: [15, 0],
            }),
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            position: 'absolute',
            top: -15,
            left: 0,
          }}
        />
      </FillProgressBar>
    </Fragment>
  );
};

export default SpringProgressBar;

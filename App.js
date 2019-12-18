/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import LoadingIndicator from './app/components/SquareTypeLoadingIndicator';
import SpringProgressBar from './app/components/SpringProgressBar';
import BasicCircleIndicator from './app/components/BasicCircleIndicator';
import SmallCircleIndicator from './app/components/SmallCircleIndicator';

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App: () => React$Node = () => {
  return (
    <Centered>
      {/*<LoadingIndicator />*/}
      {/*<SpringProgressBar />*/}
      {/*<BasicCircleIndicator*/}
      {/*  isCenter*/}
      {/*  backgroundColor={'#abffbb'}*/}
      {/*  progressColor={'#ffbbab'}*/}
      {/*/>*/}
      <SmallCircleIndicator size={25} progressColor={'#ffbbbb'} />
    </Centered>
  );
};

export default App;

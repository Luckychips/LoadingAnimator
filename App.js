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

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App: () => React$Node = () => {
  return (
    <Centered>
      {/*<LoadingIndicator />*/}
      <SpringProgressBar />
    </Centered>
  );
};

export default App;

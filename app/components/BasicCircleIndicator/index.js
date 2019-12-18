import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import SmallCircleIndicator from '../SmallCircleIndicator';
const {width, height} = Dimensions.get('window');
const LoadingContainer = styled.View`
  height: ${height}px;
  padding-top: ${props => props.paddingTop}px;
  justify-content: ${props => (props.alignCenter ? 'center' : 'flex-start')};
  align-items: center;
  background-color: #ffffff;
`;
const BasicCircleIndicator = props => {
  const paddingTop = () => {
    if (props.isCenter) {
      return 0;
    } else {
      if (props.paddingTop) {
        return props.paddingTop;
      } else {
        return 100;
      }
    }
  };
  return (
    <LoadingContainer alignCenter={props.isCenter} paddingTop={paddingTop()}>
      <SmallCircleIndicator
        size={props.size}
        progressColor={props.progressColor}
        backgroundColor={props.backgroundColor}
      />
    </LoadingContainer>
  );
};

export default BasicCircleIndicator;

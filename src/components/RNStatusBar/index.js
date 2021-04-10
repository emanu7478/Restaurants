import React from 'react';
import {StatusBar} from 'react-native';
import {withTheme} from 'react-native-paper';
import * as constant from '../../constants';

const RNStatusBar = (props) => {
  const {backgroundColor} = props;
  return (
    <StatusBar
      backgroundColor={constant.PRIMARY_COLOR}
      barStyle="dark-content"
    />
  );
};

export default withTheme(RNStatusBar);

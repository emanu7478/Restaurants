import React from 'react';
import {View} from 'react-native';
import RNStatusBar from './components/RNStatusBar';
import RNTextInput from './components/RNTextInput';

function SufficioIndex() {
  return (
    <View>
      <RNStatusBar />
      <RNTextInput placeholder="haai" />
    </View>
  );
}

export default SufficioIndex;

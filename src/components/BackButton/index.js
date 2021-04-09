import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {PRIMARY_COLOR} from '../../constants';

function BackButton(props) {
  const {onPress, backgroundColor, iconColor, marginTop, height, width} = props;

  return (
    <TouchableOpacity
      style={[
        style.container,
        {
          backgroundColor: PRIMARY_COLOR,
          marginTop: marginTop ? marginTop : 15,
          height: height ? height : 38,
          width: width ? width : 38,
        },
      ]}
      onPress={onPress}>
      <Icon
        name="chevron-small-left"
        type="entypo"
        // color={colors.dark ? PRIMARY_COLOR : iconColor}
        size={26}
      />
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  container: {
    elevation: 3,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
  },
});

export default BackButton;

import React from 'react';
import {View, TextInput, StyleSheet, useWindowDimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {withTheme} from 'react-native-paper';
import * as constant from '../../constants';

const RNTextInput = (props) => {
  const {width} = useWindowDimensions();
  const {
    placeholder,
    value,
    icon,
    iconName,
    iconType,
    inputwidth,
    backgroundColor,
    height,
    onChangeText,
    ...extraProps
  } = props;
  // const colors = props.theme;
  return (
    <View
      style={[
        style.container,
        {
          width: inputwidth ? inputwidth : width - 35,
          backgroundColor: constant.PRIMARY_COLOR,
          height: height ? height : 55,
        },
      ]}>
      {icon === true ? (
        <Icon
          name={iconName}
          type={iconType}
          size={20}
          marginRight={8}
          // color={colors.dark ? constant.PRIMARY_COLOR : '#696969'}
        />
      ) : null}
      <TextInput
        style={{flex: 1}}
        placeholder={placeholder}
        // placeholderTextColor={colors.dark ? constant.PRIMARY_COLOR : '#696969'}
        value={value}
        onChangeText={onChangeText}
        {...extraProps}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 0.5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default withTheme(RNTextInput);

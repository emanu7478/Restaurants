import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import * as constant from '../../constants';

function EmptyDataContainer(props) {
  const {title, desc, image} = props;
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Image style={style.image} source={image} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  innerContainer: {
    height: 100,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constant.GREY_COLOR,
    elevation: 1,
    marginBottom: 10,
  },
  image: {
    height: 70,
    width: 70,
  },
  textContainer: {
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#606060',
    fontSize: 16,
  },
  desc: {
    color: '#d9d9d9',
    textAlign: 'center',
  },
});

export default EmptyDataContainer;

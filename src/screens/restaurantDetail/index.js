import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import moment from 'moment';
import {Icon, Rating} from 'react-native-elements';
import RNStatusBar from '../../components/RNStatusBar';
import * as constant from '../../constants';
import style from './style';
import BackButton from '../../components/BackButton';

function RestaurantDetail() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();

  const renderFlatlistHeader = () => {
    return (
      <View>
        <RNStatusBar />
        <View>
          <Image
            style={{...style.image, width: width}}
            source={require('../../assets/Images/restaurant.jpeg')}
          />
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={style.flatlistHeaderContainer}>
          <View style={style.restaurantNameContainer}>
            <Text style={style.restaurantTitle}>{route.params.data.name}</Text>
            <Text style={style.restaurantAddress}>
              {route.params.data.address}
            </Text>
          </View>
          <View style={style.restaurantDetailContainer}>
            <View style={style.restaurantDetailInnerContainer}>
              <View style={style.restaurantDataContainer}>
                <Text style={style.restaurantDetailHeader}>Opening Hour</Text>
                <Text style={style.restaurantDetailData}>
                  {route.params.data.operating_hours[moment().format('dddd')]}{' '}
                  (Today)
                </Text>
              </View>
              <View>
                <Text style={style.restaurantDetailHeader}>Cuisine</Text>
                <Text style={style.restaurantDetailData}>
                  {route.params.data.cuisine_type}
                </Text>
              </View>
            </View>
            <View style={style.restaurantDetailInnerContainer}>
              <View>
                <Text style={style.restaurantDetailHeader}>Neighborhood</Text>
                <Text style={style.restaurantDetailData}>
                  {route.params.data.neighborhood}
                </Text>
              </View>
              <View>
                <Text style={style.restaurantDetailHeader}>Reviews</Text>
                <Text style={style.restaurantDetailData}>
                  {route.params.data.reviews.length}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={style.titleText}>Reviews</Text>
      </View>
    );
  };

  const renderReviews = ({item}) => {
    return (
      <View style={style.reviewContainerWrapper}>
        <Image
          style={style.reviewImage}
          source={require('../../assets/Images/profile.png')}
        />
        <View>
          <View style={style.reviewNameContainer}>
            <View>
              <Text style={style.reviewName}>{item.name}</Text>
              <Rating
                ratingCount={5}
                startingValue={item.rating}
                readonly
                ratingColor="#5b50f2"
                imageSize={13}
              />
            </View>
          </View>
          <View
            style={{
              ...style.reviewContainer,
              width: width - 80,
            }}>
            <Text style={style.reviewText}>{item.comments}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View>
        <FlatList
          // contentContainerStyle={{alignItems: 'center'}}
          ListHeaderComponent={renderFlatlistHeader}
          data={route.params.data.reviews}
          renderItem={renderReviews}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name.toString()}
        />
      </View>
    </View>
  );
}

export default RestaurantDetail;

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, useWindowDimensions, View} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';
import {Icon, Rating} from 'react-native-elements';
import RNStatusBar from '../../components/RNStatusBar';
import style from './style';
import BackButton from '../../components/BackButton';
import * as constant from '../../constants';

function RestaurantDetail(props) {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();
  const [restaurantDetail, updateRestaurantDetail] = useState([]);
  const [restaurantReviews, updateRestaurantReviews] = useState([]);
  const [restaurantWrkngHours, setRestaurantWrkngHours] = useState([]);
  const [restaurantReviewsRate, setRestaurantReviewsRate] = useState(0);

  useEffect(() => {
    props.restaurants.map((item) => {
      if (item.id === route.params.data) {
        updateRestaurantDetail(item);
        {
          let tempReview = 0;
          item.reviews.map((review) => {
            tempReview = tempReview + review.rating;
          });
          setRestaurantReviewsRate(
            (tempReview / item.reviews.length).toFixed(1),
          );
        }
        updateRestaurantReviews(item.reviews);
        setRestaurantWrkngHours(item.operating_hours[moment().format('dddd')]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <View>
              <Text style={style.restaurantTitle}>{restaurantDetail.name}</Text>
              <Text style={style.restaurantAddress}>
                {restaurantDetail.address}
              </Text>
            </View>
            <View style={style.restaurantOverallRatingContainer}>
              <Text style={style.restaurantOverallRating}>
                {restaurantReviewsRate}
              </Text>
              <Icon name="star" color={constant.PRIMARY_COLOR} size={10} />
            </View>
          </View>
          <View style={style.restaurantDetailContainer}>
            <View style={style.restaurantDetailInnerContainer}>
              <View style={style.restaurantDataContainer}>
                <Text style={style.restaurantDetailHeader}>Opening Hour</Text>
                <Text style={style.restaurantDetailData}>
                  {restaurantWrkngHours} (Today)
                </Text>
              </View>
              <View>
                <Text style={style.restaurantDetailHeader}>Cuisine</Text>
                <Text style={style.restaurantDetailData}>
                  {restaurantDetail.cuisine_type}
                </Text>
              </View>
            </View>
            <View style={style.restaurantDetailInnerContainer}>
              <View>
                <Text style={style.restaurantDetailHeader}>Neighborhood</Text>
                <Text style={style.restaurantDetailData}>
                  {restaurantDetail.neighborhood}
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
    // <SafeAreaView style={{flex: 1}}>
    <View style={style.container}>
      <View>
        <FlatList
          // contentContainerStyle={{alignItems: 'center'}}
          ListHeaderComponent={renderFlatlistHeader}
          data={restaurantReviews}
          renderItem={renderReviews}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name.toString()}
        />
      </View>
    </View>
    // </SafeAreaView>
  );
}

const MapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(MapStateToProps)(RestaurantDetail);

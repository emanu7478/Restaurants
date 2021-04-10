import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableHighlight,
  useWindowDimensions,
  View,
  Image,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import RNStatusBar from '../../components/RNStatusBar';
import style from './style';
import RNGooglePlaceSearch from '../../components/RNGooglePlaceSearch';
import EmptyDataContainer from '../../components/EmptyDataContainer';

function Home(props) {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [restaurants, updateRestaurants] = useState([]);
  const [filteredRestaurants, updateFilteredRestaurants] = useState([]);
  const [restaurantFilterMode, setRestaurantFilterMode] = useState(false);

  // Initial Mounting
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Initial function when mounting
  const fetch = () => {
    let tempRestArr = [];
    props.restaurants.map((item) => {
      let tempRestaurantRating = 0;
      item.reviews.map((review) => {
        tempRestaurantRating = tempRestaurantRating + review.rating;
      });
      tempRestaurantRating = (
        tempRestaurantRating / item.reviews.length
      ).toFixed(1);
      tempRestArr.push({
        id: item.id,
        name: item.name,
        neighborhood: item.neighborhood,
        photograph: item.photograph,
        address: item.address,
        latlng: item.latlng,
        cuisine_type: item.cuisine_type,
        operating_hours: item.operating_hours,
        overallRating: tempRestaurantRating,
      });
    });
    updateRestaurants(tempRestArr);
  };

  const getData = async (data) => {
    setRestaurantFilterMode(true);
    IterateRestaurants(data.lat, data.lon);
  };

  const IterateRestaurants = async (lat, long) => {
    let tempFilteredResult = [];
    restaurants.map((item) => {
      console.log(
        'lat1 - ' +
          lat +
          ' - lon1 - ' +
          long +
          '- lat2 - ' +
          item.latlng.lat +
          '- lon 2 -' +
          item.latlng.lng,
      );
      let dist = calculateDistance(
        lat,
        long,
        item.latlng.lat,
        item.latlng.lng,
        'K',
      );
      console.warn(dist);

      if (dist <= 5) {
        tempFilteredResult.push(item);
      }
    });
    updateFilteredRestaurants(tempFilteredResult);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === 'K') {
        dist = dist * 1.609344;
      }
      if (unit === 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };

  const onClear = async () => {
    setRestaurantFilterMode(false);
    updateFilteredRestaurants([]);
  };

  const renderRestaurantsHeader = () => {
    return <RNGooglePlaceSearch onPress={getData} onClear={onClear} />;
  };

  const renderRestaurants = ({item}) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() =>
          navigation.navigate('RestaurantDetail', {data: item.id})
        }>
        <View style={{...style.restaurantContainer, width: width - 15}}>
          <View>
            <Image
              style={style.restaurantImage}
              source={require('../../assets/Images/restaurant.jpeg')}
            />
            <View style={style.cuisineTypeContainer}>
              <Text style={style.cuisineType}>{item.cuisine_type}</Text>
            </View>
          </View>
          <View style={style.restaurantDetailContainer}>
            <View style={style.restaurantDetailInnerContainer}>
              <View style={style.restaurantNameRateContainer}>
                <Text style={style.restaurantName}>{item.name}</Text>
                <View style={style.restaurantRateContainer}>
                  <Icon name="star" color="#db0948" marginRight={3} size={20} />
                  <View style={style.restaurantRateInnerContainer}>
                    <Text style={style.restaurantActiveRate}>
                      {item.overallRating}
                    </Text>
                    <Text style={style.restaurantTotalRate}>/5</Text>
                  </View>
                </View>
              </View>
              <View style={style.restaurantAddressContainer}>
                <Text style={style.restaurantAddress}>{item.address}</Text>
                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="star" marginRight={3} size={20} />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: '#2e2e2e',
                        fontSize: 13,
                        fontWeight: 'bold',
                      }}>
                      3.8
                    </Text>
                    <Text style={{color: '#d9d9d9'}}>/5</Text>
                  </View>
                </View> */}
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={style.container}>
      <RNStatusBar />
      {restaurantFilterMode === true ? (
        <View style={style.viewContainer}>
          {renderRestaurantsHeader()}
          {filteredRestaurants.length !== 0 ? (
            <View style={style.flatlistContainer}>
              <FlatList
                contentContainerStyle={style.flatlistContentContainer}
                // ListHeaderComponent={renderRestaurantsHeader}
                data={filteredRestaurants}
                renderItem={renderRestaurants}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          ) : (
            <EmptyDataContainer
              image={require('../../assets/Images/search.png')}
              title="Ooh!!! No restaurants found"
              desc="Try adjusting your search to find what you're looking for."
            />
          )}
        </View>
      ) : (
        <View style={style.viewContainer}>
          {renderRestaurantsHeader()}
          {restaurants.length !== 0 ? (
            <View style={style.flatlistContainer}>
              <FlatList
                contentContainerStyle={style.flatlistContentContainer}
                data={restaurants}
                renderItem={renderRestaurants}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          ) : (
            <EmptyDataContainer
              image={require('../../assets/Images/search.png')}
              title="Ooh Sorry"
              desc="Currently no restaurants are available."
            />
          )}
        </View>
      )}
    </View>
  );
}

const MapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(MapStateToProps)(Home);

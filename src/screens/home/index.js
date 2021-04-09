import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableHighlight,
  useWindowDimensions,
  View,
  Image,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import style from './style';

function Home() {
  const {width} = useWindowDimensions();
  const [restaurants, updateRestaurants] = useState([]);
  const [restaurantSearchResult, updateRestaurantSearchResult] = useState([]);

  const renderRestaurants = ({item}) => {
    return (
      <TouchableHighlight>
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
                  <Icon name="star" marginRight={3} size={20} />
                  <View style={style.restaurantRateInnerContainer}>
                    <Text style={style.restaurantActiveRate}>3.8</Text>
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
        <View />
      )}
    </View>
  );
}

export default Home;

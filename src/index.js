import React, {useEffect, useRef} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {PRIMARY_COLOR} from './constants';
import AppNavigator from './navigation';
import {fetchAllRestaurants} from './redux/restaurant/restaurantAction';

function SufficioIndex(props) {
  // Initial Page Fetch
  useEffect(() => {
    props.fetchAllRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.isLoading) {
    return (
      <View style={style.container}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return <AppNavigator />;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SufficioIndex);

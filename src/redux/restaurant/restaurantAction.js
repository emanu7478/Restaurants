export const fetchAllRestaurants = () => {
  return async function (dispatch) {
    try {
      let data = require('../../assets/Json/restaurants.json');
      dispatch({type: 'FETCH_ALL_RESTAURANTS', payload: data.restaurants});
    } catch (err) {
      console.log(err);
    }
  };
};

import {FETCH_ALL_RESTAURANTS} from './restaurantTypes';

const initialState = {
  isLoading: true,
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case FETCH_ALL_RESTAURANTS:
      return Object.assign({
        ...state,
        restaurants: action.payload,
        isLoading: false,
      });
  }
  return newState;
};
export default reducer;

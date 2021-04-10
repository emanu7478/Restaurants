import {StyleSheet} from 'react-native';
import * as constant from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.PRIMARY_COLOR,
  },
  flatlistContainer: {
    flex: 1,
    marginVertical: 10,
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
  },
  flatlistContentContainer: {
    alignItems: 'center',
  },
  restaurantContainer: {
    height: 220,
    borderRadius: 13,
    backgroundColor: constant.PRIMARY_COLOR,
    marginVertical: 10,
    elevation: 0.7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  restaurantImage: {
    height: 135,
    width: '100%',
    // resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cuisineTypeContainer: {
    position: 'absolute',
    backgroundColor: constant.BLUR_WHITE,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    bottom: 3,
    right: 5,
  },
  cuisineType: {
    fontSize: 14,
  },
  restaurantDetailContainer: {
    padding: 10,
    paddingBottom: 7,
  },
  restaurantDetailInnerContainer: {
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: constant.GLOSSY_WHITE,
  },
  restaurantNameRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  restaurantRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantRateInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantActiveRate: {
    color: constant.TERTIARY_COLOR,
    fontSize: 13,
    fontWeight: 'bold',
  },
  restaurantTotalRate: {
    color: '#d9d9d9',
  },
  restaurantAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restaurantAddress: {
    color: constant.GREY_COLOR,
    fontSize: 13,
  },
});

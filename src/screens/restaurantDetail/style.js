import {StyleSheet} from 'react-native';
import * as constant from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.PRIMARY_COLOR,
  },
  image: {
    height: 220,
  },
  flatlistHeaderContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  restaurantNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 0.9,
    borderBottomColor: constant.GLOSSY_WHITE,
  },
  restaurantTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 19,
    letterSpacing: 1,
    color: '#6b6b6b',
  },
  restaurantAddress: {
    color: '#dbdbdb',
    fontSize: 12,
  },
  restaurantOverallRatingContainer: {
    height: 30,
    width: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#db0948',
  },
  restaurantOverallRating: {
    fontSize: 9,
    color: constant.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  restaurantDetailContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.9,
    borderBottomColor: constant.GLOSSY_WHITE,
  },
  restaurantDetailInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  restaurantDataContainer: {
    width: '70%',
  },
  restaurantDetailHeader: {
    fontWeight: 'bold',
    color: '#6b6b6b',
  },
  restaurantDetailData: {
    fontSize: 13,
    color: '#dbdbdb',
  },
  titleText: {
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 3,
    marginVertical: 5,
  },
  reviewContainerWrapper: {
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    marginHorizontal: 15,
    borderBottomColor: '#dbdbdb',
  },
  reviewContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    elevation: 1,
    backgroundColor: constant.BACKGROUND_PRIMARY_COLOR,
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  reviewNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  reviewName: {
    fontWeight: 'bold',
    color: '#6b6b6b',
  },
  reviewText: {
    color: '#696969',
    fontSize: 13,
  },
});

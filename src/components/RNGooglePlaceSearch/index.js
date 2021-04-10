import React, {useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  useWindowDimensions,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import axios from 'axios';
import * as constant from '../../constants';

function RNGooglePlaceSearch(props) {
  const {onPress, onClear} = props;
  const {width} = useWindowDimensions();
  const [modalActive, setModalActive] = useState(false);
  const [data, updateData] = useState([{}]);
  const [searchParam, setSearchParam] = useState('');
  const [searchLoader, setSearchLoader] = useState(false);

  const onChangeSearchText = (text) => {
    setSearchParam(text);
    setSearchLoader(true);
    axios
      .post(
        `https://nominatim.openstreetmap.org/search?q=${text}&format=json`,
        // ${constant.WEATHER_URL}lat=${coords.latitude}&lon=${coords.longitude}&APPID=${constant.WEATHER_API}`,
      )
      .then(function (response) {
        setSearchLoader(false);
        console.log(response.data);
        updateData(response.data);
        // console.warn(response.data);
      })
      .catch(function (error) {
        setSearchLoader(false);
        console.log(error);
      });
  };

  const onClearSearchParam = () => {
    setSearchLoader(false);
    setSearchParam('');
    updateData([]);
  };

  const onClearSearchData = () => {
    onClear();
    setSearchParam('');
    updateData([]);
  };

  const onItemSelect = (item) => {
    // console.warn(JSON.parse(item.display_name));
    console.warn(item);
    onPress(item);
    setSearchParam(item.display_name);
    setModalActive(false);
    setSearchLoader(false);
  };

  return (
    <SafeAreaView>
      {modalActive !== true ? (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => setModalActive(true)}>
          <View style={{...style.searchViewcontainer, width: width - 15}}>
            <View style={style.searchViewInnerContainer}>
              <Icon
                name="search"
                type="feather"
                size={19}
                color="#DADADA"
                marginRight={5}
              />
              <Text
                numberOfLines={1}
                style={{
                  ...style.searchParamText,
                  color: searchParam !== '' ? '#696969' : '#DADADA',
                }}>
                {searchParam !== '' ? searchParam : 'Search Places...'}
              </Text>
            </View>
            <View style={style.searchBarEndContainer}>
              {searchParam !== '' ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onClearSearchData()}
                  style={style.searchCloseButton}>
                  <Icon name="close" size={15} />
                </TouchableHighlight>
              ) : null}
            </View>
          </View>
        </TouchableHighlight>
      ) : (
        <View>
          <Modal
            isVisible={modalActive}
            transparent={false}
            coverScreen={true}
            onBackButtonPress={() => setModalActive(false)}
            onBackdropPress={() => setModalActive(false)}>
            <View style={style.modalContainer}>
              <View style={style.searchViewcontainer}>
                <View style={style.searchViewInnerContainer}>
                  <Icon
                    name="search"
                    type="feather"
                    size={19}
                    color="#DADADA"
                    marginRight={5}
                  />
                  <TextInput
                    style={style.searchTextInput}
                    placeholder="Search Places..."
                    value={searchParam}
                    onChangeText={(text) => onChangeSearchText(text)}
                  />
                </View>
                <View style={style.searchBarEndContainer}>
                  {searchLoader ? (
                    <ActivityIndicator marginRight={3} size="small" />
                  ) : null}
                  {searchParam !== '' ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => onClearSearchParam()}
                      style={style.searchCloseButton}>
                      <Icon name="close" size={15} />
                    </TouchableHighlight>
                  ) : null}
                </View>
              </View>
              {data.length !== 0 ? (
                <View style={style.searchResultsContainer}>
                  {data.map((item, i) => {
                    return (
                      <TouchableHighlight
                        key={i}
                        underlayColor="transparent"
                        style={style.searchResultsText}
                        onPress={() => onItemSelect(item)}>
                        <Text>{item.display_name}</Text>
                      </TouchableHighlight>
                    );
                  })}
                </View>
              ) : null}
            </View>
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  searchViewcontainer: {
    backgroundColor: constant.PRIMARY_COLOR,
    borderWidth: 1,
    borderColor: '#DADADA',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'flex-start',
  },
  searchViewInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchParamText: {
    width: '90%',
  },
  searchTextInput: {
    flex: 1,
  },
  searchBarEndContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchCloseButton: {
    padding: 3,
    elevation: 1,
    borderRadius: 20,
    backgroundColor: '#DADADA',
  },
  searchResultsContainer: {
    marginTop: 3,
    backgroundColor: constant.PRIMARY_COLOR,
    borderRadius: 5,
    paddingVertical: 3,
  },
  searchResultsText: {
    paddingVertical: 10,
    marginHorizontal: 9,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
  },
});

export default RNGooglePlaceSearch;

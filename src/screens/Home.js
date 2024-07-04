import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Main from '../tabs/Main';
import Search from '../tabs/Search';
import Cart from '../tabs/Cart';
import Wishlist from '../tabs/Wishlist';
import Profile from '../tabs/Profile';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        selectedTab == 4 && <Profile />
      )}
      <View style={styles.tabview}>
        <TouchableOpacity
          style={styles.tabimg}
          onPress={() => setSelectedTab(0)}>
          <Image source={require('../image/home.png')}  style={[
                styles.img,
                {tintColor: selectedTab == 0 ? '#e4007c' : '#000'},
              ]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabimg}
          onPress={() => setSelectedTab(1)}>
          <Image source={require('../image/search.png')}  style={[
                styles.img,
                {tintColor: selectedTab == 1 ? '#e4007c' : '#000'},
              ]} />
        </TouchableOpacity>
        <View style={[styles.tabimg, {marginLeft: 0}]}>
          <TouchableOpacity
            onPress={() => setSelectedTab(2)}
            style={[
              styles.bag,
              {backgroundColor: selectedTab == 2 ? '#fff' : '#e4007c'},
            ]}>
            <Image
              source={require('../image/bag.png')}
              style={[
                styles.img,
                {tintColor: selectedTab == 2 ? '#e4007c' : '#fff'},
              ]}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.tabimg}
          onPress={() => setSelectedTab(3)}>
          <Image source={require('../image/love.png')}  style={[
                styles.img,
                {tintColor: selectedTab == 3 ? '#e4007c' : '#000'},
              ]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabimg}
          onPress={() => setSelectedTab(4)}>
          <Image source={require('../image/user.png')}  style={[
                styles.img,
                {tintColor: selectedTab == 4 ? '#e4007c' : '#000'},
              ]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabview: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
  },
  tabimg: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 15,
    padding: 20,
  },
  img: {
    width: 24,
    height: 24,
  },
  bag: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});

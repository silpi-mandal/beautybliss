import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../comon/Header';
import api from '../../data/db.json';
import ProductList from '../comon/ProductList';
import { useNavigation } from '@react-navigation/native';
import { addItemtoCart, addItemtoWishlist, removeItemfromWishlist } from '../redux/Action'; 
import { useDispatch, useSelector } from 'react-redux';

const getUniqueItems = data => {
  const seenTypes = new Set();
  return data.filter(val => {
    if (!seenTypes.has(val.product_type)) {
      seenTypes.add(val.product_type);
      return true;
    }
    return false;
  });
};

const Main = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const uniqueItems = getUniqueItems(api);
  const [bronzer, setBronzer] = useState([]);
  const [blush, setBlush] = useState([]);
  const [lipLiner, setLipLiner] = useState([]);
  const [foundation, setFoundation] = useState([]);
  const [eyeShadow, setEyeShadow] = useState([]);
  const [eyeLiner, setEyeLiner] = useState([]);
  const [nailPolish, setNailPolish] = useState([]);
  const [lipstick, setLipstick] = useState([]);
  const [mascara, setMascara] = useState([]);
  const cart = useSelector(state => state.cart);
  const wishlist = useSelector(state => state.wishlist)
  // console.log(cart,wishlist);

  useEffect(() => {
    const bronzerItems = api.filter(item => item.product_type === 'Bronzer');
    setBronzer(bronzerItems);
    const blushItems = api.filter(item => item.product_type === 'Blush');
    setBlush(blushItems);
    const lipLinerItems = api.filter(item => item.product_type === 'Lip Liner');
    setLipLiner(lipLinerItems);
    const foundationItems = api.filter(item => item.product_type === 'Foundation');
    setFoundation(foundationItems);
    const eyeshadowItems = api.filter(item => item.product_type === 'Eyeshadow');
    setEyeShadow(eyeshadowItems);
    const eyeLinerItems = api.filter(item => item.product_type === 'Eyeliner');
    setEyeLiner(eyeLinerItems);
    const nailPolishItems = api.filter(item => item.product_type === 'Nail Polish');
    setNailPolish(nailPolishItems);
    const lipstickItems = api.filter(item => item.product_type === 'Lipstick');
    setLipstick(lipstickItems);
    const mascaraItems = api.filter(item => item.product_type === 'Mascara');
    setMascara(mascaraItems);
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addItemtoCart(item));
  };

  const handleAddWishlist = (item, add) => {
    if (add) {
      dispatch(addItemtoWishlist(item));
    } else {
      dispatch(removeItemfromWishlist(item.id));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Header />
        <View style={styles.imageContainer}>
          <Image
            source={require('../image/banner.jpg')}
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={uniqueItems}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.product_type}</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Bronzer</Text>
          <ProductList data={bronzer} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Blush</Text>
          <ProductList data={blush} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Lip Liner</Text>
          <ProductList data={lipLiner} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Foundation</Text>
          <ProductList data={foundation} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Eyeshadow</Text>
          <ProductList data={eyeShadow} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Eyeliner</Text>
          <ProductList data={eyeLiner} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Nail Polish</Text>
          <ProductList data={nailPolish} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Lipstick</Text>
          <ProductList data={lipstick} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.sectionTitle}>New Mascara</Text>
          <ProductList data={mascara} onAddtoCart={handleAddToCart} onAddWishlist={handleAddWishlist} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0'
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingBottom: 70,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  bannerImage: {
    width: '95%',
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flatListContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e4007c',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e4007c',
  },
  productListContainer: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

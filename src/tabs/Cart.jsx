import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemfromCart } from '../redux/Action'; // Corrected action import

const Cart = ({ navigation }) => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleItem = (id) => {
    console.log(`Item ID: ${id}`);
    navigation.navigate("ItemDetails", { id });
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeItemfromCart(index));
  };

  return (
    <View>
      {products.length > 0 ? (
        products.map((item, index) => (
          <TouchableHighlight key={index} onPress={() => handleItem(item.id)}>
            <View style={styles.itemContainer}>
              <TouchableOpacity
                style={styles.wishlistIconContainer}
                onPress={() => handleRemoveFromCart(index)} // Corrected function call
              >
                <Image source={require("../image/cross.png")} style={styles.icon} />
              </TouchableOpacity>
              <Image source={{ uri: item.image_link }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
        ))
      ) : (
        <Text>Your cart is empty.</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  wishlistIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e4007c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React, { useState } from 'react';

export default function CartItem({ item, removefromCart, onAddWishlist, navigation }) {
  const [wishlist, setWishlist] = useState([]);

  const handleItem = (id) => {
    console.log(`Item ID: ${id}`);
    navigation.navigate("ItemDetails", { id });
  };

  const toggleWishlist = (item) => {
    if (wishlist.includes(item.id)) {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((itemId) => itemId !== item.id)
      );
      onAddWishlist(item, false);
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, item.id]);
      onAddWishlist(item, true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => handleItem(item.id)}>
        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.wishlistIconContainer}
            onPress={() => toggleWishlist(item)}
          >
            <Image
              source={
                wishlist.includes(item.id)
                  ? require("../image/redlove.png")
                  : require("../image/blanklove.png")
              }
              style={styles.icon}
            />
          </TouchableOpacity>
          <Image source={{ uri: item.image_link }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity style={styles.button} onPress={removefromCart}>
            <Text style={styles.buttonText}>Remove Item</Text>
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: 250,
    height: 240,
  },
  wishlistIconContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#f0eef0',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    flexWrap: 'wrap',
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

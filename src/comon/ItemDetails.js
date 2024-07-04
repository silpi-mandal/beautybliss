import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Rating from './Rating';
import api from '../../data/db.json';

const ItemDetails = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const item = api.find(val => val.id === id);
    if (item) {
      setSelectedItem(item);
    } else {
      navigation.goBack(); 
    }
    setLoading(false);
  }, [id]);

  const toggleWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter(item => item !== itemId));
    } else {
      setWishlist([...wishlist, itemId]);
    }
  };

  const handleBuy = () => {
    if (selectedItem.product_link) {
      Linking.openURL(selectedItem.product_link); 
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${selectedItem.name} to cart`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!selectedItem) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: Item not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedItem.image_link }} style={styles.image} />
        <TouchableOpacity
          style={styles.wishlistIconContainer}
          onPress={() => toggleWishlist(selectedItem.id)}
        >
          <Image
            source={
              wishlist.includes(selectedItem.id)
                ? require("../image/redlove.png")
                : require("../image/blanklove.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{selectedItem.name}</Text>
        <Text style={styles.brand}>{selectedItem.brand}</Text>
        <Text style={styles.price}>${selectedItem.price}</Text>
        <Rating rating={selectedItem.rating || 0} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{selectedItem.description}</Text>
      </View>
    </ScrollView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    marginTop:20,
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  wishlistIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#f0eef0',
    height:50,
    width:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center"
  },
  icon: {
    width: 30,
    height: 30,
    
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  brand: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    color: '#e4007c',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#e4007c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

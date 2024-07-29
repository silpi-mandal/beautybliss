import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemtoWishlist, removeItemfromCart, removeItemfromWishlist } from '../redux/Action';
import CartItem from '../comon/CartItem';

const Cart = ({ navigation }) => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleItem = (id) => {
    console.log(`Item ID: ${id}`);
    navigation.navigate("ItemDetails", { id });
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeItemfromCart(index));
  };

  const handleAddWishlist = (item, add) => {
    if (add) {
      dispatch(addItemtoWishlist(item));
    } else {
      dispatch(removeItemfromWishlist(item.id));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <CartItem
            item={item}
            onAddWishlist={handleAddWishlist}
            navigation={() => handleItem(item.id)}
            removefromCart={() => handleRemoveFromCart(index)}
          />
        )}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});

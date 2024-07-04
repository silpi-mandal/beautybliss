import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>BeautyBills</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff', 
    paddingVertical: 20, 
    paddingHorizontal: 15, 
    alignItems: 'center',
    justifyContent: 'center', 
    borderBottomWidth: 2, 
    borderBottomColor: '#fff', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
    elevation: 5, 
  },
  headerText: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#e4007c', 
    textTransform: 'uppercase', 
    letterSpacing: 2,
  }
})

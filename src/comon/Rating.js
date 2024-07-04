import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= filledStars) {
      stars.push(<Image key={i} source={require('../image/star_filled.png')} style={styles.star} />);
    } else if (i === filledStars + 1 && hasHalfStar) {
      stars.push(<Image key={i} source={require('../image/star_half.png')} style={styles.star} />);
    } else {
      stars.push(<Image key={i} source={require('../image/star_empty.png')} style={styles.star} />);
    }
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
});

export default Rating;

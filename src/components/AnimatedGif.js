import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

const AnimatedImage = () => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.imageContainer}>
        <Image
          source={require('../Assets/Images/robot.gif')}
          style={styles.image}
        />
        <Text style={styles.animatedText}>#dad rock </Text>
      </FastImage>
      <FastImage style={styles.imageContainer}>
        <Image
          source={require('../Assets/Images/sunset.gif')}
          style={styles.image}
        />
        <Text style={styles.animatedText}>#beach </Text>
      </FastImage>
      <FastImage style={styles.imageContainer}>
        <Image
          source={require('../Assets/Images/lights.gif')}
          style={styles.image}
        />
        <Text style={styles.animatedText}>#lovecore </Text>
      </FastImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  imageContainer: {
    position: 'relative', // Make the container relative so we can position the text absolutely
  },
  image: {
    width: 130,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  animatedText: {
    position: 'absolute', // Position the text absolutely within the image container
    bottom: 10, // Adjust the position of the text
    left: 10, // Adjust the position of the text
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a slight dark background for text visibility
    padding: 5,
    borderRadius: 5,
  },
});

export default AnimatedImage;

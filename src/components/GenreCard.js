import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const colorPalette = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#FFE66D', // Yellow
  '#1A535C', // Dark Green
  '#FF6F91', // Pink
  '#6A0572', // Purple
  '#FFD93D', // Gold
  '#0081A7', // Blue
  '#00AFB9', // Cyan
  '#F07167', // Coral
  '#FF99C8', // Light Pink
  '#D4A5A5', // Soft Red
  '#FFD166', // Light Orange
];

const GenreCard = ({genre, index}) => {
  // Select color based on the index to cycle through colors in colorPalette
  const backgroundColor = colorPalette[index % colorPalette.length];

  return (
    <TouchableOpacity style={[styles.card, {backgroundColor}]}>
      {/* Genre Image */}
      <Image
        source={{uri: genre?.data?.image?.sources[0].url}}
        style={styles.image}
      />
      {/* Genre Name */}
      <Text numberOfLines={1} style={styles.text}>
        {genre.data.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '43%', // To allow two cards per row with spacing
    height: 120, // Increased height for better visibility
    borderRadius: 8,
    margin: 8,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    position: 'absolute',
    width: 90, // Increased width for better fit in larger card
    height: 90, // Increased height
    opacity: 0.15, // Lower opacity for better text visibility
    top: 10,
    right: 10,
  },
  text: {
    color: 'white', // Bright text color
    fontWeight: 'bold',
    fontSize: 15, // Adjusted font size for better readability
    textAlign: 'left',
    textShadowColor: 'black', // Shadow color to make text stand out
    textShadowOffset: {width: 1, height: 1}, // Shadow offset
    textShadowRadius: 3, // Shadow spread radius
  },
});

export default GenreCard;

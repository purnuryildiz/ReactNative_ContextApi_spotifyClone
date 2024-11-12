import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PodcastCard = ({podcast}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 30,
        alignItems: 'center',
        gap: 20,
        marginLeft: -5,
        width: 200,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: podcast?.data?.coverArt?.sources[2].url}}
        style={{width: 180, height: 180}}
      />
      <Text
        numberOfLines={2}
        style={{color: 'white', fontWeight: '500', alignItems: 'center'}}>
        {podcast.data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default PodcastCard;

const styles = StyleSheet.create({});

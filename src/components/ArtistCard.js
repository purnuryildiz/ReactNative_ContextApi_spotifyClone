import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ArtistCard = ({artist}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 30,
        alignItems: 'center',
        gap: 10,
        marginLeft: -5,
        width: 150,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: artist?.data?.visuals?.avatarImage?.sources[0]?.url}}
        style={{width: 130, height: 130, borderRadius: 80}}
      />
      <Text numberOfLines={1} style={{color: 'white', fontWeight: '500'}}>
        {artist.data.profile.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({});

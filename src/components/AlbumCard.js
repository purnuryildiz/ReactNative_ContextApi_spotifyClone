import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';

const AlbumCard = ({album}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenName.songInfo, {album})}
      style={{
        marginTop: 30,
        alignItems: 'center',
        gap: 10,
        marginRight: 22,
        width: 190,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: album.coverArt}}
        style={{width: 200, height: 200, borderRadius: 5}}
      />

      <Text numberOfLines={1} style={{color: 'white', fontWeight: '500'}}>
        {album.name}
      </Text>
      <Text numberOfLines={1} style={{color: 'white', fontWeight: '500'}}>
        {album.artist}
      </Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({});

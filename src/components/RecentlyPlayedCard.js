import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';

const RecentlyPlayedCard = ({album}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenName.songInfo, {album})}
      style={{
        marginTop: 30,
        alignItems: 'center',
        gap: 10,
        marginRight: 12,
        width: 160,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: album.coverArt}}
        style={{width: 160, height: 160, borderRadius: 5}}
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

export default RecentlyPlayedCard;

const styles = StyleSheet.create({});

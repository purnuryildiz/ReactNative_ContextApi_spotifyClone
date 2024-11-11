import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const SongItem = ({
  item,
  setModalVisible,
  modalVisible,
  selectedTrack,
  setSelectedTrack,
  setupPlayer,
  handlePlay,
}) => {
  return (
    <Pressable onPress={() => handlePlay(item)}>
      <View style={styles.trackContainer}>
        <Image
          source={{uri: item.track.images.coverart}}
          style={styles.albumCover}
        />
        <View style={styles.trackInfo}>
          <Text style={styles.trackName}>{item.track.title} </Text>
          <Text style={styles.albumName}>{item.track.subtitle} </Text>
        </View>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </View>
    </Pressable>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  albumCover: {
    width: 60,
    height: 60,
  },
  trackContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#909090',
  },
  albumCover: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  trackInfo: {
    flex: 1,
    marginLeft: 15,
    gap: 5,
  },
  trackName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  albumName: {
    fontSize: 14,
    color: '#909090',
  },
});

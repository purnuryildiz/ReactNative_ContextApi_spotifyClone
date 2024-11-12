import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Albums} from '../context/AlbumsContext';
import {Artists} from '../context/ArtistsContext';
import {Podcasts} from '../context/PodcastsContext';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';

const YourLibraryScreen = () => {
  const navigation = useNavigation();
  const {albums, recentAlbums, madeFor} = useContext(Albums);
  const {artists} = useContext(Artists);
  const {podcasts} = useContext(Podcasts);

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: 10,
          marginTop: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            padding: 10,
          }}>
          {/* Profile */}
          <View>
            <Image
              source={{
                uri: 'https://www.shutterstock.com/image-photo/enthusiastic-white-girl-long-shiny-260nw-1222083556.jpg',
              }}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'cover',
                borderRadius: 20,
              }}
            />
          </View>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            Your Library
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Feather name="search" size={28} color="white" />
          <AntDesign name="plus" size={28} color="white" />
        </View>
      </View>
      {/* Music-Podcasts */}
      <View
        style={{
          marginTop: 20,
          marginBottom: -40,
          marginLeft: 15,
          flexDirection: 'row',
          gap: 10,
        }}>
        <Pressable style={styles.categoryBox}>
          <Text style={{color: 'white', fontSize: 16}}>Playlists</Text>
        </Pressable>
        <Pressable style={styles.categoryBox}>
          <Text style={{color: 'white', fontSize: 15}}>Podcasts</Text>
        </Pressable>
        <Pressable style={styles.categoryBox}>
          <Text style={{color: 'white', fontSize: 15}}>Albums</Text>
        </Pressable>
        <Pressable style={styles.categoryBox}>
          <Text style={{color: 'white', fontSize: 15}}>Artists</Text>
        </Pressable>
      </View>
      {/* Recently Played */}
      <View style={styles.recentlyPlayedContainer}>
        {recentAlbums?.slice(0, 3).map((album, index) => (
          <TouchableOpacity
            key={`album-${index}`}
            onPress={() => navigation.navigate(ScreenName.songInfo, {album})}
            style={styles.itemContainer}>
            <Image source={{uri: album.coverArt}} style={styles.itemImage} />
            <Text numberOfLines={1} style={styles.itemText}>
              {album.name}
            </Text>
            <Text numberOfLines={1} style={styles.itemText}>
              {album.artist}
            </Text>
          </TouchableOpacity>
        ))}
        {podcasts?.slice(0, 3).map((podcast, index) => (
          <TouchableOpacity
            key={`podcast-${index}`}
            style={styles.itemContainer}>
            <Image
              source={{uri: podcast?.data?.coverArt?.sources[2]?.url}}
              style={styles.itemImage}
            />
            <Text numberOfLines={2} style={styles.itemText}>
              {podcast?.data?.name || 'Unnamed Podcast'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

export default YourLibraryScreen;

const styles = StyleSheet.create({
  categoryBox: {
    backgroundColor: '#282828',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  recentlyPlayedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 60,
    marginLeft: 10,
  },
  itemContainer: {
    width: '33.3%', // Bir satırda üç öğe olacak şekilde ayarlandı
    marginBottom: 20, // Satırlar arasında boşluk
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  itemText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
});

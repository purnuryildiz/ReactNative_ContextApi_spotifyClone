import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native'; // Drawer için gerekli import
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import ArtistCard from '../components/ArtistCard';
import AlbumCard from '../components/AlbumCard';
import RecentlyPlayedCard from '../components/RecentlyPlayedCard';
import {Albums} from '../context/AlbumsContext';
import Loader from '../components/Loader';
import Error from '../components/Error';
import {Artists} from '../context/ArtistsContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  // CONTEXT(Verileri sayfaya çek)
  const {
    albums,
    recentAlbums,
    madeFor,
    loading: albumsLoading,
    error: albumsError,
  } = useContext(Albums);

  const {
    artists,
    loading: artistsLoading,
    error: artistsError,
  } = useContext(Artists);

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      {albumsLoading ? (
        <Loader />
      ) : albumsError ? (
        <Error error={albumsError} />
      ) : (
        <ScrollView
          style={{marginTop: 60, marginLeft: 10}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View Style={{padding: 20}}>
            {/* Header */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  padding: 10,
                }}>
                {/* Profile */}
                <TouchableOpacity>
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
                </TouchableOpacity>
                <Text
                  style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                  Purnur
                </Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="lightning-bolt-outline"
                  size={24}
                  color="white"
                />
              </View>
            </View>

            {/* Music-Podcasts */}
            <View style={{marginTop: 30, flexDirection: 'row', gap: 30}}>
              <Pressable style={styles.categoryBox}>
                <Text style={{color: 'white', fontSize: 16}}>Music</Text>
              </Pressable>
              <Pressable style={styles.categoryBox}>
                <Text style={{color: 'white', fontSize: 15}}>Podcasts</Text>
              </Pressable>
            </View>
            {/* Liked Songs- Pop- Rock */}
            <View>
              {/* Liked Songs */}
              <View style={styles.categoryContainer}>
                <LinearGradient colors={['#33006f', '#ffffff']}>
                  <Pressable
                    onPress={() => navigation.navigate(ScreenName.liked)}
                    style={styles.containerInside}>
                    <AntDesign name="heart" size={24} color="white" />
                  </Pressable>
                </LinearGradient>
                <Text
                  style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                  Liked Songs
                </Text>
              </View>
              {/* Pop */}
              <View style={styles.categoryContainer}>
                <Pressable style={styles.containerInside}>
                  <Image
                    source={require('../Assets/Images/pop.png')}
                    style={styles.containerInside}
                  />
                </Pressable>

                <Text
                  style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                  Pop
                </Text>
              </View>
              {/* Rock */}
              <View style={styles.categoryContainer}>
                <Pressable style={styles.containerInside}>
                  <Image
                    source={require('../Assets/Images/rock.png')}
                    style={styles.containerInside}
                  />
                </Pressable>

                <Text
                  style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                  Rock
                </Text>
              </View>
            </View>

            {/* Your Top Artists */}
            <View style={{marginTop: 30}}>
              <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
                Your Top Artists
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {artists?.map((artist, index) => (
                  <ArtistCard artist={artist} key={index} />
                ))}
              </ScrollView>
            </View>
            {/* Recently Played */}
            <View style={{marginTop: 50}}>
              <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
                Recently Played
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recentAlbums?.map((album, index) => (
                  <RecentlyPlayedCard album={album} key={index} />
                ))}
              </ScrollView>
            </View>
            {/* Made For */}
            <View style={{marginTop: 50}}>
              <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
                Made For Purnur
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {madeFor?.map((album, index) => (
                  <RecentlyPlayedCard album={album} key={index} />
                ))}
              </ScrollView>
            </View>
            {/* Popular Albums */}
            <View style={{marginTop: 50}}>
              <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
                Popular Albums
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {albums?.map((album, index) => (
                  <AlbumCard album={album} key={index} />
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryBox: {
    backgroundColor: '#282828',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  categoryContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    backgroundColor: '#282828',
    marginRight: 10,
    borderRadius: 5,
  },
  containerInside: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

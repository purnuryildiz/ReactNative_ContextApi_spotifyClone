import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Genres} from '../context/GenresContext';
import GenreCard from '../components/GenreCard';
import AnimatedImage from '../components/AnimatedGif';

const SearchScreen = () => {
  const {
    genres,
    loading: genresLoading,
    error: genresError,
  } = useContext(Genres);

  const [searchText, setSearchText] = useState('');

  // Metin değiştiğinde arama metnini güncelle
  const handleChangeText = text => {
    setSearchText(text);
  };

  // Temizleme butonuna tıklandığında arama metnini temizle
  const handleClearText = () => {
    setSearchText('');
  };

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView
        style={{flex: 1, marginTop: 60, marginLeft: 1}}
        contentContainerStyle={{paddingBottom: 100}}>
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
              Search
            </Text>
          </View>
          <View>
            <Feather name="camera" size={28} color="white" />
          </View>
        </View>

        {/* Arama  */}
        <View style={styles.searchContainer}>
          {/* Arama İkonu */}
          <Ionicons
            name="search"
            size={28}
            color="#909090"
            style={styles.icon}
          />

          {/* TextInput */}
          <TextInput
            style={styles.input}
            placeholder="What do you want to listen to ?"
            placeholderTextColor="#909090"
            value={searchText}
            onChangeText={handleChangeText}
          />

          {/* Temizleme İkonu (X) */}
          {searchText.length > 0 && (
            <TouchableOpacity
              onPress={handleClearText}
              style={styles.clearButton}>
              <Ionicons name="close-circle" size={24} color="#B0B0B0" />
            </TouchableOpacity>
          )}
        </View>

        {/* Explore your genres */}
        <View style={{marginVertical: 20}}>
          <View style={{marginBottom: 15}}>
            <Text style={styles.header}>Explore Your Genres </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 5,
              marginHorizontal: 10,
            }}>
            <AnimatedImage />
          </View>
        </View>

        {/* Browse All */}
        <ScrollView>
          <Text style={styles.header}>Browse All</Text>
          <View style={styles.container}>
            {genres?.map((genre, index) => (
              <GenreCard genre={genre} key={genre.id} index={index} />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensures the cards wrap to the next line
    justifyContent: 'space-between', // Spacing between cards
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 10,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#909090',
    fontSize: 18,
  },
  clearButton: {
    marginLeft: 10,
  },
  header: {
    color: 'white',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchScreen;

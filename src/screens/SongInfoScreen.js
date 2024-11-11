import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const SongInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {album} = route.params || {};
  const {artist, coverArt, name, uri, year} = album;
  console.log(album);
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <View style={{height: 60, margin: 10}} />
      <ScrollView>
        <View style={{padding: 10}}>
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          {/* Image */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={{uri: coverArt}} style={{width: 250, height: 250}} />
          </View>
        </View>
        {/* Detaylar */}
        <Text
          style={{
            color: 'white',
            marginHorizontal: 12,
            marginTop: 10,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <Text style={{color: 'white', margin: 10}}>{artist} </Text>
        {/* Made for you - About Recommendations */}
        <View
          style={{
            marginHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Entypo name="spotify" size={24} color="#1db954" />
            <Text style={{color: '#909090', fontWeight: '500'}}>
              Made for you
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="white"
            />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              About recommendations
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({});

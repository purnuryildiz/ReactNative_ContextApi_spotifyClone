import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const YourLibraryScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, marginTop: 60, marginLeft: 1}}>
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
              Your Library
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Feather name="search" size={28} color="white" />
            <AntDesign name="plus" size={28} color="white" />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default YourLibraryScreen;

const styles = StyleSheet.create({});

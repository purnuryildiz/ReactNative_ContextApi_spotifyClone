import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: 200}} />
        <Entypo
          name="spotify"
          size={80}
          color="white"
          style={{textAlign: 'center', marginBottom: 20}}
        />
        <Text style={styles.loginTitle}>Millions of songs. </Text>
        <Text style={styles.loginTitle}>Free on Spotify.</Text>
        <View style={{height: 80}} />
        <Pressable style={styles.signUpButton}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Sign up free</Text>
        </Pressable>
        <Pressable>
          <View style={styles.googleButton}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={{color: 'white', fontSize: 14}}>
              Continue with Google
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.googleButton}>
            <FontAwesome name="facebook-f" size={24} color="white" />
            <Text style={{color: 'white', fontSize: 14}}>
              Continue with Facebook
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.googleButton}>
            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{color: 'white', fontSize: 14}}>
              Continue with Apple
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <View style={styles.loginText}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              Log in
            </Text>
          </View>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#1db954',
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  googleButton: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 350,
    padding: 10,
    justifyContent: 'center',
  },
  loginText: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

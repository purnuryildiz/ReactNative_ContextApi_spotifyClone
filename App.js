import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Routes';

import {AlbumsProvider} from './src/context/AlbumsContext';
import {ArtistsProvider} from './src/context/ArtistsContext';
import {GenresProvider} from './src/context/GenresContext';
const App = () => {
  return (
    <>
      <GenresProvider>
        <ArtistsProvider>
          <AlbumsProvider>
            <Navigation />
          </AlbumsProvider>
        </ArtistsProvider>
      </GenresProvider>
    </>
  );
};

export default App;

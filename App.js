import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Routes';

import {AlbumsProvider} from './src/context/AlbumsContext';
import {ArtistsProvider} from './src/context/ArtistsContext';
import {GenresProvider} from './src/context/GenresContext';
import {PodcastsProvider} from './src/context/PodcastsContext';
const App = () => {
  return (
    <>
      <PodcastsProvider>
        <GenresProvider>
          <ArtistsProvider>
            <AlbumsProvider>
              <Navigation />
            </AlbumsProvider>
          </ArtistsProvider>
        </GenresProvider>
      </PodcastsProvider>
    </>
  );
};

export default App;

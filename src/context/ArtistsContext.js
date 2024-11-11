import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const Artists = createContext();

const ArtistsProvider = ({children}) => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArtists = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'popular in USA',
        type: 'artists',
        offset: '0',
        limit: '10',
        numberOfTopResults: '18',
      },
      headers: {
        'x-rapidapi-key': '439a146b97msh4c0003ed3ee060dp1db9c9jsn4680f430b894',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data.artists.items;
      setArtists(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <Artists.Provider value={{artists, loading, error}}>
      {children}
    </Artists.Provider>
  );
};

export {Artists, ArtistsProvider};

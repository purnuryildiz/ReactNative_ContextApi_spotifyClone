import {Children, createContext, useState, useEffect} from 'react';
import axios from 'axios';
const Podcasts = createContext();

const PodcastsProvider = ({children}) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPodcasts = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Ted, Mel robbins',
        type: 'podcasts',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': 'd9fc799907msh5ae8fff8188974ep1f836bjsn6126d1cf97b8',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data.podcasts.items;
      setPodcasts(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPodcasts();
  }, []);

  return (
    <Podcasts.Provider value={{podcasts, loading, error}}>
      {children}
    </Podcasts.Provider>
  );
};

export {Podcasts, PodcastsProvider};

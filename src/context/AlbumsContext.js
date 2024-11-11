import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const Albums = createContext();

const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]); // Popüler albümler için state
  const [recentAlbums, setRecentAlbums] = useState([]); // Yeni eklenen albümler için state
  const [madeFor, setMadeFor] = useState([]); // Made For albümleri için state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null); // Tıklanan albüm state'i
  const [tracks, setTracks] = useState([]); // Şarkı listesi

  // API'den veri çekmek için kullanılan fonksiyon
  const getData = async (query, setFunction) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: query,
        type: 'albums',
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
      // API çağrısı yapılıyor
      const response = await axios.request(options);
      const albumItems = response.data.albums.items.map(item => ({
        uri: item.data.uri,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        coverArt: item.data.coverArt.sources[0].url,
        year: item.data.date.year,
      }));
      setFunction(albumItems); // Veriyi state'e ekliyoruz
      setLoading(false); // Yükleme durumunu false yapıyoruz
    } catch (err) {
      // Hata durumunda yapılacaklar
      console.error('Error during API request:', err);
      setError(err); // Hata state'ini güncelliyoruz
      setLoading(false); // Yükleme durumu false yapılıyor
    }
  };

  // Shazam'dan albüme ait şarkıları almak
  const getTracksFromShazam = async albumName => {
    if (!albumName) {
      console.log('No album name provided for Shazam search');
      return; // Eğer albüm adı yoksa, işlem yapılmaz
    }

    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
        term: albumName, // Albüm ismini kullanarak arama yapıyoruz
        locale: 'en-US',
        offset: '0',
        limit: '10',
      },
      headers: {
        'x-rapidapi-key': '16542e0184mshf352632a2e2fe8ap16d83ajsn2c7bc139301e',
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      const tracks = response.data.tracks.hits.map(hit => ({
        trackName: hit.track.title,
        artistName: hit.track.subtitle,
        trackUrl: hit.track.url,
        coverArt: hit.track.images.coverart,
        albumName: albumName, // Albüm adını her şarkıya ekliyoruz
      }));
      setTracks(tracks); // Şarkıları state'e ekliyoruz
      console.log(tracks);
    } catch (err) {
      console.error('Error fetching tracks from Shazam:', err);
      setError(err);
    }
  };

  // useEffect içinde veri çekme işlemi
  useEffect(() => {
    getData('popular albums', setAlbums); // Popüler albümleri çek
    getData('Harry Styles, Shawn Mendes, Taylor Swift', setRecentAlbums); // Son eklenen albümleri çek
    getData('Ed Sheeran, Imagine Dragons, Sia, Bruno Mars', setMadeFor); // Made For albümleri çek
  }, []);

  // Albüm tıklandığında şarkı verilerini almak
  useEffect(() => {
    if (selectedAlbum) {
      console.log('Selected album:', selectedAlbum); // Albüm ismini kontrol et
      getTracksFromShazam(selectedAlbum); // Tıklanan albümün şarkılarını al
    }
  }, [selectedAlbum]); // Sadece selectedAlbum değiştiğinde çalışır

  // Albüme tıklama handler'ı
  const handleAlbumClick = albumName => {
    setSelectedAlbum(albumName); // Tıklanan albümü state'e kaydediyoruz
  };

  return (
    <Albums.Provider
      value={{
        albums,
        recentAlbums,
        madeFor,
        error,
        loading,
        handleAlbumClick,
        tracks,
      }}>
      {children}
    </Albums.Provider>
  );
};

export {Albums, AlbumsProvider};

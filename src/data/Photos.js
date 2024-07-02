import axios from 'axios';


const UnsplashAccessKey = "n6KqdSJZJjviIQznrrOg_TlgkUKTOUnz5ndhiLx8Aeg"

let photos = [];
  
const fetchPhotos = async (searchQuery = '') => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${UnsplashAccessKey}`,
      },
      params: {
        query: searchQuery || 'random',
        per_page: 40, 
      },
    });
    return response.data.results;
  } catch (err) {
    console.log(err.message);
  }
};
photos = await fetchPhotos("Electronics products");

export default photos;
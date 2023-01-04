import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',
    {
        headers: {
            Authorization: 'Client-ID nRgueQC0wm7LQixjWKYJKeBt7bW-JaqBpOb3CY9JCaA'
        },
        params:{
            query:term,
            per_page:20,
        }

    });
    return response.data.results;
};

export default searchImages;
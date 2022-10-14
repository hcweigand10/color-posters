import axios from "axios";

const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {},
    headers: {
        "X-RapidAPI-Key": "ea0c6df2d1mshccd1bb367b4a2bap1b7ecbjsn44477cc7dbed",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
};

const api = {
    getAlbumArt: async (albumId: string) => {
        options.params = {
            ids: albumId,
        };
        await axios
            .request(options)
            .then((response) => {
                console.log(response.data);
                return response.data
            })
            .catch((error) => {
                console.error(error);
            });
    },
    searchAlbums: async (queryTerm: string) => {
        options.params = {
            q: queryTerm,
            type: "multi",
            offset: "0",
            limit: "10",
            numberOfTopResults: "5",
        };
        const response = await axios.request(options)
        return response.data.albums.items
            // .then((response) => {
            //     console.log(response.data);
            //     return response.data.albums.items
            // })
    },
};

export default api

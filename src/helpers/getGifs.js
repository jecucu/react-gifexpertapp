
export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=9tZxjWTkXY1SSjiRsR90F2KFIzroTdXR`
        const peticion = await fetch(url);
        const { data } = await peticion.json();
        
        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })

        return gifs;

    }

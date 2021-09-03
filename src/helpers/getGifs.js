

export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=45HlcPkIS31PpUnTjpASsKsFLQAw9W7T`

    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //Si viene imagenes pasa
        };
    });
    
    return gifs;
}

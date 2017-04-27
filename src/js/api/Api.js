import axios from "axios"

function fetch(request, callback) {
    // axios.get(request).then(
    //     response => {
    //         callback(response.data);
    //     });
    
    axios.get(request).then(function (response) {
        console.log(response.data.response.docs);
        callback(response.data.response.docs);
    })
    .catch(function (error) {
         console.log(error);
    });
    
    //console.log(response.data.response.docs.length);
}

export function getAlbums(artist, callback) {
    //const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5964d3f0d29c4469a8fac5cf9767b2b4&&q=john&&fq=label&&begin_date=20160101&&end_date=20161231&&sort=newest

    const request = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5964d3f0d29c4469a8fac5cf9767b2b4&&q=${artist}`;
    fetch(request, callback);

}

export function getTracks(albumId, callback) {
    //const request = `https://api.spotify.com/v1/albums/${albumId}`;
    const request = `https://api.spotify.com/v1/albums/${albumId}`;
    fetch(request, callback);
}
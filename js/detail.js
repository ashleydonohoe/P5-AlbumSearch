(function() {
    const albumHeading = document.getElementById("album-title-year");
    const artistName = document.getElementById("artist-name");
    const imageBox = document.getElementById("album-cover");
    const trackList = document.getElementById("track-list");

    // Took function to get the query string for album from http://stackoverflow.com/questions/14693758/passing-form-data-to-another-html-page
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    // Store album code
    const album = getUrlVars().album;
    downloadAlbumInfo(album);


    // Starts AJAX
    function downloadAlbumInfo(album) {
        // AJAX setup
        var spotifyBaseUrl = "https://api.spotify.com/v1/albums/" + album;

        // Start AJAX request to Spotify
        $.getJSON(spotifyBaseUrl, {}, displayAlbumInfo);
    }

    // Handles Data returned
    function displayAlbumInfo(data) {
        console.log(data);
        const title = data.name;
        const year = data["release_date"];
        const artist = data.artists[0].name;
        const image = data.images[0].url;
        const tracks = data.tracks.items;

        albumHeading.textContent = title + " (" + year + ")";
        artistName.textContent = artist;
        imageBox.innerHTML = '<img src="' + image + '" alt="album cover">';

        let trackListHTML = "<h4>Track List</h4><ol>";
        for(let i = 0; i < tracks.length; i++) {
            trackListHTML += "<li>" + tracks[i].name + "</li>";
        }
        trackListHTML += "</ol>";
        trackList.innerHTML = trackListHTML;
    }

})();

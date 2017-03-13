(function() {
    const searchField = $("#search");
    const searchForm = document.querySelector("form");
    const albumsList = $(".album-list");
    let resultHTML = "";
    let searchTerm;

    searchForm.addEventListener("submit", executeSearch);

    function executeSearch(e) {
        e.preventDefault();

        // AJAX setup
        var spotifyBaseUrl = "https://api.spotify.com/v1/search?";
        searchTerm = searchField.textContent;
        var spotifyOptions = {
            q: searchField.val(),
            type: "album"
        };

        // Display Album HTML
        function displayAlbums(data) {
            // Hide anything already visible
            albumsList.empty();

            const albumsCount = data.albums.total;
            const albumData = data.albums.items;

            if(albumsCount < 1) {
                resultHTML += "<li class='no-albums'><i class='material-icons icon-help'>help_outline</i>No albums found that match: " + searchField.val() + "</li>";
            } else {
                $.each(albumData, function (i, album) {
                    createAlbumListItem(album);
                });
            }

            // Add HTML to page
                albumsList.html(resultHTML);

            // Add event listener for the details buttons
            const albumDetailsButton = document.querySelectorAll("button.details");
            for(let i = 0; i < albumDetailsButton.length; i++) {
                console.log("Adding event listener");
                albumDetailsButton[i].addEventListener("click", function(event) {
                    const albumId = $(this).data("id");
                    showAlbumInfo(albumId);
                });
            }
            }

        function createAlbumListItem(album) {
            let albumID = album.id;
            let albumSpotifyURL = album["external_urls"].spotify;
            let albumImageURL = album.images[0].url;
            let albumTitle = album.name;
            let albumArtist = album.artists[0].name;

            resultHTML += "<li><div class='album-wrap'>";
            resultHTML += "<a href='" + albumSpotifyURL + "' target='_blank'><img class='album-art' src='" + albumImageURL + "'></a></div>";
            resultHTML += "<span class='album-title'>" + albumTitle + "</span>";
            resultHTML += "<span class='album-artist'>" + albumArtist + "</span>";
            resultHTML += "<button class='details' data-id='" + albumID +"'>See Details</button>";
            resultHTML += "</li>";
        }

        // Start AJAX request to Spotify
        $.getJSON(spotifyBaseUrl, spotifyOptions, displayAlbums);
    } // End function for getting/loading initial data


    // Will download and load album info from https://api.spotify.com/v1/albums/:id
    function showAlbumInfo(albumId) {
        console.log(albumId);
    }

})();
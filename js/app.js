(function() {
    const searchField = $("#search");
    const searchForm = document.querySelector("form");
    const albumsList = $("#albums");
    const description = $(".desc");
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
            description.hide();
            const albums = data.albums;
            if(albums.total < 1) {
                albumsList.append("<li class='no-albums'><i class='material-icons icon-help'>help_outline</i>No albums found that match: " + searchField.val() + "</li>");
            } else {

            }
        }

        function createAlbumListItem(album) {
        }

        // Start AJAX request to Spotify
        $.getJSON(spotifyBaseUrl, spotifyOptions, displayAlbums);
    }

})();
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


    function downloadAlbumInfo(album) {
        albumHeading.textContent = "Test Title (2017)";
        artistName.textContent = "Test Name";
        imageBox.innerHTML = '<img src="http://www.excellfeeders.com/wp-content/uploads/2012/05/placeholder-640x640.png" alt="placeholder">';
        trackList.innerHTML = "<h4>Track List</h4><ol><li>Track1</li><li>Track2</li><li>Track3</li><li>Track4</li><li>Track5</li><li>Track6</li></ol>";

    }

})();

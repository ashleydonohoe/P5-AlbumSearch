(function() {
    const albumHeading = document.getElementById("album-title-year");

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
        albumHeading.textContent = "Testing";

    }

})();

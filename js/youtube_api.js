$(document).ready(function() {

    var key = 'AIzaSyDS9fhI-uUprZh9rs2P1nJdiyguvWpn_TI';
    var playlistId = 'PLaUKRLuhLfNYiDGhwsMk4GsGetlNRttwU';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 4,
        playlistId: playlistId
    }

    loadVideos();

    function loadVideos() {
        $.getJSON(URL, options, function(data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVideo(id);
            resultsLoop(data);
        });
    }

    function mainVideo(id) {
        $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    }

    function resultsLoop(data) {

        //equivalent to a FOR EACH LOOP
        $.each(data.items, function(k, item) {
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var descrip = item.snippet.description.substring(0, 100);
            var video = item.snippet.resourceId.videoId;

            $('main').append(`
        <article class="item" data-key="${video}">
          <img src="${thumb}" alt="" class="thumb" style="width: 70%" style="padding-left:3px" style="align-items: center;">      
       </article>
      `);
        });

    }

    // This is the equivalent to an on CLICK EVENT
    $('main').on('click', 'article', function() {
        var id = $(this).attr('data-key');
        mainVideo(id);
    });

});
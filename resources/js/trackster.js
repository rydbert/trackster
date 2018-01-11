var Trackster = {};
const API_KEY = "0f726d3865386d31cc3c03fa7f1fdd57";

/*
In trackster.js, use jQuery's .click() method to handle the user
clicking on the search button. Add an ID to the button to simplify
selecting it with jQuery. Remember, add event handlers when the
document is ready. Add this ready handler at the top of the file,
outside the previously defined functions.

To check that the event handler works before continuing, use
console.log() with a simple string in the click handler function.
Open Chrome DevTools and click your button to watch it work.
*/

$(document).ready(function() {

  /* Button click function */
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  })
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  var $trackList = $('#track-list');

  $trackList.empty();

  for (trackIndex=0; trackIndex<tracks.length; trackIndex++) {
    var track = tracks[trackIndex];
    var mediumAlbumArt = track.image[1]["#text"];
    var htmlTrackRow =
    '<div class="row track">' +
    ' <div class="col-xs-1 col-xs-offset-1 play-button">' +
    '   <a href="' + track.url + '" target="_blank">' +
    '     <i class="fa fa-play-circle-o fa-2x"></i>' +
    '   </a>' +
    ' </div>' +
    ' <div class="col-xs-4 attribute">' + track.name + '</div>' +
    ' <div class="col-xs-2 attribute">' + track.artist + '</div>' +
    ' <div class="col-xs-2 attribute"><img src=' + mediumAlbumArt + ' alt="Album art for ' + track.name + ' by ' + track.artist + '"></div>' +
    ' <div class="col-xs-2 attribute">' + track.listeners + '</div>' +
    '</div';

    $trackList.append(htmlTrackRow);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
    }
  });
};

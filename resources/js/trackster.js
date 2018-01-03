var Trackster = {};

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

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  console.log(title);

/*  $.ajax("http://ws.audioscrobbler.com/2.0/?method=track.search&track=").concat(title).concat("&api_key=").concat(API_KEY).concat("&format=json"));
*/
  $.ajax("http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json"));

};

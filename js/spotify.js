// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/

/*
Enter a keyword to seach for.
Select "artist" or "track" as the search type.
Have the names of all search results print as a list.
*/
var $form = $('#search')
var $searchType = $('#search-type');
var $searchKey = $('#search-keyword');
$(function (){
    $form.on("submit", function(e){
        e.preventDefault();
        //Decide if searching by artist or track
        var url;
        var type = $searchType.val();
        if(type == 'artist'){
            url = searchByArtist($searchKey.val())
        }
        else{
            url = searchByTrack($searchKey.val());
        }
        
        $.ajax({
            url: url,
            method: "get",
        }).done(function(response){
            console.log(response)
        })

    })

})

function searchByArtist(keyword) {
  var url = 'http://api.spotify.com/v1/search/?type=artist&q='+keyword;
  return url;
}


function searchByTrack(keyword) {
  var url = 'http://api.spotify.com/v1/search/?type=track&q='+keyword;
  return url;
}

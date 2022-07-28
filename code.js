

function submitClick() {
    let serverAdress = "localhost"
    let serverPort = 3000
    let serverURL = "http://" + serverAdress + ":" + serverPort
    
    
    
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE){
            document.getElementById("response").innerHTML = request.responseText;
            document.getElementById("query").hidden = true;
            document.getElementById("retry").hidden = false;
        }
    }

    
    let URL = document.getElementById("playlistURL").value;
    
    //let APIRequest = formURL();

    //request.addEventListener("load", reqListener);
    
    //TODO: change back to APIRequest
    request.open("GET", serverURL);
    
    request.send();
    
}



function  formURL() {
    let APIRequest = null;
    if (document.getElementById("Spotify").checked == true){
        APIRequest = "https://open.spotify.com/playlist/";
        let playlistID = URL.slice(URL.searh("playlist/")+9,URL.length);
    
        APIRequest += playlistID + "/tracks";
    }
    else
    {
        APIRequest = "api.soundcloud.com";
    }
    return APIRequest;

}


function retryButtonClick() {
    document.getElementById("response").innerHTML = null;
    document.getElementById("query").hidden = false;
    document.getElementById("retry").hidden = true;
}

function guessChoice(radioButtonChecked) {
    if (radioButtonChecked == 0){
        document.getElementById("additionalInfoforGuessChoice").innerHTML = 'hangman mode?: <input type="checkbox" id="hangmanMode"/>';
    } else if (radioButtonChecked == 1){
        document.getElementById("additionalInfoforGuessChoice").innerHTML = 'Number of Artists? (2-12): <input type="number" id="ArtistsChoices" size="1" max="12" min="2"/>';
    } else if (radioButtonChecked == 2){
        document.getElementById("additionalInfoforGuessChoice").innerHTML = 'Number of Albums? (2-12): <input type="number" id="AlbumChoices" size="1" max="12" min="2"/>';
    } else {
        document.getElementById("additionalInfoforGuessChoice").innerHTML = "how?";
    }
}
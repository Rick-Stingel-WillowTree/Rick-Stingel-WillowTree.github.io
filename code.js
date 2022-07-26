let serverAdress = "localhost"
let serverPort = 3000
let serverURL = "http://" + serverAdress + ":" + serverPort

function submitClick() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE){
            document.getElementById("response").innerHTML = request.responseText;
            document.getElementById("query").hidden = true;
            document.getElementById("retry").hidden = false;
            
        }
    }
    
    
    createLobbyCode();
    let APIRequest = formAPIRequest();
    
    request.open("GET", serverURL + '/spotifyPlaylist?' + APIRequest);
    
    request.send();
    
}


function grabClick(){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE){
            document.getElementById("response").innerHTML = request.responseText;
            document.getElementById("query").hidden = true;
            document.getElementById("retry").hidden = false;
            
        }
    }
    let APIRequest = formAPIRequest();
    
    request.open("GET", serverURL + '/spotifyPlaylist?' + APIRequest + "/tracks");

    request.send();

}

function publicLobby(APIRequest){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE){
            document.getElementById("response").innerHTML = request.responseText;
            document.getElementById("query").hidden = true;
            document.getElementById("retry").hidden = false;
        }
    }
    
    request.open("GET", serverURL + '/spotifyPlaylist?spotifyPlaylistID=' + APIRequest);
    
    request.send();
}



function  formAPIRequest() {
    let APIRequest = null;
    if (document.getElementById("playlistURL").value.includes("spotify")){
        fullString = document.getElementById("playlistURL").value;
        let playlistID = fullString.slice(fullString.search("playlist/")+9,fullString.length);
    
        APIRequest = 'spotifyPlaylistID=' + playlistID;
    }
    else if (document.getElementById("playlistURL").value.includes("soundcloud"))
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

function pageLoad(){
    document.getElementById("Name").checked = true;
    guessChoice("0")
}

function joinLobbyClick(){
    return false
}

function createLobbyCode(){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE){
            document.getElementById("lobbyCode").innerHTML = request.responseText;
        }
    }
    
    request.open("GET", serverURL + '/createLobbyCode');
    
    request.send();
}

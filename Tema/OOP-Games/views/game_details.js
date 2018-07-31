window.addEventListener("load", function() {
  var containerEl = document.getElementById("game-details");
  
  var game = new Game();
  var gameId = getUrlParameter("gameId");
  game.id = gameId;
  
  game.getGameDetails().then(function(response) {
        
    displayGameDetails(game);
    function displayGameDetails(gameDetails) {
      
      var titleEl = document.createElement('h1');
      titleEl.innerHTML = gameDetails.title;
      containerEl.appendChild(titleEl);
      
      var imageEl = document.createElement('IMG');
        imageEl.setAttribute("src", gameDetails.imageUrl);
        imageEl.setAttribute("height", "400");
        imageEl.setAttribute("alt", "Game Image here");
      containerEl.appendChild(imageEl);
        
      var bodyEl = document.createElement('p');
      bodyEl.innerHTML = gameDetails.description;
      containerEl.appendChild(bodyEl);
      
    }
  });
  
  
  /**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
      */
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
});
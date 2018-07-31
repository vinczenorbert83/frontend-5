window.addEventListener("load", function() {
  var containerElement = document.getElementById("games-list");
  
  var gamesModel = new Games();
  gamesModel.getAll().then(function(response) {
    displayAllGames(response);
    console.log(response);
  });
  
  function displayAllGames(gamesData) {
    for (var i = 0; i < gamesData.length; i++) {
      var game = new Game(gamesData[i]);
      displayGame(game);
    }
  }
  
  function displayGame(game) {
    var liEl = document.createElement('li');
    liEl.style = "list-style-type: none;";
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = game.title;
    
    titleEl.addEventListener("mouseover", function () {
      titleEl.style = "cursor: pointer;";
    });
        
    titleEl.addEventListener("click", function() {
      window.location = "http://cursuri-norbertvincze804524.codeanyapp.com/Tema/OOP-Games/templates/game.html?gameId=" + game.id;
    });
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = game.description;
    
    var idEl = document.createElement('p');
    idEl.innerHTML = game.id;
    
    var editBtn = document.createElement('button');
    editBtn.innerHTML = "   Edit   ";
    editBtn.setAttribute("id", "editBtn");
    editBtn.style.margin = "10px";

    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "  Delete  ";
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.style.margin = "10px";      
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    liEl.appendChild(editBtn);
    liEl.appendChild(deleteBtn);
   
    containerElement.appendChild(liEl); 
  }
});
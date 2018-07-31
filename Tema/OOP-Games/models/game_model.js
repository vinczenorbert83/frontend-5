function Game(options) {
  options = options || {};
  this.id = options._id;
  this.title = options.title;
  this.imageUrl = options.imageUrl;
  this.description = options.description;
}

Game.prototype.getGameDetails = function() {
  var that = this;
  return $.get("https://games-world.herokuapp.com/games/" + this.id)
    .then(function(response) {
      that.title = response.title;
      that.imageUrl = response.imageUrl;
      that.description = response.description;  
  })
}

Game.prototype.putGameDetails = function() {
  var that = this;
  return $.put("https://games-world.herokuapp.com/games/" + this.id)
    .then(function(response) {
      that.title = response.title;
      that.imageUrl = response.imageUrl;
      that.description = response.description;  
  })
}
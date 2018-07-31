function Article(options) {
  options = options || {};
  this.id = options.id;
  this.title = options.title;
  this.body = options.body;
  this.userId = options.userId;
}

Article.prototype.getArticleDetails = function() {
  
  return $.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
  
}
$(onHtmlLoaded)

function onHtmlLoaded() {

var loadPosts = function() {
  
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      success: function(data) {
        console.log("Post = ", data);
    }
  });
  }

var loadPost = function(id) {
  
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      success: function(data) {
        console.log("Post = ", data);
    }
  });
  }
// CREATE A POST
  var createPost = function() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      data: {
        title: "Post by Anca",
        body: "bla bla bla",
        userId: 1,
      },
      success: function(data) {
        console.log("Create post", data);
        console.log("Create post with id", data.id);
      }
    })  
  }
  // UPDATE A POST
  
    var editPost = function(id){
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        method: "PUT",
        data: {
          title: "Edited post",
          body: "Edited content",
          userId: 1,
          },
        success: function(data) {
          console.log("Update post", data);
        }
      });
    }
  
  // DELETE A POST
    var deletePost = function(id){
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        method: "DELETE",
        success: function() {
          console.log("Post was deleted")
        }
      })
    }
    
  loadPosts();
  loadPost(5);
  loadPost(10);
  loadPost(50);
  
  createPost();
  
  editPost(1);
  editPost(10);
  
  deletePost(4);

}
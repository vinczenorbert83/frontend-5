$(onHtmlLoaded)

function onHtmlLoaded() {
  var apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  
  //GET POSTS LISTS
  getPosts();
  
  // DELETE POST ON CLICK
  $('#deletePost').on('click', deletePost); // deletePost() WRONG - IT SHOULD BE EXECUTED ON CLICK ONLY AND NOT BEFORE
  
    function deletePost(){
  // GET INPUT VALUE ONLY AFTER CLICK
      var id = $('[name="delete"]').val();
      $.ajax({
        url: apiUrl + id,
        method: "DELETE",
        success: function() {
          alert("Post with id" + id + " deleted");
        }
      })
    }
  // ADD POST ON CLICK
  
  $('#addPost').on('click', addPost);
    function addPost(){
      var titleAdd = $('[name="createTitle"]').val();
      var bodyAdd = $('[name="createBody"]').val();
      var userAdd = $('[name="createUser"]').val();
      $.ajax({
      url: apiUrl,
      method: "POST",
      data: {
        title: titleAdd,
        body: bodyAdd,
        userId: userAdd,
      },
       success: function() {
          alert("Post with title" + title + " created"); // NO ALERT. BUGFIXING NEEDED???
        }
    })
    }
  
  // MODIFY POST ON CLICK
  
  $('#modifyPost').on('click', modifyPost);
    function modifyPost(){
      var idModify = $('[name="modifyId"]').val();
      var titleModify = $('[name="modifyTitle"]').val();
      var bodyModify = $('[name="modifyBody"]').val();
      var userModify = $('[name="modifyUser"]').val();
      $.ajax({
        url: apiUrl + idModify,
        method: "PUT",
        data: {
          title: titleModify,
          body: bodyModify,
          userId: userModify,
          },
        success: function() {
          alert("Post with title" + title + " modified"); // NO ALERT. REQUEST METHOD: OPTIONS AND PUT, 200 AND 204
        }
      });
      
    }
  
  
  function getPosts(){
   var listContainer = $('#listPosts');
   $.ajax({
     url: apiUrl,
     success: function(response) {
     //  console.log("RESPONSE ", response);
       for (var i=0; i<response.length; i++) {
     //  console.log(response[i].title);
         var title = "<h3>" + response[i].title + "</h3>";
         listContainer.append(title);
       }
     }
   })
 } 
}
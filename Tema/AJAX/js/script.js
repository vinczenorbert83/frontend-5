$(onHtmlLoaded)

function onHtmlLoaded() {
  var apiUrl = "https://jsonplaceholder.typicode.com/posts/";

getPosts();

function getPosts(){
   var listContainer = $('#listPosts');
   $.ajax({
     url: apiUrl,
     success: function(response) {
         for (var i=0; i<response.length; i++) {
         var title = "<h3>" + response[i].title + "</h3>";
         listContainer.append(title);
       }
     }
   })
 } 
}
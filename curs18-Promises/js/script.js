$(domLoaded)

function domLoaded() {

  $('#button1').click(getPostsAndComments)  

  function getPostsAndComments(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET'
    })
    .then(function(posts){
//      console.log('result is:' result);
       var html = '<ul>'      
       for (var i=0; i<10; i++) {
       var postId = posts[i].id;
       html +='<li>';
       html +='<div>' + posts[i].title + '</div>';
       html += '<ol id="post_id_' + postId + '">' + '</ol>'
       html += '</li>'
       getCommentsPost(postId);
      }
     html += '</ul>'
     $('.content').html(html);
   })
 }
function getCommentsPost(postId){
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments',
    method: 'GET'
    })
 .then(function(comments){
    var commentsList ="";
    var maxComments = comments.length > 10 ? 10 : comments.length;
      for (var i=0; i<comments.length; i++) {
        commentsList += '<li>' + comments[i].name + '</li>';
        }       
    $('#post_id_' + postId).html(commentsList)    
    console.log('comments are:', comments)
   })
 }
  
}
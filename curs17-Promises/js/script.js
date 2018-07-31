$(
  function () { 
    $('#button1').on(
      'click', 
      function() {
        $('#spinner').css('visibility', 'visible');

        getName(
          function(fName) {
            $('#spinner').css('visibility', 'hidden');
            $('.content').html('numele este ' + fullName);
          }
        )    
      }
    )
  }
)


// $(function() {
//   func2(function() {
//     func3(function() {
//       func4(function(){
//         func5(function() {
          
//         })
//       })
//     })
//   })
// })


// $(function() {
//   var res2 = func2()
//   var res3 = func3(res2)
//   var res4 = func4(res3)
//   var res5 = func5(res4)
// })
$(onLoad2)

function onLoad2() {
  $('#button2').on('click', getPosts)

  function getPosts() {
  
    var ajaxPromise = $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET'
    })
    
    ajaxPromise.then(function(result) {
      var firstResult = result[0]
      console.log('firstResult', firstResult)
    })
    
    ajaxPromise.then(function(result) {
      var secondResult = result[2]
      console.log('second result', secondResult)
    })
    
  }
}

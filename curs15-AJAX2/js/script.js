$(domLoaded)

function domLoaded() {
  console.log('Dom loaded')
  
  
  
  var getShowsData = function (dynamicValue) {
    $.ajax({
      url: 'http://api.tvmaze.com/search/shows?q=' + dynamicValue,
      method: 'GET',
      success: manageData
    })
  }
  
  $('#invoke-ajax-test-call').on('click', function() {
    var query = $('[name="query"').val()
    getShowsData(query)
  })
  
  function manageData (data, textStatus, jqXHR) {
    $(".container").html(renderHtml(data))
  }
  
  function renderHtml (data) {
    var html = `<ul>`
    for (i = 0; i<data.length; i++) {
//     console.log('Title', data[i].show.name);
     var name = data[i].show.name;
     var score = data[i].score;
     var url = data[i].show.url;
     html += `<li>` + 'Name: ' + name + ', ' + 'Score: ' + score + ', ' + 'URL: ' + '<a href="' + url + '"target="_blank">View page</a>' + `</li>`
     console.log(data[i].score)
     console.log(data[i].show.url) 
    }
    
    html += `</ul>`
    return html;
  }
  
  

 
}
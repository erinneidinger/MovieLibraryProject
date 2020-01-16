// var moviesAll = $('#movies');
//var movieTemplate = "" + "<li>" + "<p>title: {{title}}</p>" + 
//"<p>genre: {{genre}}</p>" + "<p>director: {{director}}</p>" + "<li>";

function FindMovies(){
    $(document).ready(function(){
        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            dataType: 'json',
            type: 'GET',
            contentType: 'application/json',
            success: function(dict){
                $(".movieData").html("");
                $.each(dict, function(i, dict){
                    $(".movieData").append(
                    "<tr><td>"+ dict.Title + "</td>" +
                    "<td>"+ dict.Genre + "</td>" +
                    "<td>"+ dict.Director + "</td></tr>" 
                    
                   );
               });               
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
}
function movieAddRow(dict){
    
    $("#addingmovies").append(
        "<tr>" + "<td>" + dict.Title + "</td>" + "<td>" + dict.Genre + "</td>" + "<td>" + dict.Director + "</td>" + "</tr>");
}
function addMovie(dict) 
{
    var data = {
        "Title": document.getElementById("title").value,
        "Genre": document.getElementById("genre").value,
        "Director": document.getElementById("director").value,
    }
    $(document).ready(function(){
    $.ajax({
        url: 'https://localhost:44352/api/Movie',
        type: 'POST',
        dataType: 'json',
        data: data,
    }).then(function(){
        FindMovies();
    });
});
}

   function putForm(id) {
            var dict = {
                Title: this["title"].value,
                 Genre: this["genre"].value,
                Director: this["director"].value
            };

            $.ajax({
                url: 'https://localhost:44352/api/Movie/' + id,
                dataType: 'json',
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(dict),
                success: function () {
                    console.log("success!");
                    $('title').val('');
                     $('genre').val('');
                    $('director').val('');
                   
                     FindMovies();
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        }

function deleteMovie(id){
    $.moviesAll.delegate('.remove', 'click', function(){
        var $li = $(this).closest('li');
    
        $.ajax({
            type: 'DELETE',
            url: 'https://localhost:44352/api/Movie/' + id,
            success: function (){
                $li.fadOut(300, function(){
                    $(this).remove();
                });
            }
        });
    });
}

// function editMovie(id){
//     var data = {
//         "Title": document.getElementById("title").value,
//         "Genre": document.getElementById("genre").value,
//         "Director": document.getElementById("director").value,
//     }

// moviesAll.delegate('.editDetails', 'click', function(){
//     var $li = $(this).closet('li');
//     $li.find('input.title').val($li.find('span.title').html());
//     $li.find('input.genre').val($li.find('span.genre').html());
//     $li.find('input.director').val($li.find('span.director').html());
//     $li.addClass('edit');
// })

// moviesAll.delegate('.cancelEdit', 'click', function(){
//    $(this).closert('li').removeClass('edit');
// })

// moviesAll.delegate('.saveEdit', 'click', function(){
//     var $li = $(this).closest('li');
//     var movie = {
//         Title: $li.find('input.title').val(),
//         Genre: $li.find('input.genre').val(),
//         Director: $li.find('input.director').val(),
//     };
// $.ajax({
//     url: 'https://localhost:44352/api/Movie/' + $li.attr('data-id'),
//     dataType: 'json',
//     type: 'PUT',
//     data: movie,
//     success: function(){
//         $li.find('span.title').html(movie.Title);
//         $li.find('span.genre').html(movie.Genre);
//         $li.find('span.director').html(movie.Director);
//         $li.removeClass('edit');
//     },
//     error: function(jqXhr, textStatus, errorThrown){
//             console.log( errorThrown );
//     }
    
// });

// });
// }

               
          
(jQuery);

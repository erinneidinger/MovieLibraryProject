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
function editMovie(dict){
   
        
    $.ajax({
        url: 'https://localhost:44352/api/Movie',
        dataType: 'json',
        type: 'PUT',
        contentType: 'application/json',
        success: function(dict){
            
        },
        error: function (request, message, error){
            handleException(request, message, error);
        }
    });
}
$updatingmovies.delegate('.remove', 'click', function(){
    var $li = $(this).closest('li');
    var self = this;
    $.ajax({
        type
    })
})
    //delete movie from table
    // function deleteButton(dict){
    //     $.ajax({
    //         url: 'https://localhost:44352/api/Movie',
    //         dataType: 'json',
    //         type: 'DELETE',
    //         contentType: 'application/json',
    //         success: function(dict){
    //             //fill in logic here
    //         },
    //         error: function (request, message, error){
    //             handleException(request, message, error);
    //         }
    //     });
    // }
//(jQuery);

   function putForm(e) {
            var dict = {
                Title: this["title"].value,
                 Genre: this["genre"].value,
                Director: this["director"].value
               
                
            };

            $.ajax({
                url: 'https://localhost:44352/api/movie',
                dataType: 'json',
                type: 'put',
                contentType: 'application/json',
                data: JSON.stringify(dict),
                success: function (data, textStatus, jQxhr) {
                    console.log("success?");
                    $('#title').val('');
                     $('#genre').val('');
                    $('#director').val('');
                   
                     FindMovies();

                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
            e.preventDefault();

        }


               
          
(jQuery);


var dict = {
    Title : this["title"],
    Genre : this["genre"],
    Director: this["director"],
}
        

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
    
    if($("#movieTable tbody").length == 0){
        $("#movieTable tbody").append()("<tbody></tbody>");
    }
    $("#movieTable tbody").append(
        movieBuildTableRow(dict));
}

function movieBuildTableRow(dict){
    var ret = 
    "<tr>" + "<td>" + dict.Title + "</td>" + "<td>" + dict.Genre + "</td>" + "<td>" + dict.Director + "</td>" + "</tr>";
    return ret;
}

function addMovie(dict) 
{
    $.ajax({
        url: 'https://localhost:44352/api/Movie',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        success: function( data, textStatus, jQxhr ){
            $("#my-form");
            movieAddRow(dict);
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function editEdit(dict){
    $.ajax({
        url: 'https://localhost:44352/api/Movie',
        dataType: 'json',
        type: 'PUT',
        contentType: 'application/json',
        success: function(data){
            //fill in logic here
        },
        error: function (request, message, error){
            handleException(request, message, error);
        }
    });


    }

    //delete movie from table
    function deleteButton(dict){
        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            dataType: 'json',
            type: 'DELETE',
            contentType: 'application/json',
            success: function(data){
                //fill in logic here
            },
            error: function (request, message, error){
                handleException(request, message, error);
            }
        });


        }

(jQuery);
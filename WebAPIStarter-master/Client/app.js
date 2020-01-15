(function($){
    function processForm( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
            Director: this["director"].value
        };

    //show available movies in table
    function getButton(dict){
        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function(data){
                $.each(data, function(i, data){
                    $movie.append('<li>Title: '+ data.Title +', Genre: '+ data.Genre +', Director: '+ data.Director + '</li>');
                    movieAddRow(data);
                });
            },
            error: function (request, message, error){
                handleException(request, message, error);
            }
        });

        e.preventDefault();
    }
    
    //add movie to table
    function addButton(dict) 
    {
        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    //edit movie info in table
    function editButton(dict){
        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function(data){
                //fill in logic here
            },
            error: function (request, message, error){
                handleException(request, message, error);
            }
        });

        e.preventDefault(); 
        }

    //delete movie from table
    function deleteButton(dict){
        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            dataType: 'json',
            type: 'delete',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function(data){
                //fill in logic here
            },
            error: function (request, message, error){
                handleException(request, message, error);
            }
        });

        e.preventDefault(); 
        }
    }

    function formClear(dict){
        $.ajax({
            // $(#"title").val(""),
            // $("#genre").val(""),
            // $("#director").val(""),
        })
    }

    $('#my-form').submit( processForm );
})(jQuery);
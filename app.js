(function($){
    function processForm( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
            Director: this["director"].value
        };

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
        
        $
    }

    $('#my-form').submit( processForm );
})(jQuery);
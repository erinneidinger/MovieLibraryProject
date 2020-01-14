<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


function movieList(){
    $.ajax({
        type: 'GET',
        url: '/api/Movie',
        success: function(movie){
            $.each(movie, function(i, movie){
                $movie.append('<li>Title: '+ movie.Title +', Genre: '+ movie.Genre +', Director: '+ movie.Director + '</li>');
            });
        }
    })
}

$function addClick(){

}

    $function updateClick(){
        movie = new Movie();
        movie.Title = $("#Title").val();
        movie.Genre = $("#Genre").val();
        movie.Director = $("#Director").val();
        if($"updateButton").text().trim()== "Add"){
            movieAdd(movie)
        }
    }
    $function movieAdd(movie){
        $.ajax({
            type: 'POST',
            url: '/api/Movie',
            contentType: "application/json;charset=ut-8",
            data: JSON.stringify(movie),
            success: function(movie){
                $.each(movie, function(i, movie){
                    $movie.append('<li>Title: '+ movie.Title +', Genre: '+ movie.Genre +', Director: '+ movie.Director + '</li>');
                });
            },
            error: function(request, message, error){
                handleException(request, message, error);
            }
        })
    }
    $ movie
    $function formClear(){
        $
    }


   $(document).ready(function(){
       movieList()
   })
    
})
</head>
</html>
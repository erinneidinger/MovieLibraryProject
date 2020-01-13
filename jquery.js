<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
$(function (){
    var $movies = $('#movies');

    $.ajax({
        type: 'GET',
        url: '',
        success: function(movies){
            $.each(movies, function(i, movie){
                $movies.append('<li>name: '+ movie.Title +', genre: '+ movie.Genre +', director: '+ movie.directorName + '</li>');
            })
        }
    })
    
})
</head>
</html>
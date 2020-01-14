<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
$(function (){
    var movies = [
        {
            "Title": "The Departed",
            "Genre": "Drama",
            "Director": "Martin Scorsese",
        }
        {
            "Title": "The Dark Knight",
            "Genre": "Drama",
            "Director": "Christopher Nolan",
        }
        {
            "Title": "Inception",
            "Genre": "Drama",
            "Director": "Christopher Nolan",
        }
        {
            "Title": "Pineapple Express",
            "Genre": "Comedy",
            "Director": "David Gordan Green",
        }
        {
            "Title": "Die Hard",
            "Genre": "Action",
            "Director": "John McTiernan",
        }
    ]
    
    $function updateClick(){

    }
    $function addClick(){

    }

    function movieList(){
        $.ajax({
            type: 'GET',
            url: '/api/Movies',
            success: function(movies){
                $.each(movies, function(i, movie){
                    $movies.append('<li>Title: '+ movie.Title +', Genre: '+ movie.Genre +', Director: '+ movie.Director + '</li>');
                });
            }
        })
    }
   $(document).ready(function(){
       movieList()
   })
    
})
</head>
</html>
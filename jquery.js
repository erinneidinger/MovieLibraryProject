<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
$(function (){
    var movies = [
        {
            "Title": "The Departed",
            "Genre": "Drama",
            "DirectorName": "Martin Scorsese",
        }
        {
            "Title": "The Dark Knight",
            "genre": "Drama",
            "directorName": "Christopher Nolan",
        }
        {
            "title": "Inception",
            "genre": "Drama",
            "directorName": "Christopher Nolan",
        }
        {
            "title": "Pineapple Express",
            "genre": "Comedy",
            "directorName": "David Gordan Green",
        }
        {
            "title": "Die Hard",
            "genre": "Action",
            "directorName": "John McTiernan",
        }
    ]

    $.ajax({
        type: 'GET',
        url: 'index.html',
        success: function(movies){
            $.each(movies, function(i, movie){
                $movies.append('<li>name: '+ movie.Title +', genre: '+ movie.Genre +', director: '+ movie.directorName + '</li>');
            })
        }
    })
    
})
</head>
</html>
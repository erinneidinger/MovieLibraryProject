
function processForm( e ){
            var dict = {
                Title : this["title"].value,
                Genre : this["genre"].value,
                Director: this["director"].value
            }
        }

    $(document).ready(function(){
        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            dataType: 'json',
            type: 'GET',
            contentType: 'application/json',
            success: function(dict){
                console.log(dict);
                $(".movieData").html("");
            },
        });


// (function($){
//     

//     //show available movies in table
//     function FindMovies(dict){
//         $(document).ready(function(){
//             $.ajax({
//                 url: 'https://localhost:44352/api/Movie',
//                 dataType: 'json',
//                 type: 'GET',
//                 contentType: 'application/json',
//                 success: function(dict){
//                     console.log(dict);
//                     $(".movieData").html("");
//                 },
//             });
          

//             // $.then{
//             //     $(".movieData").append(
//             //     $.each(dict, function(i, dict){
//             //         "<tr>" +
//             //         "<td>"dict.Title.value"</td>" +
//             //         "<td>"dict.Genre"</td>" +
//             //         "<td>"dict.Director"</td>"
//             //         "</tr>"
//             //         );
//             //     });
//             // }
//             //     movieAddRow(data);
//             //     e.preventDefault();
//             // }
//         });
//     }
    
//     function movieAddRow(data){
//         if($("#movieTable tbody").length == 0){
//             $("#movieTable tbody").append()("<tbody></tbody>");
//         }
//         $("#movieTable tbody").append(
//             movieBuildTableRow(data));
//     }

//     function movieBuildTableRow(data){
//         var ret = 
//         "<tr>" + "<td>" + data.Title + "</td>" + "<td>" + data.Genre + "</td>" + "<td>" + data.Director + "</td>" + "</tr>";
//         return ret;
//     }

//     //add movie to table
//     function addMovie(dict) 
//     {
//         $.ajax({
//             url: 'https://localhost:44352/api/Movie',
//             dataType: 'json',
//             type: 'POST',
//             contentType: 'application/json',
//             success: function( data, textStatus, jQxhr ){
//                 $('#response pre').html( data );
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown );
//             }
//         });

//         e.preventDefault();
//     }

//     //edit movie info in table
//     function editEdit(dict){
//         $.ajax({
//             url: 'https://localhost:44352/api/Movie',
//             dataType: 'json',
//             type: 'PUT',
//             contentType: 'application/json',
//             success: function(data){
//                 //fill in logic here
//             },
//             error: function (request, message, error){
//                 handleException(request, message, error);
//             }
//         });

//         e.preventDefault(); 
//         }

//     //delete movie from table
//     function deleteButton(dict){
//         $.ajax({
//             url: 'https://localhost:44352/api/Movie',
//             dataType: 'json',
//             type: 'DELETE',
//             contentType: 'application/json',
//             success: function(data){
//                 //fill in logic here
//             },
//             error: function (request, message, error){
//                 handleException(request, message, error);
//             }
//         });

//         e.preventDefault(); 
//         }
    

//     function formClear(dict){
//         $.ajax({
//             // $(#"title").val(""),
//             // $("#genre").val(""),
//             // $("#director").val(""),
//         })
//     }

//     $('#my-form').submit( processForm );
// }

// })

// (jQuery);
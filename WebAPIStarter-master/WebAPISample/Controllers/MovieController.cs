using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Security;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;


namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        public ApplicationDbContext context = new ApplicationDbContext();
        List<Movie> movies = new List<Movie>();
        // GET api/values
        MovieController()
        {
          
            movies = context.Movies.ToList();
   
        }


        // GET api/values
        public async Task<IHttpActionResult> Get()
        {
            try
            {
                var movies = await Task.Run(() => context.Movies);

                return Ok(movies);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        // GET api/values/5
        public async Task<IHttpActionResult> Get(int id)
        {
            try
            {
                var movie = await Task.Run(() => context.Movies.Where(m => m.MovieId == id).Single());

                return Ok(movie);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        // GET api/values/5


        public IHttpActionResult Post([FromBody]Movie value)
        {
            try
            {
                context.Movies.Add(value);
                context.SaveChanges();

                return Ok(movies);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

        // PUT api/values/5
        public async Task<IHttpActionResult> Put([FromBody]Movie value)
        {
            try
            {
                var movieToUpdate = context.Movies.Find(value.MovieId);

                movieToUpdate.Title = value.Title ?? movieToUpdate.Title;
                movieToUpdate.Genre = value.Genre ?? movieToUpdate.Genre;
                movieToUpdate.Director = value.Director ?? movieToUpdate.Director;
               // movieToUpdate.ImageUrl = value.ImageUrl ?? movieToUpdate.ImageUrl;
                var movie = await context.SaveChangesAsync();

                return Ok(movie);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // DELETE api/values/5
        public async Task<IHttpActionResult> Delete(int id)
        {
            // Delete movie from db logic
            try
            {
                context.Movies.Remove(context.Movies.FirstOrDefault(h => h.MovieId == id));
                var movie = await context.SaveChangesAsync();
                return Ok(movie);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }

}
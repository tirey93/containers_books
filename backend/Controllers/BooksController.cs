using ContainerBackend.Entities;
using ContainerBackend.Responses;
using Meilisearch;
using Microsoft.AspNetCore.Mvc;

namespace ContainerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly AppDbContext _appDbContext;

        public BooksController(IConfiguration configuration, AppDbContext appDbContext)
        {
            _configuration = configuration;
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public IEnumerable<BookResponse> Get()
        {
            Console.WriteLine("In Get2");
            //return new List<BookResponse>
            //{
            //    new BookResponse
            //    {
            //        Id = 1,
            //        Title = "Harry Potter1",
            //        Author = "J.K. Rowling",
            //        Pages = 724,
            //        ReleaseYear = 2001,
            //        Cover = "hard"
            //    },
            //    new BookResponse
            //    {
            //        Id = 2,
            //        Title = "Hobbit",
            //        Author = "J. R. R. Tolkien",
            //        Pages = 1088,
            //        ReleaseYear = 1955,
            //        Cover = "soft"
            //    },
            //    new BookResponse
            //    {
            //        Id = 3,
            //        Title = "Wiedźmin: Ostatnie życzenie",
            //        Author = "Andrzej Sapkowski",
            //        Pages = 328,
            //        ReleaseYear = 1993,
            //        Cover = "soft"
            //    },
            //};
            return _appDbContext.Books.Select(x => x.ToResponse());
        }
    }
}

using ContainerBackend.Responses;
using Microsoft.AspNetCore.Mvc;

namespace ContainerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<BookResponse> Get()
        {
            return new List<BookResponse>
            {
                new BookResponse
                {
                    Id = 1,
                    Title = "Harry Potter",
                    Author = "J.K. Rowling",
                    Pages = 724,
                    ReleaseYear = 2001,
                    Cover = "hard"
                },
                new BookResponse
                {
                    Id = 2,
                    Title = "Hobbit",
                    Author = "J. R. R. Tolkien",
                    Pages = 1088,
                    ReleaseYear = 1955,
                    Cover = "soft"
                },
                new BookResponse
                {
                    Id = 3,
                    Title = "Wiedźmin: Ostatnie życzenie",
                    Author = "Andrzej Sapkowski",
                    Pages = 328,
                    ReleaseYear = 1993,
                    Cover = "soft"
                },
            };
        }
    }
}

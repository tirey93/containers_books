using ContainerBackend.Responses;
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
        public async Task<IEnumerable<BookResponse>> Get()
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

        private async Task Connect()
        {
            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "J.K. Rowling",
                Title = "Harry Potter",
                Pages = 724,
                ReleaseYear = 2001,
                Cover = "hard"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "J. R. R. Tolkien",
                Title = "Hobbit",
                Pages = 1088,
                ReleaseYear = 1955,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Andrzej Sapkowski",
                Title = "Wiedźmin: Ostatnie życzenie",
                Pages = 328,
                ReleaseYear = 1993,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Dmitry Glukhovsky",
                Title = "Metro 2033",
                Pages = 480,
                ReleaseYear = 2005,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Frank Herbert",
                Title = "Diuna",
                Pages = 604,
                ReleaseYear = 1965,
                Cover = "hard"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Andrzej Sapkowski",
                Title = "Trylogia Husycka",
                Pages = 988,
                ReleaseYear = 1996,
                Cover = "hard"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "George Orwell",
                Title = "Rok 1984",
                Pages = 328,
                ReleaseYear = 1949,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Harper Lee",
                Title = "Zabić drozda",
                Pages = 281,
                ReleaseYear = 1960,
                Cover = "hard"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Jane Austen",
                Title = "Duma i uprzedzenie",
                Pages = 432,
                ReleaseYear = 1813,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Gabriel García Márquez",
                Title = "Sto lat samotności",
                Pages = 417,
                ReleaseYear = 1967,
                Cover = "hard"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Stephen King",
                Title = "Lśnienie",
                Pages = 447,
                ReleaseYear = 1977,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Agatha Christie",
                Title = "I nie było już nikogo",
                Pages = 256,
                ReleaseYear = 1939,
                Cover = "hard"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Neil Gaiman",
                Title = "Amerykańscy bogowie",
                Pages = 635,
                ReleaseYear = 2001,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Ursula K. Le Guin",
                Title = "Lewa ręka ciemności",
                Pages = 304,
                ReleaseYear = 1969,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Terry Pratchett",
                Title = "Kolor magii",
                Pages = 288,
                ReleaseYear = 1983,
                Cover = "soft"
            });

            _appDbContext.Books.Add(new Entities.Book
            {
                Author = "Brandon Sanderson",
                Title = "Droga królów",
                Pages = 1007,
                ReleaseYear = 2010,
                Cover = "hard"
            });


            await _appDbContext.SaveChangesAsync();
        }
    }
}

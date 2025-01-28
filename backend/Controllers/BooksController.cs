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
        public IEnumerable<BookResponse> Get([FromQuery] string cover)
        {
            if (cover != null) 
                return _appDbContext.Books.Where(book => book.Cover == cover && !book.IsDeleted).Select(x => x.ToResponse());
            return _appDbContext.Books.Where(x => !x.IsDeleted).Select(x => x.ToResponse());
        }

        [HttpGet]
        [Route("search/{query}")]
        public IEnumerable<BookResponse> GetSearch(string query, [FromQuery] string cover)
        {
            return _appDbContext.Books
                .Where(x => x.Title.Contains(query) || x.Author.Contains(query))
                .Where(x => cover == "none" || x.Cover == cover)
                .Where(x => !x.IsDeleted)
                .Select(x => x.ToResponse());
        }
       
        [HttpGet]
        [Route("{id:int}")]
        public BookResponse GetById(int id)
        {
            return _appDbContext.Books.FirstOrDefault(x => x.Id == id && !x.IsDeleted).ToResponse();
        }

        [HttpPost]
        public void Add(Book book)
        {
            _appDbContext.Books.Add(book);
            _appDbContext.SaveChanges();
        }

        [HttpPut]
        [Route("{id:int}")]
        public void Edit(int id, Book book)
        {
            var entity = _appDbContext.Books.FirstOrDefault(x => x.Id == id);

            entity.Author = book.Author;
            entity.Title = book.Title;
            entity.Cover = book.Cover;
            entity.Pages = book.Pages;
            entity.ReleaseYear = book.ReleaseYear;

            _appDbContext.SaveChanges();
        }

        [HttpDelete]
        [Route("{id:int}")]
        public void Delete(int id)
        {
            var entity = _appDbContext.Books.FirstOrDefault(x => x.Id == id);

            entity.IsDeleted = true;
            _appDbContext.SaveChanges();
        }


        [HttpPost]
        [Route("{id:int}")]
        public void Retrive(int id)
        {
            var entity = _appDbContext.Books.FirstOrDefault(x => x.Id == id);
            entity.IsDeleted = false;
            _appDbContext.SaveChanges();
        }
    }
}

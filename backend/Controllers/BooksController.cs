using ContainerBackend.Entities;
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
        public IEnumerable<BookResponse> Get()
        {
            return _appDbContext.Books.Select(x => x.ToResponse());
        }
    }
}

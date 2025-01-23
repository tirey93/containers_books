using ContainerBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace ContainerBackend
{
    public class AppDbContext : DbContext
    {
        public DbSet<Book> Books { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    }
}

using System.ComponentModel.DataAnnotations;

namespace ContainerBackend.Entities
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Pages { get; set; }
        public int ReleaseYear { get; set; }
        public string Cover { get; set; }
    }
}

using ContainerBackend.Entities;

namespace ContainerBackend
{
    public class FeedDb
    {
        public static void FeedBooks(AppDbContext dbContext)
        {
            dbContext.Books.Add(new Entities.Book
            {
                Author = "J.K. Rowling",
                Title = "Harry Potter",
                Pages = 724,
                ReleaseYear = 2001,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "J. R. R. Tolkien",
                Title = "Hobbit",
                Pages = 1088,
                ReleaseYear = 1955,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Andrzej Sapkowski",
                Title = "Wiedźmin: Ostatnie życzenie",
                Pages = 328,
                ReleaseYear = 1993,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Dmitry Glukhovsky",
                Title = "Metro 2033",
                Pages = 480,
                ReleaseYear = 2005,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Frank Herbert",
                Title = "Diuna",
                Pages = 604,
                ReleaseYear = 1965,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Andrzej Sapkowski",
                Title = "Trylogia Husycka",
                Pages = 988,
                ReleaseYear = 1996,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "George Orwell",
                Title = "Rok 1984",
                Pages = 328,
                ReleaseYear = 1949,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Harper Lee",
                Title = "Zabić drozda",
                Pages = 281,
                ReleaseYear = 1960,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Jane Austen",
                Title = "Duma i uprzedzenie",
                Pages = 432,
                ReleaseYear = 1813,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Gabriel García Márquez",
                Title = "Sto lat samotności",
                Pages = 417,
                ReleaseYear = 1967,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Stephen King",
                Title = "Lśnienie",
                Pages = 447,
                ReleaseYear = 1977,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Agatha Christie",
                Title = "I nie było już nikogo",
                Pages = 256,
                ReleaseYear = 1939,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Neil Gaiman",
                Title = "Amerykańscy bogowie",
                Pages = 635,
                ReleaseYear = 2001,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Ursula K. Le Guin",
                Title = "Lewa ręka ciemności",
                Pages = 304,
                ReleaseYear = 1969,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Terry Pratchett",
                Title = "Kolor magii",
                Pages = 288,
                ReleaseYear = 1983,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Brandon Sanderson",
                Title = "Droga królów",
                Pages = 1007,
                ReleaseYear = 2010,
                Cover = "hard"
            });
            dbContext.Books.Add(new Entities.Book
            {
                Author = "Philip K. Dick",
                Title = "Czy androidy śnią o elektrycznych owcach?",
                Pages = 210,
                ReleaseYear = 1968,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Frank Herbert",
                Title = "Diuna",
                Pages = 604,
                ReleaseYear = 1965,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "J.R.R. Tolkien",
                Title = "Władca Pierścieni: Drużyna Pierścienia",
                Pages = 423,
                ReleaseYear = 1954,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "George Orwell",
                Title = "Rok 1984",
                Pages = 328,
                ReleaseYear = 1949,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Margaret Atwood",
                Title = "Opowieść podręcznej",
                Pages = 311,
                ReleaseYear = 1985,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Isaac Asimov",
                Title = "Fundacja",
                Pages = 256,
                ReleaseYear = 1951,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Stanisław Lem",
                Title = "Solaris",
                Pages = 224,
                ReleaseYear = 1961,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Harlan Ellison",
                Title = "Nie mam ust, a muszę krzyczeć",
                Pages = 288,
                ReleaseYear = 1967,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Dan Simmons",
                Title = "Hyperion",
                Pages = 608,
                ReleaseYear = 1989,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "China Miéville",
                Title = "Dworzec Perdido",
                Pages = 650,
                ReleaseYear = 2000,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Douglas Adams",
                Title = "Autostopem przez Galaktykę",
                Pages = 224,
                ReleaseYear = 1979,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Isaac Asimov",
                Title = "Ja, Robot",
                Pages = 253,
                ReleaseYear = 1950,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "William Gibson",
                Title = "Neuromancer",
                Pages = 318,
                ReleaseYear = 1984,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Philip K. Dick",
                Title = "Człowiek z Wysokiego Zamku",
                Pages = 259,
                ReleaseYear = 1962,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Ursula K. Le Guin",
                Title = "Czarnoksiężnik z Archipelagu",
                Pages = 184,
                ReleaseYear = 1968,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Aldous Huxley",
                Title = "Nowy wspaniały świat",
                Pages = 311,
                ReleaseYear = 1932,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Ray Bradbury",
                Title = "451 stopni Fahrenheita",
                Pages = 249,
                ReleaseYear = 1953,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Arthur C. Clarke",
                Title = "2001: Odyseja kosmiczna",
                Pages = 221,
                ReleaseYear = 1968,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Kurt Vonnegut",
                Title = "Rzeźnia numer pięć",
                Pages = 275,
                ReleaseYear = 1969,
                Cover = "soft"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "J.R.R. Tolkien",
                Title = "Hobbit, czyli tam i z powrotem",
                Pages = 310,
                ReleaseYear = 1937,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Andrzej Sapkowski",
                Title = "Krew elfów",
                Pages = 344,
                ReleaseYear = 1994,
                Cover = "soft"
            });
            dbContext.Books.Add(new Entities.Book
            {
                Author = "Suzanne Collins",
                Title = "Igrzyska śmierci",
                Pages = 374,
                ReleaseYear = 2008,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Stephenie Meyer",
                Title = "Zmierzch",
                Pages = 498,
                ReleaseYear = 2005,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Veronica Roth",
                Title = "Niezgodna",
                Pages = 487,
                ReleaseYear = 2011,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Cassandra Clare",
                Title = "Miasto kości",
                Pages = 485,
                ReleaseYear = 2007,
                Cover = "hard"
            });

            dbContext.Books.Add(new Entities.Book
            {
                Author = "Rick Riordan",
                Title = "Percy Jackson i Złodziej Pioruna",
                Pages = 377,
                ReleaseYear = 2005,
                Cover = "hard"
            });
        }
    }
}

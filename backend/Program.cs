using ContainerBackend;
using ContainerBackend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options => options.UseMySQL(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddCors(options => {
    options.AddPolicy("cors", policy => {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseCors("cors");

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();



var maxRetryAttempts = 10;
var retryInterval = TimeSpan.FromSeconds(5);
for (int i = 0; i < maxRetryAttempts; i++)
{
    try
    {
        using (var scope = app.Services.CreateScope())
        {
            var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            dbContext.Database.EnsureCreated();

            dbContext.Books.ExecuteDelete();
            FeedDb.FeedBooks(dbContext);
            dbContext.SaveChanges();
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Attempt: {i + 1}/{maxRetryAttempts}: {ex.Message}");
        Thread.Sleep(retryInterval);
    }
}

app.Run();

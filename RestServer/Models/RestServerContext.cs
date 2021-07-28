using Microsoft.EntityFrameworkCore;

namespace RestServer.Models
{
  public class RestServerContext : DbContext
  {
    public virtual DbSet<Trip> Trips { get; set; }

    public RestServerContext(DbContextOptions options) : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseLazyLoadingProxies();
    }
  }
}
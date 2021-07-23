using System.Collections.Generic;

namespace RestServer.Models
{
  public class Location
  {
    public Location()
    {
      this.Locations = new HashSet<Photo>();
    }

    public int LocationId { get; set; }
    public string Name { get; set; }
  }
}
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using RestServer.Models;

// namespace RestServer.Controllers
// {
//   public class LocationsController : Controllers
//   {
//     private readonly TripContext _db;

//     public LocationsController(TripContext db)
//     {
//       _db = db;
//     }

//     [HttpPost]
//     public async Task<ActionResult<Location>> PostLocation(Location location)
//     {
//       _db.Locations.Add(loaction);
//       await _db.SaveChangesAsync();
//       return CreatedAtAction(nameof(LocationWithId),
//       new { id = location.id}, location);
//     }
//   }
// }
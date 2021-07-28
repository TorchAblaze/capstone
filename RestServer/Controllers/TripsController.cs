using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestServer.Models;

namespace RestServer.Controllers
{
  public class TripsController : Controller
  {
    private readonly RestServerContext _db;

    public TripsController(RestServerContext db)
    {
      _db = db;
    }

    private bool TripExists(int id) => _db.Trips.Any(trip => trip.Id == id);
    private async Task<Trip> TripWithId(int id) => await _db.Trips.FindAsync(id);

    [HttpGet("trips/")]
    public async Task<ActionResult<IEnumerable<Trip>>> GetAllTrips() => await _db.Trips.ToListAsync();

    [HttpGet("trips/{id}")]
    public async Task<ActionResult<Trip>> GetTrip(int id) => await TripWithId(id);

    [HttpPost("trips/")]
    public async Task<ActionResult<Trip>> PostTrip(Trip trip)
    {
      _db.Trips.Add(trip);
      await _db.SaveChangesAsync();
      return CreatedAtAction(nameof(TripWithId), new { id = trip.Id }, trip);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Trip trip)
    {
      if (id != trip.Id) return BadRequest();
      _db.Entry(trip).State = EntityState.Modified;

      try
      {
        await _db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!TripExists(id)) return NotFound();
        else throw;
      }
      return NoContent();
    }

    [HttpDelete("trip/{id}")]
    public async Task<IActionResult> DeleteTrip(int id)
    {
      if (await TripWithId(id) is not Trip trip) return NotFound();
      _db.Trips.Remove(trip);
      await _db.SaveChangesAsync();
      return NoContent();
    }
  }
}
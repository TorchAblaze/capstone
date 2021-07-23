using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestServer.Models;

namespace RestServer.Controllers
{
  public class PhotosController : Controller
  {
    private readonly TripContext _db;

    public PhotosController(TripContext db)
    {
      _db = db;
    }

    [HttpGet("photos/")]
    public async Task<ActionResult<IEnumerable<Photo>>> GetAllPhotos() => await _db.Photos.ToListAsync();

    [HttpGet("photos/{id}")]
    public async Task<ActionResult<Photo>> GetPhoto(int id) => await PhotoWithId(id);

    [HttpPost("photos/")]
    public async Task<ActionResult<Photo>> PostPhoto(Photo photo)
    {
      _db.Photos.Add(photo);
      await _db.SaveChangesAsync();
      return CreatedAtAction(nameof(PhotoWithId), new { id = photo.Id }, photo);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Photo photo)
    {
      if (id != photo.Id) return BadRequest();
      _db.Entry(photo).State = EntityState.Modified;

      try
      {
        await _db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PhotoExists(id)) return NotFound();
        else throw;
      }
      return NoContent();
    }

    [HttpDelete("photo/{id}")]
    public async Task<IActionResult> DeletePhoto(int id)
    {
      if (await PhotoWithId(id) is not Photo photo) return NotFound();
      _db.Photos.Remove(photo);
      await _db.SaveChangesAsync();
      return NoContent();
    }
  }
}
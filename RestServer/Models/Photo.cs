using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RestServer.Models
{
  public class Photo
  {
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public DateTime StartDate { get; set; } = DateTime.Now;
    public DateTime EndDate { get; set; } = DateTime.Now;
    public string Caption { get; set; }
    public string TripTips { get; set; }
  }
}
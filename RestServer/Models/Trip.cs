using System;
using System.ComponentModel.DataAnnotations;

namespace RestServer.Models
{
  public class Trip
  {
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public DateTime StartDate { get; set; } = DateTime.Now;
    public DateTime EndDate { get; set; } = DateTime.Now;
    public string Tips { get; set; }
    public string PhotoDate1 { get; set; }
    public string Photo1 { get; set; }
    public string Caption1 { get; set; }
    public string PhotoDate2 { get; set; }
    public string Photo2 { get; set; }
    public string Caption2 { get; set; }
    public string PhotoDate3 { get; set; }
    public string Photo3 { get; set; }
    public string Caption3 { get; set; }
    public string Lat { get; set; }
    public string Lng { get; set; }
  }
}
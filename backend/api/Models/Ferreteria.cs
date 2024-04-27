using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Ferreteria
    {
        public int Id { get; set; }
        public string Str_nombre{ get; set; } = String.Empty;
        public string Str_ruc { get; set; } = String.Empty;
        public string Str_telefono { get; set; } = String.Empty;
        public List<Deposito> Depositos { get; set; } = new List<Deposito>();
    }
}
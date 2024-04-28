using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Motivos
    {
        public int Id { get; set; }
        public string Str_motivo { get; set; } = String.Empty;
        public bool Bool_perdida { get; set; }
        public List<TipoDeMovimiento> TiposDeMovimientos { get; set; } = new List<TipoDeMovimiento>();
    }
}
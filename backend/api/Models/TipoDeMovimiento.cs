using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class TipoDeMovimiento
    {
        public int Id { get; set; }
        public bool Bool_operacion { get; set; }
        public int? Fk_motivo { get; set; }
        public Motivos? Motivo { get; set; }
        public List<Movimiento> Movimientos { get; set; } = new List<Movimiento>();
    }
}
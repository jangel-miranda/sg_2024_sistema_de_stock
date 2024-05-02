using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class DetalleDeMovimiento
    {
        public int Id { get; set; }
        public int Cantidad { get; set; }
        public int? MovimientoId { get; set; }
        public Movimiento? Movimiento { get; set; }
        public int? ProductoId { get; set; }
        public Producto? Producto { get; set; }
    }
}
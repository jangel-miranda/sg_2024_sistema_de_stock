using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Dtos.DetalleDeMovimiento
{
    public class DetalleDeMovimientoDto
    {
        public int Id { get; set; }
        public int Cantidad { get; set; }
        public int? Fk_movimiento{ get; set; }
        public int? Fk_producto { get; set; }
    }
}
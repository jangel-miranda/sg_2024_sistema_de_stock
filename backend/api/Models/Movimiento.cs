using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Movimiento
    {
        public int Id { get; set; }
        public DateTime Date_fecha { get; set; } = DateTime.Now;
        public int? Tipo_De_MovimientoId { get; set; }
        public TipoDeMovimiento? Tipo_De_Movimiento{ get; set; }
        public int? Deposito_OrigenId { get; set; }
        public Deposito? Deposito_Origen { get; set; }
        public int? Deposito_DestinoId { get; set; }
        public Deposito? Deposito_Destino { get; set; }
        public List<DetalleDeMovimiento> Detalle_De_Movimientos { get; set; } = new List<DetalleDeMovimiento>();
    }
}
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
        public int? Fk_tipoDeMovimiento { get; set; }
        public TipoDeMovimiento? TipoDeMovimiento{ get; set; }
        public int? Fk_deposito_origen { get; set; }
        public Deposito? Deposito_origen { get; set; }
        public int? Fk_deposito_destino { get; set; }
        public Deposito? Deposito_destino { get; set; }

    }
}
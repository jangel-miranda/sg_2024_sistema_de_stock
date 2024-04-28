using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string Str_ruta_imagen { get; set; } = String.Empty;
        public string Str_nombre { get; set; } = String.Empty;
        public string Str_descripcion { get; set; } = String.Empty;
        public int? Fk_deposito { get; set; }
        public Deposito? Deposito { get; set; }
        public int? Fk_proveedor { get; set; }
        public Proveedor? Proveedor { get; set; }
        public int Int_cantidad_actual { get; set; }
        public int Int_cantidad_minima { get; set; }
        public decimal Dec_costo_PPP { get; set; }
        public int Int_iva { get; set; }
        public decimal Dec_precio_mayorista { get; set; }
        public decimal Dec_precio_minorista { get; set; }
    }
}
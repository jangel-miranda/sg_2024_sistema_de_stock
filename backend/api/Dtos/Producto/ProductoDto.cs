using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.DetalleDeMovimiento;
using api.Models;

namespace api.Dtos.Producto
{
    public class ProductoDto
    {
        public int Id { get; set; }
        public string Str_ruta_imagen { get; set; } = String.Empty;
        public string Str_nombre { get; set; } = String.Empty;
        public string Str_descripcion { get; set; } = String.Empty;
        public int? DepositoId { get; set; }
        public int? ProveedorId { get; set; }
        public int? MarcaId { get; set; }
        public int Int_cantidad_actual { get; set; }
        public int Int_cantidad_minima { get; set; }
        public decimal Dec_costo_PPP { get; set; }
        public int Int_iva { get; set; }
        public decimal Dec_precio_mayorista { get; set; }
        public decimal Dec_precio_minorista { get; set; }
        public List<DetalleDeMovimientoDto> DetallesDeMovimientos { get; set; }
    }
}
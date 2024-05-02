using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Marca
    {
        public int Id { get; set; }
        public string Str_nombre { get; set; } = String.Empty;
        public int? ProveedorId { get; set; }
        public Proveedor? Proveedor { get; set; }
        public List<Producto> Productos { get; set; } = new List<Producto>();
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Ferreteria;
using api.Models;

namespace api.Mapper
{
    public static class FerreteriaMapper
    {
        public static FerreteriaDto ToFerreteriaDto(this Ferreteria ferreteriaModel)
        {
            return new FerreteriaDto
            {
                Id = ferreteriaModel.Id,
                Str_nombre = ferreteriaModel.Str_nombre,
                Str_ruc = ferreteriaModel.Str_ruc,
                Str_telefono = ferreteriaModel.Str_telefono
            };
        }
    }
}
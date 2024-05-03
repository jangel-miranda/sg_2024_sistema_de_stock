using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Producto;
using api.Interfaces;
using api.Mapper;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/producto")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IProductoRepository _productoRepo;
        public ProductoController(IProductoRepository productoRepo)
        {
            _productoRepo = productoRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var productos = await _productoRepo.GetAllAsync();
            var productoDto = productos.Select(p => p.ToProductoDto());
            return Ok(productoDto);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if(!ModelState.IsValid) 
                return BadRequest(ModelState);

            try
            {   
                var producto = await _productoRepo.GetByIdAsync(id);
                if(producto == null){
                    return NotFound();
                }
                return Ok(producto.ToProductoDto());
            }
            catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("{depositoId:int},{proveedorId:int},{marcaId:int}")]
        public async Task<IActionResult> Post([FromRoute] int depositoId, [FromRoute] int proveedorId, [FromRoute] int marcaId, CreateProductoDto productoDto)
        {
            if(!ModelState.IsValid) 
                return BadRequest(ModelState);

            /*if(!await _depositoRepo.DepositoExists(depositoId))
            {
                return BadRequest("El deposito ingresado no existe!");
            }

            if(!await _proveedorRepo.ProveedorExists(proveedorId))
            {
                return BadRequest("El proveedor ingresado no existe!");
            }

            if(!await _marcaRepo.MarcaExists(marcaId))
            {
                return BadRequest("La marca ingresada no existe!");
            }*/

            var productoModel = productoDto.ToProductoFromCreate(depositoId, proveedorId, marcaId);
            await _productoRepo.CreateAsync(productoModel);
            return CreatedAtAction(nameof(GetById), new{id = productoModel.Id}, productoModel.ToProductoDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateProductoRequestDto updateDto)
        {
            if(!ModelState.IsValid) 
                return BadRequest(ModelState);
                
            var producto = await _productoRepo.UpdateAsync(id, updateDto.ToProductoFromUpdate());
            if(producto == null)
            {
                return NotFound("El comentario que desea actualizar no existe");
            }

            return Ok(producto.ToProductoDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(!ModelState.IsValid) 
                return BadRequest(ModelState);

            var productoModel = await _productoRepo.DeleteAsync(id);
            if(productoModel == null)
            {
                return NotFound("El producto ingresado no existe!");
            }

            return Ok(productoModel); //No es necesario traer algo, puede ser vacio
        }
    }
}
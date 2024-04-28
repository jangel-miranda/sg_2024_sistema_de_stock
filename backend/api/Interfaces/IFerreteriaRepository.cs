using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IFerreteriaRepository
    {
        Task<List<Ferreteria>> GetAllAsync();
        Task<Ferreteria?> GetByIdAsync(int id);
        Task<Ferreteria> CreateAsync(Ferreteria ferreteriaModel);
        Task<Ferreteria?> UpdateAsync(int id, Ferreteria FerreteriaModel);
        Task<Ferreteria?> DeleteAsync(int id);
    }
}
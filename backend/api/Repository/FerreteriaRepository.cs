using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class FerreteriaRepository : IFerreteriaRepository
    {
        private readonly ApplicationDbContext _context;
        public FerreteriaRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Task<Ferreteria> CreateAsync(Ferreteria ferreteriaModel)
        {
            throw new NotImplementedException();
        }

        public Task<Ferreteria?> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Ferreteria>> GetAllAsync()
        {
            return await _context.Ferreterias.ToListAsync();
        }

        public Task<Ferreteria?> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Ferreteria?> UpdateAsync(int id, Ferreteria FerreteriaModel)
        {
            throw new NotImplementedException();
        }
    }
}
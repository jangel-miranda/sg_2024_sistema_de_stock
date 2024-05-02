using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions dbContextOptions) 
        : base(dbContextOptions)
        {
            
        }

        public DbSet<Deposito> Depositos { get; set; }
        public DbSet<Ferreteria> Ferreterias { get; set; }
        public DbSet<Marca> Marcas { get; set; }
        public DbSet<Motivos> Motivos { get; set; }
        public DbSet<Movimiento> Movimientos { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Proveedor> Proveedores { get; set; }
        public DbSet<TipoDeMovimiento> TiposDeMovimientos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<Movimiento>()
                .HasOne(m => m.Deposito_Destino)
                .WithMany()
                .HasForeignKey(m => m.Id)
                .OnDelete(DeleteBehavior.Restrict); // Esto asegura que no se elimine en cascada si eliminas un depósito

            modelBuilder.Entity<Movimiento>()
                .HasOne(m => m.Deposito_Destino)
                .WithMany()
                .HasForeignKey(m => m.Id)
                .OnDelete(DeleteBehavior.Restrict); // Esto asegura que no se elimine en cascada si eliminas un depósito

            // Otros ajustes de modelo aquí si es necesario

            base.OnModelCreating(modelBuilder);
        }
    }
}
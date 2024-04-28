﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Data;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("api.Models.Deposito", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("FerreteriaId")
                        .HasColumnType("int");

                    b.Property<int?>("Fk_ferreteria")
                        .HasColumnType("int");

                    b.Property<string>("Str_direccion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FerreteriaId");

                    b.ToTable("Depositos");
                });

            modelBuilder.Entity("api.Models.Ferreteria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Str_nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_ruc")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_telefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Ferreterias");
                });

            modelBuilder.Entity("api.Models.Marcas", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("Fk_proveedor")
                        .HasColumnType("int");

                    b.Property<int?>("ProveedorId")
                        .HasColumnType("int");

                    b.Property<string>("Str_nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProveedorId");

                    b.ToTable("Marcas");
                });

            modelBuilder.Entity("api.Models.Motivos", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("Bool_perdida")
                        .HasColumnType("bit");

                    b.Property<string>("Str_motivo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Motivos");
                });

            modelBuilder.Entity("api.Models.Movimiento", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date_fecha")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Deposito_origenId")
                        .HasColumnType("int");

                    b.Property<int?>("Fk_deposito_destino")
                        .HasColumnType("int");

                    b.Property<int?>("Fk_deposito_origen")
                        .HasColumnType("int");

                    b.Property<int?>("Fk_tipoDeMovimiento")
                        .HasColumnType("int");

                    b.Property<int?>("TipoDeMovimientoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Deposito_origenId");

                    b.HasIndex("TipoDeMovimientoId");

                    b.ToTable("Movimientos");
                });

            modelBuilder.Entity("api.Models.Producto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Dec_costo_PPP")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Dec_precio_mayorista")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Dec_precio_minorista")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("DepositoId")
                        .HasColumnType("int");

                    b.Property<int?>("Fk_deposito")
                        .HasColumnType("int");

                    b.Property<int?>("Fk_proveedor")
                        .HasColumnType("int");

                    b.Property<int>("Int_cantidad_actual")
                        .HasColumnType("int");

                    b.Property<int>("Int_cantidad_minima")
                        .HasColumnType("int");

                    b.Property<int>("Int_iva")
                        .HasColumnType("int");

                    b.Property<int?>("MarcasId")
                        .HasColumnType("int");

                    b.Property<int?>("ProveedorId")
                        .HasColumnType("int");

                    b.Property<string>("Str_descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_ruta_imagen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("DepositoId");

                    b.HasIndex("MarcasId");

                    b.HasIndex("ProveedorId");

                    b.ToTable("Productos");
                });

            modelBuilder.Entity("api.Models.Proveedor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Str_correo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_direccion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Str_telefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Proveedores");
                });

            modelBuilder.Entity("api.Models.TipoDeMovimiento", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("Bool_operacion")
                        .HasColumnType("bit");

                    b.Property<int?>("Fk_motivo")
                        .HasColumnType("int");

                    b.Property<int?>("MotivoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MotivoId");

                    b.ToTable("TiposDeMovimientos");
                });

            modelBuilder.Entity("api.Models.Deposito", b =>
                {
                    b.HasOne("api.Models.Ferreteria", "Ferreteria")
                        .WithMany("Depositos")
                        .HasForeignKey("FerreteriaId");

                    b.Navigation("Ferreteria");
                });

            modelBuilder.Entity("api.Models.Marcas", b =>
                {
                    b.HasOne("api.Models.Proveedor", "Proveedor")
                        .WithMany()
                        .HasForeignKey("ProveedorId");

                    b.Navigation("Proveedor");
                });

            modelBuilder.Entity("api.Models.Movimiento", b =>
                {
                    b.HasOne("api.Models.Deposito", "Deposito_origen")
                        .WithMany("Movimientos")
                        .HasForeignKey("Deposito_origenId");

                    b.HasOne("api.Models.Deposito", "Deposito_destino")
                        .WithMany()
                        .HasForeignKey("Id")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("api.Models.TipoDeMovimiento", "TipoDeMovimiento")
                        .WithMany("Movimientos")
                        .HasForeignKey("TipoDeMovimientoId");

                    b.Navigation("Deposito_destino");

                    b.Navigation("Deposito_origen");

                    b.Navigation("TipoDeMovimiento");
                });

            modelBuilder.Entity("api.Models.Producto", b =>
                {
                    b.HasOne("api.Models.Deposito", "Deposito")
                        .WithMany("Productos")
                        .HasForeignKey("DepositoId");

                    b.HasOne("api.Models.Marcas", null)
                        .WithMany("Productos")
                        .HasForeignKey("MarcasId");

                    b.HasOne("api.Models.Proveedor", "Proveedor")
                        .WithMany("Productos")
                        .HasForeignKey("ProveedorId");

                    b.Navigation("Deposito");

                    b.Navigation("Proveedor");
                });

            modelBuilder.Entity("api.Models.TipoDeMovimiento", b =>
                {
                    b.HasOne("api.Models.Motivos", "Motivo")
                        .WithMany("TiposDeMovimientos")
                        .HasForeignKey("MotivoId");

                    b.Navigation("Motivo");
                });

            modelBuilder.Entity("api.Models.Deposito", b =>
                {
                    b.Navigation("Movimientos");

                    b.Navigation("Productos");
                });

            modelBuilder.Entity("api.Models.Ferreteria", b =>
                {
                    b.Navigation("Depositos");
                });

            modelBuilder.Entity("api.Models.Marcas", b =>
                {
                    b.Navigation("Productos");
                });

            modelBuilder.Entity("api.Models.Motivos", b =>
                {
                    b.Navigation("TiposDeMovimientos");
                });

            modelBuilder.Entity("api.Models.Proveedor", b =>
                {
                    b.Navigation("Productos");
                });

            modelBuilder.Entity("api.Models.TipoDeMovimiento", b =>
                {
                    b.Navigation("Movimientos");
                });
#pragma warning restore 612, 618
        }
    }
}

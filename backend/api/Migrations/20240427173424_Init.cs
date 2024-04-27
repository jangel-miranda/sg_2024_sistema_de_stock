using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ferreterias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Str_nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_ruc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_telefono = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ferreterias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Motivos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Str_motivo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Bool_perdida = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Motivos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Proveedores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Str_nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_telefono = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_direccion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_correo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proveedores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Depositos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Str_nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_direccion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fk_ferreteria = table.Column<int>(type: "int", nullable: true),
                    FerreteriaId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Depositos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Depositos_Ferreterias_FerreteriaId",
                        column: x => x.FerreteriaId,
                        principalTable: "Ferreterias",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TiposDeMovimientos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bool_operacion = table.Column<bool>(type: "bit", nullable: false),
                    Fk_motivo = table.Column<int>(type: "int", nullable: true),
                    MotivoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiposDeMovimientos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TiposDeMovimientos_Motivos_MotivoId",
                        column: x => x.MotivoId,
                        principalTable: "Motivos",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Marcas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Str_nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fk_proveedor = table.Column<int>(type: "int", nullable: true),
                    ProveedorId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marcas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Marcas_Proveedores_ProveedorId",
                        column: x => x.ProveedorId,
                        principalTable: "Proveedores",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Movimientos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    Date_fecha = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Fk_tipoDeMovimiento = table.Column<int>(type: "int", nullable: true),
                    TipoDeMovimientoId = table.Column<int>(type: "int", nullable: true),
                    Fk_deposito_origen = table.Column<int>(type: "int", nullable: true),
                    Deposito_origenId = table.Column<int>(type: "int", nullable: true),
                    Fk_deposito_destino = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movimientos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Movimientos_Depositos_Deposito_origenId",
                        column: x => x.Deposito_origenId,
                        principalTable: "Depositos",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movimientos_Depositos_Id",
                        column: x => x.Id,
                        principalTable: "Depositos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Movimientos_TiposDeMovimientos_TipoDeMovimientoId",
                        column: x => x.TipoDeMovimientoId,
                        principalTable: "TiposDeMovimientos",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Productos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Str_ruta_imagen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Str_descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fk_deposito = table.Column<int>(type: "int", nullable: true),
                    DepositoId = table.Column<int>(type: "int", nullable: true),
                    Fk_proveedor = table.Column<int>(type: "int", nullable: true),
                    ProveedorId = table.Column<int>(type: "int", nullable: true),
                    Int_cantidad_actual = table.Column<int>(type: "int", nullable: false),
                    Int_cantidad_minima = table.Column<int>(type: "int", nullable: false),
                    Dec_costo_PPP = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Int_iva = table.Column<int>(type: "int", nullable: false),
                    Dec_precio_mayorista = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Dec_precio_minorista = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MarcasId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Productos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Productos_Depositos_DepositoId",
                        column: x => x.DepositoId,
                        principalTable: "Depositos",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Productos_Marcas_MarcasId",
                        column: x => x.MarcasId,
                        principalTable: "Marcas",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Productos_Proveedores_ProveedorId",
                        column: x => x.ProveedorId,
                        principalTable: "Proveedores",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Depositos_FerreteriaId",
                table: "Depositos",
                column: "FerreteriaId");

            migrationBuilder.CreateIndex(
                name: "IX_Marcas_ProveedorId",
                table: "Marcas",
                column: "ProveedorId");

            migrationBuilder.CreateIndex(
                name: "IX_Movimientos_Deposito_origenId",
                table: "Movimientos",
                column: "Deposito_origenId");

            migrationBuilder.CreateIndex(
                name: "IX_Movimientos_TipoDeMovimientoId",
                table: "Movimientos",
                column: "TipoDeMovimientoId");

            migrationBuilder.CreateIndex(
                name: "IX_Productos_DepositoId",
                table: "Productos",
                column: "DepositoId");

            migrationBuilder.CreateIndex(
                name: "IX_Productos_MarcasId",
                table: "Productos",
                column: "MarcasId");

            migrationBuilder.CreateIndex(
                name: "IX_Productos_ProveedorId",
                table: "Productos",
                column: "ProveedorId");

            migrationBuilder.CreateIndex(
                name: "IX_TiposDeMovimientos_MotivoId",
                table: "TiposDeMovimientos",
                column: "MotivoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movimientos");

            migrationBuilder.DropTable(
                name: "Productos");

            migrationBuilder.DropTable(
                name: "TiposDeMovimientos");

            migrationBuilder.DropTable(
                name: "Depositos");

            migrationBuilder.DropTable(
                name: "Marcas");

            migrationBuilder.DropTable(
                name: "Motivos");

            migrationBuilder.DropTable(
                name: "Ferreterias");

            migrationBuilder.DropTable(
                name: "Proveedores");
        }
    }
}

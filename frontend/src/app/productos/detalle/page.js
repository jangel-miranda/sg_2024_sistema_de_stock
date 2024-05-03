import React from "react";
import Photo from "../../../components/productimg";
import producto from "../../../../data.json";


const Detalle = () => {
  const data = [
    {
      date: "21/03/2024",
      movement: "Compra",
      quantity: 50,
      document: "001-001-000003",
      unitCost: 7500,
      origin: "Proveedor",
      destination: "Suc-Enc",
    },
    {
      date: "20/02/2024",
      movement: "Venta",
      quantity: 20,
      document: "001-001-000003",
      unitCost: 10000,
      origin: "Suc-Enc",
      destination: "Cliente",
    },
    {
      date: "11/02/2024",
      movement: "Transferencia",
      quantity: 5,
      document: "001-001-000003",
      unitCost: 7500,
      origin: "Suc-Enc",
      destination: "Suc-Asu",
    },
    {
      date: "15/01/2024",
      movement: "Salida",
      quantity: 5,
      document: "001-001-000003",
      unitCost: 7500,
      origin: "Suc-Enc",
      destination: "Reciclaje",
    },
    {
      date: "01/01/2024",
      movement: "Entrada",
      quantity: 5,
      document: "001-001-000009",
      unitCost: 7500,
      origin: "Suc-Asu",
      destination: "Suc-Enc",
    },
    {
      date: "07/12/2023",
      movement: "Entrada",
      quantity: 5,
      document: "001-001-000005",
      unitCost: 7500,
      origin: "Suc-Asu",
      destination: "Suc-Enc",
    },
    {
      date: "30/11/2023",
      movement: "Entrada",
      quantity: 5,
      document: "001-001-000003",
      unitCost: 7500,
      origin: "Suc-Asu",
      destination: "Suc-Enc",
    },
    {
      date: "15/11/2023",
      movement: "Entrada",
      quantity: 5,
      document: "001-001-000003",
      unitCost: 7500,
      origin: "Suc-Asu",
      destination: "Suc-Enc",
    },
  ];

  return (
    <div className="container mx-auto">
      <nav className="text-sm" aria-label="Breadcrumb">
  <ol className="list-none p-0 inline-flex">
    <li className="flex items-center">
      <span className="text-gray-500">Stock&gt; </span>
    </li>
    <li className="flex items-center">
      <span className="text-gray-500">Detalles del producto</span>
    </li>
  </ol>
</nav>
      <div className=" grid grid-cols-3 mb-10">
        <div>
        </div>
        <div>
          <p>Codigo: {producto[0].id}</p>
          <p>Nombre:{producto[0].nombre} </p>
          <p>Descripcion: Foco LED A60 de 12W </p>
          <p>Marca: Philips </p>
          <p>Proveedor: Todo Luz S.A</p>
          <p>Contacto: 0984 235701</p>
        </div>
        <div>
          <p>Cantidad: 100</p>
          <p>Cant.Mínima: 10</p>
          <p>Costo: Gs. 15.000</p>
          <p>IVA: 10%</p>
          <p>Precio Mayorista: Gs. 20.000</p>
          <p>Precio Minorista: 22.000</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
  <span className="text-2xl mx-4 tracking-tight text-black">
    Historial de producto
  </span>
</div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left px-4 py-3">Fecha</th>
            <th className="text-left px-4 py-3">Movimiento</th>
            <th className="text-left px-4 py-3">Cantidad</th>
            <th className="text-left px-4 py-3">Documento</th>
            <th className="text-right px-4 py-3">Costo unitario</th>
            <th className="text-left px-4 py-3">Origen</th>
            <th className="text-left px-4 py-3">Destino</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.date}>
              <td className="text-left px-4 py-3">{row.date}</td>
              <td className="text-left px-4 py-3">{row.movement}</td>
              <td className="text-left px-4 py-3">{row.quantity}</td>
              <td className="text-left px-4 py-3">{row.document}</td>
              <td className="text-right px-4 py-3">{row.unitCost}</td>
              <td className="text-left px-4 py-3">{row.origin}</td>
              <td className="text-left px-4 py-3">{row.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="flex justify-center items-center mt-4">
        <div class="flex justify-between items-center">
          <div>
            <button class="text-blue-500 hover:text-blue-700 mr-2">
              &lt; Anterior
            </button>
            <span class="mr-2">Página 1 de 10</span>
            <button class="text-blue-500 hover:text-blue-700">
              Siguiente&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;

'use client'

import React from "react";
import Photo from "../../../components/productimg";
import producto from "../../../../data.json";
import { Link, useParams } from 'react-router-dom'; // Importar Link desde react-router-dom
import Sidebar from "@/components/sidebar";
import { RiArrowLeftWideLine } from "@remixicon/react";
import { Button } from "@tremor/react";





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

  let { id } = useParams(); // Obtener el ID del parámetro de la URL
  id -= 1;

  return (
    <div>
      <div className="flex h-screen w-full bg-ui-background p-2 text-ui-text">
        <Sidebar />
        <div className="flex flex-col w-full h-full p-5 rounded-lg bg-ui-cardbg">
        
      <div className="container mx-auto">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex space-x-1">
            <li className="flex items-center">
            <Link to="/productos" className="text-gray-500"> &lt; Stock &gt; </Link>
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
            <p>Codigo: {producto[id].id}</p>
            <p>Nombre:{producto[id].nombre} </p>
            <p>Descripcion: {producto[id].descripcion} </p>
            <p>Marca: {producto[id].marca} </p>
            <p>Proveedor: {producto[id].proveedor}</p>
            <p>Contacto: 0984 235701</p>
          </div>
          <div>
            <p>Cantidad: 100</p>
            <p>Cant.Mínima: 10</p>
            <p>Costo: {producto[id].costo}</p>
            <p>IVA: 10%</p>
            <p>Precio Mayorista: {producto[id].precio_mayorisa}</p>
            <p>Precio Minorista: {producto[id].precio_minorista}</p>
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
        <div className="flex justify-center items-center mt-4">
          <div className="flex justify-between items-center">
            <div>
              <button className="text-blue-500 hover:text-blue-700 mr-2">
                &lt; Anterior
              </button>
              <span className="mr-2">Página 1 de 10</span>
              <button className="text-blue-500 hover:text-blue-700">
                Siguiente&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

//<Button><RiArrowLeftWideLine onClick={navigate('/productos')}></RiArrowLeftWideLine></Button>

export default Detalle;

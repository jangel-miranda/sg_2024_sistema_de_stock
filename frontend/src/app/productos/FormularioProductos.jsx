"use client";
import React, { useState } from 'react';
import { Button, Divider, NumberInput, Select, SelectItem, TextInput } from '@tremor/react';

export default function FormularioProductos() {
  // Definimos el estado para cada campo del formulario
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [marca, setMarca] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [cantidadMinima, setCantidadMinima] = useState('');
  const [costo, setCosto] = useState('');
  const [iva, setIva] = useState('');
  const [precioMayorista, setPrecioMayorista] = useState('');
  const [precioMinorista, setPrecioMinorista] = useState('');
  const [deposito, setDeposito] = useState('');


  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    console.log({
      codigo,
      nombre,
      descripcion,
      marca,
      proveedor,
      cantidad,
      cantidadMinima,
      costo,
      iva,
      precioMayorista,
      precioMinorista
    });
    // También puedes reiniciar los valores de los campos del formulario
    setCodigo('');
    setNombre('');
    setDescripcion('');
    setMarca('');
    setProveedor('');
    setCantidad('');
    setCantidadMinima('');
    setCosto('');
    setIva('');
    setPrecioMayorista('');
    setPrecioMinorista('');
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="codigo"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Código
            <span className="text-red-500">*</span>
          </label>
          <TextInput
            type="text"
            id="codigo"
            name="codigo"
            autoComplete="codigo"
            placeholder="Codigo"
            className="mt-2"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="nombre"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Nombre
            <span className="text-red-500">*</span>
          </label>
          <TextInput
            type="text"
            id="nombre"
            name="nombre"
            autoComplete="nombre"
            placeholder="nombre"
            className="mt-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="descripcion"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Descripción
            <span className="text-red-500">*</span>
          </label>
          <TextInput
            type="text"
            id="descripcion"
            name="descripcion"
            autoComplete="descripcion"
            placeholder="Descripción"
            className="mt-2"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="marca"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Marca
            <span className="text-red-500">*</span>
          </label>
          <TextInput
            type="text"
            id="marca"
            name="marca"
            autoComplete="marca"
            placeholder="Marca"
            className="mt-2"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="proveedor"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Proveedor
            <span className="text-red-500">*</span>
          </label>
          <TextInput
            type="text"
            id="proveedor"
            name="proveedor"
            autoComplete="proveedor"
            placeholder="Proveedor"
            className="mt-2"
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="cantidad"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Cantidad
            <span className="text-red-500">*</span>
          </label>
          <NumberInput
            type="number"
            id="cantidad"
            name="cantidad"
            autoComplete="cantidad"
            placeholder="Cantidad"
            className="mt-2"
            value={cantidad}
            min={0}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="cantidadMinima"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Cantidad Mínima
            <span className="text-red-500">*</span>
          </label>
          <NumberInput
            type="number"
            id="cantidadMinima"
            name="cantidadMinima"
            autoComplete="cantidadMinima"
            placeholder="Cantidad Minima"
            className="mt-2"
            value={cantidadMinima}
            min={0}
            onChange={(e) => setCantidadMinima(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="costo"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Costo
            <span className="text-red-500">*</span>
          </label>
          <NumberInput enableStepper={false}
            id="costo"
            name="costo"
            autoComplete="costo"
            placeholder="Gs."
            className="mt-2"
            value={costo}
            min={0}
            onChange={(e) => setCosto(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="iva"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            IVA
            <span className="text-red-500">*</span>
          </label>
          <NumberInput
            id="iva"
            name="iva"
            autoComplete="iva"
            value={iva}
            min={0}
            placeholder="IVA %"
            className="mt-2"
            onChange={(e) => setIva(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="precioMayorista"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Costo
            <span className="text-red-500">*</span>
          </label>
          <NumberInput enableStepper={false}
            id="precioMayorista"
            name="precioMayorista"
            autoComplete="precioMayorista"
            placeholder="Precio Mayorista"
            className="mt-2"
            value={precioMayorista}
            min={0}
            onChange={(e) => setPrecioMayorista(e.target.value)}
            required
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label
            htmlFor="precioMinorista"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Precio Minorista
            <span className="text-red-500">*</span>
          </label>
          <NumberInput enableStepper={false}
            id="precioMinorista"
            name="precioMinorista"
            autoComplete="precioMinorista"
            placeholder="Precio Minorista"
            className="mt-2"
            value={precioMinorista}
            min={0}
            onChange={(e) => setPrecioMinorista(e.target.value)}
            required
          />

          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="deposito"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Deposito
              <span className="text-red-500">*</span>
            </label>
            <NumberInput enableStepper={false}
              id="deposito"
              name="deposito"
              autoComplete="deposito"
              placeholder="Deposito"
              className="mt-2"
              value={deposito}
              min={0}
              onChange={(e) => setDeposito(e.target.value)}
              required
            />
          </div>

        </div>
      </div>




      <Button variant="primary" type="submit">Guardar</Button>
      <Button variant="secondary" onClick={() => {
        // Lógica para descartar
        console.log("Formulario descartado");
        // Reiniciar los valores del formulario
        setCodigo('');
        setNombre('');
        setDescripcion('');
        setMarca('');
        setProveedor('');
        setCantidad('');
        setCantidadMinima('');
        setCosto('');
        setIva('');
        setPrecioMayorista('');
        setPrecioMinorista('');
        setDeposito('')
      }}>Descartar</Button>
    </form>
  );
}
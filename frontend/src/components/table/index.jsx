'use client'

import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowUpSFill, RiArrowDownSFill } from '@remixicon/react';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel

} from "@tanstack/react-table"
import { useMemo, useState, getRowProps } from 'react';
import data from '../../../data.json';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
  Button,
  TextInput,
} from "@tremor/react"

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { Input } from 'postcss';

function DataTable() {
  const navigate = useNavigate();  // Llama al hook useNavigate para obtener la función navigate

  const columns = [
    {
      accessorKey: 'id',
      header: "Cód.",
      //cell: (props) => <p>{props.getValue()?.id}</p>
    },
    {
      accessorKey: 'nombre',
      header: "Nombre Prod.",
      //cell: (props) => <p>{props.getValue()?.nombre}</p>
    },
    {
      accessorKey: 'descripcion',
      header: "Descripción",
      //cell: (props) => <p>{props.getValue()?.descripcion}</p>
    },
    {
      accessorKey: 'marca',
      header: "Marca",
      //cell: (props) => <p>{props.getValue()?.marca}</p>
    },
    {
      accessorKey: 'proveedor',
      header: "Proveedor",
      //cell: (props) => <p>{props.getValue()?.proveedor}</p>
    },
    {
      accessorKey: 'cantidad',
      header: "Cant.",
      //cell: (props) => <p>{props.getValue()?.cantidad}</p>
    },
    {
      accessorKey: 'deposito',
      header: "Depósito",
      //cell: (props) => <p>{props.getValue()?.deposito}</p>
    },
    {
      accessorKey: 'costo',
      header: "Costo",
      //cell: (props) => <p>{props.getValue()?.costo}</p>
    },
    {
      accessorKey: 'precio_mayorista',
      header: "Mayorista",
      //cell: (props) => <p>{props.getValue()?.precio_mayorista}</p>
    },
    {
      accessorKey: 'precio_minorista',
      header: "Minorista",
      //cell: (props) => <p>{props.getValue()?.precio_minorista}</p>
    },
    {
      header: "Acciones",
      //cell: (props) => <p>{props.getValue()}</p>
    }
  ]



  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  state: {
    sorting,
    globalFilter: filtering
  },
  onSortingChange: setSorting,
  onGlobalFilterChange: setFiltering
});

  return (
    <div>
      <TextInput className='max-w-sm' placeholder='Buscar por nombre, marca, proveedor, deposito, cantidad...' onChange={(e)=> setFiltering(e.target.value)}></TextInput>
      <Table className='my-5'>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell className='p-2' key={header.id} 
                onClick={header.column.getToggleSortingHandler()}>
                  {header.column.columnDef.header}
                  {
                    {asc: <Button className='remixicon size-2 color-primary bg-none border-none' variant="secondary" icon={RiArrowUpSFill} color-blue></Button>,
                    desc: <Button className='remixicon size-2 color-primary bg-none border-none' variant="secondary" icon={RiArrowDownSFill}></Button>}
                  [header.column.getIsSorted() ?? null]}
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} {...row.getRowProps} >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className='p-2'>
                    <Link to={`/productos/detalle/${row.original.id}`}>{
                    flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Link>
                    </TableCell>
                    
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-center space-x-5">
        <Button icon={RiArrowLeftSLine} iconPosition="left" variant="light" color='blue'
        onClick={()=> table.previousPage()}
        disabled={!table.getCanPreviousPage()}>
          Anterior
        </Button>
        <p className="text-sm">Página  {table.getState().pagination.pageIndex + 1} de {table.getPageCount()} </p>
        <Button icon={RiArrowRightSLine} iconPosition="right" variant="light" color='blue'
        onClick={()=> table.nextPage()}
        disabled={!table.getCanNextPage()}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default DataTable;

/*
const columns = [
  {
    accessorKey: 'id',
    header: "Cód.",
    cell: (props) => <p>{props.getValue()?.id}</p>
  },
  {
    accessorKey: 'nombre',
    header: "Nombre Prod.",
    cell: (props) => <p>{props.getValue()?.nombre}</p>
  },
  {
    accessorKey: 'descripcion',
    header: "Descripción",
    cell: (props) => <p>{props.getValue()?.descripcion}</p>
  },
  {
    accessorKey: 'marca',
    header: "Marca",
    cell: (props) => <p>{props.getValue()?.marca}</p>
  },
  {
    accessorKey: 'proveedor',
    header: "Proveedor",
    cell: (props) => <p>{props.getValue()?.proveedor}</p>
  },
  {
    accessorKey: 'cant',
    header: "Cant.",
    cell: (props) => <p>{props.getValue()?.cantidad}</p>
  },
  {
    accessorKey: 'deposito',
    header: "Depósito",
    cell: (props) => <p>{props.getValue()?.deposito}</p>
  },
  {
    accessorKey: 'costo',
    header: "Costo",
    cell: (props) => <p>{props.getValue()?.costo}</p>
  },
  {
    accessorKey: 'mayorista',
    header: "Precio Mayor.",
    cell: (props) => <p>{props.getValue()?.precio_mayorista}</p>
  },
  {
    accessorKey: 'minorista',
    header: "Precio Min.",
    cell: (props) => <p>{props.getValue()?.precio_minorista}</p>
  },
  {
    header: "Acciones",
    //cell: (props) => <p>{props.getValue()}</p>
  }
]

const TaskTable = () => {
  const [data, setData] = useState(DATA)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell key={header.id}>
                  {header.column.columnDef.header}
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) =>(
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) =>(
                  <TableCell key={cell.id}>
                    {
                      flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext())}
                  </TableCell>
            ))}
              </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
};
*/
import React from 'react'
import { Button } from '@tremor/react';
import DataTable from '@/components/table';
import Photo from '@/components/productimg';

const Productos = () => {
  return (
    <div>
      <h1 className='mb-4 text-l font-semibold normal-case tracking-tight'>Productos</h1> 
      <div className='mt-8 flex items-center justify-end space-x-2'>
      <Button variant="primary" color='blue'>Nuevo Producto</Button>
      </div>
      <div><DataTable/></div>
    </div>
  )
}

export default Productos;
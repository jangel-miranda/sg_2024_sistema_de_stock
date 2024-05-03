'use client'

import React from 'react'
import { Button } from '@tremor/react';
import DataTable from '@/components/table';
import Photo from '@/components/productimg';
import Sidebar from '@/components/sidebar';

const Productos = () => {
  return (
    
    <div>
      <div className="flex h-screen w-full bg-ui-background p-2 text-ui-text">
        <Sidebar/>
          <div className="flex flex-col w-full h-full p-5 rounded-lg bg-ui-cardbg">
          <h1 className='mb-4 text-l font-semibold normal-case tracking-tight'>Productos</h1> 
      <div className='mt-8 flex items-center justify-end space-x-2'>
      <Button variant="primary" color='blue'>Nuevo Producto</Button>
      </div>
      <div><DataTable/></div>
          </div>
        </div>
      
    </div>
  )
}

export default Productos;
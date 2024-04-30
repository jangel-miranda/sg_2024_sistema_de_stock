'use client'

import React from 'react'
import SidebarItem from './items'

const Sidebar = () => {

  const menuItems = [
    { name: 'Dashboard',
    path: '/',
    icon: 'space_dashboard',
    subItems:[]},

    { name: 'Stock',
      path: '#',
      icon: 'storefront',
      subItems:[
        {
          name: 'Productos',
          path: '/productos',
          icon: 'package_2',
          isSubItem : true,
        },
        {
          name: 'Movimientos',
          path: '/movimientos',
          icon: 'compare_arrows',
          isSubItem : true,
        },
        {
          name: 'Depósitos',
          path: '/depositos',
          icon: 'package_2',
          isSubItem : true,
        }
      ]
    }
  ]

  return (
    <div className='mr-3 p-3 left-0 h-full rounded-lg bg-ui-sidebarbg z-1 w-sidebar'>
      <div className='p-3 mb-7'><img src='/img/logo.svg'></img></div>
      <div>
        {menuItems.map((item)=>{
          return <SidebarItem key={item.path} item={item} isSubItem={false}/>
        })
        }
      </div>
    </div>
  )
}

export default Sidebar;

import FormularioProductos from "../../components/FormularioProductos";
import Sidebar from "@/components/sidebar";


export default function CrearProducto(){
    return(
        <div>
      <div className="flex h-screen w-full bg-ui-background p-2 text-ui-text">
        <Sidebar/>
          <div className="flex flex-col w-full h-full p-5 rounded-lg bg-ui-cardbg">
          <h1 className='mb-4 text-l font-semibold normal-case tracking-tight'>Nuevo producto</h1> 
      <div className='mt-8 flex items-center justify-end space-x-2'>
      </div>
      <div><FormularioProductos/></div>
          </div>
        </div>
      
    </div>
        
    )
}
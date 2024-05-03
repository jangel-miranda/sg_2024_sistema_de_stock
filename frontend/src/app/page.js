import Sidebar from '@/components/sidebar';
import { Card, ProgressBar } from '@tremor/react';

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-ui-background p-2 text-ui-text">
        <Sidebar/>
          <div className="flex flex-col w-full h-full p-5 rounded-lg bg-ui-cardbg">
      <div className='mt-8 flex items-center justify-end space-x-2'>
      <Card className="mx-auto max-w-md">
      <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Sales
      </h4>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        $71,465
      </p>
      <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        <span>32% of annual target</span>
        <span>$225,000</span>
      </p>
      <ProgressBar value={32} className="mt-2" />
    </Card>
      </div>
          </div>
        </div>
      
    
    
  );
}
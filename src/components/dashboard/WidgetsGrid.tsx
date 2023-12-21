'use client';

import { SimpleWidget } from '..';
import { useAppSelector } from '@/store';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
  const inCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      <SimpleWidget
        title={`${inCart}`}
        label="Contador"
        subtitle="Productos en el carrito."
        icon={<IoCartOutline size={50} className="text-blue-600" />}
        href="/dashboard/counter"
      />
      <SimpleWidget
        title={`${inCart}`}
        label="Contador"
        subtitle="Productos en el carrito."
        icon={<IoCartOutline size={50} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};

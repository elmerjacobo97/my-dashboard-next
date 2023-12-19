import { CartCounter } from '@/shopping-cart';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Un simple counter con Next.js',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold mb-4 text-gray-800">Productos en el Carrito</h1>
      <CartCounter value={50} />
    </div>
  );
}

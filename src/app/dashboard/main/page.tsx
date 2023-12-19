import { SimpleWidget } from '@/components';

export const metadata = {
  title: 'Dashboard',
  description: 'Aliquip excepteur consectetur adipisicing deserunt.',
};

export default function MainPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <span className="text-gray-600">Información general</span>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <SimpleWidget />
      </div>
    </div>
  );
}

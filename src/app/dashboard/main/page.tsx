import { WidgetsGrid } from '@/components/dashboard/WidgetsGrid';

export const metadata = {
  title: 'Dashboard',
  description: 'Aliquip excepteur consectetur adipisicing deserunt.',
};

export default function MainPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <span className="text-gray-600">Información general</span>
      <WidgetsGrid />
    </div>
  );
}

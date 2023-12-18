import { redirect } from 'next/navigation';

export default function Home() {
  // Redireccionar a la página de principal
  redirect('/dashboard/main');
}

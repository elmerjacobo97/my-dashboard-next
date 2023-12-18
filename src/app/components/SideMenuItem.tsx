'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SideMenuItem = ({ path, icon, title, subtitle }: Props) => {
  const currentPathName = usePathname();

  return (
    <Link
      href={path}
      className={`flex items-center space-x-2 p-2 rounded hover:bg-slate-800 hover:cursor-pointer ${currentPathName === path ? 'bg-slate-800' : ''}`}
    >
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  );
};

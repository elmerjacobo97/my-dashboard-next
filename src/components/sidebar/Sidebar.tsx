import Image from 'next/image';
import {
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoFootballOutline,
  IoLogoReact,
  IoStarOutline,
} from 'react-icons/io5';
import { SideMenuItem } from './SideMenuItem';

const menuItems = [
  { path: '/dashboard/main', icon: <IoBrowsersOutline size={25} />, title: 'Dashboard', subtitle: 'Data Overview' },
  { path: '/dashboard/counter', icon: <IoCalculatorOutline size={25} />, title: 'Counter', subtitle: 'Manage your actions and activities' },
  { path: '/dashboard/pokemons', icon: <IoFootballOutline size={25} />, title: 'Pokemons', subtitle: 'Generación estática' },
  { path: '/dashboard/favorites', icon: <IoStarOutline size={25} />, title: 'Favoritos', subtitle: 'Global state' },
];

export const Sidebar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-96 left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        <h1 className=" flex items-center space-x-2 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Elmer Jacobo</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map(({ path, icon, title, subtitle }) => (
          <SideMenuItem key={path} path={path} icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  );
};

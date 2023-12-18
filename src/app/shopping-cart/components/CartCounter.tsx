'use client';
import { useState } from 'react';
import { IoRemoveCircleOutline, IoAddCircleOutline } from 'react-icons/io5';

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl font-bold text-blue-600">{count}</span>
      <div className="flex space-x-10 mt-5">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <IoRemoveCircleOutline size={30} />
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <IoAddCircleOutline size={30} />
        </button>
      </div>
    </>
  );
};

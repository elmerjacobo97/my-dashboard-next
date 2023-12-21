'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, subtractOne, initCounterState } from '@/store/counter/counterSlice';
import { useEffect } from 'react';
import { IoRemoveCircleOutline, IoAddCircleOutline } from 'react-icons/io5';

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json());
  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  // const [count, setCount] = useState(value);
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl font-bold text-blue-600">{count}</span>
      <div className="flex space-x-10 mt-5">
        <button
          onClick={() => dispatch(subtractOne())}
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <IoRemoveCircleOutline size={30} />
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <IoAddCircleOutline size={30} />
        </button>
      </div>
    </>
  );
};

'use client';

import { useIntegrationContext } from '@/context/IntegrationContext';
import { IAppData } from '@/types';
import Image from 'next/image';

export default function IntegrationCard({ app }: { app: IAppData }) {
  const { selectApp } = useIntegrationContext();

  return (
    <button
      type='button'
      aria-label={`Ver detalhes do aplicativo ${app.name}`}
      onClick={() => selectApp(app)}
      className='group card w-full max-w-[200px] cursor-pointer bg-base-100 shadow-sm transition card-sm hover:shadow-lg
        focus:outline focus:outline-2 focus:outline-primary'
    >
      <figure style={{ backgroundColor: app.color }} className='p-6'>
        <Image
          src={app.icon}
          alt={`Ícone do aplicativo ${app.name}`}
          width={64}
          height={64}
          className='h-12 w-12 transition group-hover:scale-110'
        />
      </figure>
      <div className='card-body min-h-17 justify-center text-center'>
        <h4>{app.name}</h4>
      </div>
    </button>
  );
}

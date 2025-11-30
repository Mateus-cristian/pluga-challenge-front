'use client';

import IntegrationCard from '@/modules/integrations/components/IntegrationCard';
import { useIntegrationContext } from '@/modules/integrations/context/IntegrationContext';

export default function IntegrationList() {
  const { pagedApps, search, filteredApps } = useIntegrationContext();

  if (search.length > 0 && !filteredApps.length) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mb-2 inline size-9'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z'
          />
        </svg>
        <p role='status' aria-live='polite' className='w-[90%] truncate text-center md:w-[60%]'>
          Nenhum app encontrado para "{search}".
        </p>
      </div>
    );
  }

  return (
    <div role='list' aria-label='Lista de aplicativos' className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
      {pagedApps.map((app) => (
        <div role='listitem' key={app.app_id} className='flex justify-center'>
          <IntegrationCard app={app} />
        </div>
      ))}
    </div>
  );
}

'use client';

import { useIntegrationContext } from '@/modules/integrations/context/IntegrationContext';

export default function IntegrationSearchBar() {
  const { search, setSearch } = useIntegrationContext();

  return (
    <label className='input w-full'>
      <span className='sr-only'>Buscar aplicativos</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4 opacity-50'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
      </svg>
      <input
        type='search'
        placeholder='Buscar ferramenta'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label='Buscar aplicativos'
      />
    </label>
  );
}

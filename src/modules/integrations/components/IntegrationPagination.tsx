'use client';

import { useIntegrationContext } from '@/modules/integrations/context/IntegrationContext';

export default function IntegrationPagination() {
  const { page, maxPage, setPage, filteredApps } = useIntegrationContext();

  if (!filteredApps.length) {
    return <></>;
  }

  return (
    <div className='flex justify-center'>
      <div className='join md:hidden'>
        <button
          onClick={() => setPage(Math.max(page - 1, 1))}
          className={`btn join-item ${page === 1 ? 'btn-disabled' : ''}`}
          aria-label='Página anterior'
          disabled={page === 1}
        >
          «
        </button>
        <button className='btn join-item'>{page}</button>
        <button
          onClick={() => setPage(Math.min(page + 1, maxPage))}
          className={`btn join-item ${page === maxPage ? 'btn-disabled' : ''}`}
          aria-label='Próxima página'
          disabled={page === maxPage}
        >
          »
        </button>
      </div>
      <div className='hidden text-center md:flex'>
        <div className='join'>
          <button
            onClick={() => setPage(Math.max(page - 1, 1))}
            className={`btn join-item ${page === 1 ? 'btn-disabled' : ''}`}
            aria-label='Página anterior'
            disabled={page === 1}
          >
            Anterior
          </button>
          {Array.from({ length: maxPage }, (_, i) => i + 1).map((i) => (
            <button
              key={`p${i}`}
              onClick={() => setPage(i)}
              className={`btn join-item ${i == page ? 'btn-active' : ''}`}
            >
              {i}
            </button>
          ))}
          <button
            onClick={() => setPage(Math.min(page + 1, maxPage))}
            className={`btn join-item ${page === maxPage ? 'btn-disabled' : ''}`}
            aria-label='Próxima página'
            disabled={page === maxPage}
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}

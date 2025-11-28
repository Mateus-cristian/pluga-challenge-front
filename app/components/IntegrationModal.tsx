'use client';

import { useIntegrationContext } from '@/context/IntegrationContext';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import IntegrationCard from '@/shared/ui/IntegrationCard';

export default function IntegrationModal() {
  const { selectedApp, lastSelectedApps, selectApp } = useIntegrationContext();
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedApp) {
      modalRef.current?.showModal();
      modalRef.current?.focus();
    } else {
      modalRef.current?.close();
    }
  }, [selectedApp]);

  useEffect(() => {
    if (!selectedApp) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        selectApp(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedApp, selectApp]);

  if (!selectedApp) return <dialog ref={modalRef} className='modal' />;

  return (
    <dialog ref={modalRef} className='modal' aria-modal='true' aria-labelledby='modal-title' tabIndex={-1}>
      <div className='modal-box flex flex-col gap-6 p-4 md:p-6'>
        <div className='mx-auto'>
          <div className='flex items-center gap-6'>
            <figure style={{ backgroundColor: selectedApp.color }} className='rounded-full p-8 md:p-10'>
              <Image
                className='h-8 w-8 md:h-10 md:w-10'
                src={selectedApp.icon}
                alt={`Ícone da ferramenta ${selectedApp.name}`}
                width={64}
                height={64}
              />
            </figure>
            <div className='py-6'>
              <h2 id='modal-title' className='mb-4 text-lg'>
                {selectedApp.name}
              </h2>
              <a tabIndex={0} href={selectedApp.link} target='_blank' rel='noreferrer' className='btn btn-primary'>
                Acessar
              </a>
            </div>
          </div>
        </div>
        <h2 className='text-center'>Últimas ferramentas visualizadas</h2>
        <div className='grid grid-cols-3 gap-4 md:gap-6'>
          {lastSelectedApps.map((app) => (
            <IntegrationCard app={app} key={app.app_id} />
          ))}
        </div>

        <form method='dialog'>
          <button aria-label='Fechar modal' className='btn btn-soft btn-primary' onClick={() => selectApp(null)}>
            Fechar
          </button>
        </form>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button aria-label='Fechar modal' onClick={() => selectApp(null)}>
          close
        </button>
      </form>
    </dialog>
  );
}

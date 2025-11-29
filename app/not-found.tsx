'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className='flex min-h-screen flex-col items-center justify-center'
      role='alertdialog'
      aria-labelledby='notfound-title'
      aria-describedby='notfound-desc'
    >
      <Image
        src='/icon-pluga.png'
        alt='Logo Pluga Challenge'
        width={64}
        height={64}
        className='mb-3 rounded-full border-2 border-blue-200'
        aria-hidden='true'
      />
      <h1
        id='notfound-title'
        className='mb-2 text-2xl font-bold'
        aria-label='Pluga Challenge Frontend - Página não encontrada'
      >
        Pluga Challenge - Frontend
      </h1>
      <h2 className='mb-4 text-xl font-semibold' aria-label='Erro 404'>
        404 - Página não encontrada
      </h2>
      <p id='notfound-desc' className='mb-6 text-center text-gray-600' aria-live='polite'>
        A página que você tentou acessar não existe.
        <br />
        Verifique o endereço ou volte para a página inicial.
        <br />
        Se precisar de ajuda, entre em contato com o suporte.
      </p>
      <Link
        href='/'
        className='rounded-full border px-4 py-2 text-white focus:outline focus:outline-2 focus:outline-blue-500'
        style={{ backgroundColor: '#41baff' }}
        aria-label='Voltar para a página inicial'
        tabIndex={0}
      >
        Voltar para Home
      </Link>
    </div>
  );
}

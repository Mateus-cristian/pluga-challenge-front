'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServerError() {
  return (
    <div
      className='flex min-h-screen flex-col items-center justify-center'
      role='alertdialog'
      aria-labelledby='error-title'
      aria-describedby='error-desc'
    >
      <Image
        src='/icon-pluga.png'
        alt='Logo Pluga Challenge'
        width={64}
        height={64}
        className='mb-3 rounded-full border-2 border-blue-200'
        aria-hidden='true'
      />
      <h1 id='error-title' className='mb-2 text-2xl font-bold' aria-label='Pluga Challenge Frontend - Erro 500'>
        Pluga Challenge - Frontend
      </h1>
      <h2 className='mb-4 text-xl font-semibold' aria-label='Erro 500'>
        500 - Oops! Algo deu errado.
      </h2>
      <p id='error-desc' className='mb-6 text-center text-gray-600' aria-live='polite'>
        Tivemos um problema inesperado.
        <br />
        Não se preocupe, já estamos cuidando disso!
        <br />
        Você pode tentar novamente ou voltar para a página inicial.
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

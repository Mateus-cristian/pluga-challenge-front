'use client';

export default function Loading() {
  return (
    <main className='mx-auto flex w-full max-w-3xl flex-col gap-6 p-6'>
      <h1 className='text-center text-3xl'>Pluga Challenge Front</h1>

      <div className='h-12 w-full skeleton rounded' />

      <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className='h-32 skeleton rounded-lg' />
        ))}
      </div>

      <div className='mt-4 flex justify-center gap-2'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='h-10 w-16 skeleton rounded' />
        ))}
      </div>

      <div className='hidden'>
        <div className='modal-box mx-auto h-64 w-96 skeleton rounded-lg' />
      </div>
    </main>
  );
}

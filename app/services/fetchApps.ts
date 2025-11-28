import { IAppData } from '@/types';

export async function fetchApps(): Promise<IAppData[]> {
  const response = await fetch('https://pluga.co/ferramentas_search.json', {
    cache: 'force-cache',
  });

  // Apenas para monstrar como seria o componente loading com skeleton
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!response.ok) {
    throw new Error('Erro ao buscar apps.');
  }

  return response.json();
}

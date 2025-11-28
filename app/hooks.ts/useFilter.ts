'use client';
import { useState, useEffect } from 'react';
import { IAppData } from '@/types';

const PAGE_SIZE = 12;

export function useFilters(apps: IAppData[]) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filteredApps = apps.filter((app) => app.name.toLowerCase().includes(search.toLowerCase()));

  const maxPage = Math.ceil(filteredApps.length / PAGE_SIZE) || 1;
  const pagedApps = filteredApps.slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return { search, setSearch, page, setPage, filteredApps, pagedApps, maxPage };
}

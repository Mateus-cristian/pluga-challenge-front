'use client';

import { useFilters } from '@/hooks.ts/useFilter';
import { useSelectedApps } from '@/hooks.ts/useSelectedIntegration';
import { IAppData, IIntegrationContextValue } from '@/types';
import { createContext, useContext } from 'react';

const IntegrationContext = createContext<IIntegrationContextValue | undefined>(undefined);

export function IntegrationProvider({
  initialApps = [],
  children,
}: {
  initialApps?: IAppData[];
  children: React.ReactNode;
}) {
  const { search, setSearch, page, setPage, filteredApps, pagedApps, maxPage } = useFilters(initialApps);
  const { selectedApp, lastSelectedApps, selectApp } = useSelectedApps();

  return (
    <IntegrationContext.Provider
      value={{
        filteredApps,
        pagedApps,
        selectedApp,
        lastSelectedApps,
        search,
        page,
        maxPage,
        setSearch,
        setPage,
        selectApp,
      }}
    >
      {children}
    </IntegrationContext.Provider>
  );
}

export function useIntegrationContext() {
  const ctx = useContext(IntegrationContext);
  if (!ctx) throw new Error('useIntegrationContext deve ser usado dentro de IntegrationProvider');
  return ctx;
}

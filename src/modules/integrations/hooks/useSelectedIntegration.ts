'use client';
import { useEffect, useState } from 'react';
import { IAppData } from '@/modules/integrations/types';
import { loadLastSelectedIntegrations, saveLastSelectedIntegrations } from '@/modules/integrations/services/storage';

function updateLastSelected(last: IAppData[], app: IAppData) {
  const filtered = last.filter((a) => a.app_id !== app.app_id);
  return [app, ...filtered].slice(0, 3);
}

export function useSelectedApps() {
  const [selectedApp, setSelectedApp] = useState<IAppData | null>(null);
  const [lastSelectedApps, setLastSelectedApps] = useState<IAppData[]>([]);

  useEffect(() => {
    setLastSelectedApps(loadLastSelectedIntegrations());
  }, []);

  function selectApp(app: IAppData | null) {
    if (!app) {
      setSelectedApp(null);
      return;
    }

    setSelectedApp({ ...app });
    const updated = updateLastSelected(lastSelectedApps, app);
    setLastSelectedApps(updated);
    saveLastSelectedIntegrations(updated);
  }

  return { selectedApp, lastSelectedApps, selectApp };
}

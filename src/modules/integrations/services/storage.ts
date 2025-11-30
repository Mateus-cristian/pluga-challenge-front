import { IAppData } from '@/modules/integrations/types';

const LAST_APPS_KEY = 'lastSelectedApps';

export function loadLastSelectedIntegrations(): IAppData[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(LAST_APPS_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveLastSelectedIntegrations(apps: IAppData[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LAST_APPS_KEY, JSON.stringify(apps));
}

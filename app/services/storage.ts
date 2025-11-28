import { AppData } from '@/types';

const LAST_APPS_KEY = 'lastSelectedApps';

export function loadLastSelectedIntegrations(): AppData[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(LAST_APPS_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveLastSelectedIntegrations(apps: AppData[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LAST_APPS_KEY, JSON.stringify(apps));
}

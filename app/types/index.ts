export interface AppData {
  app_id: string;
  name: string;
  icon: string;
  link: string;
  color: string;
}

interface IIntegrationContextValue {
  apps: AppData[];
  filteredApps: AppData[];
  pagedApps: AppData[];
  selectedApp: AppData | null;
  lastSelectedApps: AppData[];

  search: string;
  page: number;
  maxPage: number;

  setSearch: (v: string) => void;
  setPage: (v: number) => void;
  selectApp: (app: AppData | null) => void;
}

export { IAppData, IIntegrationContextValue };

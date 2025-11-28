interface IAppData {
  app_id: string;
  name: string;
  icon: string;
  link: string;
  color: string;
}

interface IIntegrationContextValue {
  filteredApps: IAppData[];
  pagedApps: IAppData[];
  selectedApp: IAppData | null;
  lastSelectedApps: IAppData[];

  search: string;
  page: number;
  maxPage: number;

  setSearch: (v: string) => void;
  setPage: (v: number) => void;
  selectApp: (app: IAppData | null) => void;
}

export type { IAppData, IIntegrationContextValue };

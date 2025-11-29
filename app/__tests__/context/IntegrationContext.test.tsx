import { act, renderHook } from '@testing-library/react';
import { IntegrationProvider, useIntegrationContext } from '../../context/IntegrationContext';
import { IAppData } from '../../types';

const mockApps: IAppData[] = [
  { app_id: '1', name: 'Slack', icon: '/slack.png', link: 'https://slack.com', color: '#fff' },
];

describe('IntegrationContext', () => {
  it('filters apps and paginates correctly', () => {
    const apps = [
      { app_id: '1', name: 'Slack', icon: '', link: '', color: '' },
      { app_id: '2', name: 'Trello', icon: '', link: '', color: '' },
      { app_id: '3', name: 'Gmail', icon: '', link: '', color: '' },
    ];
    const wrapper = ({ children }: any) => <IntegrationProvider initialApps={apps}>{children}</IntegrationProvider>;
    const { result } = renderHook(() => useIntegrationContext(), { wrapper });
    act(() => result.current.setSearch('Slack'));
    expect(result.current.filteredApps.length).toBe(1);
    act(() => result.current.setPage(2));
    expect(result.current.page).toBe(2);
  });

  it('provides initial data and updates selection', () => {
    const wrapper = ({ children }: any) => <IntegrationProvider initialApps={mockApps}>{children}</IntegrationProvider>;
    const { result } = renderHook(() => useIntegrationContext(), { wrapper });

    expect(result.current.filteredApps.length).toBe(1);
    act(() => result.current.selectApp(mockApps[0]));
    expect(result.current.selectedApp?.name).toBe('Slack');
  });
});

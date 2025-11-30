import { renderHook, act } from '@testing-library/react';
import { IntegrationProvider, useIntegrationContext } from '@/modules/integrations/context/IntegrationContext';
import { IAppData } from '../../types';

const mockApps: IAppData[] = [
  { app_id: '1', name: 'Slack', icon: '/slack.png', link: 'https://slack.com', color: '#fff' },
  { app_id: '2', name: 'Trello', icon: '/trello.png', link: 'https://trello.com', color: '#fff' },
  { app_id: '3', name: 'Gmail', icon: '/gmail.png', link: 'https://gmail.com', color: '#fff' },
  { app_id: '4', name: 'Notion', icon: '/notion.png', link: 'https://notion.so', color: '#fff' },
];

describe('Last viewed history', () => {
  it('keeps at most 3 apps and no duplicates', () => {
    const wrapper = ({ children }: any) => <IntegrationProvider initialApps={mockApps}>{children}</IntegrationProvider>;
    const { result } = renderHook(() => useIntegrationContext(), { wrapper });

    act(() => result.current.selectApp(mockApps[0]));
    act(() => result.current.selectApp(mockApps[1]));
    act(() => result.current.selectApp(mockApps[2]));
    act(() => result.current.selectApp(mockApps[0]));
    act(() => result.current.selectApp(mockApps[3]));

    expect(result.current.lastSelectedApps.length).toBe(3);
    expect(result.current.lastSelectedApps[0].name).toBe('Notion');
    expect(result.current.lastSelectedApps.map((a) => a.app_id)).not.toContain('2');
  });
});

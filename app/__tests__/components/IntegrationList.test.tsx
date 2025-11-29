import { render, screen } from '@testing-library/react';
import IntegrationList from '../../components/IntegrationList';
import { IntegrationProvider } from '../../context/IntegrationContext';
import { IAppData } from '../../types';

const mockApps: IAppData[] = [
  { app_id: '1', name: 'Slack', icon: '/slack.png', link: 'https://slack.com', color: '#fff' },
  { app_id: '2', name: 'Trello', icon: '/trello.png', link: 'https://trello.com', color: '#fff' },
];

describe('IntegrationList', () => {
  it('renders empty container when no apps are provided', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationList />
      </IntegrationProvider>
    );
    const element = screen.getByRole('list');
    expect(element).toBeEmptyDOMElement();
  });

  it('renders the app list', () => {
    render(
      <IntegrationProvider initialApps={mockApps}>
        <IntegrationList />
      </IntegrationProvider>
    );
    expect(screen.getByText('Slack')).toBeInTheDocument();
    expect(screen.getByText('Trello')).toBeInTheDocument();
  });

  it('shows no app found message', () => {
    render(
      <IntegrationProvider initialApps={mockApps}>
        <IntegrationList />
      </IntegrationProvider>
    );
    expect(screen.queryByText(/Nenhum app encontrado/)).not.toBeInTheDocument();
  });
});

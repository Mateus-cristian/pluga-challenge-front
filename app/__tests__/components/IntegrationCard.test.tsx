import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { IntegrationProvider, useIntegrationContext } from '../../context/IntegrationContext';
import IntegrationCard from '../../shared/ui/IntegrationCard';
import { IAppData } from '../../types';

const mockApp: IAppData = {
  app_id: '1',
  name: 'Slack',
  icon: '/slack.png',
  link: 'https://slack.com',
  color: '#fff',
};

describe('IntegrationCard', () => {
  it('renders card with name and icon', () => {
    render(
      <IntegrationProvider initialApps={[mockApp]}>
        <IntegrationCard app={mockApp} />
      </IntegrationProvider>
    );
    expect(screen.getByText('Slack')).toBeInTheDocument();
    expect(screen.getByAltText(/Ícone do aplicativo Slack/)).toBeInTheDocument();
  });

  it('triggers selection on click and updates context', () => {
    const selectedAppRef = { current: null } as { current: IAppData | null };
    function ContextSpy() {
      const ctx = useIntegrationContext();
      React.useEffect(() => {
        selectedAppRef.current = ctx.selectedApp;
      }, [ctx.selectedApp]);
      return null;
    }
    render(
      <IntegrationProvider initialApps={[mockApp]}>
        <IntegrationCard app={mockApp} />
        <ContextSpy />
      </IntegrationProvider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(selectedAppRef.current).toEqual(mockApp);
  });
});

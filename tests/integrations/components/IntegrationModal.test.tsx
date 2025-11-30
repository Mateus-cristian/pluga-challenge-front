import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import IntegrationModal from '@/modules/integrations/components/IntegrationModal';
import { IntegrationProvider, useIntegrationContext } from '@/modules/integrations/context/IntegrationContext';
import { IAppData } from '@/modules/integrations/types';

const mockApp: IAppData = {
  app_id: '1',
  name: 'Slack',
  icon: '/slack.png',
  link: 'https://slack.com',
  color: '#fff',
};

beforeAll(() => {
  window.HTMLDialogElement.prototype.close = function () {};
  window.HTMLDialogElement.prototype.showModal = function () {};
});

describe('IntegrationModal', () => {
  it('renders empty dialog when no app is selected', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationModal />
      </IntegrationProvider>
    );
    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog.textContent).toBe('');
  });

  it('closes modal when ESC is pressed', () => {
    function ContextSelector() {
      const ctx = useIntegrationContext();
      React.useEffect(() => {
        ctx.selectApp(mockApp);
      }, []);
      return null;
    }
    render(
      <IntegrationProvider initialApps={[mockApp]}>
        <IntegrationModal />
        <ContextSelector />
      </IntegrationProvider>
    );
    const dialog = screen.getByRole('dialog', { hidden: true });
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(dialog.textContent).toBe('');
  });

  it('renders empty modal if no app is selected', () => {
    render(
      <IntegrationProvider initialApps={[mockApp]}>
        <IntegrationModal />
      </IntegrationProvider>
    );
    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toBeInTheDocument();
    expect(dialog.textContent).toBe('');
  });

  it('renders modal with app details when an app is selected', () => {
    function ContextSelector() {
      const ctx = useIntegrationContext();
      React.useEffect(() => {
        ctx.selectApp(mockApp);
      }, []);
      return null;
    }
    render(
      <IntegrationProvider initialApps={[mockApp]}>
        <IntegrationModal />
        <ContextSelector />
      </IntegrationProvider>
    );
    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toBeInTheDocument();
    expect(screen.getAllByText('Slack').length).toBeGreaterThan(0);
    expect(screen.getByAltText(/Ícone da ferramenta Slack/)).toBeInTheDocument();
  });
});

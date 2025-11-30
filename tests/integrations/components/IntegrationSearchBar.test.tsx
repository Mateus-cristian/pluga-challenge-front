import { render, screen, fireEvent } from '@testing-library/react';
import IntegrationSearchBar from '@/modules/integrations/components/IntegrationSearchBar';
import { IntegrationProvider } from '@/modules/integrations/context/IntegrationContext';

describe('IntegrationSearchBar', () => {
  it('renders the search field', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationSearchBar />
      </IntegrationProvider>
    );
    expect(screen.getByPlaceholderText(/buscar ferramenta/i)).toBeInTheDocument();
  });

  it('allows typing and updates the value', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationSearchBar />
      </IntegrationProvider>
    );
    const input = screen.getByPlaceholderText(/buscar ferramenta/i);
    fireEvent.change(input, { target: { value: 'Slack' } });
    expect(input).toHaveValue('Slack');
  });
});

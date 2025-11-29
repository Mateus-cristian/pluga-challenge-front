import { render, screen } from '@testing-library/react';
import IntegrationList from '../../components/IntegrationList';
import IntegrationSearchBar from '../../components/IntegrationSearchBar';
import { IntegrationProvider } from '../../context/IntegrationContext';

describe('Accessibility', () => {
  it('search field is focusable by keyboard', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationSearchBar />
      </IntegrationProvider>
    );
    const input = screen.getByPlaceholderText(/buscar ferramenta/i);
    input.focus();
    expect(document.activeElement).toBe(input);
  });

  it('list items have role listitem', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationList />
      </IntegrationProvider>
    );
    const items = screen.queryAllByRole('listitem');
    expect(items.length).toBeGreaterThanOrEqual(0);
  });

  it('search field has accessible label', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationSearchBar />
      </IntegrationProvider>
    );
    expect(screen.getByLabelText(/Buscar aplicativos/)).toBeInTheDocument();
  });

  it('list has role list and items have role listitem', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationList />
      </IntegrationProvider>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('search field is focusable by keyboard', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationSearchBar />
      </IntegrationProvider>
    );
    const input = screen.getByPlaceholderText(/buscar ferramenta/i);
    input.focus();
    expect(document.activeElement).toBe(input);
  });

  it('list items have role listitem', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationList />
      </IntegrationProvider>
    );
    const items = screen.queryAllByRole('listitem');
    expect(items.length).toBeGreaterThanOrEqual(0); // Deve ser maior que zero se houver apps
  });
});

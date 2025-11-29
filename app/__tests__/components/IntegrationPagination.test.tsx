import { fireEvent, render, screen } from '@testing-library/react';
import IntegrationPagination from '../../components/IntegrationPagination';
import { IntegrationProvider } from '../../context/IntegrationContext';
import { IAppData } from '../../types';

const mockApps: IAppData[] = Array.from({ length: 15 }, (_, i) => ({
  app_id: `${i + 1}`,
  name: `App${i + 1}`,
  icon: '/icon.png',
  link: 'https://app.com',
  color: '#fff',
}));

describe('IntegrationPagination', () => {
  it('renders nothing when filteredApps is empty', () => {
    render(
      <IntegrationProvider initialApps={[]}>
        <IntegrationPagination />
      </IntegrationProvider>
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('navigates between pages correctly', () => {
    render(
      <IntegrationProvider initialApps={mockApps}>
        <IntegrationPagination />
      </IntegrationProvider>
    );
    const nextButtons = screen.getAllByLabelText('Próxima página');
    nextButtons.forEach((btn) => fireEvent.click(btn));
    nextButtons.forEach((btn) => expect(btn).toBeDisabled());
  });

  it('disables next button on last page', () => {
    render(
      <IntegrationProvider initialApps={mockApps}>
        <IntegrationPagination />
      </IntegrationProvider>
    );
    const nextButtons = screen.getAllByLabelText('Próxima página');
    nextButtons.forEach((btn) => {
      fireEvent.click(btn); // navega até a última página
    });
    nextButtons.forEach((btn) => expect(btn).toBeDisabled());
  });

  it('renders navigation buttons', () => {
    render(
      <IntegrationProvider initialApps={mockApps}>
        <IntegrationPagination />
      </IntegrationProvider>
    );
    const anteriores = screen.getAllByLabelText('Página anterior');
    const proximas = screen.getAllByLabelText('Próxima página');
    expect(anteriores.length).toBeGreaterThan(0);
    expect(proximas.length).toBeGreaterThan(0);
  });

  it('disables previous button on first page', () => {
    render(
      <IntegrationProvider initialApps={mockApps}>
        <IntegrationPagination />
      </IntegrationProvider>
    );
    const anteriores = screen.getAllByLabelText('Página anterior');
    anteriores.forEach((btn) => expect(btn).toBeDisabled());
  });
});

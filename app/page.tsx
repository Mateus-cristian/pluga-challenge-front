import IntegrationList from './components/IntegrationList';
import IntegrationModal from './components/IntegrationModal';
import IntegrationPagination from './components/IntegrationPagination';
import IntegrationSearchBar from './components/IntegrationSearchBar';
import { IntegrationProvider } from './context/IntegrationContext';
import { fetchApps } from './services/fetchApps';

export default async function HomePage() {
  const apps = await fetchApps();

  return (
    <main className='mx-auto flex w-full max-w-3xl flex-col gap-6 p-6'>
      <h1 className='text-center text-3xl'>Pluga Challenge Front</h1>
      <IntegrationProvider initialApps={apps}>
        <IntegrationSearchBar />
        <IntegrationList />
        <IntegrationPagination />
        <IntegrationModal />
      </IntegrationProvider>
    </main>
  );
}

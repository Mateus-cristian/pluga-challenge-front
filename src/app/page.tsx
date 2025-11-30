import IntegrationList from '@/modules/integrations/components/IntegrationList';
import IntegrationModal from '@/modules/integrations/components/IntegrationModal';
import IntegrationPagination from '@/modules/integrations/components/IntegrationPagination';
import IntegrationSearchBar from '@/modules/integrations/components/IntegrationSearchBar';
import { IntegrationProvider } from '@/modules/integrations/context/IntegrationContext';
import { fetchApps } from '@/modules/integrations/services/fetchApps';

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

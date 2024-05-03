import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

import Loader from './common/Loader';
import AllModals from './components/Modals/AllModals';
import AppRouter from './navigation/AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 180_000, //number in milliseconds equals to 5 minute,
    },
  },
});

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <AllModals />
      <Toaster richColors position="top-right" theme="light" />
    </QueryClientProvider>
  );
}

export default App;

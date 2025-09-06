import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter} from "react-router-dom";
import {SnackbarProvider} from "notistack";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SnackbarProvider autoHideDuration={4000}
                        iconVariant={{
                          success: '✅',
                          error: '❌',
                          warning: '⚠️',
                          info: '📢',
                        }}
      />
      <StrictMode>
        <App/>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
)

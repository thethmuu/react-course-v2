'use client';

import { CartContextProvider } from '@/components/contexts/CartContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </CartContextProvider>
  );
}

'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { CartContextProvider } from './_contexts/CartContext';

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CartContextProvider>
  );
}

import '@/app/styles/index.scss';
import type { AppProps } from 'next/app';
import { StoreProvider } from '@/app/providers/StoreProvider';

export default function App ({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    );
}

import '@/app/styles/index.scss';
import type { AppProps } from 'next/app';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Header } from '@/widgets/Header';

export default function App ({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
            <Header/>
            <Component {...pageProps} />
        </StoreProvider>
    );
}

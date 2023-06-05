import dynamic from 'next/dynamic';

export const MainPage = dynamic(() => import('./ui/MainPage/MainPage'));

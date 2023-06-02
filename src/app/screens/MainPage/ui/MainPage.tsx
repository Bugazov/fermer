import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

import { memo } from 'react';
import { Header } from '@/widgets/Header';
import { Page } from '@/widgets/Page/Page';

interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <Header/>

        </Page>
    );
});

export default MainPage;

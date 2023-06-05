import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

import { memo } from 'react';
import { Header } from '@/widgets/Header';
import { Page } from '@/widgets/Page/Page';
import { Text } from '@/shared/ui/Text/Text';
import { Container } from '@/shared/ui/Container/Container';
import { ServiceInfo } from '@/widgets/ServiceInfo';
interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <Header/>
            <Container>
                <Text
                    className={cls.title}
                    title={'Ешь Деревенское — сервис по доставке настоящих фермерских продуктов'}/>
                <ServiceInfo/>
            </Container>

        </Page>
    );
});

export default MainPage;

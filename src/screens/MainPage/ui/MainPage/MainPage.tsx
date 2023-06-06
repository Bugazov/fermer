import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import Banner from '@/shared/assets/68a5eb-1146x210.webp';

import { memo } from 'react';
import { Header } from '@/widgets/Header';
import { Page } from '@/widgets/Page/Page';
import { Text } from '@/shared/ui/Text/Text';
import { Container } from '@/shared/ui/Container/Container';
import { ServiceInfo } from '@/widgets/ServiceInfo';
import { VStack } from '@/shared/ui/Stack';
import Image from 'next/image';
interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <Header/>
            <Container>

                <VStack gap={'32'}>
                    <Text
                        className={cls.title}
                        title={'Ешь Деревенское — сервис по доставке настоящих фермерских продуктов'}/>
                    <ServiceInfo/>
                    <Image className={cls.banner} src={Banner} alt={'banner'}/>
                </VStack>
            </Container>

        </Page>
    );
});

export default MainPage;

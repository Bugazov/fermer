import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Catalog.module.scss';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import { Container } from '@/shared/ui/Container/Container';
import Text from '@/shared/ui/Text/Text';

interface CatalogProps {
    className?: string;
}

export const Catalog = memo((props: CatalogProps) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.Catalog, {}, [className])}>
            <Container>
                <Text title={'Каталог'}/>

            </Container>
        </Page>
    );
});

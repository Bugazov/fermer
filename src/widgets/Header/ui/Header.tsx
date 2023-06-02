import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';

import { memo } from 'react';
import Logo from '@/shared/assets/icons/logo.svg';
import Catalog from '@/shared/assets/icons/catalog.svg';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import Image from 'next/image';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <HStack justify={'between'}>
                <HStack gap={'32'}>
                    <Image src={Logo} alt={'logo'}/>
                    <HStack gap={'16'}>
                        <AppLink href={'/about'}>Кто мы</AppLink>
                        <AppLink href={'/about'}>Поставщики</AppLink>
                        <AppLink href={'/about'}>Доставка</AppLink>
                        <AppLink href={'/about'}>Рецепты</AppLink>
                        <AppLink href={'/about'}>О нас</AppLink>
                    </HStack>
                </HStack>
                <div>Грозный</div>
            </HStack>
            <HStack gap={'16'} justify={'between'} className={cls.header_search}>
                <Button theme={ButtonTheme.BACKGROUND}>
                    <HStack gap={'4'}>
                        <Image width={20} height={20} src={Catalog} alt={'Каталог'}/>
                        <b>Каталог</b>
                    </HStack>
                </Button>
                <div className={cls.search}>
                    <Input type={'text'} placeholder={'Поиск'}/>
                </div>
                <HStack gap={'4'} className={cls.btn}>
                    <Button>()</Button>
                    <Button>()</Button>
                    <Button>()</Button>

                </HStack>

            </HStack>
        </div>
    );
});

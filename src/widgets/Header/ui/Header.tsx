import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';

import { memo, useCallback, useState } from 'react';
import Logo from '@/shared/assets/icons/logo.svg';
import Catalog from '@/shared/assets/icons/catalog.svg';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import Image from 'next/image';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import LkIcon from '@/shared/assets/icons/lk-icon.svg';
import CartIcon from '@/shared/assets/icons/shop-icon.svg';
import FavoriteIcon from '@/shared/assets/icons/heart-icon.svg';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/shared/ui/Modal/Modal'), { ssr: false });

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { className } = props;

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);
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

                <HStack gap={'16'} className={cls.btn}>
                    <Button className={cls.icon} theme={ButtonTheme.CLEAR}>
                        <Image width={40} src={CartIcon} alt={'cart'}/>
                    </Button>
                    <Button onClick={() => setIsOpen(true)} className={cls.icon} theme={ButtonTheme.CLEAR}>
                        <Image width={40} src={LkIcon} alt={'LK'}/>
                    </Button>
                    <Button className={cls.icon} theme={ButtonTheme.CLEAR}>
                        <Image width={40} src={FavoriteIcon} alt={'cart'}/>
                    </Button>
                    <Modal onClose={onClose} isOpen={isOpen}>
                        Авторизация
                    </Modal>

                </HStack>

            </HStack>
        </div>
    );
});

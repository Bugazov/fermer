import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';

import { memo } from 'react';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Header, {}, [className])}>

        </div>
    );
});

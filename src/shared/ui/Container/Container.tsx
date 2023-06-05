import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Container.module.scss';

import { memo, ReactNode } from 'react';

interface ContainerProps {
    className?: string;
    children:ReactNode
}

export const Container = memo((props: ContainerProps) => {
    const { className, children } = props;

    return (
        <div className={classNames(cls.Container, {}, [className])}>
            {children}
        </div>
    );
});

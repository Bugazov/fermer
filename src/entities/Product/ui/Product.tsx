import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Product.module.scss';

import { memo } from 'react';

interface ProductProps {
    className?: string;
}

export const Product = memo((props: ProductProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Product, {}, [className])}>

        </div>
    );
});

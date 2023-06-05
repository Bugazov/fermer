import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ServiceInfoItem.module.scss';

import React, { memo } from 'react';
import Image from 'next/image';
import Text, { TextSize } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';

interface ServiceInfoItemProps {
    className?: string;
    text:string;
    Svg: string
}

export const ServiceInfoItem = memo((props: ServiceInfoItemProps) => {
    const { className, text, Svg } = props;

    return (
        <HStack gap={'8'} className={classNames(cls.ServiceInfoItem, {}, [className])}>
            <Image src={Svg} alt={'Корова'}/>
            <Text size={TextSize.M} text={text}/>

        </HStack>
    );
});

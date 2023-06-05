import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ServiceInfo.module.scss';

import { memo } from 'react';
import { ServiceItemList } from '../ServiceItemList/ServiceItemList';
import { ServiceInfoItem } from '../ServiceInfoItem/ServiceInfoItem';
import { HStack } from '@/shared/ui/Stack';

interface ServiceInfoProps {
    className?: string;
}

export const ServiceInfo = memo((props: ServiceInfoProps) => {
    const { className } = props;

    return (
        <HStack justify={'between'} className={classNames(cls.ServiceInfo, {}, [className])}>
            {ServiceItemList.map((item) => {
                return (
                    <ServiceInfoItem text={item.text} Svg={item.Svg}/>
                );
            })}

        </HStack>
    );
});

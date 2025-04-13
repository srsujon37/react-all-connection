import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeatures = ({feature}) => {
    return (
        <div>
            <p className='flex'><CircleCheckBig className='mr-3 mb-3.5 text-green-700'></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default PricingFeatures;
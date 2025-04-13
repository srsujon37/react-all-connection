import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {title, price, info, features} = pricing;
    return (
        <div className='flex flex-col border-4 border-amber-300 bg-amber-100 rounded-3xl p-4'>
            {/* card header */}
            <div>
                
                  <h1 className='text-5xl font-bold text-blue-600'>{pricing.title}</h1>
                  <h3 className='text-3xl font-bold text-green-600'>{pricing.price}</h3>
                
            </div>
            {/* card body */}
            <div className='flex-1 bg-white p-5 rounded-2xl'>
                <p>{info}</p>
                {
                    features.map((feature, index) => <PricingFeatures feature={feature} key={index}></PricingFeatures>)
                }

            </div>
            <button className="btn w-full btn-soft btn-warning mt-4 text-2xl rounded-4xl p-6">Subscribe</button>
        </div>
    );
};

export default PricingCard;
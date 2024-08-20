import React from 'react';
import PricingSection from '../views/Pricing';
function Pricing(props:any) {
  const singleRoute = true 
  return (
    <div>
      <PricingSection single={singleRoute} />
    </div>
  );
}

export default Pricing;

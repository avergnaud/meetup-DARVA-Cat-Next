'use client'

import { useState } from 'react';
import { useReportWebVitals } from 'next/web-vitals'
 
export function WebVitals() {

    const [fcpValue, setFcpValue] = useState(-1);
    const [fcpRating, setFcpRating] = useState('');

  useReportWebVitals((metric) => {
    console.log(metric)
    if(metric.name === 'FCP') {
        setFcpValue(metric.value);
        setFcpRating(metric.rating);
    }
  })

  return <div>
    {fcpValue > -1 && 
        <p id='fcp-value'>{fcpValue}</p>      
    }
    {fcpRating.length > 0 && 
        <p id='fcp-rating'>{fcpRating}</p>      
    }
  </div>;
}
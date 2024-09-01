'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {

  useReportWebVitals((metric) => {
    if(!['FCP', 'LCP'].includes(metric.name)) {
      return;
    }
    const url = `http://192.168.1.196:3100/`;
    const now = new Date();
    const stat = {
      '@timestamp': now.toISOString(),
      appname: 'next-rsc-cache',
      metricname: metric.name,
      value: metric.value
    }
    const body = JSON.stringify(stat);
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body,
        keepalive: true
      }
    );
  })
}
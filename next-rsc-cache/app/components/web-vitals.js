'use client'

import { useReportWebVitals } from 'next/web-vitals'

const elkHost = process.env.ELK_HOST;

export function WebVitals() {

  useReportWebVitals((metric) => {
    if(!['FCP', 'LCP'].includes(metric.name)) {
      return;
    }
    const url = `http://${elkHost}:9200/next-rsc-cache/_doc?pretty`;
    const now = new Date();
    const stat = {
      '@timestamp': now.toISOString(),
      name: metric.name,
      value: metric.value
    }
    const body = JSON.stringify(stat);
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa("elastic:changeme"),
          'Content-Type': 'application/json'
        },
        body,
        keepalive: true
      }
    );
  })
}
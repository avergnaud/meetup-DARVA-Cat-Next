import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function sendToAnalytics(metric) {
  if(!['FCP', 'LCP'].includes(metric.name)) {
    return;
  }
  const url = 'http://192.168.1.196:3100/';
  const now = new Date();
  const stat = {
    '@timestamp': now.toISOString(),
    appname: 'react-load-data',
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
}

reportWebVitals(sendToAnalytics);

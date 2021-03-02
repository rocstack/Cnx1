import React, { useEffect, useState } from 'react';

import { backendAPI } from './common/axiosInstances';

import Header from './components/Header/Header';
import Section from './components/Section/Section';

import styles from './App.module.scss';

const App = () => {
  const [time, setTime] = useState('');
  const [clientServerTimeDiff, setClientServerTimeDiff] = useState('');
  const [metrics, setMetrics] = useState('');
  const [isLoadingTime, setIsLoadingTime] = useState(true);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);

  // Gather data from backend API & set state
  const gatherData = async () => {
    setIsLoadingTime(true);
    setIsLoadingMetrics(true);
    try {
      const { data: eData } = await backendAPI.get('/time');
      if (eData) {
        const epoch = eData.epoch;
        const clientTimeDiff = new Date().getTime() - new Date(epoch * 1000).getTime();
        const diffFormatted = new Date(clientTimeDiff).toISOString().substr(11, 8);
        setTime(epoch);
        setClientServerTimeDiff(diffFormatted);
        setIsLoadingTime(false);
      }
      const { data: mData } = await backendAPI.get('/metrics');
      if (mData) {
        setMetrics(mData);
        setIsLoadingMetrics(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => gatherData(), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Header>Test</Header>
      <div className={styles.App}>
        <Section isLoading={isLoadingTime}>
          <p>Current Server Time: {time}</p>
          <p>Client / Server Time Diff: {clientServerTimeDiff}</p>
        </Section>
        <Section isLoading={isLoadingMetrics}>
          <pre>{metrics}</pre>
        </Section>
      </div>
    </>
  );
};

export default App;

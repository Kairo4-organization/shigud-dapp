import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ViewingChainProvider } from './contexts/ViewingChainContext';

const HomePage = React.lazy(() => import('./pages/HomePage'));

const App: React.FC = () => {
  return (
    <Suspense fallback="">
      <ViewingChainProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </ViewingChainProvider>
    </Suspense>
  );
};

export default App;